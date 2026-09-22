import { NextRequest, NextResponse } from 'next/server'
import { sendEnquiryEmail } from '@/lib/mailer'
import { writeClient } from '@/lib/sanity'
import { NOTIFICATION_RECIPIENTS, generateMinimalJobApplicationEmailHtml, generateUserThankYouEmailHtml } from '@/lib/email-templates'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get('name')?.toString()?.trim()
    const email = formData.get('email')?.toString()?.trim()
    const phone = formData.get('phone')?.toString()?.trim()
    const coverLetter = formData.get('coverLetter')?.toString()?.trim()
    const jobTitle = formData.get('jobTitle')?.toString()?.trim() || 'General Application'
    const jobSlug = formData.get('jobSlug')?.toString()?.trim() || ''
    const resumeFile = formData.get('resume') as File | null

    if (!name || !email || !phone || !coverLetter) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (Name, Email, Phone, Cover Letter).' },
        { status: 400 }
      )
    }

    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { error: 'Please upload your CV/Resume.' },
        { status: 400 }
      )
    }

    // Convert file to Buffer for email attachment
    const bytes = await resumeFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // 1. SAVE APPLICATION TO SANITY CMS LISTING
    if (writeClient) {
      try {
        await writeClient.create({
          _type: 'jobApplicationSubmission',
          name,
          email,
          phone,
          jobTitle,
          jobSlug,
          coverLetter,
          resumeFileName: resumeFile.name,
          submittedAt: new Date().toISOString(),
          status: 'New',
        })
        console.log(`✅ Saved job application for "${jobTitle}" from ${email} to Sanity CMS.`)
      } catch (sanityErr) {
        console.warn('⚠️ Sanity CMS job application write warning:', sanityErr)
      }
    }

    // 2. DISPATCH MINIMAL HTML EMAIL WITH TRAVASH LOGO & ATTACHMENT
    const emailSubject = `New Job Application: ${jobTitle} — ${name}`

    const plainTextMessage = [
      '==============================================',
      `NEW JOB APPLICATION - ${jobTitle.toUpperCase()}`,
      '==============================================',
      `Candidate Name: ${name}`,
      `Email Address:  ${email}`,
      `Phone Number:   ${phone}`,
      `Job Position:   ${jobTitle} (${jobSlug})`,
      `Resume File:    ${resumeFile.name}`,
      '----------------------------------------------',
      'Cover Letter / Note:',
      coverLetter,
      '==============================================',
      `Sent via Travash Careers Portal • Reply to this email will go directly to ${email}`,
    ].join('\n')

    const htmlMessage = generateMinimalJobApplicationEmailHtml({
      name,
      email,
      phone,
      jobTitle,
      jobSlug,
      coverLetter,
      resumeFileName: resumeFile.name,
    })

    const smtpUser = process.env.SMTP_USER || 'leads.travash@gmail.com'

    await sendEnquiryEmail({
      from: `"Travash Careers" <${smtpUser}>`,
      to: NOTIFICATION_RECIPIENTS,
      replyTo: email,
      subject: emailSubject,
      text: plainTextMessage,
      html: htmlMessage,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    } as any)

    // 3. SEND AUTOMATED THANK YOU CONFIRMATION EMAIL TO CANDIDATE
    try {
      const candidateThankYouHtml = generateUserThankYouEmailHtml({
        name,
        type: 'career',
        jobTitle,
      })

      await sendEnquiryEmail({
        from: `"Travash Careers" <${smtpUser}>`,
        to: email,
        subject: `Application Received: ${jobTitle} — Travash Software`,
        text: `Hi ${name},\n\nThank you for applying for the ${jobTitle} position at Travash Software Solutions! We have successfully received your application and resume.\n\nOur talent acquisition team is actively reviewing your qualifications and will get in touch with you if your profile matches our criteria.\n\nBest regards,\nTravash Careers Team\nwww.travash.com`,
        html: candidateThankYouHtml,
      })
      console.log(`📧 Candidate thank-you confirmation sent to ${email}`)
    } catch (thankYouErr) {
      console.warn('⚠️ Candidate thank-you email dispatch warning:', thankYouErr)
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your application for "${jobTitle}" has been submitted successfully.`,
    })
  } catch (err) {
    console.error('❌ Job application error:', err)
    return NextResponse.json(
      { error: 'An error occurred while processing your application. Please try again.' },
      { status: 500 }
    )
  }
}


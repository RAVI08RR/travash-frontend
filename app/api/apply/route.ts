import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get('name')?.toString()
    const email = formData.get('email')?.toString()
    const phone = formData.get('phone')?.toString()
    const coverLetter = formData.get('coverLetter')?.toString()
    const jobTitle = formData.get('jobTitle')?.toString() || 'General Application'
    const jobSlug = formData.get('jobSlug')?.toString() || ''
    const resumeFile = formData.get('resume') as File | null

    if (!name || !email || !phone || !coverLetter) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      )
    }

    if (!resumeFile || resumeFile.size === 0) {
      return NextResponse.json(
        { error: 'Please upload your CV/Resume.' },
        { status: 400 }
      )
    }

    // Convert file to Buffer for nodemailer attachment
    const bytes = await resumeFile.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const toEmail = process.env.CAREERS_TO_EMAIL || process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

    if (toEmail && process.env.SMTP_USER) {
      await transporter.sendMail({
        from: `"Travash Careers" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `New Job Application: ${jobTitle} — ${name}`,
        html: `
          <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #004771; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; font-size: 20px; margin: 0;">New Job Application: ${jobTitle}</h1>
            </div>
            <div style="background: #f9fafb; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 140px;">Candidate Name</td><td style="padding: 8px 0; color: #0B1E3D; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #14B8A6;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 8px 0; color: #0B1E3D;">${phone}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Applied For</td><td style="padding: 8px 0; color: #004771; font-weight: 600;">${jobTitle} (${jobSlug})</td></tr>
              </table>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">Cover Letter / Note</p>
              <p style="color: #0B1E3D; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${coverLetter}</p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: resumeFile.name,
            content: buffer,
          },
        ],
      })
    } else {
      console.log('📬 Application submission (Simulated SMTP):', {
        name,
        email,
        phone,
        jobTitle,
        fileName: resumeFile.name,
        fileSize: resumeFile.size,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Job application error:', err)
    return NextResponse.json(
      { error: 'An error occurred while processing your application. Please try again.' },
      { status: 500 }
    )
  }
}

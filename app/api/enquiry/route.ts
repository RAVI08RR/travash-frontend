import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEnquiryEmail } from '@/lib/mailer'

export const runtime = 'nodejs'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().trim().email('Invalid email address').max(200, 'Email cannot exceed 200 characters'),
  phone: z.string().trim().max(50, 'Phone cannot exceed 50 characters').optional().nullable(),
  company: z.string().trim().max(100, 'Company cannot exceed 100 characters').optional().nullable(),
  subject: z.string().trim().max(200, 'Subject cannot exceed 200 characters').optional().nullable(),
  message: z.string().trim().min(5, 'Message must be at least 5 characters').max(5000, 'Message cannot exceed 5000 characters'),
  website: z.string().optional().nullable(), // Honeypot anti-spam field
})

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.json()
    const validated = enquirySchema.parse(rawBody)

    // Honeypot spam check: if the hidden field is filled, silently ignore
    if (validated.website && validated.website.trim().length > 0) {
      console.warn('🛡️ Honeypot triggered. Silently dropping spam submission.')
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been received successfully.',
      })
    }

    const { name, email, phone, company, subject, message } = validated

    const smtpUser = process.env.SMTP_USER || 'ravi.belpade@travash.com'
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS
    const recipient = process.env.ENQUIRY_TO || process.env.CONTACT_TO_EMAIL || 'ravi.belpade@travash.com'

    const hasOAuth2 =
      Boolean(process.env.MICROSOFT_CLIENT_ID) &&
      Boolean(process.env.MICROSOFT_CLIENT_SECRET) &&
      process.env.MICROSOFT_CLIENT_SECRET !== 'YOUR_CLIENT_SECRET'

    if (!smtpPass && !hasOAuth2) {
      console.error('⚠️ Email service credentials not configured. Please set SMTP_PASSWORD or MICROSOFT_CLIENT_SECRET in .env.local')
      return NextResponse.json(
        {
          success: false,
          error: 'Email service configuration incomplete.',
          message: 'Unable to submit enquiry at this moment. Please contact us directly.',
        },
        { status: 500 }
      )
    }

    const emailSubject = `New Website Enquiry - ${name}${subject ? ` (${subject})` : ''}`

    const plainTextMessage = [
      '==============================================',
      'NEW WEBSITE ENQUIRY - TRAVASH SOFTWARE',
      '==============================================',
      `Name:    ${name}`,
      `Email:   ${email}`,
      phone ? `Phone:   ${phone}` : null,
      company ? `Company: ${company}` : null,
      subject ? `Subject: ${subject}` : null,
      '----------------------------------------------',
      'Message:',
      message,
      '==============================================',
    ]
      .filter(Boolean)
      .join('\n')

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : null
    const safeCompany = company ? escapeHtml(company) : null
    const safeSubject = subject ? escapeHtml(subject) : null
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    const htmlMessage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(emailSubject)}</title>
      </head>
      <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #0F172A;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
          <tr>
            <td style="background: linear-gradient(135deg, #004771 0%, #0B4785 100%); padding: 32px 28px; text-align: left;">
              <span style="display: inline-block; font-size: 11px; font-weight: 700; color: #14B8A6; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">
                TRAVASH SOFTWARE SOLUTIONS
              </span>
              <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; margin: 0; line-height: 1.3;">
                New Website Consultation Enquiry
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 110px; border-bottom: 1px solid #f1f5f9;">Name</td>
                  <td style="padding: 10px 0; color: #0B1E3D; font-size: 14px; font-weight: 700; border-bottom: 1px solid #f1f5f9;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Email</td>
                  <td style="padding: 10px 0; font-size: 14px; border-bottom: 1px solid #f1f5f9;">
                    <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 600; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                ${
                  safePhone
                    ? `<tr>
                        <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Phone</td>
                        <td style="padding: 10px 0; color: #0B1E3D; font-size: 14px; border-bottom: 1px solid #f1f5f9;">${safePhone}</td>
                      </tr>`
                    : ''
                }
                ${
                  safeCompany
                    ? `<tr>
                        <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Company</td>
                        <td style="padding: 10px 0; color: #0B1E3D; font-size: 14px; border-bottom: 1px solid #f1f5f9;">${safeCompany}</td>
                      </tr>`
                    : ''
                }
                ${
                  safeSubject
                    ? `<tr>
                        <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #f1f5f9;">Subject</td>
                        <td style="padding: 10px 0; color: #0B1E3D; font-size: 14px; border-bottom: 1px solid #f1f5f9;">${safeSubject}</td>
                      </tr>`
                    : ''
                }
              </table>

              <div style="margin-top: 24px;">
                <span style="display: block; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                  Message Content
                </span>
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px; font-size: 14px; line-height: 1.65; color: #0F172A;">
                  ${safeMessage}
                </div>
              </div>

              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94A3B8; text-align: center;">
                Sent via Travash Website Contact Form &bull; Reply to this email will go directly to ${safeEmail}
              </div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    await sendEnquiryEmail({
      from: `"Travash Website" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: emailSubject,
      text: plainTextMessage,
      html: htmlMessage,
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your enquiry has been received and our team will get in touch shortly.',
    })
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const firstError = error.issues[0]?.message || 'Invalid form submission'
      return NextResponse.json(
        {
          success: false,
          error: firstError,
          message: firstError,
        },
        { status: 400 }
      )
    }

    const err = error as { code?: string; responseCode?: number; message?: string }
    console.error('❌ Error sending enquiry email:', {
      code: err?.code,
      responseCode: err?.responseCode,
      message: err?.message,
    })

    if (
      err?.responseCode === 535 ||
      (err?.message && (err.message.includes('535') || err.message.includes('Authentication unsuccessful')))
    ) {
      console.error(
        '⚠️ [Microsoft 365 SMTP Auth Notice]: Microsoft 365 returned "535 Authentication unsuccessful".\n' +
          'Action required: Enable SMTP AUTH for user account ' +
          process.env.SMTP_USER +
          ' in Microsoft 365 Admin Center (Users -> Active Users -> Mail -> Manage email apps -> Authenticated SMTP),\n' +
          'or ensure Multi-Factor Authentication (MFA) / Security Defaults use an App Password or required exception.'
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send enquiry. Please try again later or contact us directly.',
        message: 'Failed to send enquiry. Please try again later or contact us directly.',
      },
      { status: 500 }
    )
  }
}

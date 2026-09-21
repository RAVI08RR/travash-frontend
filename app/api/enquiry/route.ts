import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEnquiryEmail } from '@/lib/mailer'

export const runtime = 'nodejs'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().trim().email('Invalid email address').max(200, 'Email cannot exceed 200 characters'),
  phone: z.string().trim().max(80, 'Phone cannot exceed 80 characters').optional().nullable(),
  company: z.string().trim().max(100, 'Company cannot exceed 100 characters').optional().nullable(),
  subject: z.string().trim().max(200, 'Subject cannot exceed 200 characters').optional().nullable(),
  message: z.string().trim().min(5, 'Message must be at least 5 characters').max(5000, 'Message cannot exceed 5000 characters'),
  website: z.string().optional().nullable(), // Honeypot anti-spam field
  fax: z.string().optional().nullable(),     // Secondary honeypot field
})

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

// ----------------------------------------------------------------------
// ANTI-SPAM SECURITY GUARD LAYER
// ----------------------------------------------------------------------

// 1. In-Memory Rate Limiter (Max 4 requests per 15 mins per IP)
const ipRateLimitMap = new Map<string, { count: number; firstTimestamp: number }>()

function isIpRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 4

  const record = ipRateLimitMap.get(ip)
  if (!record) {
    ipRateLimitMap.set(ip, { count: 1, firstTimestamp: now })
    return false
  }

  if (now - record.firstTimestamp > windowMs) {
    ipRateLimitMap.set(ip, { count: 1, firstTimestamp: now })
    return false
  }

  record.count += 1
  return record.count > maxRequests
}

// 2. Disposable Email Domain Blocklist
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  'tempmail.com',
  'guerrillamail.com',
  '10minutemail.com',
  'dispostable.com',
  'throwawaymail.com',
  'trashmail.com',
  'sharklasers.com',
  'getairmail.com',
  'yopmail.com',
  'maildrop.cc',
  'nada.ltd',
  'mohmal.com',
  'temp-mail.org',
  'fakeinbox.com',
  'emailondeck.com',
  'mytemp.email',
  'guerrillamailblock.com',
])

function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase()
  return domain ? DISPOSABLE_EMAIL_DOMAINS.has(domain) : false
}

// 3. Spam Content & Keyword Filter
const SPAM_KEYWORDS = [
  'casino',
  'poker',
  'gambling',
  'viagra',
  'cialis',
  'pharmacy online',
  'buy backlinks',
  'rank #1',
  'rank 1 on google',
  'seo audit link',
  'crypto giveaway',
  'bitcoin profit',
  'binary options',
  'telegram group',
  'whatsapp group link',
  'adult dating',
  'прогон',
  'казино',
  'заработок',
]

function isSpamContent(name: string, subject: string, message: string): boolean {
  const fullContent = `${name} ${subject} ${message}`.toLowerCase()

  // Keyword scan
  for (const kw of SPAM_KEYWORDS) {
    if (fullContent.includes(kw)) return true
  }

  // URL density check: if message contains > 2 external URLs
  const urlMatches = message.match(/https?:\/\/[^\s]+/g)
  if (urlMatches && urlMatches.length > 2) return true

  return false
}

// ----------------------------------------------------------------------
// POST ROUTE HANDLER
// ----------------------------------------------------------------------

export async function POST(request: NextRequest) {
  try {
    // Extract client IP address for security logging & rate limiting
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1'

    // Rate limiting check
    if (isIpRateLimited(clientIp)) {
      console.warn(`🛡️ Rate limit exceeded for IP: ${clientIp}`)
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a few minutes before trying again.',
          message: 'Too many requests. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      )
    }

    const rawBody = await request.json()
    const validated = enquirySchema.parse(rawBody)

    // Honeypot spam check: if hidden fields website or fax are filled, silently drop
    if (
      (validated.website && validated.website.trim().length > 0) ||
      (validated.fax && validated.fax.trim().length > 0)
    ) {
      console.warn('🛡️ Honeypot triggered. Silently dropping bot submission.')
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been received successfully.',
      })
    }

    const { name, email, phone, company, subject, message } = validated

    // Anti-spam filters: Disposable email & spam content check
    if (isDisposableEmail(email)) {
      console.warn(`🛡️ Disposable email blocked: ${email}`)
      return NextResponse.json(
        {
          success: false,
          error: 'Please submit a valid corporate or personal email address.',
          message: 'Please submit a valid corporate or personal email address.',
        },
        { status: 400 }
      )
    }

    if (isSpamContent(name, subject || '', message)) {
      console.warn(`🛡️ Spam content filter triggered for submission from ${email}`)
      return NextResponse.json({
        success: true,
        message: 'Your enquiry has been received successfully.',
      })
    }

    const recipient = process.env.ENQUIRY_TO || 'leads.travash@gmail.com'
    const smtpUser = process.env.SMTP_USER || 'leads.travash@gmail.com'
    const smtpPass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS

    const hasOAuth2 =
      Boolean(process.env.MICROSOFT_CLIENT_ID) &&
      Boolean(process.env.MICROSOFT_CLIENT_SECRET) &&
      process.env.MICROSOFT_CLIENT_SECRET !== 'YOUR_CLIENT_SECRET'

    if (!smtpPass && !hasOAuth2) {
      console.error('⚠️ Email service credentials missing in environment.')
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
      'NEW WEBSITE CONSULTATION ENQUIRY - TRAVASH SOFTWARE',
      '==============================================',
      `Name:    ${name}`,
      `Email:   ${email}`,
      phone ? `Phone:   ${phone}` : null,
      company ? `Company: ${company}` : null,
      subject ? `Subject: ${subject}` : null,
      `IP:      ${clientIp}`,
      '----------------------------------------------',
      'Message:',
      message,
      '==============================================',
      `Sent via Travash Website Contact Form • Reply to this email will go directly to ${email}`,
    ]
      .filter(Boolean)
      .join('\n')

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : null
    const safeCompany = company ? escapeHtml(company) : null
    const safeSubject = subject ? escapeHtml(subject) : null
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

    // High-End Enterprise Software Company HTML Email Template
    const htmlMessage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${escapeHtml(emailSubject)}</title>
      </head>
      <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F1F5F9; color: #0F172A;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 30px rgba(11, 30, 61, 0.08); border: 1px solid #E2E8F0;">
          
          <!-- Header Banner with Brand Logo & Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A192F 0%, #004771 50%, #0B4785 100%); padding: 36px 32px; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; text-transform: uppercase;">
                      TRAVASH <span style="color: #14B8A6; font-weight: 400;">SOFTWARE</span>
                    </div>
                  </td>
                  <td style="text-align: right;">
                    <span style="display: inline-block; font-size: 10px; font-weight: 800; color: #14B8A6; text-transform: uppercase; letter-spacing: 1.5px; background: rgba(20, 184, 166, 0.15); padding: 5px 12px; border-radius: 20px; border: 1px solid rgba(20, 184, 166, 0.3);">
                      VERIFIED ENQUIRY
                    </span>
                  </td>
                </tr>
              </table>
              <h1 style="color: #ffffff; font-size: 20px; font-weight: 800; margin: 20px 0 0 0; line-height: 1.35; letter-spacing: -0.3px;">
                New Project Consultation Request
              </h1>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 32px 32px 24px 32px;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 130px; border-bottom: 1px solid #F1F5F9;">Client Name</td>
                  <td style="padding: 12px 0; color: #0F172A; font-size: 15px; font-weight: 800; border-bottom: 1px solid #F1F5F9;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Email Address</td>
                  <td style="padding: 12px 0; font-size: 14px; border-bottom: 1px solid #F1F5F9;">
                    <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 700; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                ${
                  safePhone
                    ? `<tr>
                        <td style="padding: 12px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Phone Number</td>
                        <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 700; border-bottom: 1px solid #F1F5F9;">${safePhone}</td>
                      </tr>`
                    : ''
                }
                ${
                  safeCompany
                    ? `<tr>
                        <td style="padding: 12px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Company / Org</td>
                        <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${safeCompany}</td>
                      </tr>`
                    : ''
                }
                ${
                  safeSubject
                    ? `<tr>
                        <td style="padding: 12px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Subject</td>
                        <td style="padding: 12px 0; color: #0F172A; font-size: 14px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${safeSubject}</td>
                      </tr>`
                    : ''
                }
              </table>

              <!-- Project Message Box -->
              <div style="margin-top: 28px;">
                <span style="display: block; font-size: 11px; font-weight: 800; color: #64748B; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                  PROJECT / INQUIRY DETAILS
                </span>
                <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #004771; border-radius: 10px; padding: 20px; font-size: 14px; line-height: 1.7; color: #1E293B;">
                  ${safeMessage}
                </div>
              </div>

              <!-- Reply Action Banner -->
              <div style="margin-top: 28px; padding: 16px; background-color: #F0FDF4; border: 1px solid #DCFCE7; border-radius: 12px; text-align: center;">
                <span style="font-size: 13px; font-weight: 700; color: #166534;">
                  💡 Quick Action: Click "Reply" in your email client to respond directly to ${safeName} (${safeEmail}).
                </span>
              </div>

              <!-- Professional Email Footer -->
              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #64748B; text-align: center; line-height: 1.6;">
                Sent via Travash Website Contact Form &bull; Reply to this email will go directly to <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 600; text-decoration: none;">${safeEmail}</a><br />
                <span style="color: #94A3B8; font-size: 11px;">Protected by Travash Anti-Spam Security Guard &bull; Client IP: ${clientIp}</span>
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
      message: 'Thank you! Your enquiry has been received and our engineering team will get in touch shortly.',
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

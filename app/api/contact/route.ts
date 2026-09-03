import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().optional(),
  email: z.string().email('Invalid email address'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)

    const { name, phone, email, subject, message } = validated

    // --- Send via Nodemailer ---
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER

    if (toEmail && process.env.SMTP_USER) {
      await transporter.sendMail({
        from: `"Travash Website" <${process.env.SMTP_USER}>`,
        to: toEmail,
        replyTo: email,
        subject: `New Consultation Request: ${subject || 'General Inquiry'} — ${name}`,
        html: `
          <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0B1E3D; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; font-size: 20px; margin: 0;">New Consultation Request</h1>
            </div>
            <div style="background: #f9fafb; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px; width: 120px;">Name</td><td style="padding: 8px 0; color: #0B1E3D; font-weight: 600;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #14B8A6;">${email}</a></td></tr>
                ${phone ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Phone</td><td style="padding: 8px 0; color: #0B1E3D;">${phone}</td></tr>` : ''}
                ${subject ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Subject</td><td style="padding: 8px 0; color: #0B1E3D;">${subject}</td></tr>` : ''}
              </table>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">Message</p>
              <p style="color: #0B1E3D; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      })
    } else {
      // Console stub — no SMTP configured
      console.log('📬 Contact form submission:', { name, phone, email, subject, message })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: err.issues[0].message }, { status: 400 })
    }
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

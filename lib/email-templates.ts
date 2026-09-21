export const NOTIFICATION_RECIPIENTS = [
  'contact@travash.com',
  'imran@travash.com',
  'Ravi.belpade@travash.com',
  'leads.travash@gmail.com',
].join(', ')

export const TRAVASH_LOGO_URL = 'https://travash.com/wp-content/uploads/2023/12/New-latest-logo.svg'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export interface MinimalEnquiryEmailProps {
  name: string
  email: string
  phone?: string | null
  company?: string | null
  subject?: string | null
  message: string
  clientIp?: string
}

export function generateMinimalEnquiryEmailHtml({
  name,
  email,
  phone,
  company,
  subject,
  message,
  clientIp = 'N/A',
}: MinimalEnquiryEmailProps): string {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = phone ? escapeHtml(phone) : null
  const safeCompany = company ? escapeHtml(company) : null
  const safeSubject = subject ? escapeHtml(subject) : 'Website Consultation Request'
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Enquiry</title>
</head>
<body style="margin: 0; padding: 24px 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; color: #0F172A;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    
    <!-- Top Minimal Header with Official Travash Logo -->
    <tr>
      <td style="padding: 28px 32px 20px 32px; border-bottom: 1px solid #F1F5F9;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="vertical-align: middle;">
              <img src="${TRAVASH_LOGO_URL}" alt="Travash Software" height="36" style="height: 36px; width: auto; border: 0; display: block;" />
            </td>
            <td style="text-align: right; vertical-align: middle;">
              <span style="font-size: 11px; font-weight: 700; color: #004771; text-transform: uppercase; letter-spacing: 1px; background-color: #E0F2FE; padding: 5px 12px; border-radius: 20px;">
                NEW ENQUIRY
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Card Content -->
    <tr>
      <td style="padding: 28px 32px;">
        <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 800; color: #0B1E3D; letter-spacing: -0.3px;">
          ${safeSubject}
        </h2>

        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 130px; border-bottom: 1px solid #F1F5F9;">Client Name</td>
            <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 700; border-bottom: 1px solid #F1F5F9;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Email Address</td>
            <td style="padding: 10px 0; font-size: 14px; border-bottom: 1px solid #F1F5F9;">
              <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 700; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          ${
            safePhone
              ? `<tr>
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Phone Number</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${safePhone}</td>
                </tr>`
              : ''
          }
          ${
            safeCompany
              ? `<tr>
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Company</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">${safeCompany}</td>
                </tr>`
              : ''
          }
        </table>

        <!-- Message Box -->
        <div style="margin-bottom: 24px;">
          <span style="display: block; font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;">
            PROJECT DETAILS / MESSAGE
          </span>
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 3px solid #004771; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.65; color: #1E293B;">
            ${safeMessage}
          </div>
        </div>

        <!-- Footer Strip -->
        <div style="padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 12px; color: #64748B; text-align: center; line-height: 1.5;">
          Sent via Travash Website &bull; Direct Reply: <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 600; text-decoration: none;">${safeEmail}</a><br />
          <span style="color: #94A3B8; font-size: 11px;">Client IP: ${clientIp} &bull; Protected by Anti-Spam Security Guard</span>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export interface MinimalJobApplicationEmailProps {
  name: string
  email: string
  phone: string
  jobTitle: string
  jobSlug: string
  coverLetter: string
  resumeFileName?: string
}

export function generateMinimalJobApplicationEmailHtml({
  name,
  email,
  phone,
  jobTitle,
  jobSlug,
  coverLetter,
  resumeFileName,
}: MinimalJobApplicationEmailProps): string {
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(phone)
  const safeJobTitle = escapeHtml(jobTitle)
  const safeCoverLetter = escapeHtml(coverLetter).replace(/\n/g, '<br />')
  const safeResume = resumeFileName ? escapeHtml(resumeFileName) : null

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Job Application</title>
</head>
<body style="margin: 0; padding: 24px 12px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8FAFC; color: #0F172A;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E2E8F0; box-shadow: 0 4px 20px rgba(0,0,0,0.04);">
    
    <!-- Top Minimal Header with Official Travash Logo -->
    <tr>
      <td style="padding: 28px 32px 20px 32px; border-bottom: 1px solid #F1F5F9;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="vertical-align: middle;">
              <img src="${TRAVASH_LOGO_URL}" alt="Travash Software" height="36" style="height: 36px; width: auto; border: 0; display: block;" />
            </td>
            <td style="text-align: right; vertical-align: middle;">
              <span style="font-size: 11px; font-weight: 700; color: #0D9488; text-transform: uppercase; letter-spacing: 1px; background-color: #CCFBF1; padding: 5px 12px; border-radius: 20px;">
                CAREERS
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Card Content -->
    <tr>
      <td style="padding: 28px 32px;">
        <h2 style="margin: 0 0 6px 0; font-size: 18px; font-weight: 800; color: #0B1E3D; letter-spacing: -0.3px;">
          New Job Application: ${safeJobTitle}
        </h2>
        <p style="margin: 0 0 20px 0; font-size: 13px; color: #64748B;">
          Candidate applied for position via Travash Careers portal.
        </p>

        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 140px; border-bottom: 1px solid #F1F5F9;">Candidate Name</td>
            <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 700; border-bottom: 1px solid #F1F5F9;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Email Address</td>
            <td style="padding: 10px 0; font-size: 14px; border-bottom: 1px solid #F1F5F9;">
              <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 700; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Phone Number</td>
            <td style="padding: 10px 0; color: #0F172A; font-size: 14px; font-weight: 700; border-bottom: 1px solid #F1F5F9;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Position Applied</td>
            <td style="padding: 10px 0; color: #004771; font-size: 14px; font-weight: 700; border-bottom: 1px solid #F1F5F9;">${safeJobTitle} (${jobSlug})</td>
          </tr>
          ${
            safeResume
              ? `<tr>
                  <td style="padding: 10px 0; color: #64748B; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">Attached Resume</td>
                  <td style="padding: 10px 0; color: #0F172A; font-size: 13px; font-weight: 600; border-bottom: 1px solid #F1F5F9;">📎 ${safeResume}</td>
                </tr>`
              : ''
          }
        </table>

        <!-- Cover Letter Box -->
        <div style="margin-bottom: 24px;">
          <span style="display: block; font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 8px;">
            COVER LETTER / APPLICANT NOTE
          </span>
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 3px solid #14B8A6; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.65; color: #1E293B;">
            ${safeCoverLetter}
          </div>
        </div>

        <!-- Footer Strip -->
        <div style="padding-top: 16px; border-top: 1px solid #F1F5F9; font-size: 12px; color: #64748B; text-align: center; line-height: 1.5;">
          Sent via Travash Careers Portal &bull; Direct Reply: <a href="mailto:${safeEmail}" style="color: #004771; font-weight: 600; text-decoration: none;">${safeEmail}</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

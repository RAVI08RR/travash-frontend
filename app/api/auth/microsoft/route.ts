import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  const tenantId = process.env.MICROSOFT_TENANT_ID || 'common'
  const clientId = process.env.MICROSOFT_CLIENT_ID
  const redirectUri = process.env.MICROSOFT_REDIRECT_URI || 'http://localhost:3000/api/auth/microsoft/callback'

  if (!clientId || clientId === 'YOUR_CLIENT_ID') {
    return NextResponse.json(
      { error: 'MICROSOFT_CLIENT_ID is not configured in .env.local' },
      { status: 400 }
    )
  }

  const scopes = [
    'offline_access',
    'https://graph.microsoft.com/Mail.Send',
    'https://graph.microsoft.com/User.Read',
  ].join(' ')

  const authUrl = new URL(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize`)
  authUrl.searchParams.set('client_id', clientId)
  authUrl.searchParams.set('response_type', 'code')
  authUrl.searchParams.set('redirect_uri', redirectUri)
  authUrl.searchParams.set('response_mode', 'query')
  authUrl.searchParams.set('scope', scopes)
  authUrl.searchParams.set('prompt', 'consent')
  if (process.env.SMTP_USER) {
    authUrl.searchParams.set('login_hint', process.env.SMTP_USER)
  }

  return NextResponse.redirect(authUrl.toString())
}

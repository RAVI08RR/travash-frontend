import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  const errorDescription = searchParams.get('error_description')

  if (error) {
    return new NextResponse(
      `<html>
        <body style="font-family: sans-serif; padding: 40px; background: #f8fafc; color: #1e293b;">
          <h1 style="color: #ef4444;">Microsoft Authorization Failed</h1>
          <p><strong>Error:</strong> ${error}</p>
          <p>${errorDescription || ''}</p>
        </body>
      </html>`,
      { status: 400, headers: { 'Content-Type': 'text/html' } }
    )
  }

  if (!code) {
    return new NextResponse(
      `<html>
        <body style="font-family: sans-serif; padding: 40px; background: #f8fafc; color: #1e293b;">
          <h1 style="color: #ef4444;">Missing Authorization Code</h1>
          <p>No authorization code was returned by Microsoft.</p>
        </body>
      </html>`,
      { status: 400, headers: { 'Content-Type': 'text/html' } }
    )
  }

  const tenantId = process.env.MICROSOFT_TENANT_ID || 'common'
  const clientId = process.env.MICROSOFT_CLIENT_ID
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET
  const redirectUri = process.env.MICROSOFT_REDIRECT_URI || 'http://localhost:3000/api/auth/microsoft/callback'

  if (!clientId || !clientSecret || clientSecret === 'YOUR_CLIENT_SECRET') {
    return new NextResponse(
      `<html>
        <body style="font-family: sans-serif; padding: 40px; background: #f8fafc; color: #1e293b;">
          <h1 style="color: #ef4444;">Missing Client Secret</h1>
          <p>Please configure <code>MICROSOFT_CLIENT_SECRET</code> in your <code>.env.local</code> file first.</p>
        </body>
      </html>`,
      { status: 400, headers: { 'Content-Type': 'text/html' } }
    )
  }

  try {
    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`
    const body = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    })

    const tokenRes = await fetch(tokenUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })

    const tokenData = await tokenRes.json()

    if (!tokenRes.ok) {
      return new NextResponse(
        `<html>
          <body style="font-family: sans-serif; padding: 40px; background: #f8fafc; color: #1e293b;">
            <h1 style="color: #ef4444;">Token Exchange Failed</h1>
            <pre style="background: #e2e8f0; padding: 16px; border-radius: 8px;">${JSON.stringify(tokenData, null, 2)}</pre>
          </body>
        </html>`,
        { status: tokenRes.status, headers: { 'Content-Type': 'text/html' } }
      )
    }

    const refreshToken = tokenData.refresh_token

    return new NextResponse(
      `<!DOCTYPE html>
      <html>
      <head>
        <title>Microsoft 365 Connected</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; background: #0B1E3D; color: #ffffff; min-height: 100vh; margin: 0; display: flex; align-items: center; justify-content: center;">
        <div style="background: #ffffff; color: #0F172A; max-width: 600px; width: 100%; padding: 32px; border-radius: 16px; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
            <div style="width: 44px; height: 44px; border-radius: 10px; background: #004771; display: flex; align-items: center; justify-content: center; color: white; font-size: 22px;">✓</div>
            <div>
              <h2 style="margin: 0; font-size: 20px; color: #004771;">Microsoft 365 Connected Successfully!</h2>
              <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748B;">OAuth2 Authorization complete for Travash Website.</p>
            </div>
          </div>
          
          <p style="font-size: 14px; color: #334155; line-height: 1.6;">
            Copy the <strong>MICROSOFT_REFRESH_TOKEN</strong> below and paste it into your <code>.env.local</code> file:
          </p>

          <div style="background: #F1F5F9; border: 1px solid #CBD5E1; border-radius: 8px; padding: 14px; margin: 16px 0; font-family: monospace; font-size: 12px; word-break: break-all; max-height: 140px; overflow-y: auto;">
            MICROSOFT_REFRESH_TOKEN=${refreshToken || 'No refresh token returned (make sure offline_access scope is enabled)'}
          </div>

          <button onclick="navigator.clipboard.writeText('${refreshToken || ''}'); alert('Copied to clipboard!');" style="background: #004771; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 13px;">
            Copy Refresh Token
          </button>
        </div>
      </body>
      </html>`,
      { status: 200, headers: { 'Content-Type': 'text/html' } }
    )
  } catch (err: unknown) {
    const error = err as Error
    return new NextResponse(
      `<html>
        <body style="font-family: sans-serif; padding: 40px; background: #f8fafc; color: #1e293b;">
          <h1 style="color: #ef4444;">Server Error</h1>
          <p>${error.message}</p>
        </body>
      </html>`,
      { status: 500, headers: { 'Content-Type': 'text/html' } }
    )
  }
}

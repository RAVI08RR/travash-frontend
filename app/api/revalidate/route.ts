import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get('secret')
    const webhookSecret = process.env.SANITY_REVALIDATE_SECRET

    if (webhookSecret && secret !== webhookSecret) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    // Revalidate the home page and root layout
    revalidatePath('/', 'page')
    revalidatePath('/', 'layout')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: 'Revalidated successfully',
    })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Error revalidating'
    return NextResponse.json({ message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  return POST(req)
}

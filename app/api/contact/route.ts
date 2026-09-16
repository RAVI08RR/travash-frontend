import { NextRequest } from 'next/server'
import { POST as handleEnquiry } from '../enquiry/route'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  return handleEnquiry(request)
}

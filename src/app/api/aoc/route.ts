import { NextResponse } from 'next/server'

// Redirect to local AOC Dashboard via Tailscale
export async function GET() {
  return NextResponse.redirect('https://uncles-mac-mini-1.taila93175.ts.net/')
}
import type { Metadata } from 'next'
import './orlando.css'

export const metadata: Metadata = {
  title: 'Jay Thakur | AI Consultant for Fortune 500 | Accenture · 26+ Years',
  description: 'AI/ML consultant at Accenture with 26+ years in enterprise systems. I help Fortune 500 teams ship production AI — not slideware. AI that ships in days, not quarters.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

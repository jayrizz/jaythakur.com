import type { Metadata } from 'next'
import './orlando.css'

export const metadata: Metadata = {
  title: 'Jay Thakur | AI Consultant for Fortune 500 | 26+ Years in Software',
  description: 'AI consultant — 26 years in software, 19 with Accenture. I help Fortune 500 teams ship production AI, not slideware.',
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

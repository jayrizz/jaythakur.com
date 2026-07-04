import type { Metadata } from 'next'
import './orlando.css'

export const metadata: Metadata = {
  title: 'Jay Thakur | AI Consultant for Fortune 500 | 25+ Years Experience',
  description: '18-year consulting veteran and former Microsoft ML Engineer helping Fortune 500 companies build production AI systems. AI that ships in hours, not weeks.',
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

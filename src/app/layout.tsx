import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jay Thakur | Building with AI',
  description: 'Timeline of human-AI collaboration - production systems built with AI partners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  )
}

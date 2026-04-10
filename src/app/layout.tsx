import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WFA Global Investments LLC',
  description: 'Co-Creating the Future with Global Connectivity',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

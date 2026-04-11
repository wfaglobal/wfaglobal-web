import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WFA Global Investments',
  description: 'Co-Creating the Future with Global Connectivity',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </body>
    </html>
  )
}

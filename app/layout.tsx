import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IEDC CEV',
  description: 'Innovation and Entrepreneurship Development Cell, College of Engineering Vadakara',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

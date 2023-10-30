import Footer from '@/components/ui/Footer/Footer'
import Header from '@/components/ui/Header/Header'
import type { Metadata } from 'next'

import { marcellus } from '@/components/ui/font'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ocean Stay',
  description: 'A beautiful hotel in iceland'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={marcellus.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

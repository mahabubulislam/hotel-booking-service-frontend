import type { Metadata } from 'next'
import { Marcellus } from 'next/font/google'

import './globals.css'

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin']
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={marcellus.className}>{children}</body>
    </html>
  )
}

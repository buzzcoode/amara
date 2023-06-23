import './globals.css'
import { Inter } from 'next/font/google'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amara',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}

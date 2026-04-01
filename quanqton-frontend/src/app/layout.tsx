import type { Metadata } from 'next'
import { Bebas_Neue, Outfit, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'QuanQton Ocean Salt',
  description: 'O sal marinho integral que desperta sua vitalidade natural. Mais de 83 minerais essenciais direto da fonte mais pura: o mar.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${outfit.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}

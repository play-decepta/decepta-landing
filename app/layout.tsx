import type { Metadata } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import ImageProtection from '@/components/ui/ImageProtection'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://decepta.xyz'),
  title: 'Decepta, Predict. Outplay. Earn.',
  description: 'A competitive intelligence platform where pressure reveals skill. Stake real money. Beat real opponents.',
  openGraph: {
    title: 'Decepta, Predict. Outplay. Earn.',
    description: 'A competitive intelligence platform where pressure reveals skill.',
    images: ['/assets/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ImageProtection />
        {children}
      </body>
    </html>
  )
}

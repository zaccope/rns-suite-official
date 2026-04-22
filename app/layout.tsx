import type { Metadata } from 'next'
import { Anton, Bebas_Neue, Outfit, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Analytics from '@/components/Analytics'
import './globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Rock N Soul Suite | Wrexham's Live Music Bar",
  description:
    "Wrexham's late-night home of live rock, soul and everything in between. Craft cocktails, loud guitars, bigger choruses — seven nights a week in the heart of town.",
  keywords: [
    'live music Wrexham',
    'bar Wrexham',
    'cocktail bar Wrexham',
    'rock bar Wrexham',
    'soul music Wrexham',
    'live bands Wrexham',
    'late bar Wrexham',
    'private hire Wrexham',
    'karaoke Wrexham',
    'Rock N Soul Suite',
  ],
  openGraph: {
    title: "Rock N Soul Suite | Wrexham's Live Music Bar",
    description:
      "Loud guitars, smooth soul, proper drinks. Wrexham's home of live music seven nights a week.",
    type: 'website',
    locale: 'en_GB',
  },
  robots: {
    index: false,
    follow: false,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: 'Rock N Soul Suite',
  description:
    "Live music bar in Wrexham — rock, soul, cocktails, late nights, tribute acts and private hire.",
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15-17 Hill Street',
    addressLocality: 'Wrexham',
    postalCode: 'LL11 1SN',
    addressCountry: 'GB',
  },
  areaServed: [{ '@type': 'City', name: 'Wrexham' }],
  servesCuisine: 'Bar food, Burgers',
  acceptsReservations: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-noir-950 text-cream antialiased">
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

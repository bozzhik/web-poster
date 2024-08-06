import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'

import Analytics from '#/Global/Analytics'
import Header from '#/Global/Header'

const SuisseIntl = localFont({
  src: [
    {
      path: '../assets/fonts/SuisseIntl-Regular.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/SuisseIntl-Book.woff2',
      weight: '450',
    },
    {
      path: '../assets/fonts/SuisseIntl-Medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/SuisseIntl-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../assets/fonts/SuisseIntl-Bold.woff2',
      weight: '700',
    },
    {
      path: '../assets/fonts/SuisseIntl-Black.woff2',
      weight: '900',
    },
  ],
  display: 'swap',
  variable: '--font-suisse-intl',
})

const website = {
  title: 'веб-плакат',
  description: 'руководство по веб-плакатам',
  keywords: 'hse, hse adc, hse design, adc web poster, web poster, веб плакат',

  url: 'https://web-plakat.bozzhik.ru',
  generator: 'nextjs, react, website',
}

export const metadata: Metadata = {
  title: {
    default: website.title,
    template: `%s — ${website.title}`,
  },

  description: website.description,
  keywords: website.keywords,

  metadataBase: new URL(website.url),
  generator: website.generator,

  openGraph: {
    type: 'website',
    url: website.url,
    title: website.title,
    description: website.description,
    siteName: website.title,
    images: `${website.url}/og.jpg`,
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark scroll-smooth">
      <body className={`${SuisseIntl.className} relative tracking-tight bg-background text-foreground antialiased`}>
        <Header />
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

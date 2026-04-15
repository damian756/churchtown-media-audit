import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// 1. VIEWPORT SETTINGS
export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// 2. SEO METADATA
// Force redeploy
export const metadata: Metadata = {
  metadataBase: new URL('https://www.churchtownmedia.co.uk'),
  title: {
    default: 'Churchtown Media | Web Design & SEO | Southport & Blackpool',
    template: '%s',
  },
  description: 'Churchtown Media builds websites and SEO campaigns for hospitality, golf, professional services and property businesses in Southport and Blackpool. Creators of the Sefton Coast Network.',
  applicationName: 'Churchtown Media',
  authors: [{ name: 'Damian Roche, Churchtown Media', url: 'https://www.churchtownmedia.co.uk' }],
  generator: 'Next.js',
  keywords: ['Web Design Southport', 'SEO Southport', 'Web Design Blackpool', 'SEO Blackpool', 'Digital Agency Southport', 'Digital Agency Blackpool', 'Next.js Developer Southport'],
  alternates: {
    types: {
      "application/rss+xml": "https://www.churchtownmedia.co.uk/feed",
    },
  },
  openGraph: {
    title: 'Churchtown Media | Web Design & SEO | Southport & Blackpool',
    description: 'We built the Sefton Coast Network from scratch. Four sites, one coastline. We build the same depth of thing for clients in Southport and Blackpool.',
    url: 'https://www.churchtownmedia.co.uk',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media: Web Design & SEO | Southport & Blackpool' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    "geo.region": "GB-SFT",
    "geo.placename": "Southport",
    "geo.position": "53.6457;-3.0065",
    "ICBM": "53.6457, -3.0065"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="Vjz4nA8LqwXN3ma/wV/sWg" async></script>
      </head>
        <body className={`${inter.className} bg-slate-950 text-white antialiased selection:bg-blue-400 selection:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
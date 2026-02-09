import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// 1. VIEWPORT SETTINGS
export const viewport: Viewport = {
  themeColor: '#f8fafc',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// 2. SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://www.churchtownmedia.co.uk'),
  title: 'Churchtown Media | Digital Growth for Southport Businesses',
  description: 'We build high-performance revenue engines for businesses in Southport, Merseyside, and West Lancashire. Web Design, SEO, and Digital Strategy.',
  applicationName: 'Churchtown Media',
  authors: [{ name: 'Churchtown Media Team', url: 'https://www.churchtownmedia.co.uk' }],
  generator: 'Next.js',
  keywords: ['Web Design Southport', 'SEO Southport', 'Digital Agency North West', 'Next.js Developer'],
  // ❌ DELETED: alternates: { canonical: '/' }, <-- This was the bug!
  openGraph: {
    title: 'Churchtown Media | Digital Growth Experts',
    description: 'Stop burning money on ads. Start building a revenue engine.',
    url: 'https://www.churchtownmedia.co.uk',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media Digital Growth' }],
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
      <body className={`${inter.className} bg-slate-950 text-white antialiased selection:bg-blue-400 selection:text-white`}>
        
        {/* --- 1. COOKIEYES BANNER --- */}
        <Script
          id="cookieyes"
          // I see you found your real code! This looks correct.
          src="https://cdn-cookieyes.com/client_data/d800a0412ec550532ec1984546b7231c/script.js" 
          strategy="beforeInteractive" 
        />

        <Navbar />
        
        {children}
        
        <Footer />

        {/* --- 2. GOOGLE ANALYTICS --- */}
        <GoogleAnalytics gaId="G-WZM6ZEYTBL" />

      </body>
    </html>
  );
}
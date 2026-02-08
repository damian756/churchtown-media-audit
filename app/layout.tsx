import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// 1. VIEWPORT SETTINGS (Mobile Polish)
// This makes the mobile browser bar match your site's background color.
export const viewport: Viewport = {
  themeColor: '#f8fafc', // Matches bg-slate-50
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Accessibility: allows users to zoom
};

// 2. 10/10 SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://www.churchtownmedia.co.uk'),
  
  title: 'Churchtown Media | Digital Growth for Southport Businesses',
  description: 'We build high-performance revenue engines for businesses in Southport, Merseyside, and West Lancashire. Web Design, SEO, and Digital Strategy.',
  
  // BRANDING & OWNERSHIP
  applicationName: 'Churchtown Media',
  authors: [{ name: 'Churchtown Media Team', url: 'https://www.churchtownmedia.co.uk' }],
  generator: 'Next.js',
  keywords: ['Web Design Southport', 'SEO Southport', 'Digital Agency North West', 'Next.js Developer'],
  
  // DUPLICATE CONTENT PROTECTION
  alternates: {
    canonical: '/',
  },

  // SOCIAL SHARING
  openGraph: {
    title: 'Churchtown Media | Digital Growth Experts',
    description: 'Stop burning money on ads. Start building a revenue engine.',
    url: 'https://www.churchtownmedia.co.uk',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    type: 'website',
    images: [{
      url: '/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media Digital Growth',
    }],
  },
  
  // INDEXING RULES
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

  // LOCAL SEO SIGNALS (Legacy Support)
  other: {
    "geo.region": "GB-SFT", // Sefton/Merseyside Code
    "geo.placename": "Southport",
    "geo.position": "53.6457;-3.0065", // Southport Coordinates
    "ICBM": "53.6457, -3.0065"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added 'scroll-smooth' for fluid anchor navigation
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
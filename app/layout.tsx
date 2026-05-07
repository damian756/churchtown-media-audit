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

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.churchtownmedia.co.uk'),
  title: {
    default: 'Churchtown Media | Digital Strategy & Technical Advisory',
    template: '%s | Churchtown Media',
  },
  description: 'Churchtown Media is a specialist digital advisory practice. Technical SEO, web architecture, and digital footprint intelligence. Founded by Damian Roche. Creator of SIBA Digital.',
  applicationName: 'Churchtown Media',
  authors: [{ name: 'Damian Roche', url: 'https://www.churchtownmedia.co.uk' }],
  generator: 'Next.js',
  keywords: ['digital strategy consultancy', 'technical SEO advisory', 'Next.js architecture', 'digital footprint intelligence', 'Churchtown Media', 'Damian Roche'],
  alternates: {
    types: {
      "application/rss+xml": "https://www.churchtownmedia.co.uk/feed",
    },
  },
  openGraph: {
    title: 'Churchtown Media | Digital Strategy & Technical Advisory',
    description: 'Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong. Founded by Damian Roche, creator of SIBA Digital.',
    url: 'https://www.churchtownmedia.co.uk',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media: Digital Strategy & Technical Advisory' }],
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

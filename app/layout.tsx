import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// 1. NEW SEO METADATA BLOCK
export const metadata: Metadata = {
  metadataBase: new URL('https://www.churchtownmedia.co.uk'),
  title: {
    default: 'Churchtown Media | Digital Growth for Southport Businesses',
    template: '%s | Churchtown Media'
  },
  description: 'We build high-performance revenue engines for businesses in Southport, Merseyside, and West Lancashire. Web Design, SEO, and Digital Strategy.',
  openGraph: {
    title: 'Churchtown Media | Digital Growth Experts',
    description: 'Stop burning money on ads. Start building a revenue engine.',
    url: 'https://www.churchtownmedia.co.uk',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// 2. ROOT LAYOUT (Keeps your styling and Navbar/Footer)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* - bg-slate-50: Sets the premium off-white background.
        - text-slate-900: Sets the dark readable text.
        - antialiased: Makes the font look crisp and expensive.
      */}
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased selection:bg-blue-200 selection:text-blue-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
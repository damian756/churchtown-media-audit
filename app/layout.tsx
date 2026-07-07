import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const serif = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.churchtownmedia.co.uk"),
  title: {
    default: "Churchtown Media | Digital Strategy & Technical Advisory",
    template: "%s | Churchtown Media",
  },
  description:
    "Churchtown Media is a specialist digital advisory practice. Technical SEO, web architecture, and digital footprint intelligence. Founded by Damian Roche. Creator of SIBA Digital, the Sefton Coast Network, and The Sandgrounder.",
  applicationName: "Churchtown Media",
  authors: [{ name: "Damian Roche", url: "https://www.churchtownmedia.co.uk" }],
  generator: "Next.js",
  keywords: [
    "digital strategy consultancy",
    "technical SEO advisory",
    "AI search architecture",
    "generative engine optimisation",
    "digital footprint intelligence",
    "AI infrastructure advisory",
    "Cloudflare consultancy",
    "Next.js architecture",
    "Churchtown Media",
    "Damian Roche",
  ],
  openGraph: {
    title: "Churchtown Media | Digital Strategy & Technical Advisory",
    description:
      "Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong. Founded by Damian Roche, creator of SIBA Digital, the Sefton Coast Network, and The Sandgrounder.",
    url: "https://www.churchtownmedia.co.uk",
    siteName: "Churchtown Media",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media: Digital Strategy & Technical Advisory",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable} scroll-smooth`}>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Vjz4nA8LqwXN3ma/wV/sWg"
          async
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-[62px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

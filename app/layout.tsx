import type { Metadata, Viewport } from "next";
import { EB_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const display = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600"],
});

const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#f3eee4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.churchtownmedia.co.uk"),
  title: {
    default: "Churchtown Media | Public-records consultation",
    template: "%s | Churchtown Media",
  },
  description:
    "Advisory practice of Damian Roche. Consultation on the UK public record, using Institrace and the method developed in public at SIBA Digital.",
  applicationName: "Churchtown Media",
  authors: [{ name: "Damian Roche", url: "https://www.churchtownmedia.co.uk" }],
  keywords: [
    "public records consultation",
    "governance advisory",
    "Institrace",
    "SIBA Digital",
    "Churchtown Media",
    "Damian Roche",
    "OSINT advisory",
  ],
  openGraph: {
    title: "Churchtown Media | Public-records consultation",
    description:
      "Advisory practice of Damian Roche. Consultation on the UK public record, using Institrace and the method developed in public at SIBA Digital.",
    url: "https://www.churchtownmedia.co.uk",
    siteName: "Churchtown Media",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media",
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
    <html lang="en-GB" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Vjz4nA8LqwXN3ma/wV/sWg"
          async
        />
      </head>
      <body>
        <Navbar />
        <main className="page">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

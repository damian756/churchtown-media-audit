import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { rootMetadata } from "@/lib/seo";
import { siteGraph } from "@/lib/schema";

/** One face for everything, as Institrace uses: Inter. */
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${sans.variable} scroll-smooth`}>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Vjz4nA8LqwXN3ma/wV/sWg"
          async
        />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={siteGraph()} />
        <div className="sheet">
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

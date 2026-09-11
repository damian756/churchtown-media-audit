import type { Viewport } from "next";
import { EB_Garamond, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import { rootMetadata } from "@/lib/seo";
import { siteGraph } from "@/lib/schema";

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

export const metadata = rootMetadata;

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
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:bg-[var(--paper)] focus:px-3 focus:py-2">
          Skip to content
        </a>
        <JsonLd data={siteGraph()} />
        <Navbar />
        <main id="main" className="page">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // IMPORT FOOTER

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churchtown Media | Digital Growth Agency",
  description: "We build revenue engines. Enterprise Web Design & SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> {/* PLACE FOOTER HERE */}
      </body>
    </html>
  );
}
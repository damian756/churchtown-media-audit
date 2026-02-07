import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; // <--- 1. Import the Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churchtown Media | SEO & Web Design Southport",
  description: "Data-driven SEO and high-performance web design for Southport businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* <--- 2. Add Navbar here so it shows on every page */}
        {children}
      </body>
    </html>
  );
}
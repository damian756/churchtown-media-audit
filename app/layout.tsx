import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // IMPORT THE NAVBAR

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
        <Navbar /> {/* PLACE IT HERE AT THE TOP */}
        {children}
      </body>
    </html>
  );
}
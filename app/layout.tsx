import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Churchtown Media | Data-Driven SEO Agency Southport",
  description: "SEO for businesses that build things. We specialize in Technical SEO and high-value lead generation for industrial & B2B firms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
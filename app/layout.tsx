import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      {/* THE FIX: We force the styling classes directly here.
        - bg-slate-50: Sets the premium off-white background.
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
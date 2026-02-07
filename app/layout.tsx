import "./globals.css";
import { Inter } from "next/font/google";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer"; // <--- Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Churchtown Media | Digital Growth Partner",
  description: "Next.js Web Design & SEO for Southport.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 relative flex flex-col`}>
        
        {/* GLOBAL BACKGROUND (The Blobs) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter"></div>
            <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-cyan-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
        </div>

        {/* GLOBAL NAVIGATION */}
        <FloatingNav />

        {/* PAGE CONTENT */}
        {/* flex-grow ensures the footer pushes to the bottom even on short pages */}
        <div className="relative z-10 pt-24 flex-grow">
            {children}
        </div>

        {/* GLOBAL FOOTER */}
        <Footer /> 

      </body>
    </html>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function FloatingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm rounded-2xl px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2 group">
          <Image 
            src="/logo.png" 
            alt="Churchtown Media Logo" 
            width={32}
            height={32}
            className="w-8 h-8 group-hover:scale-110 transition-transform"
          />
          <span>Churchtown<span className="text-blue-600">Media</span></span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Insights</Link>
        </div>

        {/* CTA */}
        <Link href="/audit" className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
          Get Free Audit
        </Link>
      </div>
    </nav>
  );
}
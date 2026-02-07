"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path ? "text-blue-600 font-bold" : "text-slate-600 hover:text-slate-900";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm rounded-full px-6 h-16 flex items-center justify-between transition-all">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            C
          </div>
          <span className="font-bold text-slate-900 text-lg tracking-tight">Churchtown<span className="text-blue-600">Media</span></span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
            <Link href="/services" className={`text-sm font-medium transition-colors ${isActive('/services')}`}>Services</Link>
            <Link href="/work" className={`text-sm font-medium transition-colors ${isActive('/work')}`}>Work</Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact')}`}>Contact</Link>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4">
            <Link href="/audit" className="group flex items-center gap-2 bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/25">
                <Zap className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                Get Free Audit
            </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4 border border-slate-100 animate-in slide-in-from-top-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 py-2 border-b border-slate-100">Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600 py-2 border-b border-slate-100">Services</Link>
            <Link href="/work" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600 py-2 border-b border-slate-100">Work</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-600 py-2 border-b border-slate-100">Contact</Link>
            <Link href="/audit" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white text-center font-bold py-3 rounded-xl mt-2">
                Run Free Audit
            </Link>
        </div>
      )}
    </nav>
  );
}
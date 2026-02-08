"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 1. SMART DARK MODE DETECTION
  // Add any page path here that uses a dark background to automatically switch text to white.
  const isDarkPage = [
    "/southport-growth", 
    "/testimonials", 
    "/audit" 
  ].includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; } 
    else { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  // UPDATED LINKS ARRAY
  const links = [
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "SEO", href: "/services/seo" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/blog" }, // <--- ADDED: Proves Authority
    { name: "Reviews", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  // Logic: Text is white ONLY if we are on a dark page AND haven't scrolled down yet.
  const useWhiteText = isDarkPage && !scrolled && !isOpen;

  return (
    <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled 
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50 group" onClick={() => setIsOpen(false)}>
          <span className={`font-bold text-2xl tracking-tight transition-colors ${useWhiteText ? "text-white" : "text-slate-900"}`}>
            Churchtown<span className={useWhiteText ? "text-blue-400" : "text-blue-600"}>Media</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold transition-colors hover:-translate-y-0.5 transform duration-200 ${
                    useWhiteText 
                    ? "text-slate-200 hover:text-white" 
                    : pathname.startsWith(link.href) && link.href !== "/" // Active state logic
                        ? "text-blue-600" 
                        : "text-slate-600 hover:text-blue-600"
                }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA BUTTON */}
          <Link 
            href="/audit" 
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2 ${
                useWhiteText 
                ? "bg-white text-slate-900 hover:bg-blue-50" 
                : "bg-slate-900 text-white hover:bg-blue-600 shadow-slate-900/20"
            }`}
          >
            Get Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle Menu"
            className={`lg:hidden relative z-50 p-2 transition-colors ${useWhiteText ? "text-white" : "text-slate-900"}`}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          {links.map((link) => (
            <Link 
                key={link.name} 
                href={link.href} 
                className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/audit" 
            className="mt-4 bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2"
          >
            Get Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
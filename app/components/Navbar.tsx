"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // PAGES WITH DARK BACKGROUNDS
  const isDarkPage = pathname === "/southport-growth";

  // 1. LOCK BODY SCROLL WHEN MENU IS OPEN
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Web Design", href: "/services/web-design" },
    { name: "SEO", href: "/services/seo" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  // LOGIC: Use white text ONLY if:
  // 1. We are on a dark page
  // 2. We haven't scrolled yet
  // 3. The menu is CLOSED (If menu is open, text must be black to match white menu)
  const useWhiteText = isDarkPage && !scrolled && !isOpen;

  // NAVBAR STYLE LOGIC:
  // If menu is OPEN: Force transparent bg (blends with white menu) and large padding
  // If menu is CLOSED: Use standard scroll logic
  const navClasses = isOpen
    ? "bg-transparent py-6"
    : scrolled
        ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm"
        : "bg-transparent py-6";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50" onClick={() => setIsOpen(false)}>
          <span className={`font-bold text-2xl tracking-tight transition-colors ${
             useWhiteText ? "text-white" : "text-slate-900"
          }`}>
            Churchtown<span className="text-blue-600">Media</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                useWhiteText 
                  ? "text-slate-300 hover:text-white" 
                  : pathname === link.href 
                      ? "text-blue-600" 
                      : "text-slate-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/audit"
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2 ${
                useWhiteText
                    ? "bg-white text-slate-900 hover:bg-slate-100"
                    : "bg-slate-900 text-white hover:bg-slate-800 shadow-slate-900/20"
            }`}
          >
            Get Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden relative z-50 p-2 transition-colors ${
            useWhiteText ? "text-white" : "text-slate-800"
          }`}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/audit"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
          >
            Get Free Audit
          </Link>
        </div>
      </div>
    </nav>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import WhoWeHelpMegaMenu from "./WhoWeHelpMegaMenu";
import ServicesDropdown from "./ServicesDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // 1. SMART DARK MODE DETECTION
  // Site-wide dark theme: all pages use dark background by default
  // Add any LIGHT background pages here (if you create them in the future)
  const lightPages: string[] = [
    // Currently no light pages - entire site is dark theme
  ];
  const isLightPage = lightPages.includes(pathname);

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

  // STREAMLINED LINKS ARRAY
  // Services and Who We Help are handled by dropdown components
  const links = [
    { name: "Work", href: "/work" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/testimonials" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Logic: Text is white by default (dark theme), dark only on light pages when scrolled
  const useWhiteText = !isLightPage || (!scrolled && !isOpen);

  return (
    <nav 
        className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
            scrolled 
            ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-[70] group flex items-center gap-2 sm:gap-3" onClick={() => setIsOpen(false)}>
          <img 
            src="/logo.png" 
            alt="Churchtown Media Logo" 
            className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform flex-shrink-0"
          />
          <span className={`font-bold text-lg sm:text-2xl tracking-tight transition-colors ${useWhiteText ? "text-white" : "text-slate-900"}`}>
            Churchtown<span className={useWhiteText ? "text-blue-400" : "text-blue-600"}>Media</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          {/* SERVICES DROPDOWN */}
          <ServicesDropdown />
          
          {/* WHO WE HELP MEGA MENU */}
          <WhoWeHelpMegaMenu />
          
          {/* STANDARD LINKS */}
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
                ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20" 
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
            className={`lg:hidden relative z-[70] p-2 -mr-2 transition-colors ${useWhiteText ? "text-white" : "text-slate-900"}`}
        >
          {isOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8" />}
        </button>

        {/* MOBILE MENU OVERLAY */}
        <div className={`fixed inset-0 bg-slate-950 z-50 flex flex-col items-start justify-start pt-28 sm:pt-32 px-6 gap-6 transition-all duration-300 overflow-y-auto ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          
          {/* SERVICES DROPDOWN MOBILE */}
          <div className="w-full">
            <ServicesDropdown isMobile={true} onItemClick={() => setIsOpen(false)} />
          </div>
          
          {/* WHO WE HELP MOBILE */}
          <div className="w-full">
            <WhoWeHelpMegaMenu isMobile={true} onItemClick={() => setIsOpen(false)} />
          </div>
          
          {/* STANDARD LINKS MOBILE */}
          {links.map((link) => (
            <Link 
                key={link.name} 
                href={link.href} 
                className="text-3xl font-bold text-white hover:text-blue-400 transition-colors w-full"
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/audit" 
            className="mt-4 bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center gap-2 self-center"
          >
            Get Free Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </nav>
  );
}
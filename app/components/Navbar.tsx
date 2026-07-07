"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 border-t-2 border-t-[#112d6e] ${
          scrolled
            ? "bg-[#faf8f4]/95 backdrop-blur-md border-b border-[#e0dcd6] py-4"
            : "bg-[#faf8f4] border-b border-[#e0dcd6] py-4"
        }`}
      >
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-[12px] uppercase tracking-widest text-[#1c1c1c] hover:text-[#112d6e] transition-colors"
            onClick={() => setIsOpen(false)}
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            Churchtown Media
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#112d6e] font-medium"
                    : "text-[#6b6b6b] hover:text-[#1c1c1c]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-[#3d3d3d] p-2 -mr-2"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#faf8f4] z-[90] md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-start pt-24 px-8 gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-[#1c1c1c] hover:text-[#112d6e] transition-colors"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

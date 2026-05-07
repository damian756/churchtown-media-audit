"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="Churchtown Media"
              width={36}
              height={36}
              priority
              className="w-8 h-8 sm:w-9 sm:h-9 group-hover:opacity-80 transition-opacity"
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white">
              Churchtown<span className="text-blue-400">Media</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
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
            className="md:hidden text-white p-2 -mr-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-slate-950 z-[90] md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-start pt-28 px-8 gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

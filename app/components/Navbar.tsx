"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BarChart3 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Churchtown<span className="text-blue-600">Media</span>
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/services" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
            Services
          </Link>
          <Link href="/case-studies" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
            Case Studies
          </Link>
          <Link href="/locations/southport" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
            Local SEO
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
            Agency
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Link
            href="/audit"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            >
              Case Studies
            </Link>
            <Link
              href="/locations/southport"
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            >
              Local SEO
            </Link>
            <Link
              href="/audit"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full rounded-lg bg-blue-600 px-3 py-2 text-center text-base font-semibold text-white hover:bg-blue-700"
            >
              Get Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
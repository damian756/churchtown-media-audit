"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-slate-400 border-t border-white/5 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Churchtown Media"
                width={36}
                height={36}
                className="w-9 h-9 group-hover:opacity-80 transition-opacity"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                Churchtown<span className="text-blue-400">Media</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@churchtownmedia.co.uk"
                aria-label="Email"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Practice</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-slate-200 font-semibold mb-4 text-sm uppercase tracking-wider">Work</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li>
                  <a href="https://www.siba.digital" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    SIBA Digital
                  </a>
                </li>
                <li>
                  <a href="https://www.alotekshelters.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Alotek Shelters
                  </a>
                </li>
                <li>
                  <a href="https://www.southportguide.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Sefton Coast Network
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {currentYear} Churchtown Media Ltd. Co. No. 16960442. VAT No. 511024262.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

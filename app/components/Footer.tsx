"use client";

import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#e0e0d8] bg-[#f5f5f0] mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <Link
              href="/"
              className="block text-[15px] font-medium text-[#1c1c1c] hover:text-[#112d6e] transition-colors"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              Churchtown Media
            </Link>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              Digital strategy, technical architecture and intelligence.
            </p>
            <div className="flex gap-5 pt-1 text-sm">
              <a
                href="https://www.linkedin.com/in/damian-roche-7ba8293a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6b6b6b] hover:text-[#112d6e] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@churchtownmedia.co.uk"
                className="text-[#6b6b6b] hover:text-[#112d6e] transition-colors"
              >
                hello@churchtownmedia.co.uk
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h4 className="text-[#1c1c1c] font-medium mb-4 text-xs uppercase tracking-widest">Practice</h4>
              <ul className="space-y-3 text-sm text-[#6b6b6b]">
                <li><Link href="/about" className="hover:text-[#112d6e] transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-[#112d6e] transition-colors">Services</Link></li>
                <li><Link href="/case-studies" className="hover:text-[#112d6e] transition-colors">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:text-[#112d6e] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#1c1c1c] font-medium mb-4 text-xs uppercase tracking-widest">Work</h4>
              <ul className="space-y-3 text-sm text-[#6b6b6b]">
                <li>
                  <a
                    href="https://www.siba.digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#112d6e] transition-colors"
                  >
                    SIBA Digital <ExternalLink size={11} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.alotekshelters.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#112d6e] transition-colors"
                  >
                    Alotek Shelters <ExternalLink size={11} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.southportguide.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#112d6e] transition-colors"
                  >
                    Sefton Coast Network <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e0e0d8] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#a0a0a0]">
          <p>&copy; {currentYear} Churchtown Media Ltd. Co. No. 16960442. VAT No. 511024262.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#6b6b6b] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#6b6b6b] transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black text-slate-400 py-20 border-t border-white/5 mt-auto relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        
        {/* COL 1: BRAND & SOCIALS */}
        <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
                <Image 
                  src="/logo.png" 
                  alt="Churchtown Media Logo" 
                  width={40}
                  height={40}
                  className="w-10 h-10 group-hover:scale-110 transition-transform"
                />
                <span className="font-bold text-2xl text-white tracking-tight">
                    Churchtown<span className="text-blue-500">Media</span>
                </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500 font-medium">
                Web design and SEO for Southport &amp; Blackpool businesses. Creators of the Sefton Coast Network.
            </p>
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-5 pt-4">
                <a href="https://www.facebook.com/ChurchtownMedia/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                <a href="https://twitter.com/churchtownmedia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/damian-roche-7ba8293a5/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href="https://instagram.com/churchtownmedia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
                <a href="https://youtube.com/@churchtownmedia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            </div>
        </div>

        {/* COL 2: SERVICES */}
        <div>
            <h4 className="text-slate-200 font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><Link href="/services/web-design" className="hover:text-blue-400 transition-colors">Web Design</Link></li>
                <li><Link href="/services/seo" className="hover:text-blue-400 transition-colors">SEO Services</Link></li>
                <li><Link href="/services/headless-development" className="hover:text-blue-400 transition-colors">Headless Development</Link></li>
                <li><Link href="/services/content-scaling" className="hover:text-blue-400 transition-colors">Content Scaling</Link></li>
                <li><Link href="/services/ai" className="hover:text-blue-400 transition-colors">AI Services</Link></li>
                <li><Link href="/audit" className="hover:text-blue-400 transition-colors">Free SEO Audit</Link></li>
            </ul>
        </div>

        {/* COL 3: SECTORS */}
        <div>
            <h4 className="text-slate-200 font-bold mb-6 text-sm uppercase tracking-wider">Sectors</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><Link href="/sectors/hospitality" className="hover:text-blue-400 transition-colors">Hospitality &amp; Tourism</Link></li>
                <li><Link href="/sectors/golf" className="hover:text-blue-400 transition-colors">Golf Clubs</Link></li>
                <li><Link href="/sectors/professional-services" className="hover:text-blue-400 transition-colors">Professional Services</Link></li>
                <li><Link href="/sectors/property" className="hover:text-blue-400 transition-colors">Property &amp; Development</Link></li>
                <li className="pt-2 border-t border-white/5 mt-2">
                    <Link href="/locations/southport" className="hover:text-blue-400 transition-colors">Agency in Southport</Link></li>
                <li><Link href="/blackpool-growth" className="text-blue-500 font-bold hover:text-white transition-colors">Blackpool Growth Guide →</Link></li>
            </ul>
        </div>

        {/* COL 4: CONTACT */}
        <div>
            <h4 className="text-slate-200 font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-5 text-sm font-medium text-slate-500">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span>Cambridge Avenue,<br/>Southport, PR9 9SA</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                    <a href="mailto:hello@churchtownmedia.co.uk" className="hover:text-white transition-colors">hello@churchtownmedia.co.uk</a>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                    <a href="tel:+441704635785" className="hover:text-white transition-colors">01704 635785</a>
                </li>
            </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600 relative z-10">
        <p>&copy; {currentYear} Churchtown Media Ltd. Company No. 16960442. VAT No. 511024262. All rights reserved.</p>
        
        <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/about" className="hover:text-slate-400 transition-colors">About</Link>
            <Link href="/work" className="hover:text-slate-400 transition-colors">Our Process</Link>
            <Link href="/portfolio" className="hover:text-slate-400 transition-colors">Portfolio</Link>
            <Link href="/blog" className="hover:text-slate-400 transition-colors">Blog</Link>
            <Link href="/testimonials" className="hover:text-slate-400 transition-colors">Reviews</Link>
            <Link href="/frequently-asked-questions" className="hover:text-slate-400 transition-colors">FAQ</Link>
            <Link href="/services" className="hover:text-slate-400 transition-colors">Services</Link>
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
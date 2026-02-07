"use client";

import React from "react";
import Link from "next/link";
// 1. VERIFY IMPORTS: Ensure all social icons are imported here
import { Twitter, Linkedin, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-slate-900 via-slate-900 to-black text-slate-400 py-20 border-t border-white/5 mt-auto relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        
        {/* COL 1: BRAND & SOCIALS */}
        <div className="space-y-6">
            <Link href="/" className="block">
                <span className="font-bold text-2xl text-white tracking-tight">
                    Churchtown<span className="text-blue-500">Media</span>
                </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-500 font-medium">
                We build revenue engines, not just websites. Data-driven SEO and high-performance development for Southport businesses.
            </p>
            
            {/* 2. SOCIAL ICONS */}
            <div className="flex gap-5 pt-4">
                {/* Twitter / X */}
                <a 
                    href="https://twitter.com/churchtownmedia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white hover:scale-110 transition-all"
                    aria-label="Twitter"
                >
                    <Twitter className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a 
                    href="https://linkedin.com/company/churchtownmedia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white hover:scale-110 transition-all"
                    aria-label="LinkedIn"
                >
                    <Linkedin className="w-5 h-5" />
                </a>

                {/* Instagram */}
                <a 
                    href="https://instagram.com/churchtownmedia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white hover:scale-110 transition-all"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5" />
                </a>

                {/* YouTube */}
                <a 
                    href="https://youtube.com/@churchtownmedia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-400 hover:text-white hover:scale-110 transition-all"
                    aria-label="YouTube"
                >
                    <Youtube className="w-5 h-5" />
                </a>
            </div>
        </div>

        {/* COL 2: SERVICES */}
        <div>
            <h4 className="text-slate-200 font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li>
                    <Link href="/services/web-design" className="hover:text-blue-400 transition-colors">
                        Enterprise Web Design
                    </Link>
                </li>
                <li>
                    <Link href="/services/seo" className="hover:text-blue-400 transition-colors">
                        Data-Driven SEO
                    </Link>
                </li>
                <li>
                    <Link href="/services/small-business" className="hover:text-blue-400 transition-colors">
                        Small Business Websites
                    </Link>
                </li>
                <li>
                    <Link href="/audit" className="hover:text-blue-400 transition-colors">
                        Free SEO Audit
                    </Link>
                </li>
            </ul>
        </div>

        {/* COL 3: AGENCY */}
        <div>
            <h4 className="text-slate-200 font-bold mb-6 text-sm uppercase tracking-wider">Agency</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500">
                <li><Link href="/work" className="hover:text-blue-400 transition-colors">Industry Frameworks</Link></li>
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Knowledge Base</Link></li>
                
                {/* --- FIX: Updated Link to point to the correct page --- */}
                <li><Link href="/southport-growth" className="hover:text-blue-400 transition-colors">Southport Growth Hub</Link></li>
                
                <li><Link href="/audit" className="text-blue-500 font-bold hover:text-white transition-colors">Get Free Audit</Link></li>
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
            </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600 relative z-10">
        <p>&copy; {new Date().getFullYear()} Churchtown Media Ltd. All rights reserved.</p>
        
        <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-400 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* COL 1: BRAND */}
        <div>
            <Link href="/" className="flex items-center gap-2 mb-6 text-white">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    C
                </div>
                <span className="font-bold text-lg tracking-tight">Churchtown<span className="text-blue-500">Media</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
                We build revenue engines, not just websites. Data-driven SEO and high-performance development for Southport businesses.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Youtube className="w-4 h-4" /></a>
            </div>
        </div>

        {/* COL 2: SERVICES */}
        <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Enterprise Web Design</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Data-Driven SEO</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Small Business Websites</Link></li>
                <li><Link href="/services" className="hover:text-blue-400 transition-colors">Local SEO Starter</Link></li>
            </ul>
        </div>

        {/* COL 3: AGENCY */}
        <div>
            <h4 className="text-white font-bold mb-6">Agency</h4>
            <ul className="space-y-4 text-sm">
                <li><Link href="/work" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">Knowledge Base</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Southport Growth Hub</Link></li>
                <li><Link href="/audit" className="text-blue-400 font-bold hover:text-white transition-colors">Get Free Audit</Link></li>
            </ul>
        </div>

        {/* COL 4: CONTACT */}
        <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                    <span>Cambridge Avenue,<br/>Southport, PR9 9SA</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                    <a href="mailto:hello@churchtownmedia.co.uk" className="hover:text-white transition-colors">hello@churchtownmedia.co.uk</a>
                </li>
            </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; 2026 Churchtown Media Ltd. All rights reserved.</p>
        <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
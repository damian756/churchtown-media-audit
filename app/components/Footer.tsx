import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 pt-20 pb-10 relative z-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">CM</div>
                <span>Churchtown<span className="text-blue-500">Media</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              We build revenue engines, not just websites. Data-driven SEO and high-performance development for Southport businesses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Enterprise Web Design</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Data-Driven SEO</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Small Business Websites</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Local SEO Starter</Link></li>
            </ul>
          </div>

          {/* Column 3: Agency */}
          <div>
            <h3 className="font-bold text-white mb-6">Agency</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Knowledge Base</Link></li>
              <li><Link href="/southport-business-growth" className="hover:text-blue-400 transition-colors">Southport Growth Hub</Link></li>
              <li><Link href="/audit" className="hover:text-blue-400 transition-colors">Get Free Audit</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>5 Cambridge Avenue,<br/>Southport, PR9 9SA</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:damian@churchtownmedia.co.uk" className="hover:text-white transition-colors">damian@churchtownmedia.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 Churchtown Media Ltd. All rights reserved. Company No: 16960442.</p>
          <div className="flex gap-6 text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer">Built with Next.js & Tailwind.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
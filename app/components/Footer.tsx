import Link from "next/link";
import { Twitter, Instagram, Linkedin, Youtube, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    // THE MAGIC SAUCE:
    // 1. bg-slate-900/80 -> Dark but see-through
    // 2. backdrop-blur-3xl -> Blurs the blobs behind it into a soft glow
    // 3. border-t border-white/10 -> Subtle premium edge
    <footer className="w-full bg-slate-900/80 backdrop-blur-3xl border-t border-white/10 pt-20 pb-10 relative z-50 text-slate-300">
      
      {/* Optional: A subtle gradient fade at the top of the footer to blend it further */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-bold text-xl tracking-tight text-white flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-900/50">CM</div>
                <span>Churchtown<span className="text-blue-400">Media</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400 font-medium">
              We build revenue engines, not just websites. Data-driven SEO and high-performance development for Southport businesses.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"><Youtube className="w-4 h-4" /></Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wide">Services</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/services" className="hover:text-blue-400 hover:pl-1 transition-all">Enterprise Web Design</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 hover:pl-1 transition-all">Data-Driven SEO</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 hover:pl-1 transition-all">Small Business Websites</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 hover:pl-1 transition-all">Local SEO Starter</Link></li>
            </ul>
          </div>

          {/* Column 3: Agency */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wide">Agency</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/case-studies" className="hover:text-blue-400 hover:pl-1 transition-all">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 hover:pl-1 transition-all">Knowledge Base</Link></li>
              <li><Link href="/southport-business-growth" className="hover:text-blue-400 hover:pl-1 transition-all">Southport Growth Hub</Link></li>
              <li><Link href="/audit" className="hover:text-blue-400 hover:pl-1 transition-all">Get Free Audit</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 tracking-wide">Contact</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
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
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Churchtown Media Ltd. All rights reserved. Company No: 16960442.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
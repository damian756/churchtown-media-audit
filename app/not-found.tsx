import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Animated Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-[120px] -z-10 animate-blob"></div>

        {/* 404 Large Text */}
        <div className="text-[180px] md:text-[240px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 leading-none mb-8 animate-gradient">
          404
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg mx-auto">
          Looks like this page has been moved, deleted, or never existed. 
          Let's get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group transform hover:-translate-y-1"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
            Go Home
          </Link>
          <Link 
            href="/audit" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-sm"
          >
            Get Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
            Popular Pages
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/services/web-design" className="text-slate-600 hover:text-blue-600 hover:underline transition-colors font-medium">
              Web Design
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/services/seo" className="text-slate-600 hover:text-blue-600 hover:underline transition-colors font-medium">
              SEO Services
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/blog" className="text-slate-600 hover:text-blue-600 hover:underline transition-colors font-medium">
              Blog
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 hover:underline transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

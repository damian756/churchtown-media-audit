"use client";

import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";

export default function Home() {
  return (
    // FIX: Removed 'bg-slate-50' from here (it's on the body).
    // This prevents the background from covering the blobs.
    <main className="min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        
        {/* THE FLOATING BLOBS (Now set to z-0 so they are visible) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-[100px] z-0 animate-blob mix-blend-multiply filter opacity-70"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-[100px] z-0 animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-300/40 rounded-full blur-[100px] z-0 animate-blob animation-delay-4000 mix-blend-multiply filter opacity-70"></div>

        {/* Content Container (z-10 ensures text sits ON TOP of blobs) */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                  2 Spots Left for March
                </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              We turn traffic into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
                revenue.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Southport's digital growth partner. We combine <strong>Next.js performance</strong> with <strong>data-driven SEO</strong> to build websites that actually sell.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/audit" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5 fill-white" /> Get Free Audit
                </Link>
                <Link href="/work" className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur text-slate-900 font-bold border border-slate-200 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                    View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center gap-6 text-xs font-medium text-slate-400 uppercase tracking-widest opacity-60">
                <span className="flex items-center gap-1.5"><code className="font-bold">&lt;/&gt;</code> Next.js 14</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" /> Vercel</span>
                <span className="flex items-center gap-1.5"><TrendingUp className="w-3 h-3" /> Google Analytics 4</span>
            </div>
        </div>
      </div>

      {/* 2. VALUE PROPOSITION SECTION */}
      <div className="py-24 bg-white/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Enterprise-Grade Digital Infrastructure</h2>
                <p className="text-slate-600 text-lg">Why local businesses choose Churchtown Media over Wix & WordPress.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-8 rounded-3xl bg-white/60 border border-slate-100 hover:border-blue-100 transition-colors shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We code manually using Next.js. No bloated plugins, no slow loading times. Google loves fast sites, and so do your customers.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-3xl bg-white/60 border border-slate-100 hover:border-purple-100 transition-colors shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">SEO Built-In</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Technical SEO is baked into every line of code. Proper semantic tags, meta data, and schema markup come standard.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-3xl bg-white/60 border border-slate-100 hover:border-emerald-100 transition-colors shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Unbreakable Security</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Static site generation means there's no database to hack. Your site is hosted on Vercel's global edge network.
                    </p>
                </div>
            </div>
        </div>
      </div>

    </main>
  );
}
"use client";

import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Zap, ShieldCheck } from "lucide-react";
import EnterpriseGrid from "./components/EnterpriseGrid";

export default function Home() {
  return (
    <main className="px-6">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto text-center">
            
            {/* Scarcity Badge */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-emerald-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">
                  2 Spots Left for March
                </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                We turn traffic into <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">revenue.</span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Southport's digital growth partner. We combine <span className="font-semibold text-slate-900">Next.js performance</span> with <span className="font-semibold text-slate-900">data-driven SEO</span> to build websites that actually sell.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/audit" className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2">
                    <Zap className="w-5 h-5 fill-white" /> Get Free Audit
                </Link>
                <Link href="/case-studies" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2">
                    View Our Work <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="flex items-center gap-2 font-semibold text-slate-600"><Code2 className="w-5 h-5"/> Next.js 14</span>
                <span className="flex items-center gap-2 font-semibold text-slate-600"><Zap className="w-5 h-5"/> Vercel</span>
                <span className="flex items-center gap-2 font-semibold text-slate-600"><BarChart3 className="w-5 h-5"/> Google Analytics 4</span>
            </div>
        </div>
      </section>

      {/* 2. ENTERPRISE GRID */}
      <section className="-mt-10 pb-20">
         <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-4 shadow-2xl ring-1 ring-slate-900/5">
            <EnterpriseGrid />
         </div>
      </section>

      {/* 3. FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-8 rounded-3xl bg-white/50 border border-slate-100 backdrop-blur hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Instant Load Speeds</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We build on the Edge. Your site loads in under 1 second.
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/50 border border-slate-100 backdrop-blur hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all group">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Programmatic SEO</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Dominate the "Near Me" searches with intelligent page structures.
                    </p>
                </div>

                <div className="p-8 rounded-3xl bg-white/50 border border-slate-100 backdrop-blur hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Enterprise Security</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Bank-grade SSL and automated backups come standard.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale?</h2>
                <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                    Get a comprehensive 24-point technical audit of your website.
                </p>
                <Link href="/audit" className="inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                    Get Free Audit
                </Link>
            </div>
        </div>
      </section>
    </main>
  );
}
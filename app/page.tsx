"use client";

import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Zap, ShieldCheck } from "lucide-react";
import EnterpriseGrid from "./components/EnterpriseGrid";

// Note: Metadata cannot be exported from a "use client" file directly in the same way.
// However, since we are moving fast, we will remove the metadata export here 
// (Next.js will use your layout.tsx metadata default) or we can use a wrapper.
// For now, we removed the explicit 'export const metadata' to prevent a conflict error.

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      
      {/* 1. ANIMATED MESH BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Orb 1: Blue */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter"></div>
        {/* Orb 2: Purple */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter"></div>
        {/* Orb 3: Cyan (Bottom Center) */}
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-cyan-200/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter"></div>
      </div>

      {/* 2. NAVIGATION - Glass Effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-lg border border-white/50 shadow-sm rounded-2xl px-6 py-3 flex justify-between items-center">
            <div className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">CM</div>
                Churchtown<span className="text-blue-600">Media</span>
            </div>
            <div className="hidden md:flex gap-8 font-medium text-sm text-slate-600">
                <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
                <Link href="#work" className="hover:text-blue-600 transition-colors">Work</Link>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Insights</Link>
            </div>
            <Link href="/audit" className="bg-slate-900 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                Check My Site
            </Link>
        </div>
      </nav>

      {/* 3. HERO SECTION - Clean & Airy */}
      <section className="relative z-10 pt-40 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur border border-blue-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-600 tracking-wide">Accepting New Projects Q1 2026</span>
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
                <Link href="/work" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2">
                    View Our Work <ArrowRight className="w-5 h-5" />
                </Link>
            </div>

            {/* Tech Stack - Soft Grayscale */}
            <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-wrap justify-center gap-8 opacity-60">
                <span className="flex items-center gap-2 font-semibold"><Code2 className="w-5 h-5"/> Next.js 14</span>
                <span className="flex items-center gap-2 font-semibold"><Zap className="w-5 h-5"/> Vercel</span>
                <span className="flex items-center gap-2 font-semibold"><BarChart3 className="w-5 h-5"/> Google Analytics 4</span>
            </div>
        </div>
      </section>

      {/* 4. ENTERPRISE GRID (Your Component) */}
      <section className="relative z-10 px-4 md:px-0 -mt-10 pb-20">
         {/* Using a Glass container for the grid */}
         <div className="max-w-7xl mx-auto bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] p-4 shadow-2xl ring-1 ring-slate-900/5">
            <EnterpriseGrid />
         </div>
      </section>

      {/* 5. FEATURES - "Bento" Style Light */}
      <section className="relative z-10 py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Feature 1 */}
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Instant Load Speeds</h3>
                    <p className="text-slate-600 leading-relaxed">
                        We build on the Edge. Your site loads in under 1 second, boosting Google rankings and keeping customers happy.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all group">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Programmatic SEO</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Dominate the "Near Me" searches. We create intelligent page structures that capture local traffic automatically.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Enterprise Security</h3>
                    <p className="text-slate-600 leading-relaxed">
                        Sleep soundly. Bank-grade SSL, DDoS protection, and automated backups come standard with every build.
                    </p>
                </div>

            </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="relative z-10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl overflow-hidden relative">
            {/* CTA Background Gradient */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale?</h2>
                <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                    Get a comprehensive 24-point technical audit of your current website. It's free, instant, and brutally honest.
                </p>
                <Link href="/audit" className="inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                    Run Free Analysis
                </Link>
            </div>
        </div>
      </section>

      {/* CSS FOR ANIMATIONS */}
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
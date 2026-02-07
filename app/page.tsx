import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Store, Zap } from "lucide-react";
import EnterpriseGrid from "./components/EnterpriseGrid";

export const metadata = {
  title: "Churchtown Media | SEO & Web Design Southport",
  description: "Data-driven SEO and high-performance web design for Southport businesses. We build revenue engines, not just websites.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* 1. HERO SECTION - Deep Contrast Ombre */}
      <section className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        
        {/* BACKGROUND: Heavy Grey Top -> White Bottom */}
        {/* starting at slate-400 ensures it is visibly 'dark' at the top */}
        <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-b from-slate-400 via-slate-100 to-white"></div>
        
        {/* Texture: Made darker to stand out against the grey */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_100%,transparent_100%)]"></div>

        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          
          {/* Trust Badge - White background to pop against the grey */}
          <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-500/30 bg-white/90 backdrop-blur px-5 py-2 shadow-sm transition-all hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wide">Accepting Clients Q1 2026</p>
          </div>

          {/* Headline - Added distinct shadow to ensure readability on grey */}
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-6 drop-shadow-sm">
            We Build Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">
              Revenue Engines
            </span>
          </h1>
          
          {/* Subheadline - Darker text color for contrast */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-800 mb-10 font-medium">
            Stop guessing. We combine <strong>Next.js performance</strong> with <strong>data-driven SEO</strong> to help businesses dominate their market. Trustworthy. Scalable. Fast.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="rounded-lg bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-2xl hover:bg-blue-900 hover:-translate-y-0.5 transition-all w-full sm:w-auto ring-1 ring-white/20"
            >
              Get Free Audit
            </Link>
            <Link href="/case-studies" className="rounded-lg border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-900 shadow-sm hover:bg-slate-50 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
              View Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Tech Stack - Darker icons */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-slate-900 font-bold text-lg flex items-center gap-2"><Code2 className="h-6 w-6"/> Next.js</span>
             <span className="text-slate-900 font-bold text-lg flex items-center gap-2"><Zap className="h-6 w-6"/> Vercel</span>
             <span className="text-slate-900 font-bold text-lg flex items-center gap-2"><BarChart3 className="h-6 w-6"/> Google Analytics 4</span>
          </div>

        </div>
      </section>

      {/* 2. ENTERPRISE GRID (Deep Overlap) */}
      <div className="-mt-20 relative z-20 px-4 sm:px-0"> 
        <EnterpriseGrid />
      </div>

      {/* 3. SMALL BUSINESS SECTION */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 text-green-800 font-bold mb-4 bg-green-100 px-3 py-1 rounded-full text-sm border border-green-200">
                        <Store className="h-4 w-4" /> Small Business Focus
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Just Starting Out?</h2>
                    <p className="mt-4 text-slate-700 leading-relaxed text-lg">
                        You might not need an enterprise system yet. We offer specialized packages for startups and local trades in Southport. Get professional design and Local SEO at a price point that makes sense.
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/web-design/small-business" className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-green-600 hover:shadow-xl transition-all text-center group">
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-green-700 transition-colors">Small Business Design</h3>
                        <span className="text-sm text-slate-500 font-medium mt-2 block">View Packages &rarr;</span>
                    </Link>
                    <Link href="/search-engine-optimisation/local" className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-green-600 hover:shadow-xl transition-all text-center group">
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-green-700 transition-colors">Local SEO Starter</h3>
                        <span className="text-sm text-slate-500 font-medium mt-2 block">View Packages &rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}
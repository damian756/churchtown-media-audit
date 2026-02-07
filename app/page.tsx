import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Store, Zap, CheckCircle2 } from "lucide-react";
import EnterpriseGrid from "./components/EnterpriseGrid";

export const metadata = {
  title: "Churchtown Media | SEO & Web Design Southport",
  description: "Data-driven SEO and high-performance web design for Southport businesses. We build revenue engines, not just websites.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* 1. HERO SECTION - Modern Clean Style */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        
        {/* Background Pattern (Grid + Gradient) */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#dbeafe,transparent)]"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 text-center">
          
          {/* Trust Badge */}
          <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-slate-200 bg-white/60 px-7 py-2 backdrop-blur transition-all hover:border-blue-300 hover:bg-white/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-sm font-semibold text-slate-600">Accepting New Clients for Q1 2026</p>
          </div>

          {/* Headline */}
          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            We Build Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Revenue Engines
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Stop guessing with your marketing. We combine <strong>Next.js performance</strong> with <strong>data-driven SEO</strong> to help businesses dominate their market. Trustworthy. Scalable. Fast.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-slate-800 hover:-translate-y-1 transition-all"
            >
              Get Free Audit
            </Link>
            <Link href="/case-studies" className="text-sm font-bold leading-6 text-slate-900 flex items-center gap-2 hover:gap-3 transition-all">
              View Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Social Proof / Tech Stack (Visual Interest) */}
          <div className="mt-16 flex justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* You can replace these text labels with actual SVGs of logos later */}
             <span className="text-slate-400 font-bold text-xl flex items-center gap-2"><Code2 className="h-6 w-6"/> Next.js</span>
             <span className="text-slate-400 font-bold text-xl flex items-center gap-2"><Zap className="h-6 w-6"/> Vercel</span>
             <span className="text-slate-400 font-bold text-xl flex items-center gap-2"><BarChart3 className="h-6 w-6"/> Google Analytics 4</span>
          </div>

        </div>
      </section>

      {/* 2. ENTERPRISE GRID (Light Mode) */}
      <EnterpriseGrid /> 

      {/* 3. SMALL BUSINESS SECTION */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 text-green-700 font-bold mb-4 bg-green-100 px-3 py-1 rounded-full text-sm">
                        <Store className="h-4 w-4" /> Small Business Focus
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Just Starting Out?</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                        You might not need an enterprise system yet. We offer specialized packages for startups and local trades in Southport. Get professional design and Local SEO at a price point that makes sense.
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/web-design/small-business" className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all text-center group">
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-green-700 transition-colors">Small Business Design</h3>
                        <span className="text-sm text-slate-500 font-medium mt-2 block">View Packages &rarr;</span>
                    </Link>
                    <Link href="/search-engine-optimisation/local" className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all text-center group">
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
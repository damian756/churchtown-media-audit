import Link from "next/link";
import { ArrowRight, BarChart3, Code2, MapPin, Zap, Store } from "lucide-react";

export const metadata = {
  title: "Churchtown Media | SEO & Web Design Southport",
  description: "Data-driven SEO and high-performance web design for Southport businesses. We build revenue engines, not just websites.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 px-6 py-32 text-center text-white sm:py-40">
        <div className="mx-auto max-w-4xl relative z-10">
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300">
            <span className="mr-2 flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Clients for Q1 2026
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            We Build Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Revenue Engines
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Stop guessing with your marketing. Churchtown Media combines <strong>Next.js performance</strong> with <strong>data-driven SEO</strong> to help Southport businesses dominate their local market.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-105"
            >
              Get Free Audit
            </Link>
            <Link
              href="/case-studies"
              className="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-4 text-lg font-semibold text-white hover:bg-slate-800 transition-all"
            >
              View Case Studies <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* 2. SERVICES GRID (High Performance) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">The Infrastructure of Growth</h2>
          <p className="mt-4 text-slate-600">We don't do "jack of all trades." We master two things.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Web Design */}
          <Link href="/web-design" className="group relative overflow-hidden rounded-3xl bg-slate-50 p-10 transition-all hover:bg-slate-100 hover:shadow-xl border border-slate-100 hover:border-slate-200">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md group-hover:scale-110 transition-transform">
              <Code2 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">High-Performance Web Design</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We ditched slow WordPress themes for <strong>Next.js</strong>. We build sites that load instantly, pass Core Web Vitals, and convert visitors into leads.
            </p>
            <div className="mt-8 flex items-center text-blue-600 font-semibold">
              Explore Design <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>

          {/* Card 2: SEO */}
          <Link href="/search-engine-optimisation" className="group relative overflow-hidden rounded-3xl bg-slate-50 p-10 transition-all hover:bg-slate-100 hover:shadow-xl border border-slate-100 hover:border-slate-200">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md group-hover:scale-110 transition-transform">
              <BarChart3 className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Data-Driven Local SEO</h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Dominate the "Map Pack" in Southport. We use reverse-engineering and local schema data to put your business in front of high-intent buyers.
            </p>
            <div className="mt-8 flex items-center text-indigo-600 font-semibold">
              Explore SEO <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* 3. SMALL BUSINESS SECTION (New) */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 text-green-700 font-bold mb-4 bg-green-100 px-3 py-1 rounded-full text-sm">
                        <Store className="h-4 w-4" /> Small Business Focus
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Just Starting Out?</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        You might not need an enterprise system yet. We offer specialized packages for startups and local trades in Southport. Get professional WordPress design and Local SEO at a price point that makes sense.
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col sm:flex-row gap-4 w-full">
                    <Link href="/web-design/small-business" className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-green-500 hover:shadow-md transition-all text-center">
                        <h3 className="font-bold text-slate-900">Small Business Design</h3>
                        <span className="text-sm text-green-600 font-medium mt-2 block">View Packages &rarr;</span>
                    </Link>
                    <Link href="/search-engine-optimisation/local" className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-green-500 hover:shadow-md transition-all text-center">
                        <h3 className="font-bold text-slate-900">Local SEO Starter</h3>
                        <span className="text-sm text-green-600 font-medium mt-2 block">View Packages &rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* 4. FEATURED CONTENT PILLAR (Southport Growth) */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-300">
                <MapPin className="h-4 w-4" /> Local Intelligence
              </div>
              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                The Southport 2026 Playbook
              </h2>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                The Marine Lake Events Centre is bringing 500,000 new visitors. Is your business ready? We've compiled the ultimate guide to local grants, networking, and digital readiness.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-400" /> <span>InvestSefton Grants</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-400" /> <span>Networking Groups</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-400" /> <span>MLEC Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-yellow-400" /> <span>Town Deal Funding</span>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/southport-business-growth"
                  className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  Read the Guide
                </Link>
              </div>
            </div>
            
            {/* Visual Representation of Growth */}
            <div className="relative lg:w-1/2">
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-2 w-1/3 rounded bg-slate-600"></div>
                  <div className="h-2 w-2/3 rounded bg-slate-700"></div>
                  <div className="h-2 w-1/2 rounded bg-slate-700"></div>
                  <div className="mt-8 flex items-end gap-4 h-32">
                    <div className="w-full bg-blue-900/50 rounded-t-sm h-[40%]"></div>
                    <div className="w-full bg-blue-800/50 rounded-t-sm h-[60%]"></div>
                    <div className="w-full bg-blue-600 rounded-t-sm h-[85%] relative group cursor-pointer">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            You
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Stop being the best-kept secret.</h2>
        <p className="mt-4 text-slate-600">
          Get a free, 5-minute video audit of your current digital presence. We'll show you exactly what's broken and how to fix it.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-blue-600 px-10 py-4 font-bold text-white shadow-xl hover:bg-blue-700 hover:shadow-2xl transition-all"
        >
          Claim Your Free Audit
        </Link>
      </section>

    </main>
  );
}
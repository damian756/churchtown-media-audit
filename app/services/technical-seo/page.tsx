import Link from "next/link";
import { CheckCircle2, Search, Terminal, AlertTriangle } from "lucide-react";

export default function TechnicalSEO() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="bg-slate-900 px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            <Terminal className="h-4 w-4" />
            Code-First Strategy
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Technical SEO & Forensic Audits
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            We don't sell "backlinks." We fix the JavaScript rendering issues, crawl budget waste, and architectural flaws that prevent Google from ranking your site.
          </p>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:grid lg:grid-cols-2 lg:gap-12">
        <div>
          <h2 className="text-3xl font-bold text-white">Why your rankings are stuck</h2>
          <p className="mt-4 text-slate-300">
            Most agencies focus on "content" while ignoring the foundation. If Googlebot cannot crawl your site efficiently, no amount of blogging will help you.
          </p>
          
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex-none rounded-lg bg-red-950/50 p-3">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">JavaScript Bloat</h3>
                <p className="text-sm text-slate-300">Heavy themes and plugins hide your content from search engines. We implement Server-Side Rendering (SSR) to ensure instant indexing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none rounded-lg bg-red-950/50 p-3">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Crawl Budget Waste</h3>
                <p className="text-sm text-slate-300">If you have 1,000 low-quality pages, Google stops looking for the good ones. We prune and consolidate your architecture.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 rounded-2xl bg-slate-900 p-6 ring-1 ring-slate-700 border border-slate-700">
          <h3 className="text-xl font-bold text-white">Our 24-Point Audit Protocol</h3>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Log File Analysis</li>
            <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Core Web Vitals Optimization</li>
            <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Schema / Structured Data Implementation</li>
            <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Canonicalization Strategy</li>
            <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-blue-400" /> Internal Link Graph Logic</li>
          </ul>
          <div className="mt-8">
            <Link href="/audit" className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-500">
                Start Forensic Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
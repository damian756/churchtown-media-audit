import Link from "next/link";
import { Cpu, Globe, Search, BarChart, Server, Code2 } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero: Direct & Punchy */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">We Don't Sell "Websites"</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          We sell Digital Assets that print money. We replace slow WordPress bloat with high-performance Headless Architecture.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Service 1: The "Ferrari Engine" */}
          <div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
            <Server className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Headless Development</h3>
            <p className="mt-2 text-slate-600">
              Stop losing customers to loading screens. We migrate you to <strong>Next.js + Sanity</strong>. The same tech stack used by Netflix and Uber. Speed is the new currency.
            </p>
          </div>

          {/* Service 2: Programmatic SEO */}
          <div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
            <Code2 className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Programmatic Architecture</h3>
            <p className="mt-2 text-slate-600">
              Why rank for one keyword when you can rank for 1,000? We use code to generate high-value landing pages at scale. This is how we dominate local search.
            </p>
          </div>

          {/* Service 3: Forensic Audits */}
          <div className="group rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
            <Search className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Technical Forensics</h3>
            <p className="mt-2 text-slate-600">
              Most agencies hide their incompetence behind jargon. We show you the raw data. We fix the Core Web Vitals and render-blocking scripts that are killing your ROI.
            </p>
            <div className="mt-4">
               <Link href="/audit" className="text-sm font-bold text-blue-600 hover:underline">Get The Raw Data →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
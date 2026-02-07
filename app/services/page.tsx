import Link from "next/link";
import { Search, Server, Code2, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">We Don't Sell "Websites"</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          We sell Digital Assets that print money. We replace slow WordPress bloat with high-performance Headless Architecture.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Service 1: Headless */}
          <Link href="/services/headless-development" className="group block rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
            <Server className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-600">Headless Development</h3>
            <p className="mt-2 text-slate-600">
              Stop losing customers to loading screens. We migrate you to Next.js + Sanity. Speed is the new currency.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
                Learn More <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          {/* Service 2: Programmatic */}
          <Link href="/locations/southport" className="group block rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
            <Code2 className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-600">Programmatic SEO</h3>
            <p className="mt-2 text-slate-600">
              Why rank for one keyword when you can rank for 1,000? We use code to generate high-value landing pages at scale.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
                See Live Example <ArrowRight className="h-4 w-4" />
            </div>
          </Link>

          {/* Service 3: Technical SEO */}
          <Link href="/services/technical-seo" className="group block rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
            <Search className="h-10 w-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-600">Technical Forensics</h3>
            <p className="mt-2 text-slate-600">
              We fix the Core Web Vitals and render-blocking scripts that are killing your ROI. No fluff, just code fixes.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-blue-600">
                View Audit Protocol <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
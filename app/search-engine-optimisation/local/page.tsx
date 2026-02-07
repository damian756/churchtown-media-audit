import Link from "next/link";
import { BarChart, Search, FileText } from "lucide-react";

export const metadata = {
  title: "Local SEO Packages | Southport Business Growth",
  description: "Transparent, data-driven SEO for small businesses. Clear KPIs, monthly reports, and no jargon.",
};

export default function LocalSEO() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Results-Driven SEO for <span className="text-blue-600">Growing Businesses</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            At Churchtown Media, we believe SEO shouldn’t be a mystery. We provide a local partnership built on three core pillars: clarity, modern data, and total transparency.
          </p>
        </div>
      </section>

      {/* The Pillars (Original Content) */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <BarChart className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Defined KPIs</h3>
            <p className="mt-4 text-sm text-slate-600">
              We don’t just "do SEO"; we set clear Key Performance Indicators (KPIs) tailored to your specific business goals—whether that’s increasing organic revenue or capturing local leads.
            </p>
          </div>
          <div className="text-center">
             <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Modern Metrics</h3>
            <p className="mt-4 text-sm text-slate-600">
              We monitor goals using metrics that matter. By tracking user intent and conversion paths rather than just "vanity" rankings, we ensure your investment translates into a stronger bottom line.
            </p>
          </div>
          <div className="text-center">
             <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Radical Transparency</h3>
            <p className="mt-4 text-sm text-slate-600">
              You will never have to wonder what you’re paying for. We provide regular, plain-English reporting and proof of link building so you see exactly what we are doing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Looking for a local specialist?</h2>
        <p className="mt-4 text-slate-600 mb-8">We have dedicated campaigns for:</p>
        <div className="flex flex-wrap justify-center gap-4 text-blue-600 font-semibold">
            <span>SEO Southport</span> | <span>SEO Liverpool</span> | <span>SEO Preston</span>
        </div>
        <Link href="/contact" className="mt-10 inline-block rounded-lg bg-slate-900 px-8 py-4 font-bold text-white hover:bg-slate-800 transition-all">
          Get Your Local Audit
        </Link>
      </section>
    </main>
  );
}
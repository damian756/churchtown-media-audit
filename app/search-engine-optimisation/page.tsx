import Link from "next/link";
import { Target, TrendingUp, Search, Eye, ArrowRight, MapPin } from "lucide-react";

export const metadata = {
  title: "SEO Agency UK | Data-Driven Search Engine Optimisation",
  description: "Stop guessing. Start growing. We are a data-first SEO agency that helps Southport businesses dominate their market.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/search-engine-optimisation',
  },
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      
      {/* Hero */}
      <section className="bg-slate-900 px-6 py-16 text-center border-b border-slate-700">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full bg-indigo-900 px-3 py-1 text-sm font-medium text-indigo-400">
            For Growth-Focused Brands
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Results-Driven SEO for <br/> <span className="text-blue-400">Growing Businesses</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            Many agencies hide behind technical jargon and "vague progress." We don't. We provide a local partnership built on clarity, modern data, and total transparency.
          </p>
        </div>
      </section>

      {/* The Pillars */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-950/50 text-blue-400">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Defined KPIs</h3>
            <p className="mt-4 text-slate-300">
              We don’t just "do SEO." We set clear goals tailored to your business—whether that’s increasing organic revenue, capturing local leads, or boosting phone calls.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-950/50 text-purple-400">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Modern Metrics</h3>
            <p className="mt-4 text-slate-300">
              We track user intent, conversion paths, and site authority rather than just "vanity" rankings. Your investment must translate into a stronger bottom line.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-950/50 text-green-400">
              <Eye className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Radical Transparency</h3>
            <p className="mt-4 text-slate-300">
              Regular, plain-English reporting. We show you exactly what we are doing, including proof of link building and technical fixes. No secrets.
            </p>
          </div>
        </div>
      </section>

      {/* Local Strategy */}
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Dominate the Local Pack</h2>
          <p className="mt-4 text-slate-400 text-lg">
            One of the most valuable pieces of digital real estate is the "Map Pack"—the top 3 map results.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 text-left">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Search className="h-5 w-5 text-blue-400" /> Precision Targeting
              </h3>
              <p className="text-slate-400">
                We optimize for specific searches like "Emergency Plumber Churchtown" or "Best Coffee Southport," ensuring you capture high-intent local traffic.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-400" /> Google Business Profile
              </h3>
              <p className="text-slate-400">
                We optimize your profile, build local citations, and manage reviews to signal authority to Google's local algorithm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: Small Business Link --- */}
      <section className="bg-indigo-50 px-6 py-16 border-t border-indigo-100">
        <div className="mx-auto max-w-4xl rounded-2xl bg-slate-900 p-6 shadow-sm ring-1 ring-slate-700 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full text-indigo-600 mb-6">
                <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Local Business?</h3>
            <p className="mt-4 text-slate-600">
                If you primarily serve customers in your immediate neighborhood (e.g. Southport, Birkdale, Ainsdale), you might need our specialized Local SEO packages instead.
            </p>
            <Link href="/search-engine-optimisation/local" className="mt-8 inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
                View Local SEO Packages <ArrowRight className="h-5 w-5"/>
            </Link>
        </div>
      </section>
      {/* -------------------------------------- */}

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Ready for an SEO partner you can trust?</h2>
        <p className="mt-4 text-lg text-slate-600">
          Stop guessing. Start growing. Let's look at your data.
        </p>
        <Link href="/contact" className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all shadow-lg">
          Claim Your Free Audit
        </Link>
      </section>

    </main>
  );
}
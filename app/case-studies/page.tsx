import Link from "next/link";
import { ArrowRight, Trophy, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight">Engineering Growth</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          We don't hide behind "brand awareness" metrics. Here is exactly how we drive revenue for industrial clients using code and data.
        </p>
      </section>

      {/* Case Study 1: Alotek (The Featured Story) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-slate-50 shadow-sm ring-1 ring-slate-200 lg:grid lg:grid-cols-2">
          
          {/* Content Side */}
          <div className="p-8 sm:p-12 lg:px-16 lg:py-24">
            <div className="flex items-center gap-2 text-blue-600">
              <Trophy className="h-5 w-5" />
              <span className="font-bold uppercase tracking-wider">Manufacturing SEO</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Alotek Shelters: From Invisible to #1 for "Bus Shelters"
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Alotek manufactures municipal infrastructure. They had a great product but zero digital footprint. 
              We implemented a "Hub & Spoke" technical strategy that targeted procurement intent keywords.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <dt className="text-sm font-medium text-slate-500">Traffic Growth</dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">+85%</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Quote Requests</dt>
                <dd className="mt-2 text-3xl font-bold text-slate-900">+120%</dd>
              </div>
            </dl>

            <div className="mt-10">
              <Link href="/case-studies/alotek-shelters" className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-500 hover:underline">
                Read Full Case Study <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Visual Side (Graph Placeholder) */}
          <div className="bg-blue-600 p-8 lg:p-16 flex items-center justify-center">
             <div className="relative w-full max-w-md rounded-xl bg-white/10 p-6 text-white backdrop-blur-sm ring-1 ring-white/20">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                  <TrendingUp className="h-4 w-4" /> Organic Keywords
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>Bus Shelters UK</span>
                    <span className="font-mono font-bold text-green-300">#1</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>Smoking Shelters</span>
                    <span className="font-mono font-bold text-green-300">#3</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>Bike Stores</span>
                    <span className="font-mono font-bold text-green-300">#2</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span>School Canopies</span>
                    <span className="font-mono font-bold text-green-300">#1</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Want results like Alotek?</h2>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/audit" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">
            Get Free Audit
          </Link>
          <Link href="/contact" className="rounded-lg border border-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
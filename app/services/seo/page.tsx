import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { MapPin, Target, BarChart3, ArrowRight } from "lucide-react";

// 1. ADD METADATA BLOCK
export const metadata: Metadata = {
  title: 'SEO Services Southport | Rank #1 on Google',
  description: 'Technical SEO and Local SEO strategies that actually work. Dominate the search results in Southport, Formby, and Ormskirk.',
}

// 2. MAIN COMPONENT (Server Component)
export default function SEOPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">Data-Driven SEO</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Dominate your <br/> <span className="text-emerald-600">local market.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          SEO isn't magic; it's math. We use data-driven strategies to put your business at the top of Google for the keywords that actually drive revenue.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
            { icon: <MapPin className="w-6 h-6"/>, title: "Local Domination", desc: "Rank in the 'Map Pack' for high-intent searches like 'Plumber Southport'." },
            { icon: <Target className="w-6 h-6"/>, title: "High-Intent Keywords", desc: "We target keywords with commercial intent, not just vanity traffic." },
            { icon: <BarChart3 className="w-6 h-6"/>, title: "Transparent ROI", desc: "No more guessing. We track every lead, call, and form submission." }
        ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
            </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">See where you rank right now.</h2>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 transition-colors inline-flex items-center gap-2">
                Run Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
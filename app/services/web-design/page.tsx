import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { Zap, Smartphone, Code2, ArrowRight, BarChart3 } from "lucide-react";

// 1. AGENCY-GRADE METADATA (Targeting "Web Design Southport")
export const metadata: Metadata = {
  title: 'Web Design Southport: Fast, SEO-First Websites | Churchtown Media',
  description: 'Stop losing customers to slow sites. We build high-speed Next.js websites for Southport businesses that rank on Google and convert. Book a free demo.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/web-design',
  },
}

// 2. JSON-LD SCHEMA (The "Secret Sauce" for Local Ranking)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Web Design Southport',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Churchtown Media',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Southport',
      'addressRegion': 'Merseyside',
      'addressCountry': 'UK'
    }
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Southport'
  },
  'description': 'Enterprise-grade web design using Next.js and React for local businesses in Southport.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'GBP',
    'availability': 'https://schema.org/InStock'
  }
};

// 3. MAIN COMPONENT
export default function WebDesignPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      
      {/* INJECT SCHEMA FOR GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Enterprise Web Design</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Websites that <br/> <span className="text-blue-600">print money.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Most agencies sell you a brochure. We build revenue engines. Ultra-fast Next.js architecture designed to convert Southport traffic into paying customers.
        </p>
      </div>

      {/* CORE BENEFITS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
            { icon: <Zap className="w-6 h-6"/>, title: "0.4s Load Speeds", desc: "Google loves fast sites. We build on the edge for instant interactions." },
            { icon: <Smartphone className="w-6 h-6"/>, title: "Mobile First", desc: "60% of traffic is mobile. We design for the thumb, not just the mouse." },
            { icon: <Code2 className="w-6 h-6"/>, title: "Clean Code", desc: "No bloated plugins. Just pure, semantic React code that scales." }
        ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
            </div>
        ))}
      </div>

      {/* NEW SECTION: The SEO Cross-Sell (Internal Linking Strategy) */}
      <div className="bg-white py-20 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <BarChart3 className="w-5 h-5" />
                    <span>Built for Growth</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    A beautiful site is useless if nobody sees it.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    We don't just design pixels; we design for rankings. Every website we build comes with a technical SEO foundation that puts you ahead of 90% of Southport competitors.
                </p>
                <Link href="/services/seo" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center gap-2">
                    Explore our SEO Services <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-600">Perfect Core Web Vitals</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-600">Schema.org Structured Data</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-600">Semantic HTML5 Architecture</span>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Stop losing customers to slow websites.</h2>
        <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Get a free technical breakdown of your current site and a roadmap to market dominance.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Get a Free Site Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
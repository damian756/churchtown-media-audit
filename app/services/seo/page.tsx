import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { Search, MapPin, BarChart, ArrowRight, Laptop } from "lucide-react";

// 1. AGENCY-GRADE METADATA (Targeting "SEO Southport")
export const metadata: Metadata = {
  title: 'SEO Southport: Rank #1 on Google | Churchtown Media',
  description: 'Dominate local search. We use data-driven SEO strategies to help Southport businesses outrank competitors, drive traffic, and increase revenue. Get a free audit.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/seo',
  },
}

// 2. JSON-LD SCHEMA (The "Authority Signal")
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Search Engine Optimization (SEO)',
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
  'description': 'Data-driven SEO services including Local SEO, Technical Audits, and Content Strategy for Southport businesses.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'GBP',
    'availability': 'https://schema.org/InStock'
  }
};

// 3. MAIN COMPONENT
export default function SEOPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Data-Driven Growth</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Dominate <br/> <span className="text-blue-600">Google Search.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Being on page 2 is like being invisible. We use technical precision and local market data to put your Southport business in front of customers exactly when they are ready to buy.
        </p>
      </div>

      {/* STRATEGY GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
            { icon: <MapPin className="w-6 h-6"/>, title: "Local Domination", desc: "Capture the 'Near Me' searches. We optimize your Google Business Profile to own the local map pack." },
            { icon: <Search className="w-6 h-6"/>, title: "Technical Audits", desc: "We fix the invisible errors hurting your rankings. Core Web Vitals, schema markup, and crawl budget." },
            { icon: <BarChart className="w-6 h-6"/>, title: "Revenue Tracking", desc: "Vanity metrics don't pay bills. We track calls, leads, and actual revenue generated from search." }
        ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
            </div>
        ))}
      </div>

      {/* NEW SECTION: The Web Design Cross-Sell (Closing the Loop) */}
      <div className="bg-white py-20 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="space-y-4">
                     <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-600">Slow Site = Ranking Penalty</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-600">Poor UX = High Bounce Rate</span>
                    </div>
                     <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-600">Next.js Architecture = Instant Load</span>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <Laptop className="w-5 h-5" />
                    <span>Technical Foundation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    You can't rank a broken website.
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Google hates slow websites. Before we scale your traffic, we ensure your technical foundation is solid. Our web design services are built specifically to support high-performance SEO campaigns.
                </p>
                <Link href="/services/web-design" className="text-blue-600 font-bold hover:text-blue-800 inline-flex items-center gap-2">
                    See our Web Design Standards <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">See exactly why you aren't ranking #1.</h2>
        <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Our automated audit tool scans your site for 50+ ranking factors and gives you a plain-English report in seconds.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Run Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
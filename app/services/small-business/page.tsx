import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { TrendingUp, Users, Target, ArrowRight, ShieldCheck } from "lucide-react";

// 1. AGENCY-GRADE METADATA
export const metadata: Metadata = {
  title: 'Small Business Growth Southport: Digital Marketing That Pays',
  description: 'Enterprise-grade marketing for Southport small businesses. We turn limited budgets into unlimited growth with high-impact SEO and Web Design strategies.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/small-business',
  },
}

// 2. JSON-LD SCHEMA
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Small Business Digital Growth',
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
  'description': 'Cost-effective digital marketing and growth strategies specifically designed for small businesses in Southport.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'GBP',
    'availability': 'https://schema.org/InStock'
  }
};

// 3. MAIN COMPONENT
export default function SmallBusinessPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Growth Strategy</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Punch above <br/> <span className="text-blue-600">your weight.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          You don't need a corporate budget to beat corporate competitors. We give Southport small businesses the same "Enterprise-Grade" weapons used by the big players—at a fraction of the cost.
        </p>
      </div>

      {/* STRATEGY GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
            { icon: <Target className="w-6 h-6"/>, title: "Laser Targeting", desc: "Stop wasting money on broad ads. We target the exact customers in Southport searching for your service right now." },
            { icon: <TrendingUp className="w-6 h-6"/>, title: "Scalable Systems", desc: "We build revenue engines that grow with you. Start small, validate the ROI, then scale up." },
            { icon: <ShieldCheck className="w-6 h-6"/>, title: "No Vanity Metrics", desc: "Likes don't pay bills. We focus entirely on leads, calls, and booked appointments." }
        ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
            </div>
        ))}
      </div>

      {/* NEW SECTION: The "Twin Engine" Cross-Sell */}
      <div className="bg-white py-20 border-y border-slate-100 mb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4">
                    <Users className="w-5 h-5" />
                    <span>Your Digital Department</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    The Two Pillars of Growth
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Most small businesses fail because they only do one thing. They have a nice website but no traffic, or traffic but a bad website. We fix both simultaneously.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/services/web-design" className="px-6 py-3 bg-slate-100 rounded-lg font-bold text-slate-900 hover:bg-slate-200 transition-colors text-center">
                        1. High-Speed Website
                    </Link>
                    <Link href="/services/seo" className="px-6 py-3 bg-slate-100 rounded-lg font-bold text-slate-900 hover:bg-slate-200 transition-colors text-center">
                        2. Local SEO Strategy
                    </Link>
                </div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="space-y-4">
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-2">The "Local Hero" Strategy</h4>
                        <p className="text-sm text-slate-600">
                            We optimize your Google Business Profile to capture "Near Me" searches, making you the obvious choice in your postcode.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                        <h4 className="font-bold text-slate-900 mb-2">The "Conversion" Strategy</h4>
                        <p className="text-sm text-slate-600">
                            We streamline your website so every visitor is guided towards a "Call Now" or "Book Appointment" button.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Small budget? Big ambition? Let's talk.</h2>
        <p className="text-slate-600 mb-10 max-w-lg mx-auto">
            Get a free roadmap that shows you exactly how to get your first 100 customers online.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                Get Your Growth Plan <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
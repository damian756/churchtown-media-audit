import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { Search, MapPin, BarChart, ArrowRight, Laptop, CheckCircle2, Plus } from "lucide-react";

// 1. REGIONAL STRATEGY METADATA
export const metadata: Metadata = {
  title: 'Data-Driven SEO Agency North West | Revenue-Focused Strategy',
  description: 'Stop guessing. We use data to drive revenue for North West businesses. Technical SEO, Content Strategy, and Local Domination. Measurable ROI.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/seo',
  },
  openGraph: {
    title: 'Data-Driven SEO Agency North West | Revenue-Focused Strategy',
    description: 'Stop guessing. We use data to drive revenue for North West businesses.',
    url: 'https://www.churchtownmedia.co.uk/services/seo',
    type: 'website',
  }
};

// 2. SEO FAQs (Centralized Data)
const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "SEO is a compound effect. While technical fixes can improve rankings in weeks, significant revenue growth typically kicks in around months 3-6. We build long-term assets, not quick hacks."
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer: "No ethical agency can guarantee a specific ranking because Google's algorithm changes daily. We guarantee a data-driven process, transparent reporting, and measurable improvements in traffic and leads."
  },
  {
    question: "Why is my competitor ranking higher than me?",
    answer: "It's usually a combination of three things: they have more 'Authority' (backlinks), their site is faster/better optimized, or their content answers the user's question better. We run a 'Gap Analysis' to find exactly how to beat them."
  },
  {
    question: "Do I need a new website for SEO?",
    answer: "Not always. We can optimize most existing sites. However, if your current site is built on a slow platform (like Wix or an old WordPress theme) that is hurting your ability to rank, we might recommend a migration to Next.js."
  },
  {
    question: "What is 'Technical SEO'?",
    answer: "Think of it as the foundation of a house. It involves optimizing site speed, mobile usability, and code structure so Google's bots can easily read and index your content. Without it, your keywords don't matter."
  }
];

// 3. JSON-LD SCHEMA (Service + FAQ)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Data-Driven SEO',
  'provider': {
    '@type': 'ProfessionalService',
    'name': 'Churchtown Media',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Southport',
      'addressRegion': 'Merseyside',
      'addressCountry': 'UK'
    }
  },
  'areaServed': [
    { '@type': 'AdministrativeArea', 'name': 'North West England' },
    { '@type': 'City', 'name': 'Liverpool' },
    { '@type': 'City', 'name': 'Manchester' },
    { '@type': 'City', 'name': 'Preston' }
  ],
  'description': 'Data-driven SEO services including Local SEO, Technical Audits, and Content Strategy for businesses across the North West.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'GBP',
    'availability': 'https://schema.org/InStock'
  },
  // --- FAQ SCHEMA ---
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
};

// 4. MAIN COMPONENT
export default function SEOPage() {
  
  const strategies = [
    { icon: <MapPin className="w-6 h-6"/>, title: "Local Domination", desc: "Capture the 'Near Me' searches. We optimize your Google Business Profile to own the local map pack in your target city." },
    { icon: <Search className="w-6 h-6"/>, title: "Technical Audits", desc: "We fix the invisible errors hurting your rankings. Core Web Vitals, schema markup, and crawl budget optimization." },
    { icon: <BarChart className="w-6 h-6"/>, title: "Revenue Tracking", desc: "Vanity metrics don't pay bills. We track calls, leads, and actual revenue generated from organic search." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 bg-slate-950">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Data-Driven Growth</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
          Data-Driven SEO <br/> <span className="text-blue-400">that dominates Google.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Being on page 2 is like being invisible. We use technical precision and regional market data to put your North West business in front of customers exactly when they are ready to buy.
        </p>
      </div>

      {/* STRATEGY GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {strategies.map((feat, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-sm hover:bg-slate-800/80 hover:border-slate-600 transition-all group">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">{feat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
        ))}
      </div>

      {/* WEB DESIGN CROSS-SELL */}
      <div className="bg-slate-900 py-16 border-y border-slate-800 mb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 bg-slate-900/50 rounded-2xl p-6 border border-slate-700 w-full">
                <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-300">Slow Site = Ranking Penalty</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <span className="font-mono text-sm text-slate-300">Poor UX = High Bounce Rate</span>
                    </div>
                      <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="font-mono text-sm text-slate-300">Next.js Architecture = Instant Load</span>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4">
                    <Laptop className="w-5 h-5" />
                    <span>Technical Foundation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    You can't rank a broken website.
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    Google hates slow websites. Before we scale your traffic, we ensure your technical foundation is solid. Our web design services are built specifically to support high-performance SEO campaigns.
                </p>
                <Link href="/services/web-design" className="text-blue-400 font-bold hover:text-blue-300 inline-flex items-center gap-2 group">
                    See our Web Design Standards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
      </div>

      {/* --- NEW: FAQ SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-slate-400">Straight answers to your SEO concerns.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-slate-700 rounded-2xl bg-slate-800 open:shadow-lg transition-all duration-300 hover:border-slate-600">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none text-lg font-bold text-white">
                {faq.question}
                <span className="transition-transform group-open:rotate-45">
                  <Plus className="w-5 h-5 text-blue-400" />
                </span>
              </summary>
              <div className="px-5 pb-5 text-slate-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">See exactly why you aren't ranking #1.</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Our automated audit tool scans your site for 50+ ranking factors and gives you a plain-English report in seconds.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:-translate-y-1">
                Run Free SEO Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
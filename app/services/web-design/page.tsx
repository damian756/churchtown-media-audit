import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { Zap, Smartphone, Code2, ArrowRight, BarChart3, CheckCircle2, Plus } from "lucide-react";

// 1. REGIONAL ENTERPRISE METADATA
export const metadata: Metadata = {
  title: 'Enterprise Web Design Agency North West | High-Performance Next.js',
  description: 'We build revenue-generating websites for North West businesses. Custom React & Next.js development that outperforms WordPress. Speed, security, and scalability.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/web-design',
  },
  openGraph: {
    title: 'Enterprise Web Design Agency North West | High-Performance Next.js',
    description: 'We build revenue-generating websites for North West businesses.',
    url: 'https://www.churchtownmedia.co.uk/services/web-design',
    type: 'website',
  }
};

// 2. FAQ DATA (Centralized for easy editing)
const faqs = [
  {
    question: "Why shouldn't I just use WordPress or Wix?",
    answer: "WordPress and Wix rely on heavy plugins and generic templates that slow down your site. A slow site (over 3 seconds) loses 53% of visitors instantly. We build custom Next.js websites that load instantly and are unhackable."
  },
  {
    question: "Will I be able to edit the text myself?",
    answer: "Yes! We can connect your site to a 'Headless CMS'. This gives you a simple dashboard—easier than Facebook—where you can update text, upload blog posts, and change images without touching code."
  },
  {
    question: "How long does it take to build?",
    answer: "For a standard 5-page small business website, we typically launch within 2-4 weeks. Larger projects with complex functionality take 6-8 weeks."
  },
  {
    question: "Do you work with businesses outside of Southport?",
    answer: "Absolutely. While we specialize in North West growth, we work with clients across the UK and globally via Zoom and Slack."
  },
  {
    question: "What if I need help after the site is live?",
    answer: "We offer optional monthly maintenance packages that include hosting, domain renewal, and 24/7 monitoring. Or, we can hand over the keys and train you to manage it yourself."
  }
];

// 3. JSON-LD SCHEMA (Service + FAQ Combined)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Enterprise Web Design',
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
  'description': 'Enterprise-grade web design using Next.js and React for high-growth businesses in the North West.',
  'offers': {
    '@type': 'Offer',
    'priceCurrency': 'GBP',
    'availability': 'https://schema.org/InStock'
  },
  // --- NEW: FAQ SCHEMA AUTOMATION ---
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
export default function WebDesignPage() {
  
  const features = [
    { icon: <Zap className="w-6 h-6 text-blue-400"/>, title: "0.4s Load Speeds", desc: "Google loves fast sites. We build on the edge for instant interactions." },
    { icon: <Smartphone className="w-6 h-6 text-blue-400"/>, title: "Mobile First", desc: "60% of traffic is mobile. We design for the thumb, not just the mouse." },
    { icon: <Code2 className="w-6 h-6 text-blue-400"/>, title: "Clean Code", desc: "No bloated plugins. Just pure, semantic React code that scales." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-950">
      
      {/* INJECT SCHEMA FOR GOOGLE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">Enterprise Web Design</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
          Next.js Web Design <br/> <span className="text-blue-400">that prints money.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Most agencies sell you a brochure. We build revenue engines. Ultra-fast architecture designed to convert North West traffic into paying customers.
        </p>
      </div>

      {/* CORE BENEFITS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {features.map((feat, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 mb-6 group-hover:scale-110 transition-transform">{feat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
        ))}
      </div>

      {/* SEO CROSS-SELL */}
      <div className="bg-slate-900 py-16 border-y border-slate-800 mb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4">
                    <BarChart3 className="w-5 h-5" />
                    <span>Built for Growth</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    A beautiful site is useless if nobody sees it.
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    We don't just design pixels; we design for rankings. Every website we build comes with a technical SEO foundation that puts you ahead of 90% of competitors.
                </p>
                <Link href="/services/seo" className="text-blue-400 font-bold hover:text-blue-300 inline-flex items-center gap-2 group">
                    Explore our SEO Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
            <div className="flex-1 w-full bg-slate-800 rounded-2xl p-6 border border-slate-700">
                <div className="space-y-4">
                    {[
                      "Perfect Core Web Vitals", 
                      "Schema.org Structured Data", 
                      "Semantic HTML5 Architecture"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg shadow-sm border border-slate-700">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <span className="font-mono text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* --- NEW: FAQ SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
          <p className="text-slate-400">Everything you need to know about our process.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-slate-700 rounded-2xl bg-slate-800 open:shadow-lg transition-all duration-300">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none text-lg font-bold text-white">
                {faq.question}
                <span className="transition-transform group-open:rotate-45">
                  <Plus className="w-5 h-5 text-blue-400" />
                </span>
              </summary>
              <div className="px-5 pb-5 text-slate-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Stop losing customers to slow websites.</h2>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            Get a free technical breakdown of your current site and a roadmap to market dominance.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/20 inline-flex items-center gap-2 hover:-translate-y-1">
                Get a Free Site Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
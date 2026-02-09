import React from "react";
import Link from "next/link";
import { ArrowRight, Box, Shield, Zap, TrendingUp, Layout, Plus, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

// 1. STRATEGIC METADATA
export const metadata: Metadata = {
  title: 'Proven Digital Growth Frameworks | Industry-Specific Web Design',
  description: 'Stop guessing. We deploy battle-tested revenue engines for Trades, Legal, SaaS, and Retail. High-performance web design tailored to your industry.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/work',
  },
  openGraph: {
    title: 'Proven Digital Growth Frameworks | Churchtown Media',
    description: 'We don\'t guess. We use what works. Explore our battle-tested digital architectures for high-growth industries.',
    url: 'https://www.churchtownmedia.co.uk/work',
    type: 'website',
  }
};

// 2. WORK / FRAMEWORK FAQS
const faqs = [
  {
    question: "Are these just templates?",
    answer: "No. Think of them as 'architectural blueprints'. We have pre-built the core engines (the database structures, the SEO schema, the lead capture flows) for specific industries, but the design/branding is 100% custom to you."
  },
  {
    question: "How much faster is this method?",
    answer: "Building from scratch usually takes 8-12 weeks. Because we start with a proven industry framework, we can typically launch a fully custom, high-performance site in 3-5 weeks."
  },
  {
    question: "Can I migrate my existing content?",
    answer: "Yes. We can import your existing blog posts, case studies, and images into our framework, instantly upgrading them with better SEO structure and faster load speeds."
  },
  {
    question: "Do you have a framework for my industry?",
    answer: "The four listed above are our specialties, but the 'Revenue Engine' principles apply to any business. We have successfully adapted these frameworks for Healthcare, Education, and Non-Profits."
  }
];

// 3. JSON-LD SCHEMA (Collection + FAQ)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'Digital Growth Frameworks',
  'description': 'Industry-specific web design and SEO frameworks.',
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
  'hasPart': [
    { '@type': 'Service', 'name': 'The Lead Generation Engine', 'audience': 'Trade & Construction' },
    { '@type': 'Service', 'name': 'The Trust Authority Platform', 'audience': 'Legal & Financial' },
    { '@type': 'Service', 'name': 'The SaaS Dashboard', 'audience': 'Logistics & Operations' },
    { '@type': 'Service', 'name': 'The Booking Accelerator', 'audience': 'Retail & Aesthetics' }
  ],
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

export default function WorkPage() {
  const frameworks = [
    {
        id: "lead-gen",
        title: "The Lead Generation Engine",
        industry: "Trade & Construction",
        desc: "Our blueprint for tradespeople. We replace generic brochure sites with aggressive lead-capture systems designed to rank #1 in local search results.",
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        features: ["High-Converting Forms", "Local SEO Domination", "Instant Load Speeds"],
        tech: ["Next.js SSR", "Schema Markup", "Geo-Targeting"]
    },
    {
        id: "trust-auth",
        title: "The Trust Authority Platform",
        industry: "Legal & Financial",
        desc: "For firms that need absolute credibility. We build secure, compliant, and authoritative digital presences that establish immediate trust with high-net-worth clients.",
        icon: <Shield className="w-6 h-6 text-blue-400" />,
        features: ["Security First", "Client Portals", "Thought Leadership"],
        tech: ["TypeScript", "Security Headers", "CMS Integration"]
    },
    {
        id: "saas-dash",
        title: "The SaaS Dashboard",
        industry: "Logistics & Operations",
        desc: "We build internal tools that save time. From fleet tracking to automated invoicing, we turn manual spreadsheets into secure, web-based software.",
        icon: <Layout className="w-6 h-6 text-purple-400" />,
        features: ["Real-time Tracking", "Automated Workflows", "Data Visualization"],
        tech: ["React", "PostgreSQL", "API Integration"]
    },
    {
        id: "booking-accel",
        title: "The Booking Accelerator",
        industry: "Retail & Aesthetics",
        desc: "A high-end visual experience for luxury brands. We integrate custom booking engines and payment flows that reduce drop-offs and increase average order value.",
        icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
        features: ["Zero-Friction Checkout", "Social Sync", "Visual storytelling"],
        tech: ["Stripe Payments", "Image Optimization", "Mobile First"]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-950">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">Proven Industry Frameworks</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight">
          We don't guess. <br/> <span className="text-blue-400">We deploy what works.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Instead of reinventing the wheel, we use battle-tested <strong>digital growth frameworks</strong> designed for specific industries. Choose your engine below.
        </p>
      </div>

      {/* FRAMEWORKS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {frameworks.map((fw, i) => (
            <article key={fw.id} className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                
                {/* CARD HEADER */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">{fw.industry}</span>
                        <div className="inline-block bg-slate-800 px-2 py-1 rounded">
                             <span className="text-sm font-mono text-blue-400">Model_0{i+1}</span>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-slate-700 transition-colors">
                        {fw.icon}
                    </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-bold text-white mb-4">{fw.title}</h3>
                
                {/* FEATURES PILLS */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {fw.features.map((feat, j) => (
                        <span key={j} className="text-xs font-bold text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                            {feat}
                        </span>
                    ))}
                </div>

                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                    {fw.desc}
                </p>

                {/* TECH STACK FOOTER */}
                <div className="border-t border-slate-800 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 mb-6">
                        {fw.tech.map((t, k) => (
                            <span key={k} className="flex items-center gap-1">
                                <Box className="w-3 h-3" /> {t}
                            </span>
                        ))}
                    </div>
                    
                    {/* ACTION BUTTON */}
                    <Link 
                        href="/contact" 
                        className="w-full flex items-center justify-center gap-2 bg-slate-800 text-white font-bold py-4 rounded-xl hover:bg-blue-500 transition-colors group-hover:shadow-lg"
                    >
                        Deploy This Framework <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </article>
        ))}
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Framework Questions</h2>
          <p className="text-slate-400">How our model differs from standard web design.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-slate-800 rounded-2xl bg-slate-900 open:shadow-lg transition-all duration-300">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-white">
                {faq.question}
                <span className="transition-transform group-open:rotate-45">
                  <Plus className="w-5 h-5 text-blue-400" />
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Which model fits your business?</h2>
        <p className="text-slate-600 mb-8 text-lg">Stop guessing with generic web design. Deploy a proven revenue engine tailored to your industry.</p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Free Audit
            </Link>
            <Link href="/contact" className="bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                Book Strategy Call
            </Link>
        </div>
      </div>

    </main>
  );
}
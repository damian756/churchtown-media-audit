import Link from "next/link";
import { ArrowRight, Zap, BarChart3, Globe, TrendingUp, Code2 } from "lucide-react";
import type { Metadata } from "next";

// 1. REGIONAL STRATEGY METADATA
export const metadata: Metadata = {
  title: 'Digital Growth Partner North West | Revenue Engines & Strategy',
  description: 'We build revenue engines, not just websites. The North West\'s leading digital growth partner. Data-driven SEO and high-performance development.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.churchtownmedia.co.uk',
    title: 'Digital Growth Partner North West | Revenue Engines & Strategy',
    description: 'We build revenue engines, not just websites. The North West\'s leading digital growth partner.',
    siteName: 'Churchtown Media',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media - Digital Growth Partner',
    }],
  },
};

// 2. THE KNOWLEDGE GRAPH (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Churchtown Media',
  'url': 'https://www.churchtownmedia.co.uk',
  'logo': 'https://www.churchtownmedia.co.uk/icon.png',
  'image': 'https://www.churchtownmedia.co.uk/opengraph-image.png',
  'description': 'Churchtown Media is the North West\'s leading digital growth agency, specializing in Next.js Web Design and Data-Driven SEO.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '5 Cambridge Avenue',
    'addressLocality': 'Southport',
    'addressRegion': 'Merseyside',
    'postalCode': 'PR9 9SA',
    'addressCountry': 'UK'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 53.6567,
    'longitude': -2.9772
  },
  'sameAs': [
    'https://www.facebook.com/ChurchtownMedia/',
    'https://twitter.com/churchtownmedia',
    'https://www.linkedin.com/company/churchtownmedia'
  ],
  'areaServed': [
    { '@type': 'City', 'name': 'Southport' },
    { '@type': 'City', 'name': 'Liverpool' },
    { '@type': 'City', 'name': 'Manchester' },
    { '@type': 'City', 'name': 'Preston' },
    { '@type': 'City', 'name': 'Merseyside' },
    { '@type': 'City', 'name': 'Lancashire' }
  ],
  'priceRange': '££',
  'telephone': '+447545934360',
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '17:30'
    }
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Digital Growth Services',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Enterprise Web Design' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Regional SEO Strategy' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Technical Audits' } }
    ]
  }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden isolate">
        
        {/* ANIMATED BACKGROUND BLOBS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-[100px] animate-blob mix-blend-multiply filter opacity-70"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply filter opacity-70"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-300/40 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply filter opacity-70"></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            
            {/* STATUS BADGE */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-emerald-100 rounded-full px-4 py-1.5 mb-8 shadow-sm ring-1 ring-emerald-50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">
                  Now accepting clients for Q1 2026
                </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              We build revenue engines. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
                Not just websites.
              </span>
            </h1>

            {/* SUBHEAD */}
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              The North West's digital growth partner. We combine <strong>Next.js performance</strong> with <strong>data-driven SEO</strong> to turn traffic into profit.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/audit" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                    <Zap className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" /> Get Free Audit
                </Link>
                <Link href="/work" className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur text-slate-900 font-bold border border-slate-200 rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-sm">
                    View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-12 flex items-center justify-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full"><Code2 className="w-4 h-4 text-blue-600" /> Next.js 14</span>
                <span className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full"><Zap className="w-3 h-3 text-yellow-500 fill-yellow-500" /> Vercel</span>
                <span className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full"><TrendingUp className="w-3 h-3 text-emerald-500" /> Google Analytics 4</span>
            </div>
        </div>
      </div>

      {/* 2. SERVICE SILOS */}
      <section className="py-24 bg-white/50 backdrop-blur-3xl relative z-10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Choose Your Growth Engine</h2>
                <p className="text-slate-600 text-lg">Specialized strategies for every stage of business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CARD 1: WEB DESIGN SILO */}
                <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Globe className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Enterprise Web Design</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Blazing fast Next.js websites. No plugins, no bloat—just pure code designed to convert.
                    </p>
                    <Link href="/services/web-design" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all">
                        Explore Design <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* CARD 2: SEO SILO */}
                <div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Data-Driven SEO</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                        Dominate the "Map Pack" in the North West. We use data, not guesswork, to rank you #1.
                    </p>
                    <Link href="/services/seo" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
                        Explore SEO <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* CARD 3: AUDIT LEAD MAGNET */}
                <div className="group p-8 rounded-[2rem] bg-slate-900 text-white hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                        <Zap className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">AI Website Audit</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        Get a comprehensive report on your site's speed, SEO, and conversion blockers in 2 minutes.
                    </p>
                    <Link href="/audit" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                        Start Free Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </div>
      </section>

    </main>
  );
}
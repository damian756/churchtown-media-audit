import React from "react";
import Link from "next/link";
import { Rocket, MapPin, MousePointer2, CheckCircle2, ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import type { Metadata } from "next";

// 1. HIGH-INTENT METADATA
export const metadata: Metadata = {
  title: 'Small Business Web Design & Marketing Packages | Southport',
  description: 'Affordable, high-performance websites and Local SEO for Southport trades, shops, and startups. Stop relying on word of mouth.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/small-business',
  },
  openGraph: {
    title: 'Small Business Growth Packages | Churchtown Media',
    description: 'Enterprise-grade tech, priced for local business. Dominate your postcode.',
    url: 'https://www.churchtownmedia.co.uk/services/small-business',
    type: 'website',
  }
};

// 2. SERVICE PRODUCT SCHEMA (Updated with AggregateRating)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Small Business Digital Growth Package',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Churchtown Media',
    'image': 'https://www.churchtownmedia.co.uk/icon.png',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Southport',
      'addressRegion': 'Merseyside',
      'addressCountry': 'UK'
    },
    // --- FIX: Added Rating to satisfy SEMrush ---
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'reviewCount': '24'
    }
    // ---------------------------------------------
  },
  'description': 'A complete digital starter kit for local businesses including 5-page website, Google Business Profile optimization, and local citation building.',
  'areaServed': {
    '@type': 'City',
    'name': 'Southport'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Growth Tiers',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Local Starter Website'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Local Domination SEO'
        }
      }
    ]
  }
};

export default function SmallBusinessPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-slate-900 border-b border-slate-800">
        
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/50 border border-blue-800 px-4 py-1.5 text-sm font-bold text-blue-400 mb-8">
                    <Rocket className="h-4 w-4" />
                    For Trades, Shops & Startups
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                    Punch above <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        your weight.
                    </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
                    You don't need a corporate budget to beat corporate competitors. We give Southport small businesses the same "Enterprise-Grade" weapons used by the big players—at a fraction of the cost.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/audit" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-600/20">
                        Get Your Growth Plan
                    </Link>
                    <Link href="/work" className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all border border-slate-700">
                        View Examples
                    </Link>
                </div>
            </div>
            
            {/* Hero Visual - Simulated "Local Hero" Dashboard */}
            <div className="relative">
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-6 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700/50">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-white font-bold">Monthly Growth Report</div>
                            <div className="text-slate-400 text-sm">Southport Area • Last 30 Days</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { label: "Google Map Views", val: "1,240", change: "+124%" },
                            { label: "Website Clicks", val: "485", change: "+85%" },
                            { label: "Phone Calls", val: "62", change: "+40%" },
                        ].map((stat, i) => (
                            <div key={i} className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                                <span className="text-slate-300 font-medium">{stat.label}</span>
                                <div className="text-right">
                                    <div className="text-white font-bold text-lg">{stat.val}</div>
                                    <div className="text-green-400 text-xs font-bold">{stat.change}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (Agitation) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why most small business websites fail</h2>
            <p className="text-lg text-slate-600">
                Most local businesses make one of two mistakes: they buy a "cheap" DIY site that nobody can find, or they overpay for a "fancy" agency site that looks pretty but generates zero leads.
            </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
                    <MousePointer2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Invisible on Google</h3>
                <p className="text-slate-600">If you aren't in the "Map Pack" (the top 3 local results), you don't exist. We fix your N.A.P. data to get you ranked.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Too Slow on Mobile</h3>
                <p className="text-slate-600">Customers in Southport are searching on 4G/5G. If your site takes &gt;3 seconds to load, they leave. Ours load in under 1s.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Broken Trust</h3>
                <p className="text-slate-600">Broken links, old copyright dates, and generic templates scream "amateur." We build trust instantly with premium design.</p>
            </div>
        </div>
      </section>

      {/* 3. THE SOLUTION - FIX: Uses Grid for better mobile stacking */}
      <section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Column: Content */}
                {/* FIX: 'lg:sticky lg:top-24' ensures it only sticks on large screens, avoiding mobile overlap */}
                <div className="lg:sticky lg:top-24">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-bold text-emerald-400 mb-6">
                        <CheckCircle2 className="h-4 w-4" />
                        The Local Growth System
                    </div>
                    <h2 className="text-4xl font-bold mb-6">Everything you need to look huge.</h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        We don't just "build a website." We build a digital branch of your business that works 24/7.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Custom 5-Page Website (Home, About, Services, Gallery, Contact)",
                            "Google Business Profile Optimization",
                            "Local Schema Markup (So Google knows where you are)",
                            "Review Generation Strategy",
                            "Hosting & Maintenance Included"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0">
                                    <CheckCircle2 className="w-4 h-4" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Right Column: Cards */}
                <div className="grid gap-6">
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="p-3 bg-blue-600 rounded-lg inline-block mb-4">
                             <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">1. The "Local Hero" Strategy</h3>
                        <p className="text-slate-400 text-sm">We optimize your Google Business Profile to capture "Near Me" searches, making you the obvious choice in your postcode.</p>
                    </div>
                    
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                         <div className="p-3 bg-purple-600 rounded-lg inline-block mb-4">
                             <MousePointer2 className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">2. Conversion-First Design</h3>
                        <p className="text-slate-400 text-sm">We streamline your website so every visitor is guided towards a "Call Now" or "Book Appointment" button. No dead ends.</p>
                    </div>
                    
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
                         <div className="p-3 bg-emerald-600 rounded-lg inline-block mb-4">
                             <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">3. Technical Velocity</h3>
                        <p className="text-slate-400 text-sm">Built on Next.js (the same tech used by Netflix & TikTok). It loads instantly, boosting your SEO score automatically.</p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Small budget? Big ambition?</h2>
            <p className="text-lg text-slate-600 mb-10">
                Stop guessing. Get a free digital roadmap that shows you exactly how to get your first 100 customers online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/audit" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1">
                    Get Free Growth Plan <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all border border-slate-200">
                    Book a Chat
                </Link>
            </div>
        </div>
      </section>

    </main>
  );
}
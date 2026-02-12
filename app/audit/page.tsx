import React from "react";
import AuditForm from "../components/AuditForm";
import { Zap, Search, BarChart3, Smartphone, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

// 1. TOOL-FOCUSED METADATA (Now with OpenGraph)
export const metadata: Metadata = {
  title: 'Free SEO Audit Tool | Check Your Google Rankings',
  description: 'Why aren\'t you ranking #1? Enter your URL for a free, instant SEO analysis. Check backlinks, page speed, and keyword errors in seconds.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/audit',
  },
  openGraph: {
    title: 'Free SEO Audit Tool | Churchtown Intelligence™',
    description: 'Get a comprehensive report on your site\'s speed, SEO, and conversion blockers in 2 minutes.',
    url: 'https://www.churchtownmedia.co.uk/audit',
    type: 'website',
  }
};

// 2. ENRICHED SOFTWARE SCHEMA
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'Churchtown Media SEO Auditor',
  'applicationCategory': 'BusinessApplication',
  'operatingSystem': 'Web',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'GBP'
  },
  // FIX A: Add Rating to the App itself
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5.0',
    'ratingCount': '24'
  },
  'description': 'Free SEO auditing tool for Southport businesses.',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Churchtown Media',
    // FIX B: Add Rating to the Business provider
    'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5.0',
        'reviewCount': '24'
    }
  }
};

export default function AuditPage() {
  return (
    <>
      {/* Preload critical resources for faster LCP */}
      <link rel="preconnect" href="https://www.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.googleapis.com" />
      
      <main className="min-h-screen pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        
        {/* INJECT SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* BACKGROUND EFFECTS - Optimized for performance */}
        <div className="animated-blob absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none will-change-transform"></div>
        <div className="animated-blob absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[60px] pointer-events-none will-change-transform"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO SECTION */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                  100% Free Analysis
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                See exactly why your competitors <br/>
                <span className="text-blue-400">
                    rank higher than you.
                </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Google uses 200+ ranking factors. We check the most important ones in seconds. Enter your URL below to unlock your digital scorecard.
            </p>

            {/* THE SCANNER APP CONTAINER */}
            <div className="max-w-3xl mx-auto bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-2 rounded-3xl shadow-2xl">
                <div className="bg-slate-950 rounded-[1.25rem] border border-slate-800/50 p-6 md:p-8">
                    
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
                        <div className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            <span className="font-bold text-white tracking-tight">Instant SEO Scanner</span>
                        </div>
                        <div className="text-xs font-mono text-slate-500 hidden sm:block">
                            Powered by Churchtown Intelligence™
                        </div>
                    </div>

                    {/* THE AUDIT FORM */}
                    <AuditForm />

                    {/* Trust Signals */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs font-medium text-slate-500">
                        <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> SSL Secure</span>
                        <span className="hidden md:inline">•</span>
                        <span>No Credit Card Required</span>
                        <span className="hidden md:inline">•</span>
                        <span>GDPR Compliant</span>
                    </div>
                </div>
            </div>
        </div>

        {/* VALUE PROPS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {[
                { 
                    title: "Technical Health", 
                    desc: "Find broken links, slow scripts, and crawl errors.",
                    icon: <Zap className="w-6 h-6 text-blue-400" />,
                    stat: "1"
                },
                { 
                    title: "On-Page Optimisation", 
                    desc: "See if your titles, headers, and meta tags are Google-friendly.",
                    icon: <Search className="w-6 h-6 text-purple-400" />,
                    stat: "2"
                },
                { 
                    title: "Content Analysis", 
                    desc: "Check if you have enough content to rank for your keywords.",
                    icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
                    stat: "3"
                },
                { 
                    title: "Mobile Usability", 
                    desc: "Ensure your site works perfectly on iPhones and Androids.",
                    icon: <Smartphone className="w-6 h-6 text-pink-400" />,
                    stat: "4"
                }
            ].map((item, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:bg-slate-800/50 transition-colors group">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-slate-700 transition-colors">
                            {item.icon}
                        </div>
                        <span className="text-4xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">{item.stat}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* TESTIMONIAL / SOCIAL PROOF */}
        <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/5 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm -z-10"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Don't guess. Know.</h3>
            <blockquote className="text-xl text-slate-300 italic mb-8">
                "I thought my website was fine until I ran this audit. Turns out I was blocking Google from indexing my main service pages. Fixed it in 5 minutes."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 font-bold">L</div>
                <div className="text-left">
                    <div className="text-white font-bold text-sm">Local Business Owner</div>
                    <div className="text-slate-500 text-xs">Southport, UK</div>
                </div>
            </div>
        </div>

      </div>
    </main>
    </>
  );
}
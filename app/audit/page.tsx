import type { Metadata } from 'next';
import React from "react";
import AuditForm from "../components/AuditForm"; // <--- FIXED: Changed from ../../ to ../
import { Search, Lock, Zap, CheckCircle2 } from "lucide-react";

// 1. LEAD MAGNET METADATA
export const metadata: Metadata = {
  title: 'Free SEO Audit Tool: Check Your Google Rankings | Churchtown Media',
  description: 'Is your website invisible? Run a free instant SEO audit to see exactly why your competitors are outranking you. Get a plain-English report in 15 seconds.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/audit',
  },
}

// 2. SOFTWARE APPLICATION SCHEMA
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
  'description': 'Free SEO auditing tool for Southport businesses to check local rankings and technical health.',
  'provider': {
    '@type': 'LocalBusiness',
    'name': 'Churchtown Media'
  }
};

// 3. MAIN COMPONENT
export default function AuditPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">100% Free Analysis</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          See exactly why your competitors <br/> <span className="text-blue-600">rank higher than you.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Google uses 200+ ranking factors. We check the most important ones in seconds. Enter your URL below to unlock your digital scorecard.
        </p>
      </div>

      {/* THE TOOL CONTAINER (Premium "App" Feel) */}
      <div className="max-w-3xl mx-auto px-6 mb-24 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Header of the 'App' */}
            <div className="bg-slate-900 px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg">
                        <Search className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg">Instant SEO Scanner</h3>
                        <p className="text-slate-400 text-xs">Powered by Churchtown Intelligence™</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    <Zap className="w-3 h-3" />
                    Live Server Ready
                </div>
            </div>

            {/* THE FORM AREA */}
            <div className="p-6 md:p-12 bg-white">
                
                {/* This renders your interactive Form Component */}
                <AuditForm />

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" /> SSL Secure</span>
                    <span className="hidden md:inline">•</span>
                    <span>No Credit Card Required</span>
                    <span className="hidden md:inline">•</span>
                    <span>GDPR Compliant</span>
                </div>
            </div>
        </div>

        {/* TRUST BADGES (Social Proof) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
                "Checks Mobile Speed",
                "Analyses Keyword Usage",
                "Scans Backlink Profile"
            ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm font-bold text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {item}
                </div>
            ))}
        </div>
      </div>

      {/* VALUE PROP SECTION */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                What you get in your report:
            </h2>
            <ul className="space-y-6">
                {[
                    { title: "Technical Health Score", desc: "Find broken links, slow scripts, and crawl errors." },
                    { title: "On-Page Optimisation", desc: "See if your titles, headers, and meta tags are Google-friendly." },
                    { title: "Content Analysis", desc: "Check if you have enough content to rank for your keywords." },
                    { title: "Mobile Usability", desc: "Ensure your site works perfectly on iPhones and Androids." }
                ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                            {i + 1}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none"></div>
             <h3 className="text-2xl font-bold mb-4 relative z-10">Don't guess. Know.</h3>
             <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                "I thought my website was fine until I ran this audit. Turns out I was blocking Google from indexing my main service pages. Fixed it in 5 minutes."
             </p>
             <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                <div>
                    <div className="font-bold">Local Business Owner</div>
                    <div className="text-xs text-slate-400">Southport, UK</div>
                </div>
             </div>
        </div>
      </div>
    </main>
  );
}
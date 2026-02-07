"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2, TrendingUp, Shield, BarChart3 } from "lucide-react";

export default function WorkPage() {
  /* SEO STRATEGY PIVOT:
     Instead of fake clients, we present "Industry Accelerators".
     This targets high-value keywords (Solar, Legal, SaaS) without
     faking a client relationship. It proves you have the "Blueprint" for success.
  */
  const solutions = [
    {
      industry: "Trade & Construction",
      title: "The Lead Generation Engine",
      stats: ["High-Converting Forms", "Local SEO Domination", "Instant Load Speeds"],
      desc: "Our blueprint for tradespeople. We replace generic brochure sites with aggressive lead-capture systems designed to rank #1 in local search results.",
      tags: ["Next.js SSR", "Schema Markup", "Geo-Targeting"],
      color: "from-amber-400 to-orange-500",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      industry: "Legal & Financial",
      title: "The Trust Authority Platform",
      stats: ["Security First", "Client Portals", "Thought Leadership"],
      desc: "For firms that need absolute credibility. We build secure, compliant, and authoritative digital presences that establish immediate trust with high-net-worth clients.",
      tags: ["TypeScript", "Security Headers", "CMS Integration"],
      color: "from-blue-600 to-indigo-700",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      industry: "Logistics & Operations",
      title: "The SaaS Dashboard",
      stats: ["Real-time Tracking", "Automated Workflows", "Data Visualization"],
      desc: "We build internal tools that save time. From fleet tracking to automated invoicing, we turn manual spreadsheets into secure, web-based software.",
      tags: ["React", "PostgreSQL", "API Integration"],
      color: "from-emerald-500 to-teal-600",
      icon: <TrendingUp className="w-6 h-6 text-white" />
    },
    {
      industry: "Retail & Aesthetics",
      title: "The Booking Accelerator",
      stats: ["Zero-Friction Checkout", "Social Sync", "Visual storytelling"],
      desc: "A high-end visual experience for luxury brands. We integrate custom booking engines and payment flows that reduce drop-offs and increase average order value.",
      tags: ["Stripe Payments", "Image Optimization", "Mobile First"],
      color: "from-pink-500 to-rose-500",
      icon: <BarChart3 className="w-6 h-6 text-white" />
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 overflow-x-hidden bg-slate-50">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
              Proven Industry Frameworks
            </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          We don't guess. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">
            We use what works.
          </span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Instead of reinventing the wheel, we deploy battle-tested digital architectures designed for specific industries. Choose your growth engine.
        </p>
      </div>

      {/* 2. SOLUTIONS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-12 mb-32">
        {solutions.map((sol, i) => (
            <div key={i} className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Visual Side (Abstract Representation of the Industry) */}
                    <div className={`h-64 md:h-80 w-full rounded-3xl bg-gradient-to-br ${sol.color} flex flex-col items-center justify-center shadow-inner relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="mb-4 p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg">
                            {sol.icon}
                        </div>
                        <div className="text-white font-bold text-2xl md:text-3xl opacity-90 text-center px-4">
                            {sol.industry}
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                                Growth Model #{i + 1}
                            </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                            {sol.title}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {sol.stats.map((stat, j) => (
                                <div key={j} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                    {stat}
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                            {sol.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {sol.tags.map((tag, k) => (
                                <span key={k} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-slate-500 text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* 3. CTA SECTION */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Which model fits your <span className="text-blue-400">business?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                    Stop guessing with generic web design. Deploy a proven revenue engine tailored to your industry.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/audit" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25">
                        <Zap className="w-5 h-5 fill-white" /> Get Free Audit
                    </Link>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                        Book Strategy Call <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
      </div>

    </main>
  );
}
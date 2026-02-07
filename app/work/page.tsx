"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Box, Shield, Zap, TrendingUp, BarChart3, Users, Layout, Lock } from "lucide-react";

export default function WorkPage() {
  const frameworks = [
    {
        id: "lead-gen",
        title: "The Lead Generation Engine",
        industry: "Trade & Construction",
        desc: "Our blueprint for tradespeople. We replace generic brochure sites with aggressive lead-capture systems designed to rank #1 in local search results.",
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        features: ["High-Converting Forms", "Local SEO Domination", "Instant Load Speeds"],
        tech: ["Next.js SSR", "Schema Markup", "Geo-Targeting"]
    },
    {
        id: "trust-auth",
        title: "The Trust Authority Platform",
        industry: "Legal & Financial",
        desc: "For firms that need absolute credibility. We build secure, compliant, and authoritative digital presences that establish immediate trust with high-net-worth clients.",
        icon: <Shield className="w-6 h-6 text-blue-500" />,
        features: ["Security First", "Client Portals", "Thought Leadership"],
        tech: ["TypeScript", "Security Headers", "CMS Integration"]
    },
    {
        id: "saas-dash",
        title: "The SaaS Dashboard",
        industry: "Logistics & Operations",
        desc: "We build internal tools that save time. From fleet tracking to automated invoicing, we turn manual spreadsheets into secure, web-based software.",
        icon: <Layout className="w-6 h-6 text-purple-500" />,
        features: ["Real-time Tracking", "Automated Workflows", "Data Visualization"],
        tech: ["React", "PostgreSQL", "API Integration"]
    },
    {
        id: "booking-accel",
        title: "The Booking Accelerator",
        industry: "Retail & Aesthetics",
        desc: "A high-end visual experience for luxury brands. We integrate custom booking engines and payment flows that reduce drop-offs and increase average order value.",
        icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
        features: ["Zero-Friction Checkout", "Social Sync", "Visual storytelling"],
        tech: ["Stripe Payments", "Image Optimization", "Mobile First"]
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Proven Industry Frameworks</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          We don't guess. <br/> <span className="text-blue-600">We use what works.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Instead of reinventing the wheel, we deploy battle-tested digital architectures designed for specific industries. Choose your growth engine.
        </p>
      </div>

      {/* FRAMEWORKS GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {frameworks.map((fw, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col">
                
                {/* CARD HEADER */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">{fw.industry}</span>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">Growth Model #{i+1}</span>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                        {fw.icon}
                    </div>
                </div>

                {/* CONTENT */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{fw.title}</h3>
                
                {/* FEATURES PILLS */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {fw.features.map((feat, j) => (
                        <span key={j} className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                            {feat}
                        </span>
                    ))}
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                    {fw.desc}
                </p>

                {/* TECH STACK FOOTER */}
                <div className="border-t border-slate-100 pt-6 mt-auto">
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400 mb-6">
                        {fw.tech.map((t, k) => (
                            <span key={k} className="flex items-center gap-1">
                                <Box className="w-3 h-3" /> {t}
                            </span>
                        ))}
                    </div>
                    
                    {/* ACTION BUTTON - The Fix */}
                    <Link 
                        href="/contact" 
                        className="w-full block text-center bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors group"
                    >
                        Deploy This Framework <ArrowRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Which model fits your business?</h2>
        <p className="text-slate-600 mb-8 text-lg">Stop guessing with generic web design. Deploy a proven revenue engine tailored to your industry.</p>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors">
                Get Free Audit
            </Link>
            <Link href="/contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors">
                Book Strategy Call
            </Link>
        </div>
      </div>

    </main>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { Rocket, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function SmallBusinessPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wide">Small Business Starter</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Get online in <br/> <span className="text-indigo-600">7 days.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Perfect for local trades, cafes, and service businesses. A high-performance Next.js website without the agency price tag.
        </p>
      </div>

      {/* PRICING / PACKAGE GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        
        {/* CARD 1: THE PROBLEM */}
        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why avoid Wix & DIY?</h3>
            <ul className="space-y-4">
                {[
                    "Slow loading speeds kill Google rankings",
                    "Generic templates look like everyone else",
                    "Monthly fees increase forever",
                    "You don't actually own your website"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 text-sm font-bold">X</div>
                        {item}
                    </li>
                ))}
            </ul>
        </div>

        {/* CARD 2: OUR SOLUTION */}
        <div className="bg-slate-900 p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-6">The Growth Starter Package</h3>
            <ul className="space-y-4 mb-8">
                {[
                    "Custom Next.js Design (Not a template)",
                    "Google Business Profile Setup",
                    "Mobile & Tablet Optimized",
                    "Hosting & Domain Included",
                    "One-time fee (No monthly rental)"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
            <Link href="/contact" className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">
                Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
        </div>

      </div>
    </main>
  );
}
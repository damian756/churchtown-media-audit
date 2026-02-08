import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { Zap, Smartphone, Code2, ArrowRight } from "lucide-react";

// 1. ADD METADATA BLOCK HERE
export const metadata: Metadata = {
  title: 'Web Design Southport | Fast, High-Converting Websites',
  description: 'Custom Next.js web design for Southport businesses. We build sites that load instantly and convert visitors into customers.',
}

// 2. MAIN COMPONENT (Server Component)
export default function WebDesignPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">Enterprise Web Design</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Websites that <br/> <span className="text-blue-600">print money.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Most agencies sell you a brochure. We build revenue engines. Ultra-fast Next.js architecture designed to convert Southport traffic into paying customers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {[
            { icon: <Zap className="w-6 h-6"/>, title: "0.4s Load Speeds", desc: "Google loves fast sites. We build on the edge for instant interactions." },
            { icon: <Smartphone className="w-6 h-6"/>, title: "Mobile First", desc: "60% of traffic is mobile. We design for the thumb, not just the mouse." },
            { icon: <Code2 className="w-6 h-6"/>, title: "Clean Code", desc: "No bloated plugins. Just pure, semantic React code that scales." }
        ].map((feat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-600">{feat.desc}</p>
            </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Stop losing customers to slow websites.</h2>
        <div className="flex justify-center gap-4">
            <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors inline-flex items-center gap-2">
                Get a Free Site Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </div>
    </main>
  );
}
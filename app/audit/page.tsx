"use client";

import React, { useState } from "react";
import { Search, Zap, ShieldCheck, BarChart3, Smartphone, Loader2, CheckCircle2 } from "lucide-react";

export default function AuditPage() {
  // PASTE YOUR FORMSPREE ID HERE (Get it from formspree.io)
  const FORMSPREE_ID = "mpqjzyby"; 

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 1. Simulate the "Scanning" effect for 2 seconds (Adds perceived value)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // 2. Send data to Formspree
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          email: email,
          message: "New Technical Audit Request from Website",
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setUrl("");
        setEmail("");
      } else {
        alert("Oops! Something went wrong. Please email us directly.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="px-6 pb-24">
      
      {/* 1. HERO & INPUT SECTION */}
      <section className="pt-20 pb-20 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              Free Technical Deep Dive
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Unlock your hidden <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 animate-gradient">revenue potential.</span>
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Stop guessing why your site isn't converting. We run a <strong>24-point engineering analysis</strong> to find the speed, SEO, and UX bottlenecks killing your growth.
        </p>

        {/* GLASS FORM CARD */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-2 rounded-[2rem] shadow-2xl shadow-blue-900/10 max-w-2xl mx-auto relative z-20">
            
            {isSuccess ? (
                // SUCCESS STATE
                <div className="h-40 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Scan Initiated!</h3>
                    <p className="text-slate-500">We are processing your audit. Check your inbox shortly.</p>
                    <button onClick={() => setIsSuccess(false)} className="mt-4 text-sm text-blue-600 font-bold hover:underline">
                        Run another audit
                    </button>
                </div>
            ) : (
                // FORM STATE
                <form onSubmit={handleAnalyze} className="flex flex-col md:flex-row gap-2">
                    <div className="flex-grow relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <Search className="w-5 h-5" />
                        </div>
                        <input 
                            type="url" 
                            name="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://yourwebsite.com" 
                            required
                            className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                        />
                    </div>
                    <div className="md:w-1/3">
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your Email" 
                            required
                            className="w-full h-14 px-4 rounded-xl bg-slate-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium mb-2 md:mb-0"
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="h-14 px-8 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap min-w-[140px]"
                    >
                        {isLoading ? (
                            <><Loader2 className="w-5 h-5 animate-spin" /> Scanning...</>
                        ) : (
                            <><Zap className="w-5 h-5 fill-white" /> Run Audit</>
                        )}
                    </button>
                </form>
            )}
        </div>
      </section>

      {/* 2. THE "TERMINAL" (Trust Builder) */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Terminal Header */}
            <div className="bg-[#0f172a] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-slate-400 font-mono">churchtown-audit-bot — v2.4.0</div>
            </div>
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm md:text-base">
                <div className="text-emerald-400 mb-2">$ init_analysis --target=user_site</div>
                <div className="text-slate-300 mb-1">{'>'} Connecting to Lighthouse API... <span className="text-emerald-500">Done</span></div>
                <div className="text-slate-300 mb-1">{'>'} Checking First Contentful Paint (FCP)... <span className="text-yellow-500">Pending</span></div>
                <div className="text-slate-300 mb-1">{'>'} Analyzing DOM Structure depth...</div>
                <div className="text-slate-300 mb-1">{'>'} Verifying SSL & Security Headers...</div>
                <div className="text-slate-300 mb-1">{'>'} Crawling for Broken Links (404)...</div>
                <div className="text-blue-400 mt-4 animate-pulse">_ Waiting for input...</div>
            </div>
        </div>
      </section>

      {/* 3. WHAT WE CHECK (Value Props) */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">We check what Google checks.</h2>
            <p className="text-slate-600">Our 24-point analysis covers the four pillars of digital performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Speed */}
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur border border-white/60 hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Core Web Vitals</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    We measure LCP, FID, and CLS. If your site takes longer than 2.5s to load, you are losing 40% of your traffic instantly.
                </p>
            </div>

            {/* Card 2: SEO */}
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur border border-white/60 hover:border-purple-200 transition-all group">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                    <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">SEO Architecture</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Are your H1s correct? Is your sitemap accessible? We check the technical skeleton that tells Google what you do.
                </p>
            </div>

            {/* Card 3: Mobile */}
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur border border-white/60 hover:border-pink-200 transition-all group">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
                    <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Usability</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Google is Mobile-First. We test touch targets, viewport scaling, and responsive layout shifts.
                </p>
            </div>

            {/* Card 4: Security */}
            <div className="p-8 rounded-3xl bg-white/60 backdrop-blur border border-white/60 hover:border-emerald-200 transition-all group">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 text-emerald-600">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Security & Headers</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    SSL validity, mixed content warnings, and server response codes. We ensure your site is safe for customers.
                </p>
            </div>
        </div>
      </section>

    </main>
  );
}
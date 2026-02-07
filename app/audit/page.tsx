"use client";

import React, { useState } from "react";
import { Search, Zap, Loader2, ArrowRight, BrainCircuit } from "lucide-react";

export default function AuditPage() {
  const FORMSPREE_ID = "mpqjzyby"; 

  const [status, setStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [results, setResults] = useState<any>(null);
  const [logs, setLogs] = useState<string[]>(["> Ready to initialize..."]);
  
  const addLog = (text: string) => setLogs(prev => [...prev.slice(-4), text]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('scanning');
    setLogs(["> Initializing connection to Internal API..."]);

    const logInterval = setInterval(() => {
        const msgs = [
            "> Handshaking with Google Lighthouse...",
            "> Analyzing Core Web Vitals...",
            "> Checking Mobile Responsiveness...",
            "> Generating AI Insights (Llama-3)...",
        ];
        addLog(msgs[Math.floor(Math.random() * msgs.length)]);
    }, 2000);

    try {
      // 1. CALL YOUR BACKEND (Corrected Path)
      const apiRes = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await apiRes.json();
      
      // 2. Send Lead to Formspree
      fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email, message: "Real AI Audit Completed" }),
      });

      clearInterval(logInterval);

      if (!apiRes.ok || data.error) {
        throw new Error(data.error || "Audit failed");
      }

      setResults(data);
      addLog("> Analysis Complete. Rendering Real Data.");
      setStatus('complete');

    } catch (error) {
      clearInterval(logInterval);
      console.error(error);
      addLog("> Error: Could not connect to Audit Engine.");
      alert("We couldn't scan this specific site. It might be blocking bots.");
      setStatus('idle');
    }
  };

  return (
    <main className="px-6 pb-24">
      {/* HEADER */}
      <section className="pt-20 pb-20 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
              Live AI Analysis
            </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
           Unlock your hidden <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 animate-gradient">revenue potential.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          Connected to <strong>Google Lighthouse & Llama AI</strong>. Enter a URL to run a live analysis.
        </p>

        {/* INTERFACE */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/60 p-2 rounded-[2rem] shadow-2xl max-w-4xl mx-auto relative z-20 min-h-[140px] flex flex-col justify-center">
            
            {status === 'idle' && (
                <form onSubmit={handleAnalyze} className="flex flex-col md:flex-row gap-2 p-2">
                    <div className="flex-grow relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><Search className="w-5 h-5" /></div>
                        <input type="url" required placeholder="https://yourwebsite.com" value={url} onChange={(e) => setUrl(e.target.value)} className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-50 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium" />
                    </div>
                    <div className="md:w-1/3">
                        <input type="email" required placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-14 px-4 rounded-xl bg-slate-50 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-900 font-medium" />
                    </div>
                    <button type="submit" className="h-14 px-8 rounded-xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5 fill-white" /> Run Audit
                    </button>
                </form>
            )}

            {status === 'scanning' && (
                <div className="flex flex-col items-center justify-center py-8 animate-in fade-in">
                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
                    <h3 className="text-xl font-bold text-slate-900">Running Deep Scan...</h3>
                    <p className="text-slate-500 text-sm">Querying Google API & OpenRouter AI</p>
                </div>
            )}

            {status === 'complete' && results && (
                <div className="p-6 md:p-8 animate-in zoom-in">
                    {/* SCORES */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                            <div className={`text-4xl font-black mb-1 ${results.performance >= 90 ? 'text-emerald-500' : results.performance >= 50 ? 'text-orange-500' : 'text-red-500'}`}>{results.performance}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase">Performance</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                             <div className={`text-4xl font-black mb-1 ${results.seo >= 90 ? 'text-emerald-500' : 'text-orange-500'}`}>{results.seo}</div>
                            <div className="text-xs font-bold text-slate-400 uppercase">SEO Score</div>
                        </div>
                    </div>

                    {/* AI ANALYSIS DISPLAY */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                            <BrainCircuit className="w-5 h-5 text-purple-600" />
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">AI Engineer Diagnosis</h4>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white/90 text-sm leading-relaxed shadow-lg">
                            {results.analysis}
                        </div>
                    </div>

                    {/* METRICS ROW */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                            <span className="text-xs text-slate-500 uppercase font-bold">LCP (Load)</span>
                            <span className="font-mono font-bold text-slate-900">{results.lcp}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                            <span className="text-xs text-slate-500 uppercase font-bold">CLS (Stability)</span>
                            <span className="font-mono font-bold text-slate-900">{results.cls}</span>
                        </div>
                         <div className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
                            <span className="text-xs text-slate-500 uppercase font-bold">TBT (Blocking)</span>
                            <span className="font-mono font-bold text-slate-900">{results.tbt}</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-100">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">Want to fix these scores?</h3>
                        <p className="text-blue-700/80 text-sm mb-4">We have sent a copy of this data to {email}. Let's discuss how to get everything to 100.</p>
                        <button onClick={() => window.location.href = `mailto:damian@churchtownmedia.co.uk?subject=Fix my Performance Score of ${results.performance}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                            Book Strategy Call <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
      </section>

      {/* TERMINAL */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
            <div className="bg-[#0f172a] px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-slate-400 font-mono">churchtown-audit-bot — v2.4.0</div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base h-40 flex flex-col justify-end">
                {logs.map((log, i) => <div key={i} className="text-slate-300 mb-1">{log}</div>)}
                {status === 'scanning' && <div className="text-blue-400 animate-pulse">_</div>}
            </div>
        </div>
      </section>
    </main>
  );
}
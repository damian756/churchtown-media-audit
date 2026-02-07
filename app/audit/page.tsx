"use client";

import { useState } from "react";
import { Search, Loader2, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function AuditPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to scan website");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-24">
      
      {/* 1. MATCHING DEEP OMBRE BACKGROUND (Slate-400) */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-b from-slate-400 via-slate-100 to-white"></div>
      
      {/* Darker Grid Texture */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="w-full max-w-2xl text-center relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 backdrop-blur px-3 py-1 text-sm font-medium text-blue-700 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            Free Technical Analysis
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4 drop-shadow-sm">
            How healthy is your website?
          </h1>
          <p className="text-lg text-slate-800 leading-relaxed font-medium">
            Get a 24-point technical SEO audit in seconds. Check speed, Core Web Vitals, and on-page factors instantly.
          </p>
        </div>

        {/* 2. THE GLASS CARD */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-white/50 ring-1 ring-slate-400/50">
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-inner">
            
            <form onSubmit={handleScan} className="space-y-4">
              <label htmlFor="url" className="sr-only">Website URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="url"
                  name="url"
                  id="url"
                  required
                  placeholder="https://yourwebsite.com"
                  className="block w-full rounded-xl border-0 py-4 pl-11 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-lg sm:leading-6 bg-slate-50 hover:bg-white transition-colors"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 px-3.5 py-4 text-lg font-bold text-white shadow-lg hover:bg-blue-800 hover:shadow-blue-900/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Scanning Infrastructure...
                  </>
                ) : (
                  <>
                    Run Free Audit <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-4 rounded-lg bg-red-50 text-red-600 text-sm flex items-center gap-2 border border-red-100">
                <AlertCircle className="h-4 w-4" /> {error}
              </div>
            )}

            {/* Success Area */}
            {result && (
               <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100 text-green-800 animate-in fade-in slide-in-from-bottom-4">
                  <div className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
                    <CheckCircle2 className="h-6 w-6" /> Scan Complete
                  </div>
                  <p className="text-sm">We successfully analyzed <strong>{url}</strong>.</p>
               </div>
            )}

            {/* Trust Footer */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-500 uppercase tracking-wide">
               <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-600"/> No credit card</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-600"/> Instant results</span>
               <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-blue-600"/> PDF Export</span>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}
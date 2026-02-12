"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import AuditResults from "./AuditResults";

type Step = "input" | "scanning" | "email" | "results";

interface AuditResult {
  performance: number;
  seo: number;
  lcp: string;
  cls: string;
  tbt: string;
  analysis: string;
}

export default function AuditForm() {
  const [step, setStep] = useState<Step>("input");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Start scanning
    setStep("scanning");
    setError(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze website");
      }

      const data: AuditResult = await response.json();
      setAuditResult(data);
      setStep("email");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setStep("input");
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Capture lead via Formspree (same as contact form)
    const FORMSPREE_ID = "mpqjzyby";
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          url: url.trim(),
          source: "seo-audit",
          _subject: "New SEO Audit Lead",
        }),
      });
    } catch {
      // Don't block UX if lead capture fails
    }

    setStep("results");
  };

  return (
    <div className="w-full rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur p-8 shadow-lg">
      {step === "results" && auditResult ? (
        <AuditResults data={auditResult} url={url} />
      ) : (
        <>
          <h2 className="text-center text-xl font-semibold text-white">
            Free AI SEO Audit
          </h2>

          {step === "email" && (
            <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-emerald-900/50 border border-emerald-500/30 px-4 py-3 text-emerald-400">
              <CheckCircle className="h-5 w-5" />
              <p className="text-sm font-medium">Audit Ready for {url}!</p>
            </div>
          )}

          {step === "input" && (
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={handleUrlSubmit}
            >
              {error && (
                <div className="rounded-lg bg-red-900/50 border border-red-500/30 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}
              <label htmlFor="url" className="sr-only">
                Enter your website URL
              </label>
              <input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter your website URL"
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                aria-label="Website URL"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
              >
                Analyze Now
              </button>
            </form>
          )}

          {step === "scanning" && (
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={handleUrlSubmit}
            >
              <input
                type="url"
                value={url}
                disabled
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 text-slate-400 placeholder:text-slate-500"
                aria-label="Website URL"
              />
              <button
                type="button"
                disabled
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 font-medium text-white opacity-70"
              >
                <Loader2 className="h-5 w-5 animate-spin" />
                Scanning...
              </button>
            </form>
          )}

          {step === "email" && (
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={handleEmailSubmit}
            >
              <label htmlFor="email" className="sr-only">
                Enter your email to unlock results
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to unlock results"
                className="w-full rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Unlock Report
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
}
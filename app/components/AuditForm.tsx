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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    // Unlock and show results
    setStep("results");
  };

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      {step === "results" && auditResult ? (
        <AuditResults data={auditResult} url={url} />
      ) : (
        <>
          <h2 className="text-center text-xl font-semibold text-slate-800">
            Free AI SEO Audit
          </h2>

          {step === "email" && (
            <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-green-700">
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
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
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
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                aria-label="Website URL"
                required
              />
              <button
                type="submit"
                disabled={step === "scanning"}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
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
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-500 placeholder:text-slate-400"
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
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

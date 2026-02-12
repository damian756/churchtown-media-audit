import { Download, Gauge, Activity, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface AuditResultsProps {
  data: {
    performance: number;
    seo: number;
    lcp: string;
    cls: string;
    tbt: string;
    analysis: string;
  };
  url: string;
}

function getScoreColor(score: number): string {
  if (score >= 90) return "text-emerald-400 bg-emerald-900/40 border-emerald-500/50";
  if (score >= 50) return "text-amber-400 bg-amber-900/40 border-amber-500/50";
  return "text-red-400 bg-red-900/40 border-red-500/50";
}

function getScoreColorRing(score: number): string {
  if (score >= 90) return "text-emerald-400";
  if (score >= 50) return "text-amber-400";
  return "text-red-400";
}

export default function AuditResults({ data, url }: AuditResultsProps) {
  return (
    <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Audit Report</h2>
          <p className="mt-1 text-sm text-slate-400">{url}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      {/* Score Cards - Hero Metrics */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Performance Score */}
        <div
          className={`flex flex-col items-center justify-center rounded-xl border-2 p-8 ${getScoreColor(
            data.performance
          )}`}
        >
          <Gauge className="mb-3 h-8 w-8" />
          <div className="text-center">
            <div
              className={`text-5xl font-bold ${getScoreColorRing(
                data.performance
              )}`}
            >
              {data.performance}
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide">
              Performance
            </p>
          </div>
        </div>

        {/* SEO Score */}
        <div
          className={`flex flex-col items-center justify-center rounded-xl border-2 p-8 ${getScoreColor(
            data.seo
          )}`}
        >
          <Activity className="mb-3 h-8 w-8" />
          <div className="text-center">
            <div
              className={`text-5xl font-bold ${getScoreColorRing(data.seo)}`}
            >
              {data.seo}
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-wide">
              SEO Score
            </p>
          </div>
        </div>
      </div>

      {/* Core Web Vitals Grid */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-white">
          Core Web Vitals
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {/* LCP Card */}
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
            <div className="text-sm font-medium text-slate-400">
              Largest Contentful Paint
            </div>
            <div className="mt-2 text-3xl font-bold text-white">
              {data.lcp}
            </div>
            <div className="mt-1 text-xs text-slate-500">LCP</div>
          </div>

          {/* CLS Card */}
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
            <div className="text-sm font-medium text-slate-400">
              Cumulative Layout Shift
            </div>
            <div className="mt-2 text-3xl font-bold text-white">
              {data.cls}
            </div>
            <div className="mt-1 text-xs text-slate-500">CLS</div>
          </div>

          {/* TBT Card */}
          <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
            <div className="text-sm font-medium text-slate-400">
              Total Blocking Time
            </div>
            <div className="mt-2 text-3xl font-bold text-white">
              {data.tbt}
            </div>
            <div className="mt-1 text-xs text-slate-500">TBT</div>
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="rounded-xl border border-blue-500/30 bg-blue-900/30 p-6">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">
            AI Diagnosis
          </h3>
        </div>
        <p className="leading-relaxed text-slate-300">{data.analysis}</p>
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-4">
        <Link
          href="/contact?subject=Fix+My+Audit+Scores"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 hover:-translate-y-1 shadow-lg shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          Fix My Scores <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
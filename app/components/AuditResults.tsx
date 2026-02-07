import { Download, Gauge, Activity, Sparkles } from "lucide-react";

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
  if (score >= 90) return "text-green-600 bg-green-50 border-green-200";
  if (score >= 50) return "text-orange-600 bg-orange-50 border-orange-200";
  return "text-red-600 bg-red-50 border-red-200";
}

function getScoreColorRing(score: number): string {
  if (score >= 90) return "text-green-600";
  if (score >= 50) return "text-orange-600";
  return "text-red-600";
}

export default function AuditResults({ data, url }: AuditResultsProps) {
  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Audit Report</h2>
          <p className="mt-1 text-sm text-slate-600">{url}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
        <h3 className="mb-3 text-lg font-semibold text-slate-800">
          Core Web Vitals
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {/* LCP Card */}
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-sm font-medium text-slate-500">
              Largest Contentful Paint
            </div>
            <div className="mt-2 text-3xl font-bold text-slate-800">
              {data.lcp}
            </div>
            <div className="mt-1 text-xs text-slate-500">LCP</div>
          </div>

          {/* CLS Card */}
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-sm font-medium text-slate-500">
              Cumulative Layout Shift
            </div>
            <div className="mt-2 text-3xl font-bold text-slate-800">
              {data.cls}
            </div>
            <div className="mt-1 text-xs text-slate-500">CLS</div>
          </div>

          {/* TBT Card */}
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="text-sm font-medium text-slate-500">
              Total Blocking Time
            </div>
            <div className="mt-2 text-3xl font-bold text-slate-800">
              {data.tbt}
            </div>
            <div className="mt-1 text-xs text-slate-500">TBT</div>
          </div>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-slate-800">
            AI Diagnosis
          </h3>
        </div>
        <p className="leading-relaxed text-slate-700">{data.analysis}</p>
      </div>

      {/* CTA */}
      <div className="flex justify-center pt-4">
        <button
          type="button"
          className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Fix My Scores
        </button>
      </div>
    </div>
  );
}

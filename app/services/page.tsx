import Link from "next/link";
import { 
  Rocket, 
  Search, 
  Code2, 
  BarChart3, 
  Smartphone, 
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "Services | High-Performance Web Design & SEO",
  description: "We build websites that load instantly and rank permanently. Next.js development and data-driven SEO for Southport businesses.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            We Don't Just "Make Websites."
          </h1>
          <p className="mt-6 text-xl text-slate-400 leading-relaxed">
            We build revenue engines. Whether you need a lightning-fast platform or the traffic to power it, we execute with engineering precision.
          </p>
        </div>
      </section>

      {/* 2. The Two Pillars (Split Layout) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Pillar 1: Web Design */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 transition-shadow hover:shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
              <Code2 className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Technical Web Design</h2>
            <p className="mt-4 text-lg text-slate-600">
              WordPress is slow. We build on <strong>Next.js</strong>—the same technology used by Netflix and TikTok.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                "100/100 Google Speed Scores",
                "Instant Page Loads (< 0.5s)",
                "Bank-Grade Security",
                "Mobile-First Architecture"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Perfect For</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">E-commerce</span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">Corporate</span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">High-Traffic Blogs</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: SEO */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 transition-shadow hover:shadow-xl">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg">
              <BarChart3 className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Data-Driven SEO</h2>
            <p className="mt-4 text-lg text-slate-600">
              We don't guess. We reverse-engineer your competitors and beat them with better data and structure.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                "Local 'Map Pack' Domination",
                "Technical Site Audits",
                "Keyword Gap Analysis",
                "Conversion Rate Optimization (CRO)"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="mb-4 text-sm font-semibold text-slate-500 uppercase tracking-wider">Perfect For</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">Local Trades</span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">Hospitality</span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 border border-slate-200">Legal & Finance</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Process */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
            <p className="mt-4 text-slate-600">No jargon. Just a clear path to ROI.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: "1. Audit",
                desc: "We tear down your current setup to find the hidden brakes slowing you down."
              },
              {
                icon: Rocket,
                title: "2. Build",
                desc: "We engineer the fix—whether that's a new site infrastructure or a content strategy."
              },
              {
                icon: Globe,
                title: "3. Dominate",
                desc: "We launch and iterate. We don't stop until you own the #1 spot."
              }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 shadow-sm">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Ready to upgrade your digital infrastructure?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          We only work with businesses where we know we can deliver a result. Let's see if we're a fit.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link 
            href="/contact" 
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-700 transition-all"
          >
            Get a Free Proposal
          </Link>
          <Link 
            href="/case-studies" 
            className="flex items-center gap-2 rounded-lg px-8 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-100 transition-all"
          >
            See Our Results <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
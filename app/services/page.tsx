import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Zap, Search, LayoutTemplate, ShieldAlert, Database, Store, CheckCircle2, Bot, Workflow, FileText, Map, Settings, Sparkles, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Services | Churchtown Media",
  description: "High-performance digital infrastructure, SEO, AI services, content strategy, and bespoke systems. We build digital assets that reduce customer acquisition costs and automate growth.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services',
  },
  openGraph: {
    title: 'Services | Churchtown Media',
    description: 'Web development, programmatic SEO, GEO, AI content production, AI workflows, and bespoke systems for North West businesses.',
    url: 'https://www.churchtownmedia.co.uk/services',
    type: 'website',
    siteName: 'Churchtown Media',
    images: [{ url: 'https://www.churchtownmedia.co.uk/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media Services' }],
  },
};

export default function ServicesPage() {
  return (
    <main className="px-6 pb-24 bg-slate-950">

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-24 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
              Engineering First. AI Native. Results Focused.
            </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          We build systems that <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">print revenue.</span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Most agencies build "brochure" websites. We engineer <strong className="text-white">digital assets</strong> that reduce customer acquisition costs, rank in AI search, and automate growth.
        </p>
      </section>

      {/* 2. THE 3 HIGH-END PILLARS */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* PILLAR 1: VELOCITY (Headless) */}
            <div className="group relative p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-700 opacity-50 select-none pointer-events-none group-hover:text-slate-600 transition-colors">01</div>

                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">Velocity Infrastructure</h3>
                    <p className="text-slate-300 leading-relaxed mb-8 relative z-20">
                        Stop fighting WordPress. We build <strong>Headless Next.js</strong> systems that decouple your content from your code.
                    </p>

                    <ul className="space-y-4 mb-8 relative z-20">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <Zap className="w-5 h-5 text-blue-500 shrink-0" />
                            <span><strong className="text-white">Sub-second loads</strong> regardless of traffic spikes.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <LayoutTemplate className="w-5 h-5 text-blue-500 shrink-0" />
                            <span><strong className="text-white">Visual CMS</strong> (Sanity/Contentful) for marketing teams.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <ShieldAlert className="w-5 h-5 text-blue-500 shrink-0" />
                            <span><strong className="text-white">Zero maintenance</strong> security. No plugins to update.</span>
                        </li>
                    </ul>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-4 transition-all relative z-20">
                        Discuss Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* PILLAR 2: MONOPOLY (Programmatic SEO) */}
            <div className="group relative p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-700 opacity-50 select-none pointer-events-none group-hover:text-slate-600 transition-colors">02</div>

                <div className="relative z-10">
                    <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Database className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">Monopoly Engine</h3>
                    <p className="text-slate-300 leading-relaxed mb-8 relative z-20">
                        Dominate local search. We use <strong className="text-white">Programmatic SEO</strong> to generate thousands of high-quality landing pages instantly.
                    </p>

                    <ul className="space-y-4 mb-8 relative z-20">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <Search className="w-5 h-5 text-purple-400 shrink-0" />
                            <span><strong className="text-white">Capture "Near Me"</strong> searches across 50+ locations.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <BarChart3 className="w-5 h-5 text-purple-400 shrink-0" />
                            <span><strong className="text-white">Automated Content</strong> that ranks on Google Day 1.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <Zap className="w-5 h-5 text-purple-400 shrink-0" />
                            <span><strong className="text-white">Dynamic Data</strong> injection for real-time relevance.</span>
                        </li>
                    </ul>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all relative z-20">
                        See Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* PILLAR 3: CONVERSION (Audit) */}
            <div className="group relative p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-700 opacity-50 select-none pointer-events-none group-hover:text-slate-600 transition-colors">03</div>

                <div className="relative z-10">
                    <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                        <BarChart3 className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">Revenue Audit</h3>
                    <p className="text-slate-300 leading-relaxed mb-8 relative z-20">
                        Traffic is vanity. Revenue is sanity. We fix the <strong className="text-white">technical leaks</strong> in your funnel that are costing you money.
                    </p>

                    <ul className="space-y-4 mb-8 relative z-20">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <Search className="w-5 h-5 text-emerald-400 shrink-0" />
                            <span><strong className="text-white">Core Web Vitals</strong> assessment & remediation.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
                            <span><strong className="text-white">User Flow Analysis</strong> to remove friction points.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-300">
                            <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0" />
                            <span><strong className="text-white">Accessibility Compliance</strong> to mitigate legal risk.</span>
                        </li>
                    </ul>

                    <Link href="/audit" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-4 transition-all relative z-20">
                        Get Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

        </div>
      </section>

      {/* 3. AI SERVICES SECTION */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="bg-gradient-to-br from-purple-950/60 to-blue-950/60 border border-purple-500/30 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">AI Services: New in 2026</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the age of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI search.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl">
              Google AI Overviews, ChatGPT search, and Perplexity are changing how people find businesses. Three new services that position you for this shift.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: Sparkles,
                  title: "Generative Engine Optimisation",
                  description: "Get cited by AI search engines. We helped Alotek rank #1 in Google AI Overviews in 30 days.",
                  href: "/services/generative-engine-optimisation",
                  pricing: "from £750/month",
                  colour: "purple",
                },
                {
                  icon: Bot,
                  title: "AI Content Production",
                  description: "Scale your content output without scaling headcount. Human editorial oversight, AI production speed.",
                  href: "/services/ai-content",
                  pricing: "from £500/month",
                  colour: "blue",
                },
                {
                  icon: Workflow,
                  title: "AI Workflow Automation",
                  description: "Bespoke AI workflows that eliminate repetitive tasks. From content pipelines to lead qualification.",
                  href: "/services/ai-workflows",
                  pricing: "from £1,500 (project)",
                  colour: "emerald",
                },
              ].map((service) => {
                const Icon = service.icon;
                const colourMap: Record<string, { bg: string; text: string; button: string }> = {
                  purple: { bg: "bg-purple-600/20", text: "text-purple-400", button: "text-purple-400 hover:text-purple-300" },
                  blue: { bg: "bg-blue-600/20", text: "text-blue-400", button: "text-blue-400 hover:text-blue-300" },
                  emerald: { bg: "bg-emerald-600/20", text: "text-emerald-400", button: "text-emerald-400 hover:text-emerald-300" },
                };
                const c = colourMap[service.colour];
                return (
                  <div key={service.title} className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/30 transition-all">
                    <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className={`w-6 h-6 ${c.text}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-4 text-sm">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">{service.pricing}</span>
                      <Link href={service.href} className={`inline-flex items-center gap-1 text-sm font-bold transition-all ${c.button}`}>
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/services/ai"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-500 transition-all"
            >
              See All AI Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. ONE-TIME & STRATEGY SERVICES */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">One-time & Strategy Services</h2>
          <p className="text-xl text-slate-400">Not every project needs a retainer. These are fixed-scope engagements with clear deliverables.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Optimisation Sprint",
              description: "Fix your site's biggest SEO problems in 30 days. Technical audit, on-page fixes, schema, and a 90-day action plan. No retainer required.",
              href: "/services/optimisation-sprint",
              pricing: "from £1,500",
              colour: "orange",
            },
            {
              icon: Map,
              title: "Content Strategy",
              description: "A 12-month editorial calendar backed by keyword research, competitor gap analysis, topical authority mapping, and GEO opportunity identification.",
              href: "/services/content-strategy",
              pricing: "from £1,200",
              colour: "teal",
            },
            {
              icon: Settings,
              title: "Bespoke Systems",
              description: "Custom lead generation platforms, analytics dashboards, AI-powered reporting tools, and data platforms built on Next.js and PostgreSQL.",
              href: "/services/bespoke-systems",
              pricing: "from £5,000",
              colour: "blue",
            },
          ].map((service) => {
            const Icon = service.icon;
            const colourMap: Record<string, { border: string; bg: string; text: string }> = {
              orange: { border: "border-orange-500/30", bg: "bg-orange-600/20", text: "text-orange-400" },
              teal: { border: "border-teal-500/30", bg: "bg-teal-600/20", text: "text-teal-400" },
              blue: { border: "border-blue-500/30", bg: "bg-blue-600/20", text: "text-blue-400" },
            };
            const c = colourMap[service.colour];
            return (
              <div key={service.title} className={`bg-slate-900 border rounded-2xl p-8 hover:shadow-lg transition-all ${c.border}`}>
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-6 text-sm">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${c.text}`}>{service.pricing}</span>
                  <Link href={service.href} className="inline-flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-white transition-all">
                    Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SMALL BUSINESS SECTION (Distinct Foundation Track) */}
      <section className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-6 bg-emerald-400/10 px-4 py-2 rounded-full text-sm border border-emerald-400/20">
                        <Store className="h-4 w-4" /> Just Starting Out?
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Foundation Track</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        You don't need an enterprise system yet. You need to get found, get booked, and get paid. We offer specialized "Foundation" packages for Southport trades and startups.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 mb-8">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> 5-Page Local Website</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Google Maps Setup</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Fast Hosting Included</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Monthly Support</li>
                    </ul>
                </div>

                <div className="md:w-1/3 w-full flex flex-col items-center">
                    <Link href="/contact" className="block w-full bg-blue-600 text-white text-center py-6 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                        View Starter Packages
                    </Link>

                    {/* Visual Price Tag */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <span className="text-slate-400 text-sm font-medium uppercase tracking-wide">Packages from</span>
                        <span className="bg-slate-950 text-emerald-400 px-3 py-1 rounded-lg font-bold border border-slate-700">£1,500</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}

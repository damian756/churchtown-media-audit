import Link from "next/link";
import { ArrowRight, Code2, BarChart3, Zap, Search, LayoutTemplate, ShieldAlert, Database, Store } from "lucide-react";

export const metadata = {
  title: "Services | Churchtown Media",
  description: "High-performance digital infrastructure. Headless CMS, Programmatic SEO, and Technical Audits.",
};

export default function ServicesPage() {
  return (
    <main className="px-6 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-24 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
              Engineering First, Design Second
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          We build systems that <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient">print revenue.</span>
        </h1>
        
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Most agencies build "brochure" websites. We engineer <strong>digital assets</strong> that reduce customer acquisition costs and automate growth.
        </p>
      </section>

      {/* 2. THE 3 HIGH-END PILLARS */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* PILLAR 1: VELOCITY (Headless) */}
            <div className="group relative p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Code2 className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Velocity Infrastructure</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Stop fighting WordPress. We build <strong>Headless Next.js</strong> systems that decouple your content from your code. 
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <Zap className="w-5 h-5 text-blue-500 shrink-0" />
                            <span><strong>Sub-second loads</strong> regardless of traffic spikes.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <LayoutTemplate className="w-5 h-5 text-blue-500 shrink-0" />
                            <span><strong>Visual CMS</strong> (Sanity/Contentful) for marketing teams.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <ShieldAlert className="w-5 h-5 text-blue-500 shrink-0" />
                            <span><strong>Zero maintenance</strong> security. No plugins to update.</span>
                        </li>
                    </ul>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                        Discuss Architecture <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* PILLAR 2: MONOPOLY (Programmatic SEO) */}
            <div className="group relative p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                        <Database className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Monopoly Engine</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Dominate local search. We use <strong>Programmatic SEO</strong> to generate thousands of high-quality landing pages instantly.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <Search className="w-5 h-5 text-purple-500 shrink-0" />
                            <span><strong>Capture "Near Me"</strong> searches across 50+ locations.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <BarChart3 className="w-5 h-5 text-purple-500 shrink-0" />
                            <span><strong>Automated Content</strong> that ranks on Google Day 1.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <Zap className="w-5 h-5 text-purple-500 shrink-0" />
                            <span><strong>Dynamic Data</strong> injection for real-time relevance.</span>
                        </li>
                    </ul>

                    <Link href="/contact" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-4 transition-all">
                        See Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* PILLAR 3: CONVERSION (Audit) */}
            <div className="group relative p-8 rounded-[2.5rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                    <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-500">
                        <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Revenue Audit</h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        Traffic is vanity. Revenue is sanity. We fix the <strong>technical leaks</strong> in your funnel that are costing you money.
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <Search className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span><strong>Core Web Vitals</strong> assessment & remediation.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <Zap className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span><strong>User Flow Analysis</strong> to remove friction points.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm font-medium text-slate-700">
                            <ShieldAlert className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span><strong>Accessibility Compliance</strong> to mitigate legal risk.</span>
                        </li>
                    </ul>

                    <Link href="/audit" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all">
                        Get Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

        </div>
      </section>

      {/* 3. SMALL BUSINESS SECTION (Distinct Foundation Track) */}
      <section className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
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
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> 5-Page Local Website</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Google Maps Setup</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Fast Hosting Included</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Monthly Support</li>
                    </ul>
                </div>

                <div className="md:w-1/3 w-full">
                    <Link href="/contact" className="block w-full bg-white text-slate-900 text-center py-6 rounded-2xl font-bold text-xl hover:bg-emerald-400 transition-all shadow-lg hover:scale-[1.02]">
                        View Starter Packages
                    </Link>
                    <p className="text-center text-slate-500 text-sm mt-4">Starting from £1,500</p>
                </div>
            </div>
        </div>
      </section>

    </main>
  );
}
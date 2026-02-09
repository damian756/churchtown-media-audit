import { 
    BarChart3, 
    Globe, 
    Zap, 
    ShieldCheck, 
    Smartphone, 
    Code2, 
    ArrowUpRight 
  } from "lucide-react";
  
  export default function EnterpriseGrid() {
    return (
      <section className="bg-slate-50 py-24 px-6">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Enterprise-Grade <span className="text-blue-600">Digital Infrastructure</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We build high-performance systems for brands that cannot afford downtime, slow loads, or invisible search rankings.
            </p>
          </div>
  
          {/* The Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6 md:h-[700px]">
            
            {/* Card 1: Core Web Design (Large) */}
            <div className="group relative col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <Globe className="w-48 h-48 text-blue-600" />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-blue-50 w-fit rounded-xl mb-6 border border-blue-100">
                    <Code2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Headless Architecture</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We decouple your frontend from your backend using Next.js. This means your marketing team can use a CMS they love, while your site loads instantly for customers globally.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-3xl font-bold text-slate-900">0.8s</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Load Time</div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Card 2: SEO Data (Tall) */}
            <div className="group relative col-span-1 md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="p-3 bg-green-50 w-fit rounded-xl mb-6 border border-green-100">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Data-Driven SEO</h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                We don't guess. We reverse-engineer your competitors' traffic sources.
              </p>
              {/* Fake Graph Visualization */}
              <div className="space-y-4 mt-auto">
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="w-12">Organic</span>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[85%]"></div>
                  </div>
                  <span>+85%</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="w-12">Direct</span>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[60%]"></div>
                  </div>
                  <span>+60%</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="w-12">Social</span>
                  <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-[45%]"></div>
                  </div>
                  <span>+45%</span>
                </div>
              </div>
            </div>
  
            {/* Card 3: Security (Small) */}
            <div className="group col-span-1 md:col-span-1 md:row-span-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:border-purple-200">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-purple-500 transition-colors" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Enterprise Security</h3>
              <p className="mt-1 text-sm text-slate-500">DDoS protection & ISO compliant hosting.</p>
            </div>
  
            {/* Card 4: Mobile First (Small) */}
            <div className="group col-span-1 md:col-span-1 md:row-span-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all hover:border-orange-200">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">Mobile Native Feel</h3>
              <p className="mt-1 text-sm text-slate-500">PWA capabilities for app-like experience.</p>
            </div>
  
            {/* Card 5: Speed (Wide) */}
            <div className="group relative col-span-1 md:col-span-2 md:row-span-1 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-8 flex items-center justify-between overflow-hidden shadow-md">
              <div className="animated-blob absolute -left-10 top-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  <span className="text-blue-200 font-semibold tracking-wider text-sm uppercase">Technical Velocity</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Pass Core Web Vitals. Automatically.</h3>
              </div>
              <div className="relative z-10 hidden sm:block">
                 <div className="flex -space-x-4">
                    <button className="rounded-full bg-white text-slate-900 px-6 py-3 font-bold hover:scale-105 transition-transform shadow-lg border-2 border-transparent hover:border-blue-500">
                      Run Speed Test
                    </button>
                 </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
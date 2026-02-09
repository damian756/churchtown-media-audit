import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Trophy, ArrowRight, CheckCircle2, Zap, BarChart } from "lucide-react";
import { locations, getLocation } from "@/lib/locations";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const location = getLocation(resolvedParams.slug);
  
  if (!location) return {};

  return {
    // FIXED: Removed suffix to prevent double branding
    title: `Web Design & SEO Agency ${location.name}`,
    description: location.metaDesc,
  };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const location = getLocation(resolvedParams.slug);

  if (!location) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-32">
      
      {/* HERO SECTION */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="animated-blob absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Serving {location.name} & Surrounding Areas</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                    World-Class Web Design <br/>
                    <span className="text-blue-500">Right next door in {location.name}.</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                    Stop searching for "agencies near me". We are based in Southport, just <strong>{location.travelTime}</strong> from {location.name}. We deliver enterprise-grade SEO and Development without the city-center price tag.
                    
                    {location.nearbyAreas && (
                      <span className="block mt-4 text-sm text-slate-400">
                        Serving: {location.nearbyAreas.join(" • ")}
                      </span>
                    )}
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/audit" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-blue-600/20">
                        Get Free Audit for {location.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md">
                        Book a Strategy Call
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* LOCAL INSIGHT SECTION */}
      <section className="px-6 py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why {location.name} Businesses Choose Us</h2>
                <div className="text-slate-300 mb-6 text-lg leading-relaxed prose prose-invert max-w-none">
                    <p dangerouslySetInnerHTML={{ 
                      __html: location.description
                        .replace(/\bSEO\b/g, '<a href="/services/seo" class="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">SEO</a>')
                        .replace(/basic website/gi, '<a href="/services/web-design" class="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">$&</a>')
                        .replace(/Map Pack/g, '<a href="/services/seo" class="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">Map Pack</a>')
                    }} />
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/30 mb-8">
                    <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-blue-400" />
                        Local Strategy Focus:
                    </h4>
                    <p className="text-blue-300">{location.industryFocus}</p>
                </div>

                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                        <span className="text-slate-300 font-medium">We know the local market (e.g., competitors near {location.landmark}).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                        <span className="text-slate-300 font-medium">Face-to-face meetings available (We are only {location.travelTime} away).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                        <span className="text-slate-300 font-medium">No outsourcing. All code written in-house in Sefton.</span>
                    </li>
                </ul>

                {location.caseStudySnippet && (
                  <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">
                          {location.caseStudySnippet.client}
                        </h4>
                        <p className="text-emerald-400 font-bold mb-2">
                          {location.caseStudySnippet.result}
                        </p>
                        <p className="text-slate-300 italic">
                          &ldquo;{location.caseStudySnippet.quote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                )}
            </div>
            
            <div className="relative min-h-[400px] w-full bg-slate-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group border border-slate-700">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-90"></div>
                 <div className="relative z-10 text-center p-8 w-full">
                    <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-2">{location.name} Operations</h3>
                    <p className="text-slate-400 mb-6">Serviced directly from our Southport HQ</p>
                    
                    {/* Enhanced contact details */}
                    <div className="space-y-4 pt-6 border-t border-slate-700">
                      <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                        <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                          <Zap className="w-4 h-4 text-blue-400" />
                        </div>
                        <span><strong className="text-white">{location.travelTime}</strong> travel time</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                        <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        </div>
                        <span>Same-day response available</span>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="pt-4 border-t border-slate-700/50 space-y-3">
                        <a href="tel:+447545934360" className="flex items-center justify-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm group/link">
                          <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover/link:bg-blue-500/20 transition-colors">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <span className="font-medium">07545 934360</span>
                        </a>
                        <a href="mailto:hello@churchtownmedia.co.uk" className="flex items-center justify-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm group/link">
                          <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover/link:bg-purple-500/20 transition-colors">
                            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="font-medium text-xs">hello@churchtownmedia.co.uk</span>
                        </a>
                      </div>
                      
                      {/* Service Highlights */}
                      <div className="pt-4 border-t border-slate-700/50">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Local Expertise</p>
                        <div className="space-y-2 text-xs text-slate-400">
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>Face-to-face meetings</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>All work done in-house</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                            <span>Free initial consultation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* LOCAL MARKET INSIGHTS */}
      {location.marketStats && location.localChallenges && (
        <section className="py-24 px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Understanding the {location.name} Digital Market
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Data-driven insights that inform our {location.name} SEO and web design strategies.
            </p>
            
            {/* Market Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{location.marketStats.population}</div>
                <div className="text-sm text-slate-400 font-medium">Population</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{location.marketStats.businesses}</div>
                <div className="text-sm text-slate-400 font-medium">Businesses</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <div className="text-sm font-bold text-blue-400 mb-2">Key Trend</div>
                <div className="text-sm text-slate-300 leading-relaxed">{location.marketStats.keyTrend}</div>
              </div>
            </div>
            
            {/* Local Challenges */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Common Challenges for {location.name} Businesses:
              </h3>
              <ul className="space-y-3">
                {location.localChallenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-blue-400 text-xl shrink-0">→</span>
                    <span className="text-slate-300">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Success Metric */}
            {location.successMetric && (
              <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-6 rounded-xl border border-blue-500/30">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-blue-400 shrink-0" />
                  <p className="text-blue-300 font-bold">{location.successMetric}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Complete Digital Domination</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    We don't just build websites; we build revenue engines tailored for the {location.name} economy.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">High-Speed Web Design</h3>
                    <p className="text-slate-300 mb-6 text-sm">
                        We build websites that load in under 1 second. Essential for capturing {location.name}'s mobile users on the go.
                    </p>
                    <Link href="/services/web-design" className="text-blue-400 font-bold hover:underline flex items-center gap-1 text-sm">
                        Explore Design <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>

                <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
                        <BarChart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Local SEO ({location.name})</h3>
                    <p className="text-slate-300 mb-6 text-sm">
                        Dominate the Google Map Pack for searches like "Service in {location.name}" or "Near {location.landmark}".
                    </p>
                    <Link href="/services/seo" className="text-emerald-400 font-bold hover:underline flex items-center gap-1 text-sm">
                        Dominate Local Search <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>

                <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:rotate-6 transition-transform">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Reputation Management</h3>
                    <p className="text-slate-300 mb-6 text-sm">
                        Automated systems to capture 5-star reviews from your satisfied {location.name} customers.
                    </p>
                    <Link href="/audit" className="text-purple-400 font-bold hover:underline flex items-center gap-1 text-sm">
                        Get Started <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>
            </div>
        </div>
      </section>

       {/* CTA */}
       <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-6 text-center text-white border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to grow your {location.name} business?</h2>
            <p className="text-slate-400 mb-10 text-lg">
                Don't settle for a template. Get a custom-built revenue engine from your local experts.
            </p>
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1">
                Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </section>

      {/* Internal Links Footer */}
      <section className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Other Areas We Serve</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
                {locations.filter(l => l.slug !== location.slug).map((loc) => (
                    <Link 
                        key={loc.slug} 
                        href={`/locations/${loc.slug}`}
                        className="text-sm text-slate-400 hover:text-blue-400 hover:underline transition-colors"
                    >
                        Web Design {loc.name}
                    </Link>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
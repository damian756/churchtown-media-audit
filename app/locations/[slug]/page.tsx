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
    <main className="min-h-screen bg-slate-50 pt-32">
      
      {/* HERO SECTION */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
            
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
      <section className="px-6 py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why {location.name} Businesses Choose Us</h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {location.description}
                </p>
                
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-8">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-blue-600" />
                        Local Strategy Focus:
                    </h4>
                    <p className="text-blue-800">{location.industryFocus}</p>
                </div>

                <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">We know the local market (e.g., competitors near {location.landmark}).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">Face-to-face meetings available (We are only {location.travelTime} away).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-1" />
                        <span className="text-slate-700 font-medium">No outsourcing. All code written in-house in Sefton.</span>
                    </li>
                </ul>
            </div>
            
            <div className="relative h-[400px] w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-90"></div>
                 <div className="relative z-10 text-center p-8">
                    <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-2">{location.name} Operations</h3>
                    <p className="text-slate-400">Serviced directly from our Southport HQ</p>
                 </div>
            </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete Digital Domination</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    We don't just build websites; we build revenue engines tailored for the {location.name} economy.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-6 transition-transform">
                        <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">High-Speed Web Design</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                        We build websites that load in under 1 second. Essential for capturing {location.name}'s mobile users on the go.
                    </p>
                    <Link href="/services/web-design" className="text-blue-600 font-bold hover:underline flex items-center gap-1 text-sm">
                        Explore Design <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:rotate-6 transition-transform">
                        <BarChart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Local SEO ({location.name})</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                        Dominate the Google Map Pack for searches like "Service in {location.name}" or "Near {location.landmark}".
                    </p>
                    <Link href="/services/seo" className="text-emerald-600 font-bold hover:underline flex items-center gap-1 text-sm">
                        Dominate Local Search <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-500 hover:shadow-lg transition-all group">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:rotate-6 transition-transform">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Reputation Management</h3>
                    <p className="text-slate-600 mb-6 text-sm">
                        Automated systems to capture 5-star reviews from your satisfied {location.name} customers.
                    </p>
                    <Link href="/audit" className="text-purple-600 font-bold hover:underline flex items-center gap-1 text-sm">
                        Get Started <ArrowRight className="w-4 h-4"/>
                    </Link>
                </div>
            </div>
        </div>
      </section>

       {/* CTA */}
       <section className="bg-slate-900 py-24 px-6 text-center text-white border-t border-slate-800">
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
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Other Areas We Serve</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
                {locations.filter(l => l.slug !== location.slug).map((loc) => (
                    <Link 
                        key={loc.slug} 
                        href={`/locations/${loc.slug}`}
                        className="text-sm text-slate-600 hover:text-blue-600 hover:underline transition-colors"
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
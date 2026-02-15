import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Home, Star } from "lucide-react";
import { locations } from "@/lib/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Areas We Serve',
  description: 'Web Design & SEO services across the North West. From Liverpool to Preston, see our local case studies and travel times.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/locations',
  },
};

export default function LocationsIndex() {
  
  // 1. STRATEGIC SPLIT
  // We manually pick the "Heroes" to show first
  const heroSlugs = ["southport", "liverpool", "manchester", "preston"];
  
  const heroLocations = heroSlugs
    .map(slug => locations.find(l => l.slug === slug))
    .filter(Boolean) as typeof locations;

  // 2. AUTOMATIC ALPHABETICAL SORT FOR THE REST
  const otherLocations = locations
    .filter(l => !heroSlugs.includes(l.slug))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="min-h-screen bg-slate-950 pt-32 pb-24 px-6">
      
      {/* BREADCRUMBS */}
      <div className="max-w-6xl mx-auto mb-12 flex items-center gap-2 text-sm text-slate-400">
        <Link href="/" className="hover:text-blue-400 flex items-center gap-1">
            <Home className="w-3 h-3" /> Home
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-white font-medium">Locations</span>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
              Based in Southport
            </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Local Experts. <span className="text-blue-400">Regional Reach.</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Select your area below to see our local case studies and travel times.
        </p>
      </div>

      {/* GRID CONTAINER */}
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION 1: KEY CITIES (Highlighted) */}
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Key Service Hubs</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {heroLocations.map((loc) => (
                <Link 
                    key={loc.slug} 
                    href={`/locations/${loc.slug}`}
                    className="group bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-sm hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                        <Star className="w-12 h-12 text-blue-400 fill-blue-400/20" />
                    </div>
                    <div className="relative z-10">
                        <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{loc.name}</h3>
                        <p className="text-xs text-slate-400 font-medium">
                            {loc.slug === "southport" ? "Headquarters" : `${loc.travelTime} from HQ`}
                        </p>
                    </div>
                </Link>
            ))}
        </div>

        {/* SECTION 2: ALL LOCATIONS (Alphabetical) */}
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">All Locations (A-Z)</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {otherLocations.map((loc) => (
                <Link 
                    key={loc.slug} 
                    href={`/locations/${loc.slug}`}
                    className="group flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-400 hover:bg-blue-500/10 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-blue-400 transition-colors"></div>
                        <span className="font-bold text-slate-300 group-hover:text-blue-400">{loc.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 -rotate-45 group-hover:rotate-0 transition-transform" />
                </Link>
            ))}
        </div>

      </div>
    </main>
  );
}
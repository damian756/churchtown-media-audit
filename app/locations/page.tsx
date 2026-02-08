import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Clock, Home } from "lucide-react";
import { locations } from "@/lib/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // FIXED: Removed "| Churchtown Media" to prevent duplication by Root Layout
  title: 'Areas We Serve', 
  description: 'Web Design & SEO services across the North West. From Liverpool to Preston, see our local case studies and travel times.',
};

export default function LocationsIndex() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
      
      {/* BREADCRUMBS (SEO Structure) */}
      <div className="max-w-5xl mx-auto mb-12 flex items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600 flex items-center gap-1">
            <Home className="w-3 h-3" /> Home
        </Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-medium">Locations</span>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
              Based in Southport
            </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Local Experts. <span className="text-blue-600">Regional Reach.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We don't outsource. Our team is based in Churchtown and serves businesses across the North West. Select your area below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc) => (
            <Link 
                key={loc.slug} 
                href={`/locations/${loc.slug}`}
                // ADDED: Hover BG effect for premium feel
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-48"
            >
                <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:-rotate-45 transition-all duration-300" />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {loc.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-3 h-3" />
                        {/* FIXED: Logic to handle Southport HQ text cleanly */}
                        <span className="font-medium">
                            {loc.slug === "southport" ? "Headquarters" : `${loc.travelTime} from HQ`}
                        </span>
                    </div>
                </div>
            </Link>
        ))}
      </div>

    </main>
  );
}
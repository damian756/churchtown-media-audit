import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, AlertTriangle, Zap, Users, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO for Hotels, Restaurants and Venues | Southport & Blackpool",
  description:
    "Churchtown Media builds websites and SEO strategies for hospitality businesses in Southport and Blackpool. Hotels, restaurants, event venues. We know these markets. Based in Southport.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/sectors/hospitality",
  },
  openGraph: {
    title: "Hospitality & Tourism Web Design | Southport & Blackpool | Churchtown Media",
    description:
      "Websites and SEO for hotels, restaurants and venues in Southport and Blackpool. Built for direct bookings, seasonal traffic and the specific commercial context of these two markets.",
    url: "https://www.churchtownmedia.co.uk/sectors/hospitality",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media: Hospitality & Tourism",
      },
    ],
  },
};

const problems = [
  {
    title: "Slow sites losing bookings to OTAs",
    desc: "A hotel website that loads in four seconds is losing direct bookings to Booking.com on every search. Speed is not a technical nice-to-have. It is revenue.",
  },
  {
    title: "Seasonal keywords not ranked",
    desc: "Southport and Blackpool both have defined peak seasons and event-driven traffic spikes. Air Show, Illuminations, The Open, Southport Food & Drink Festival. Most hospitality sites are not positioned to capture any of it.",
  },
  {
    title: "No local pack presence",
    desc: "When someone searches 'hotels near Blackpool Tower' or 'restaurants near Lord Street', who appears in the map pack? Usually a competitor with a better-optimised Google Business Profile and more citations. That is fixable.",
  },
  {
    title: "Generic agency work that misses the market",
    desc: "A Manchester agency building a Blackpool hotel site does not know that Illuminations season runs September to November, or that the Winter Gardens is 300 metres away. Local knowledge is the difference between content that ranks and content that sits.",
  },
];

const opportunities = [
  {
    icon: TrendingUp,
    title: "MLEC: 515,000 additional Southport visitors by 2027",
    desc: "The Marine Lake Events Centre opens in 2027 and adds over half a million annual visitors to Southport. Hotels and restaurants that are ranking and converting by mid-2026 will take a disproportionate share of that demand.",
  },
  {
    icon: Calendar,
    title: "The Open 2026: Royal Birkdale, July 12–19",
    desc: "One of golf's four major championships, in Southport. Accommodation within 30 minutes is already scarce. Restaurants and hospitality businesses that rank for Open-related searches will capture visitors who can't get into the booked-up hotels.",
  },
  {
    icon: Users,
    title: "Blackpool's £300m+ regeneration pipeline",
    desc: "The Tower refurbishment, Winter Gardens development, the Blackpool Airport Enterprise Zone. Sustained investment over five-plus years means sustained visitor growth. Businesses that rank now capture returning visitors as the market grows.",
  },
  {
    icon: Zap,
    title: "Direct bookings vs OTA commission",
    desc: "Booking.com charges 15–18% commission. A hotel doing £500k in annual bookings through OTAs is paying up to £90k in commission. A fast, well-optimised direct booking site with a proper SEO strategy can shift that split significantly within 12 months.",
  },
];

const whatWeDeliver = [
  "Fast headless Next.js sites: sub-second load times on mobile",
  "Local SEO: Google Business Profile optimisation, citation building, map pack targeting",
  "Seasonal keyword strategy: event-driven content planned and published ahead of traffic spikes",
  "Direct booking optimisation: booking flow UX, trust signals, schema markup for hotels and restaurants",
  "Content built for AI search: structured to appear in Google AI Overviews and Perplexity",
  "Monthly SEO retainers with transparent tracking: positions, traffic, booking conversions",
];

export default function HospitalitySectorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">

      {/* HERO */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
              Southport &amp; Blackpool
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Web design and SEO<br />
            <span className="text-blue-400">for hospitality businesses.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Hotels, restaurants, venues. Two markets: Southport, with 8 million annual visitors and MLEC arriving in 2027. Blackpool, with 12 million and a £300m+ regeneration pipeline. Both have hospitality businesses that should be ranking and converting better than they are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/30"
            >
              Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 px-8 py-3.5 rounded-xl transition-all"
            >
              Free SEO audit
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            Most hospitality websites in both towns are leaving serious money on the table.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-7">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">The opportunity</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            Both markets have specific, time-sensitive opportunities that well-positioned businesses can take now.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {opportunities.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="bg-blue-950/30 border border-blue-900/50 rounded-2xl p-7">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{o.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">What we deliver</p>
          <h2 className="text-3xl font-bold text-white mb-10">The specifics.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whatWeDeliver.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">Proof</p>
          <h2 className="text-3xl font-bold text-white mb-6">We built SouthportGuide.co.uk.</h2>
          <p className="text-slate-400 max-w-2xl leading-relaxed mb-8">
            999+ hospitality businesses listed. The Open 2026 hub. Ranking for hotel, restaurant and attraction searches across Southport. We built it from scratch, we own it, and we operate it. That is a different level of knowledge about the local hospitality market than any agency that has never built in it.
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-bold transition-colors"
          >
            See the portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-blue-950/40 border-t border-blue-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to talk about your hospitality business?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            We work with hotels, restaurants and venues in Southport and Blackpool. Tell us where you are and what is not working. We will tell you honestly whether we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/30"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Free SEO audit first
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

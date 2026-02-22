import React from "react";
import Link from "next/link";
import { MapPin, Trophy, ArrowRight, CheckCircle2, Zap, BarChart, Users } from "lucide-react";
import { posts } from "@/lib/posts";
import type { Metadata } from "next";
import StatCard from "@/app/components/StatCard";

export const metadata: Metadata = {
  title: "Web Design & SEO Agency Southport | Churchtown Media",
  description:
    "Churchtown Media is a Southport-based web design and SEO agency. Fast websites, local SEO, and honest results — no city-centre prices, no outsourcing.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/locations/southport",
  },
  openGraph: {
    title: "Web Design & SEO Agency Southport | Churchtown Media",
    description:
      "Churchtown Media is a Southport-based web design and SEO agency. Fast websites, local SEO, and honest results — no city-centre prices, no outsourcing.",
    url: "https://www.churchtownmedia.co.uk/locations/southport",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media — Web Design & SEO in Southport",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Churchtown Media",
  "url": "https://www.churchtownmedia.co.uk/locations/southport",
  "description":
    "Churchtown Media is a Southport-based web design and SEO agency. Fast websites, local SEO, and honest results — no city-centre prices, no outsourcing.",
  "telephone": "+441704635785",
  "email": "hello@churchtownmedia.co.uk",
  "priceRange": "££",
  "areaServed": [
    { "@type": "City", "name": "Southport" },
    { "@type": "Place", "name": "Birkdale" },
    { "@type": "Place", "name": "Churchtown" },
    { "@type": "Place", "name": "Ainsdale" },
    { "@type": "Place", "name": "Marshside" },
    { "@type": "Place", "name": "Blowick" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Southport Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design Southport",
          "url": "https://www.churchtownmedia.co.uk/services/web-design",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO Southport",
          "url": "https://www.churchtownmedia.co.uk/services/seo",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Small Business Websites Southport",
          "url": "https://www.churchtownmedia.co.uk/services/small-business",
        },
      },
    ],
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:30",
    },
  ],
};

const southportBlogSlugs = [
  "invisible-on-lord-street",
  "mlec-effect-southport",
  "southport-air-show-seo-guide",
  "southport-golf-open-seo-guide",
];

export default function SouthportPage() {
  const relatedPosts = southportBlogSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 pt-32">

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="animated-blob absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Based in Southport — serving the whole borough</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Southport&apos;s Own<br />
              <span className="text-blue-500">Web &amp; SEO Agency.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Not a city agency that added Southport to a dropdown. We&apos;re a proper local business — we know Lord Street, we know the seasonal rhythms, and we know which Southport searches actually convert. Come and meet us. We don&apos;t charge city-centre rates either.
              <span className="block mt-4 text-sm text-slate-400">
                Serving: Birkdale • Churchtown • Ainsdale • Marshside • Blowick
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/audit"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-blue-600/20"
              >
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all backdrop-blur-md"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="px-6 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Southport Market Overview
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Data-driven insights into the Southport business landscape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <StatCard
              number="91,000"
              label="Population"
              color="blue"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all"
            />
            <StatCard
              number="3,200+"
              label="Local Businesses"
              color="green"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-600/50 transition-all"
            />
            <StatCard
              number="8M+"
              label="Annual Visitors"
              color="purple"
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all"
            />
          </div>
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border border-blue-600/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 rounded-xl flex-shrink-0">
                <BarChart className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Key Market Trend</h3>
                <p className="text-slate-300 leading-relaxed">
                  Mobile search spikes around the Air Show, The Open, and MLEC events — businesses that are already ranking capture the revenue. Those that aren&apos;t, don&apos;t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL INSIGHT */}
      <section className="px-6 py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Southport Businesses Choose Us
            </h2>
            <div className="text-slate-300 mb-6 text-lg leading-relaxed space-y-4">
              <p>
                Southport runs on two gears — local year-round businesses and the 8 million visitors who arrive for the beach, the Air Show, The Open, and Lord Street. Both groups search differently, and ranking well for both requires more than a generic North West strategy.
              </p>
              <p>
                Lord Street retail is competing with Liverpool ONE on one side and Amazon on the other. Hospitality businesses need to be visible when visitors are walking the seafront on a Saturday afternoon, phone in hand. With the Marine Lake Events Centre bringing an estimated 500,000 additional visitors, the businesses already ranking when that traffic arrives will take most of the revenue.
              </p>
              <p>
                We handle{" "}
                <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">
                  web design
                </Link>{" "}
                and{" "}
                <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">
                  local SEO
                </Link>{" "}
                for Southport businesses — from{" "}
                <Link href="/services/small-business" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">
                  small independents
                </Link>{" "}
                to established hospitality and professional services firms. All work is done in-house, in Sefton. No outsourcing.
              </p>
            </div>

            <div className="bg-blue-500/10 p-6 rounded-2xl border border-blue-500/30 mb-8">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-400" />
                Local Strategy Focus:
              </h4>
              <p className="text-blue-300">Tourism, Hospitality &amp; Retail</p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <span className="text-slate-300 font-medium">
                  We know the local market — competitors near Lord Street, seasonal search patterns, the lot.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <span className="text-slate-300 font-medium">
                  Face-to-face meetings available — we&apos;re five minutes from Lord Street.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                <span className="text-slate-300 font-medium">
                  No outsourcing. All code written in-house in Sefton.
                </span>
              </li>
            </ul>
          </div>

          <div className="relative min-h-[400px] w-full bg-slate-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center group border border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-90"></div>
            <div className="relative z-10 text-center p-8 w-full">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-2">Southport HQ</h3>
              <p className="text-slate-400 mb-6">Based in Southport — not a satellite office</p>
              <div className="space-y-4 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-4 h-4 text-blue-400" />
                  </div>
                  <span>Five minutes from Lord Street</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
                  <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span>Same-day response available</span>
                </div>
                <div className="pt-4 border-t border-slate-700/50 space-y-3">
                  <a
                    href="tel:+441704635785"
                    className="flex items-center justify-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm group/link"
                  >
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover/link:bg-blue-500/20 transition-colors">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">01704 635785</span>
                  </a>
                  <a
                    href="mailto:hello@churchtownmedia.co.uk"
                    className="flex items-center justify-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm group/link"
                  >
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover/link:bg-purple-500/20 transition-colors">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-xs">hello@churchtownmedia.co.uk</span>
                  </a>
                </div>
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
      <section className="py-24 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Understanding the Southport Digital Market
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Data-driven insights that inform our Southport SEO and web design strategies.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Common Challenges for Southport Businesses:
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-blue-400 text-xl shrink-0">→</span>
                <span className="text-slate-300">
                  Lord Street retail competing with Liverpool ONE and online — local footfall depends on winning digital visibility first
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-400 text-xl shrink-0">→</span>
                <span className="text-slate-300">
                  Capturing MLEC and Air Show search spikes and converting one-time visitors into returning customers
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-400 text-xl shrink-0">→</span>
                <span className="text-slate-300">
                  Ranking locally when Merseyside queries pull Liverpool-heavy results into Southport searches
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 p-6 rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-blue-400 shrink-0" />
              <p className="text-blue-300 font-bold">
                Southport clients see 67% increase in &apos;near me&apos; visibility during peak season
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We Do for Southport Businesses
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three services. All done in-house. All built around the Southport market.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:rotate-6 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Web Design</h3>
              <p className="text-slate-300 mb-6 text-sm">
                Fast, high-performance websites built in Next.js. Under 1 second load time. Built to rank and built to convert Southport&apos;s mobile-first visitors.
              </p>
              <Link
                href="/services/web-design"
                className="text-blue-400 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                Explore Web Design <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:rotate-6 transition-transform">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Local SEO (Southport)</h3>
              <p className="text-slate-300 mb-6 text-sm">
                Map Pack domination for searches like &quot;service in Southport&quot; or &quot;near Lord Street&quot;. Technical SEO, Google Business Profile, and local citations — all of it.
              </p>
              <Link
                href="/services/seo"
                className="text-emerald-400 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                Dominate Local Search <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:rotate-6 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Small Business Websites</h3>
              <p className="text-slate-300 mb-6 text-sm">
                Professional, fast websites for Southport independents — Lord Street shops, local trades, hospitality. No templates, no bloated WordPress. Priced for small businesses.
              </p>
              <Link
                href="/services/small-business"
                className="text-purple-400 font-bold hover:underline flex items-center gap-1 text-sm"
              >
                See Small Business Plans <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED READING */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-slate-900 border-y border-slate-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-center text-white">
              Related Reading
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Insights and strategies specifically relevant to Southport businesses
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map(
                (post) =>
                  post && (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-slate-800 border border-slate-700 hover:border-blue-600 rounded-2xl p-6 transition-all hover:scale-[1.02]"
                    >
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2 mb-4">{post.excerpt}</p>
                      <span className="text-sm font-bold text-blue-400 inline-flex items-center gap-1">
                        Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  )
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 px-6 text-center text-white border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to grow your Southport business?
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Come and talk to us. We&apos;re local, we&apos;re direct, and we&apos;ll tell you honestly what we think will work for your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1"
          >
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, TrendingUp, Building2, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO for Property Developers & Estate Agents | Southport & Blackpool",
  description:
    "Churchtown Media builds websites and SEO for property developers and estate agents in Southport and Blackpool. Headless Next.js, technical SEO, project-specific sites. Active pipelines in both towns.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/sectors/property",
  },
  openGraph: {
    title: "Property Web Design & SEO | Southport & Blackpool | Churchtown Media",
    description:
      "Fast, technically excellent websites for property developers and estate agents in Southport and Blackpool. Built for the active development pipelines in both towns.",
    url: "https://www.churchtownmedia.co.uk/sectors/property",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media: Property Web Design & SEO",
      },
    ],
  },
};

const problems = [
  {
    title: "Developer project sites built on Squarespace",
    desc: "A residential development selling homes at £300k+ deserves a website that reflects the quality of the product. Squarespace templates with stock photography and a contact form are not that. A fast headless site with proper schema, floorplan integrations and local SEO is.",
  },
  {
    title: "Estate agents with no local pack presence",
    desc: "When a buyer searches 'estate agents Southport' or 'property for sale Blackpool', the map pack matters. Agents that don't appear in it are invisible to the searchers with the highest intent. That is an SEO problem, and it is fixable.",
  },
  {
    title: "Development pipeline not driving search traffic",
    desc: "Both towns have significant development activity. Developers who build content around their pipeline, the local market, and the specific regeneration context of each town attract buyers, investors and commercial tenants via organic search. Most do not.",
  },
  {
    title: "Commercial property listed nowhere useful",
    desc: "Commercial property in Blackpool's Enterprise Zone or Southport's town centre gets listed on Rightmove and left there. An agent with an SEO-optimised commercial property section capturing organic searches for office, retail and industrial space in both towns has a significant advantage.",
  },
];

const pipelines = [
  {
    icon: TrendingUp,
    town: "Southport",
    title: "£37.5m Town Deal + MLEC",
    desc: "Southport's Town Deal is one of the largest in the North West. The Marine Lake Events Centre opens in 2027 and brings 515,000 additional annual visitors. Both drive residential and commercial property demand. Buyers and investors researching Southport will find developers with content positioned around this context.",
  },
  {
    icon: Building2,
    town: "Blackpool",
    title: "£300m+ regeneration corridor",
    desc: "The Tower refurbishment, the Winter Gardens development, the Blackpool Airport Enterprise Zone, and sustained Levelling Up investment. Blackpool's regeneration pipeline is multi-year and multi-sector. Commercial agents with content addressing this landscape are positioned for the searches it drives.",
  },
  {
    icon: Zap,
    town: "Both",
    title: "Coastal residential demand",
    desc: "Both towns attract buyers from Manchester, Liverpool and West Yorkshire seeking coastal property at prices not available in their origin cities. Hybrid working has extended the commuter radius significantly. Agents and developers with content targeting this buyer profile are capturing a growing search audience.",
  },
];

const whatWeDeliver = [
  "Headless Next.js development sites: project-specific, fast, designed to rank and convert",
  "Estate agent websites with full local SEO: map pack, citation building, area-specific content",
  "Commercial property pages built for organic search: not just portal listings",
  "Schema markup for property: ListingSchema, RealEstateAgent, and related structured data",
  "Content strategy around both towns' development pipelines: captures informed buyer and investor searches",
  "Off-plan and pre-launch landing pages built for lead capture and SEO simultaneously",
  "Monthly retainer SEO for ongoing inventory, market content and local signals",
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design & SEO for Property & Development',
  description: 'Churchtown Media builds websites and SEO strategies for property developers and estate agents in Southport and Blackpool.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Churchtown Media',
    url: 'https://www.churchtownmedia.co.uk',
    address: { '@type': 'PostalAddress', addressLocality: 'Southport', addressRegion: 'Merseyside', addressCountry: 'GB' },
  },
  areaServed: [
    { '@type': 'City', name: 'Southport' },
    { '@type': 'City', name: 'Blackpool' },
  ],
  serviceType: 'Web Design and SEO',
};

export default function PropertySectorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8">
            <Building2 className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-bold text-orange-400 uppercase tracking-wide">
              Developers · Estate Agents · Commercial Property
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Web design and SEO<br />
            <span className="text-orange-400">for property businesses.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
            Two towns with active development pipelines. Southport's £37.5m Town Deal and MLEC. Blackpool's £300m+ regeneration corridor. Buyers, investors and commercial tenants are researching both markets. Property businesses with the right digital presence capture that research at the point it converts.
          </p>
          <p className="text-slate-500 max-w-2xl leading-relaxed mb-10">
            We build project-specific development sites in headless Next.js, SEO-optimised agent websites, and content strategies built around the specific market context of each town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
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

      {/* PIPELINES */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">The market context</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            Both towns have active pipelines. Buyers and investors are searching.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {pipelines.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-orange-950/30 border border-orange-900/40 rounded-2xl p-7">
                  <div className="w-10 h-10 bg-orange-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="text-xs font-bold text-orange-400 uppercase tracking-wide mb-2">{p.town}</div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            Property businesses in both towns are consistently under-represented in organic search.
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-orange-950/40 border-t border-orange-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            What is your current search visibility?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            We can audit your site and show you exactly what your competition is doing, where the gaps are, and what a realistic improvement looks like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
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

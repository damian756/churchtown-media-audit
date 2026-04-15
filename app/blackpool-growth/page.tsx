import Link from "next/link";
import { ArrowRight, TrendingUp, Building2, Zap, Users, Calendar, CheckCircle2, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blackpool Business Growth Hub | Web Design, SEO & Digital Strategy | Churchtown Media",
  description:
    "The digital growth guide for Blackpool businesses. Tower refurbishment, Winter Gardens development, Enterprise Zone, Illuminations. What the £300m+ regeneration pipeline means for your online presence.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/blackpool-growth",
  },
  openGraph: {
    title: "Blackpool Business Growth Hub | Churchtown Media",
    description:
      "£300m+ regeneration pipeline. 12 million annual visitors. Winter Gardens, the Tower, the Enterprise Zone. What it means for Blackpool businesses and how to position before the growth arrives.",
    url: "https://www.churchtownmedia.co.uk/blackpool-growth",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Blackpool Business Growth Hub",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Blackpool Tower refurbishment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blackpool Tower is undergoing a major refurbishment as part of the broader Blackpool regeneration programme. The Grade I listed structure and its attractions are being upgraded to increase visitor dwell time and support the town's repositioning as a year-round destination.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Blackpool Airport Enterprise Zone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Blackpool Airport Enterprise Zone covers the former Blackpool Airport site and surrounding area, offering tax relief and simplified planning for businesses establishing or expanding operations. It is expected to bring thousands of jobs and significant commercial investment to the area.",
      },
    },
    {
      "@type": "Question",
      name: "How many visitors does Blackpool attract annually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Blackpool attracts approximately 12 million visitors per year, making it one of the most visited destinations in the UK outside London. The Illuminations season (September to November) alone draws approximately 3 million visitors.",
      },
    },
  ],
};

const regenerationProjects = [
  {
    icon: Building2,
    title: "Blackpool Tower Refurbishment",
    status: "Ongoing",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/30",
    desc: "The Grade I listed Tower and its complex of attractions is undergoing sustained investment to modernise visitor experience and increase dwell time. The Tower is Blackpool's single most recognisable asset and its improvement has a multiplier effect across the hospitality market within walking distance.",
    impact: "Increased footfall for hospitality businesses on the Promenade and immediate surroundings.",
  },
  {
    icon: Users,
    title: "Winter Gardens Development",
    status: "In progress",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    desc: "The Winter Gardens complex on Church Street is one of the largest entertainment venues in Europe. The ongoing restoration and development programme is aimed at restoring it to major conference, event and entertainment venue status, with sustained investment across the Victorian complex.",
    impact: "Conference delegates, event visitors and entertainment audiences: all high-value hospitality spend.",
  },
  {
    icon: Zap,
    title: "Blackpool Airport Enterprise Zone",
    status: "Active",
    statusColor: "text-orange-400 bg-orange-400/10 border-orange-400/30",
    desc: "The Enterprise Zone on the former airport site offers business rate relief and simplified planning for companies establishing or expanding in Blackpool. Professional services, technology, manufacturing and logistics businesses are the primary targets. The zone is expected to create thousands of jobs and generate significant commercial property demand.",
    impact: "New workforce in Blackpool: employed, spending locally, requiring professional services.",
  },
  {
    icon: TrendingUp,
    title: "Levelling Up Investment",
    status: "Multi-year",
    statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    desc: "Blackpool has received significant Levelling Up funding, including investment in the town centre, seafront infrastructure, and transport connections. The investment programme is multi-year and spans residential, commercial and public realm improvements across multiple parts of the town.",
    impact: "Sustained construction and development activity: demand for property, professional services, and hospitality.",
  },
];

const visitorStats = [
  { value: "12M", label: "Annual visitors", sub: "One of the UK's most visited destinations" },
  { value: "3M", label: "Illuminations visitors", sub: "September to November season" },
  { value: "£300m+", label: "Regeneration pipeline", sub: "Committed multi-year investment" },
  { value: "45 mins", label: "From Southport", sub: "Same coastal tourist economy" },
];

const sectors = [
  {
    href: "/sectors/hospitality",
    name: "Hospitality & Tourism",
    desc: "Hotels, restaurants and venues within reach of 12 million annual visitors. We know what it takes to capture that traffic.",
  },
  {
    href: "/sectors/property",
    name: "Property & Development",
    desc: "Active commercial and residential pipeline. Developers and agents who rank for Blackpool property searches now are positioned for the growth.",
  },
  {
    href: "/sectors/professional-services",
    name: "Professional Services",
    desc: "Enterprise Zone and regeneration investment brings new businesses to Blackpool. They need accountants, solicitors and financial advisers.",
  },
  {
    href: "/sectors/golf",
    name: "Golf Clubs",
    desc: "Royal Lytham & St Annes is 10 minutes from Blackpool. Championship links golf and the coastal visitor market are the same audience.",
  },
];

export default function BlackpoolGrowthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-slate-950 text-white pt-24">

        {/* HERO */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">
                Blackpool 2026
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
              Blackpool has a<br />
              <span className="text-blue-400">£300m+ pipeline.</span><br />
              <span className="text-slate-300 text-3xl md:text-4xl font-bold">Is your business positioned for it?</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
              Tower refurbishment. Winter Gardens restoration. Enterprise Zone. Levelling Up investment. Blackpool has more committed regeneration capital than at any point in a generation. Twelve million annual visitors already. The question for Blackpool businesses is whether their digital presence is ready for the growth that follows.
            </p>
            <p className="text-slate-500 max-w-2xl leading-relaxed mb-10">
              Churchtown Media is based in Southport, 45 minutes from Blackpool. We know coastal tourist economies because we operate in one. The market dynamics in both towns are closely related: seasonality, event-driven traffic, hospitality dependency, regeneration investment. Same market, different postcode.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-blue-900/30"
              >
                Talk to us about Blackpool <ArrowRight className="w-4 h-4" />
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

        {/* STATS BAR */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {visitorStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-blue-400 mb-1">{s.value}</div>
                  <div className="font-bold text-white text-sm mb-1">{s.label}</div>
                  <div className="text-xs text-slate-500">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REGENERATION PROJECTS */}
        <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">The pipeline</p>
            <h2 className="text-3xl font-bold text-white mb-4 max-w-2xl">
              Four projects that change the commercial context for Blackpool businesses.
            </h2>
            <p className="text-slate-400 max-w-2xl mb-12">
              Each project increases visitor numbers, commercial activity, or business density in the town. For businesses with the right digital presence, each one is an opportunity.
            </p>
            <div className="space-y-6">
              {regenerationProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div key={project.title} className="bg-slate-900 border border-slate-700 rounded-2xl p-8">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          <span className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full border ${project.statusColor} w-fit`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-4">{project.desc}</p>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                          <p className="text-teal-300 text-sm font-medium">{project.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ILLUMINATIONS CALLOUT */}
        <section className="py-12 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="bg-blue-950/50 border border-blue-800/40 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Seasonal opportunity</p>
                <h3 className="text-xl font-bold text-white mb-2">The Illuminations: 3 million visitors, September to November.</h3>
                <p className="text-slate-400 leading-relaxed">
                  The Blackpool Illuminations run from September to November each year and draw approximately 3 million visitors. Searches for accommodation, restaurants and attractions spike sharply in the six weeks before and during the season. Hospitality businesses that have SEO in place before the season starts capture that traffic. Businesses that don't appear in search during Illuminations season are missing their single biggest annual opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTORS */}
        <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">Who we work with in Blackpool</p>
            <h2 className="text-3xl font-bold text-white mb-10 max-w-2xl">
              Four sectors where the regeneration pipeline creates specific digital opportunity.
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {sectors.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block bg-slate-900 border border-slate-700 hover:border-blue-500/50 rounded-2xl p-7 transition-all hover:-translate-y-0.5"
                >
                  <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{s.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                    Read the sector guide <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHURCHTOWN MEDIA FOR BLACKPOOL */}
        <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">Why us</p>
            <h2 className="text-3xl font-bold text-white mb-6">We are not a Blackpool agency. That is an advantage.</h2>
            <div className="prose prose-invert max-w-2xl">
              <p className="text-slate-400 leading-relaxed mb-4">
                Churchtown Media is based in Southport. We cover Southport and Blackpool specifically because they are two coastal towns with the same market dynamics: seasonal tourism, hospitality dependency, event-driven traffic, active regeneration investment.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                We built SouthportGuide.co.uk: 999+ businesses, ranking for hospitality and tourism searches across the town. We built SeftonLinks.com: championship golf guides in 18 languages. We understand coastal tourism markets at a technical and editorial depth that a generalist agency does not.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We are 45 minutes from Blackpool. We can be on site when needed. And we charge based on the work, not based on a postcode.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/portfolio" className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-bold transition-colors">
                See our work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors">
                About Churchtown Media <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 bg-blue-950/40 border-t border-blue-900/30">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to talk about your Blackpool business?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              We work with hospitality, golf, professional services and property businesses in Southport and Blackpool. Tell us what you are working on.
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
    </>
  );
}

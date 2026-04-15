import Link from "next/link";
import { ArrowRight, Hotel, Trophy, Briefcase, Building2, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sectors | Web Design & SEO for Southport & Blackpool Businesses",
  description:
    "Churchtown Media works with hospitality, golf, professional services and property businesses in Southport and Blackpool. Fast Next.js sites and SEO that actually ranks.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/sectors",
  },
  openGraph: {
    title: "Sectors | Churchtown Media",
    description:
      "Web design and SEO for hospitality, golf, professional services and property in Southport and Blackpool.",
    url: "https://www.churchtownmedia.co.uk/sectors",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media: Sectors",
      },
    ],
  },
};

const sectors = [
  {
    icon: Hotel,
    name: "Hospitality & Tourism",
    href: "/sectors/hospitality",
    tagline: "Hotels, restaurants, venues in Southport & Blackpool",
    desc: "Two of the UK's most active coastal tourism markets. Southport has 8 million annual visitors and MLEC arriving in 2027. Blackpool has 12 million. Both have hospitality businesses with websites that don't reflect the scale of what they offer. That's the gap.",
    stat: "12M",
    statLabel: "annual Blackpool visitors",
    colour: "border-blue-500/40 hover:border-blue-400/60",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-400",
    accentText: "text-blue-400",
  },
  {
    icon: Trophy,
    name: "Golf Clubs",
    href: "/sectors/golf",
    tagline: "Championship and members' clubs on the Lancashire coast",
    desc: "We built SeftonLinks.com: championship golf guides for Royal Birkdale, Hillside and Southport & Ainsdale in 18 languages. Golf clubs on the Lancashire coast have exceptional product and consistently poor digital presence. The Open 2026 at Royal Birkdale makes this the right moment.",
    stat: "18",
    statLabel: "languages, SeftonLinks",
    colour: "border-teal-500/40 hover:border-teal-400/60",
    iconBg: "bg-teal-600/20",
    iconColor: "text-teal-400",
    accentText: "text-teal-400",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    href: "/sectors/professional-services",
    tagline: "Solicitors, accountants, financial advisers",
    desc: "The most under-digitised high-value sector in both towns. Firms turning over millions with websites built in 2016. No technical SEO. No local pack presence. No content strategy. The opportunity is significant and the bar to clear is low.",
    stat: "£2M+",
    statLabel: "typical firm turnover",
    colour: "border-purple-500/40 hover:border-purple-400/60",
    iconBg: "bg-purple-600/20",
    iconColor: "text-purple-400",
    accentText: "text-purple-400",
  },
  {
    icon: Building2,
    name: "Property & Development",
    href: "/sectors/property",
    tagline: "Developers, estate agents, commercial property",
    desc: "Active development pipelines in both towns. Southport's £37.5m Town Deal and MLEC. Blackpool's £300m+ regeneration corridor. Developers need project-specific sites. Agents need technical SEO and content that converts. Headless Next.js is the right tool for both.",
    stat: "£300m+",
    statLabel: "Blackpool regen pipeline",
    colour: "border-orange-500/40 hover:border-orange-400/60",
    iconBg: "bg-orange-600/20",
    iconColor: "text-orange-400",
    accentText: "text-orange-400",
  },
];

export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-3 py-1.5 mb-8">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
              Southport &amp; Blackpool
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Four sectors.<br />
            <span className="text-teal-400">Two towns.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
            Churchtown Media works with businesses in four sectors across Southport and Blackpool. Not every sector. Not every town. These four, in these two markets, because we know them well enough to be useful.
          </p>
          <p className="text-slate-500 max-w-2xl leading-relaxed">
            Southport-based. Twenty years in web development. Fifteen in SEO. We built the Sefton Coast Network from scratch and we know what it takes to rank and convert in coastal tourism markets.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <Link
                key={sector.href}
                href={sector.href}
                className={`group block bg-slate-900 border ${sector.colour} rounded-2xl p-8 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/40`}
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className={`shrink-0 w-14 h-14 ${sector.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${sector.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">{sector.name}</h2>
                        <p className={`text-sm font-semibold ${sector.accentText}`}>{sector.tagline}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className={`text-2xl font-black ${sector.accentText}`}>{sector.stat}</div>
                        <div className="text-xs text-slate-500 font-medium">{sector.statLabel}</div>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-4">{sector.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-400 group-hover:text-white group-hover:gap-3 transition-all">
                      Read the sector guide <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Not in one of these sectors?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            These are the four sectors where we have specific, demonstrable knowledge. If your business is outside them, we can still help, but we will tell you honestly if we are not the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/30"
          >
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

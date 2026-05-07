import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: 'Case Studies | Churchtown Media',
  description: 'SIBA Digital, Alotek Shelters, and the Sefton Coast Network. Three engagements demonstrating technical SEO, Next.js architecture, and digital investigation methodology.',
  alternates: { canonical: 'https://www.churchtownmedia.co.uk/case-studies' },
  openGraph: {
    title: 'Case Studies | Churchtown Media',
    description: 'SIBA Digital: BBC News, Private Eye. Alotek Shelters: 10 number-one rankings, month one. Sefton Coast Network: five sites, built and operated.',
    url: 'https://www.churchtownmedia.co.uk/case-studies',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Three engagements. Each demonstrates a different capability.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            The work below is live and verifiable. No projected figures, no anonymised results that cannot be checked.
          </p>
        </div>
      </section>

      {/* SIBA */}
      <section id="siba" className="py-20 px-6 bg-slate-900 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-slate-600 font-mono text-sm">01</span>
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Primary case study</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">SIBA Digital</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            A public interest investigation platform built using Next.js, structured data and OSINT methodology. Nine reports. BBC News, Private Eye, national press.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              ["Type", "Public interest investigation platform"],
              ["Technology", "Next.js, TypeScript, structured data, OSINT methodology"],
              ["Reports published", "9 investigation reports"],
              ["Press coverage", "BBC News, Private Eye, national press"],
              ["Regulatory impact", "Cited in formal complaints to regulatory bodies"],
              ["Built in", "One Easter weekend, from a phone"],
            ].map(([label, value]) => (
              <div key={label as string} className="bg-slate-950 border border-slate-800 rounded-xl px-5 py-4">
                <div className="text-slate-500 text-xs font-medium mb-1">{label}</div>
                <div className="text-white text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-slate-400 leading-relaxed mb-10">
            <h3 className="text-white font-bold text-lg">The situation</h3>
            <p>
              SIBA Digital was not a client engagement. It is a platform I built and operate. The investigation methodology came first. The technical architecture was designed to support structured, verifiable publication of public records investigations at a quality level that would withstand press scrutiny.
            </p>
            <h3 className="text-white font-bold text-lg">The methodology</h3>
            <p>
              Company House data, land registry, planning applications, Companies House beneficial ownership registers, press archive, structured web data. All public. All cross-referenced. The structured data layer means every entity, every relationship, every source is machine-readable as well as human-readable.
            </p>
            <p>
              The result is a platform where every claim is sourced and every source is linked. This is not editorial opinion. It is structured public records documentation.
            </p>
            <h3 className="text-white font-bold text-lg">The result</h3>
            <p>
              BBC News coverage. Private Eye coverage. National press. Formal complaints to regulatory bodies citing the SIBA reports. The investigation reached audiences it was designed to reach because the platform was built to be credible, indexed, and navigable by journalists who needed to verify quickly.
            </p>
            <p className="text-slate-300 font-medium">
              The commercial application: the same methodology applied to an organisation&apos;s own public digital footprint. What does your organisation look like to someone doing what SIBA does? That is the Digital Footprint Intelligence service.
            </p>
          </div>

          <div className="flex gap-5">
            <a
              href="https://www.siba.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
            >
              Visit SIBA Digital <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/services#footprint-intelligence"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm transition-colors"
            >
              Digital Footprint service <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Alotek */}
      <section id="alotek" className="py-20 px-6 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-slate-600 font-mono text-sm">02</span>
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Retained advisory</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">Alotek Shelters</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            UK bus shelter and canopy manufacturer. Retained technical advisory. Previous agency: zero measurable results in 12 months. Month one of retainer: 10 number-one rankings on every core commercial keyword.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              ["Sector", "Manufacturing (bus shelters, canopies, walkways)"],
              ["Engagement type", "Retained technical SEO advisory"],
              ["Previous position", "'Bus shelter suppliers': position 16 on Google"],
              ["Month one result", "#1 for every tracked commercial keyword"],
              ["Timeframe to results", "30 days from retainer start"],
              ["Status", "Ongoing retained client"],
            ].map(([label, value]) => (
              <div key={label as string} className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4">
                <div className="text-slate-500 text-xs font-medium mb-1">{label}</div>
                <div className="text-white text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-slate-400 leading-relaxed mb-10">
            <h3 className="text-white font-bold text-lg">The situation</h3>
            <p>
              Alotek Shelters had been with a digital agency for 12 months. They were paying a monthly retainer and had zero verifiable improvement in search visibility. Their primary commercial keyword, &quot;bus shelter suppliers,&quot; ranked at position 16. Their website was technically sound but structurally unoptimised for the specific search landscape their buyers used.
            </p>
            <h3 className="text-white font-bold text-lg">The approach</h3>
            <p>
              Crawl audit. Structured data implementation across product categories, case studies and service pages. Content architecture review. Internal linking restructure. Schema.org markup aligned with commercial intent. Google AI Overview optimisation for featured snippet positioning.
            </p>
            <p>
              No black-hat tactics. No link schemes. Structural work that gave Google exactly what it needed to understand what Alotek sold and to whom.
            </p>
            <h3 className="text-white font-bold text-lg">The result</h3>
            <p>
              Within 30 days: number one for &quot;bus shelter suppliers,&quot; &quot;bus shelter manufacturers,&quot; &quot;bus shelter repairs,&quot; and every other tracked commercial term. AI Overview appearances on primary queries. The client remains on a retained advisory basis.
            </p>
          </div>

          <a
            href="https://www.alotekshelters.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-semibold text-sm transition-colors"
          >
            Visit Alotek Shelters <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Network */}
      <section id="network" className="py-20 px-6 bg-slate-900 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-slate-600 font-mono text-sm">03</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Owned and operated</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">Sefton Coast Network</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Five editorial sites built and operated simultaneously on the same Next.js architecture. Demonstrates publishing infrastructure at scale. All live, all ranking, all owned.
          </p>

          <div className="space-y-3 mb-10">
            {[
              { name: "SouthportGuide.co.uk", desc: "Visitor guide and business directory. 999+ venues. The Open 2026 hub. Next.js, Prisma, PostgreSQL.", url: "https://www.southportguide.co.uk" },
              { name: "FormbyGuide.co.uk", desc: "Local guide to Formby. Red squirrels, National Trust beach, pinewoods, village dining. First dedicated guide to the area.", url: "https://www.formbyguide.co.uk" },
              { name: "SeftonLinks.com", desc: "Championship links golf in 18 languages. Royal Birkdale, Hillside, Formby. Internationalised with next-intl.", url: "https://www.seftonlinks.com" },
              { name: "SeftonCoastWildlife.co.uk", desc: "257-species database. Birds, mammals, insects, plants. Special Area of Conservation coverage.", url: "https://www.seftoncoastwildlife.co.uk" },
            ].map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4 bg-slate-950 border border-slate-800 hover:border-slate-600 rounded-xl px-5 py-4 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white text-sm">{site.name}</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-slate-400 transition-colors" />
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed">{site.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="space-y-4 text-slate-400 leading-relaxed">
            <h3 className="text-white font-bold text-lg">What this demonstrates</h3>
            <p>
              Five distinct editorial sites, cross-linked contextually, each with its own audience, SEO strategy, and technical requirements. Built on the same foundation and maintained by one person alongside client work. This is what properly engineered content infrastructure looks like when it is built to compound rather than to be rebuilt every two years.
            </p>
            <p>
              Each site uses the same Next.js App Router architecture, TypeScript, Tailwind CSS v4 and Vercel deployment. The SeftonLinks internationalisation covers 18 languages using next-intl. SouthportGuide uses Prisma with PostgreSQL on Neon for the business directory database. SeftonCoastWildlife runs a 257-species species database from static TypeScript data files.
            </p>
            <p className="text-slate-300 font-medium">
              The network is the proof of concept for everything Churchtown Media builds for clients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            If your organisation has a challenge that fits, we should talk.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Describe the problem. We will respond directly and tell you whether this is the right engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-all text-sm"
            >
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm transition-colors"
            >
              Service detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

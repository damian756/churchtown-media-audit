import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies | Churchtown Media",
  description:
    "SIBA Digital and the Sefton Coast Network. Two bodies of work demonstrating Next.js architecture, structured data strategy, OSINT methodology, and four-site publishing at scale.",
  alternates: { canonical: "https://www.churchtownmedia.co.uk/case-studies" },
  openGraph: {
    title: "Case Studies | Churchtown Media",
    description:
      "SIBA Digital: nine published reports, formal regulatory complaints, solicitor contact. Sefton Coast Network: four editorial sites, built and operated. Both live. Both verifiable.",
    url: "https://www.churchtownmedia.co.uk/case-studies",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Case Studies
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-8">Two bodies of work. Both live. Both built from nothing.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] max-w-xl">
              No anonymised client results, no projected figures. Everything here is owned, operated, and publicly verifiable.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* SIBA */}
      <section id="siba" className="py-28 px-6 bg-[#f5f5f0] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#a0a0a0] font-mono text-xs">01</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#2c4a52]">
                Primary case study
              </span>
            </div>
            <h2 className="mb-3">SIBA Digital</h2>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] mb-10 max-w-xl">
              A public interest investigation platform built using Next.js, structured data and OSINT methodology. Nine published reports. Formal regulatory complaints. Solicitor contact from named parties.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-[#e0e0d8] divide-x divide-[#e0e0d8] grid grid-cols-3 mb-10">
              {[
                { value: "9", label: "Reports" },
                { value: "55%+", label: "Senior audience" },
                { value: "1", label: "Easter weekend" },
              ].map((s) => (
                <div key={s.label} className="px-6 py-6 text-center">
                  <p className="text-[32px] font-semibold text-[#112d6e] leading-none">{s.value}</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-widest text-[#a0a0a0]">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-6 text-[15px] leading-relaxed text-[#3d3d3d] mb-10">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The situation</p>
                <p>
                  SIBA Digital was not a client engagement. It is a platform I built and operate. The investigation methodology came first. The technical architecture was designed to support structured, verifiable publication of public records investigations at a quality level that would withstand press scrutiny.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The methodology</p>
                <p>
                  Company House data, land registry, planning applications, Companies House beneficial ownership registers, press archive, structured web data. All public. All cross-referenced. The structured data layer means every entity, every relationship, every source is machine-readable as well as human-readable.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The result</p>
                <p>
                  Formal complaints to regulatory bodies citing the SIBA reports. Solicitors acting for named parties made contact. A single published analysis reached professionals from the House of Commons, MHCLG, Transport for London, and Savills, with over 55% of the audience holding senior, director, or executive positions. The platform was built to be credible, indexed, and navigable. It is.
                </p>
                <p className="mt-3 text-[#1c1c1c] font-medium">
                  The commercial application: the same methodology applied to an organisation&apos;s own public digital footprint. That is the Digital Footprint Intelligence service.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex gap-6">
              <a
                href="https://www.siba.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Visit SIBA Digital <ExternalLink size={13} />
              </a>
              <Link
                href="/services#footprint-intelligence"
                className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
              >
                Digital Footprint service <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* Network */}
      <section id="network" className="py-28 px-6 bg-[#f5f5f0] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#a0a0a0] font-mono text-xs">02</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#2c4a52]">
                Owned and operated
              </span>
            </div>
            <h2 className="mb-3">Sefton Coast Network</h2>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] mb-10 max-w-xl">
              Four editorial sites built and operated simultaneously on the same Next.js architecture. All live, all ranking, all owned.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-3 mb-10">
              {[
                {
                  name: "SouthportGuide.co.uk",
                  desc: "Visitor guide and business directory. 999+ venues. The Open 2026 hub. Next.js, Prisma, PostgreSQL.",
                  url: "https://www.southportguide.co.uk",
                },
                {
                  name: "FormbyGuide.co.uk",
                  desc: "Local guide to Formby. Red squirrels, National Trust beach, pinewoods, village dining.",
                  url: "https://www.formbyguide.co.uk",
                },
                {
                  name: "SeftonLinks.com",
                  desc: "Championship links golf in 18 languages. Royal Birkdale, Hillside, Formby. Internationalised with next-intl.",
                  url: "https://www.seftonlinks.com",
                },
                {
                  name: "SeftonCoastWildlife.co.uk",
                  desc: "257-species database. Birds, mammals, insects, plants. Special Area of Conservation coverage.",
                  url: "https://www.seftoncoastwildlife.co.uk",
                },
              ].map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 bg-white border border-[#e0e0d8] hover:border-[#c8c8c0] px-6 py-5 transition-colors card-hover"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[14px] font-medium text-[#1c1c1c]">{site.name}</span>
                      <ExternalLink size={11} className="text-[#a0a0a0] group-hover:text-[#6b6b6b] transition-colors" />
                    </div>
                    <p className="text-[13px] text-[#6b6b6b] leading-relaxed">{site.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-4 text-[15px] leading-relaxed text-[#3d3d3d]">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">
                What this demonstrates
              </p>
              <p>
                Four distinct editorial sites, cross-linked contextually, each with its own audience, SEO strategy, and technical requirements. Built on the same foundation and maintained by one person alongside client work. This is what properly engineered content infrastructure looks like when it is built to compound rather than to be rebuilt every two years.
              </p>
              <p className="text-[#1c1c1c] font-medium">
                The network is the proof of concept for everything Churchtown Media builds for clients.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* The Sandgrounder */}
      <section id="sandgrounder" className="py-28 px-6 bg-[#f5f5f0] scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-[#6b6b6b] mb-4">Independent publication</p>
            <h2 className="mb-3">The Sandgrounder</h2>
            <p className="text-[15px] text-[#3d3d3d] mb-8 max-w-xl leading-relaxed">
              A standalone editorial publication covering Southport. Independent opinion, satire, and reporting for a general audience. Companion to SIBA Digital&apos;s investigation work, built on the same Next.js architecture.
            </p>
            <div className="space-y-4 text-[15px] text-[#3d3d3d] leading-relaxed max-w-xl">
              <p>
                Where SIBA Digital publishes structured reports for a professional and regulatory audience, The Sandgrounder publishes the same underlying material in a form that Southport residents can read, share, and act on. Satire, opinion, and factual reporting. All sourced. All legally reviewed.
              </p>
              <p>
                Built and launched in a single session. Full SEO architecture, share buttons, newsletter integration, contact form, sitemap, legal and privacy pages. Live from day one.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://www.thesandgrounder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Visit The Sandgrounder <ExternalLink size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="mb-4">If your organisation has a challenge that fits, we should talk.</h2>
            <p className="text-[15px] text-[#3d3d3d] mb-8 max-w-xl leading-relaxed">
              Describe the problem. We will respond directly and tell you whether this is the right engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Start a conversation <ArrowRight size={13} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
              >
                Service detail <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

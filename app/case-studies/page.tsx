import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies | Churchtown Media",
  description:
    "SIBA Digital, the Sefton Coast Network, and The Sandgrounder. Three bodies of work demonstrating Next.js architecture, structured data strategy, OSINT methodology, four-site publishing at scale, and independent editorial publication.",
  alternates: { canonical: "https://www.churchtownmedia.co.uk/case-studies" },
  openGraph: {
    title: "Case Studies | Churchtown Media",
    description:
      "SIBA Digital: twelve published reports across four active investigations, formal regulatory complaints, solicitor contact. Sefton Coast Network: four editorial sites, built and operated. The Sandgrounder: independent Southport editorial publication. All three live. All three verifiable.",
    url: "https://www.churchtownmedia.co.uk/case-studies",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
  },
};

const sibaStats = [
  { value: "12", label: "Reports published" },
  { value: "26", label: "FOI requests filed" },
  { value: "55%+", label: "Senior audience" },
];

const networkStats = [
  { value: "4", label: "Sites operated" },
  { value: "999+", label: "Venues indexed" },
  { value: "257", label: "Wildlife species" },
];

const sandgrounderStats = [
  { value: "7", label: "Pieces published" },
  { value: "3", label: "Content categories" },
  { value: "1", label: "Day to launch" },
];

const sibaMilestones = [
  { date: "Apr 2026", event: "River Law Limited sent letter before action. SIBA filed SRA report 30 April 2026." },
  { date: "May 2026", event: "Formal complaint filed with Sefton Council Chief Executive. Acknowledged within 30 minutes. Separate complaint filed with the Monitoring Officer." },
  { date: "May 2026", event: "Report 12 published: King of Southport. Full structural map across VisitSouthport, BID, MLEC, the Airshow, and Salt and Tar. National journalists engaged within hours." },
  { date: "Jun 2026", event: "Stage 2 formal complaint filed directly with Phil Porter. 11 internal review decisions received. Active investigations expanded: Rochdale, Leicester, and Ripon." },
  { date: "Jun 2026", event: "BID Governance in the UK: The Complete Independent Guide published at siba.digital/resources/bid-governance. Reached House of Commons and MHCLG professionals." },
];

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
            <h1 className="mb-8">Three bodies of work. All three live. All three built from nothing.</h1>
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
                Investigation platform
              </span>
            </div>
            <h2 className="mb-3">SIBA Digital</h2>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] mb-10 max-w-xl">
              A public interest investigation platform covering governance failures in Business Improvement Districts and local public bodies across the UK. Active investigations in Southport, Rochdale, Leicester, and Ripon. Built on Next.js with structured data throughout. Every claim sourced to a primary public record.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-[#e0e0d8] divide-x divide-[#e0e0d8] grid grid-cols-3 mb-10">
              {sibaStats.map((s) => (
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
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The approach</p>
                <p>
                  Companies House filings. Land Registry title registers. Published supplier spend data. Freedom of Information disclosures. Planning applications. Filed accounts. All public. All cross-referenced. The structured data layer means every entity, every relationship, every source is machine-readable as well as human-readable. Nothing is alleged that is not sourced.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The scope</p>
                <p>
                  Founding investigation in Southport: one Sefton Council officer accumulating unreviewed authority across every relevant function in the town's visitor economy. Adjacent threads: a council-owned hospitality company with £1.945 million in accumulated losses, a land deal executed without published valuations, a media contractor with undisclosed commercial relationships to the bodies it covers, and a property company owning the body that accredits the BID it advises. Active investigations now running in Rochdale (undeclared BID directorship by an Audit Committee chair), Leicester (director network and operating agreement), and Ripon (benchmark for compliant governance).
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The results</p>
                <p>
                  A single published analysis reached professionals from the House of Commons, MHCLG, Savills, and AtkinsRéalis, and drew direct interest from national journalists within hours of publication. Over 55% of the audience held senior, director, or executive positions. Formal regulatory complaints filed. Solicitors acting for named parties made contact. The platform was built to be credible, indexed, and navigable under scrutiny. It is.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={175}>
            <div className="mb-10">
              <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-5">Recent milestones</p>
              <div className="space-y-0 border-l border-[#e0e0d8]">
                {sibaMilestones.map((m, i) => (
                  <div key={i} className="relative pl-6 pb-5">
                    <div className="absolute left-[-4.5px] top-[5px] w-2 h-2 rounded-full bg-[#112d6e]" />
                    <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-0.5">{m.date}</p>
                    <p className="text-[14px] text-[#3d3d3d] leading-relaxed">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white border border-[#e0e0d8] px-6 py-5 mb-10">
              <p className="text-[13px] text-[#3d3d3d] leading-relaxed">
                <span className="font-medium text-[#1c1c1c]">The commercial application:</span> the same methodology applied to an organisation&apos;s own public digital footprint. What is visible, to whom, and what it implies. That is the Digital Footprint Intelligence service.
              </p>
            </div>
          </Reveal>

          <Reveal delay={225}>
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
                Publishing network
              </span>
            </div>
            <h2 className="mb-3">Sefton Coast Network</h2>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] mb-10 max-w-xl">
              Four editorial sites built and operated simultaneously on the same Next.js architecture. All live, all ranking, all owned.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-[#e0e0d8] divide-x divide-[#e0e0d8] grid grid-cols-3 mb-10">
              {networkStats.map((s) => (
                <div key={s.label} className="px-6 py-6 text-center">
                  <p className="text-[32px] font-semibold text-[#112d6e] leading-none">{s.value}</p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-widest text-[#a0a0a0]">{s.label}</p>
                </div>
              ))}
            </div>
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
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#a0a0a0] font-mono text-xs">03</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#2c4a52]">
                Independent publication
              </span>
            </div>
            <h2 className="mb-3">The Sandgrounder</h2>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] mb-10 max-w-xl">
              Independent opinion, satire, and reporting from Southport. The public-facing companion to SIBA Digital, built for a general audience rather than a professional one.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white border border-[#e0e0d8] divide-x divide-[#e0e0d8] grid grid-cols-3 mb-10">
              {sandgrounderStats.map((s) => (
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
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The rationale</p>
                <p>
                  SIBA Digital publishes structured reports for a professional and regulatory audience. The Sandgrounder publishes the same underlying material in a form that Southport residents can read, share, and act on. Satire, opinion, and factual reporting. All sourced. All legally reviewed. The FOI tracker, the conflicts of interest, the governance failures — told without the register of a compliance document.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2">The build</p>
                <p>
                  Full Next.js App Router architecture. Dynamic sitemap. robots.txt. Per-article Open Graph and Twitter card metadata. JSON-LD Article schema on every piece. Newsletter integration via Resend. Share buttons across all platforms including Web Share API. Contact form with Resend delivery. Privacy and legal pages. Ahrefs and Bing Webmaster verification. Built and fully live in a single session.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <a
              href="https://www.thesandgrounder.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
            >
              Visit The Sandgrounder <ExternalLink size={13} />
            </a>
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

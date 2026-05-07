import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Reveal from "./components/Reveal";

export const metadata: Metadata = {
  title: "Churchtown Media | Digital Strategy & Technical Advisory",
  description:
    "Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong. Specialist advisory practice founded by Damian Roche.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.churchtownmedia.co.uk",
    title: "Churchtown Media | Digital Strategy & Technical Advisory",
    description:
      "Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong.",
    siteName: "Churchtown Media",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.churchtownmedia.co.uk/#organization",
  name: "Churchtown Media",
  url: "https://www.churchtownmedia.co.uk",
  logo: "https://www.churchtownmedia.co.uk/icon.png",
  description:
    "Churchtown Media is a specialist digital advisory practice. Digital strategy, technical architecture and footprint intelligence. Founded by Damian Roche.",
  founder: {
    "@type": "Person",
    name: "Damian Roche",
    url: "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
  },
  sameAs: ["https://www.linkedin.com/in/damian-roche-7ba8293a5/"],
};

const SERVICES = [
  {
    number: "01",
    title: "Technical SEO & Digital Architecture",
    desc: "For organisations with web presence that is underperforming or structurally compromised. Audits, crawl architecture, structured data strategy, and a clear roadmap.",
    buyer: "Marketing directors and CTOs who need a second opinion they can trust.",
  },
  {
    number: "02",
    title: "Headless Development Consultancy",
    desc: "For organisations that have been told they need a rebuild and want someone who understands both the technical and commercial layer before they commission an agency.",
    buyer: "The person who has had three agency quotes and does not trust any of them.",
  },
  {
    number: "03",
    title: "Digital Footprint Intelligence",
    desc: "Mapping an organisation's public digital exposure before a significant event. The SIBA methodology applied commercially. Written report. Defensible methodology.",
    buyer: "Professional services, legal, and communications firms handling sensitive mandates.",
  },
];

const PROOF = [
  {
    label: "Investigation platform",
    name: "SIBA Digital",
    stat: "9",
    statLabel: "Reports published",
    desc: "A public interest investigation platform built using Next.js, structured data and OSINT methodology. Nine published reports. Coverage in BBC News, Private Eye and national press.",
    href: "/case-studies#siba",
    external: "https://www.siba.digital",
  },
  {
    label: "Retained advisory",
    name: "Alotek Shelters",
    stat: "#1",
    statLabel: "Month-one ranking",
    desc: "Manufacturing client. Previous agency: zero measurable results in 12 months. Month one of retained technical advisory: number-one rankings on every core commercial keyword.",
    href: "/case-studies#alotek",
    external: "https://www.alotekshelters.co.uk",
  },
  {
    label: "Publishing architecture",
    name: "Sefton Coast Network",
    stat: "5",
    statLabel: "Sites operated",
    desc: "Five editorial sites built and operated simultaneously on the same Next.js architecture. Demonstrates what properly engineered content infrastructure looks like at scale.",
    href: "/case-studies#network",
    external: "https://www.southportguide.co.uk",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="pt-20 pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Churchtown Media
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-10">
              Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] mb-4 max-w-xl">
              Churchtown Media is a specialist advisory practice. We work with a small number of clients at any one time.
            </p>
            <p className="text-[15px] leading-relaxed text-[#6b6b6b] mb-10 max-w-xl">
              Founded by Damian Roche. Ex-British Army. Twenty years building for the web. Creator of SIBA Digital, the public interest investigation platform covered by BBC News and Private Eye.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex items-center gap-8">
              <Link
                href="/contact"
                className="border-b border-[#112d6e]/40 pb-0.5 text-sm text-[#112d6e] transition-colors hover:border-[#112d6e]"
              >
                Start a conversation
              </Link>
              <Link
                href="/case-studies"
                className="text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
              >
                See the work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* SERVICES */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Services
            </p>
            <h2 className="mb-16">
              Three service lines. Each with a specific buyer and a specific outcome.
            </h2>
          </Reveal>

          <div className="space-y-0">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-8 py-10 border-b border-[#e0e0d8] last:border-0">
                  <span className="text-[#a0a0a0] font-mono text-xs pt-1 shrink-0 w-6">{s.number}</span>
                  <div>
                    <h3 className="text-[15px] font-medium text-[#1c1c1c] mb-2" style={{ fontFamily: "inherit", fontSize: "inherit" }}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#3d3d3d] mb-3">{s.desc}</p>
                    <p className="text-[13px] text-[#6b6b6b] italic">{s.buyer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Full service detail <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* PROOF */}
      <section className="py-28 px-6 bg-[#f5f5f0]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              The work
            </p>
            <h2 className="mb-12">
              Three engagements. Each demonstrates a different capability.
            </h2>
          </Reveal>

          <div className="space-y-4">
            {PROOF.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="bg-white border border-[#e0e0d8] card-hover">
                  <div className="flex flex-col sm:flex-row">
                    <div className="border-b sm:border-b-0 sm:border-r border-[#e0e0d8] px-8 py-7 flex flex-col justify-center shrink-0 sm:w-40 text-center sm:text-left">
                      <p className="text-[38px] font-semibold text-[#112d6e] leading-none">{p.stat}</p>
                      <p className="mt-1.5 text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0]">
                        {p.statLabel}
                      </p>
                    </div>
                    <div className="px-8 py-7 flex flex-col justify-center">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                        {p.label}
                      </p>
                      <p className="text-[15px] text-[#1c1c1c] font-medium leading-snug mb-2">{p.name}</p>
                      <p className="text-[14px] text-[#6b6b6b] leading-relaxed mb-3">{p.desc}</p>
                      <div className="flex items-center gap-5">
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-1 text-xs text-[#2c4a52] hover:text-[#112d6e] transition-colors"
                        >
                          Case study <ArrowRight size={11} />
                        </Link>
                        <a
                          href={p.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#a0a0a0] hover:text-[#6b6b6b] transition-colors"
                        >
                          Live site <ExternalLink size={11} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="bg-[#112d6e] p-10 sm:p-14 text-center">
              <p className="text-[11px] font-medium uppercase tracking-widest text-white/50 mb-4">
                Get in touch
              </p>
              <h2 className="text-white text-[26px] sm:text-[30px] leading-snug mb-5 max-w-md mx-auto" style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400 }}>
                If you have a challenge that fits, we should talk.
              </h2>
              <p className="mx-auto mb-10 max-w-md text-[15px] leading-relaxed text-white/70">
                We do not take on every enquiry. Tell us about your organisation and the challenge. If it is the right fit, we will respond directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 bg-white px-6 py-3 text-sm font-semibold text-[#112d6e] hover:bg-white/90 transition-colors"
                >
                  Start a conversation <ArrowRight size={13} />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-1.5 border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 hover:text-white hover:border-white/60 transition-colors"
                >
                  See case studies
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

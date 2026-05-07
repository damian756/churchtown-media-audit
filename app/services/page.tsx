import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Services | Churchtown Media",
  description:
    "Three service lines: Technical SEO and digital architecture, headless development consultancy, and digital footprint intelligence. Specialist advisory, not generalist agency.",
  alternates: { canonical: "https://www.churchtownmedia.co.uk/services" },
  openGraph: {
    title: "Services | Churchtown Media",
    description:
      "Technical SEO advisory, headless development consultancy, and digital footprint intelligence. A small number of clients at any one time.",
    url: "https://www.churchtownmedia.co.uk/services",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
  },
};

const SERVICES = [
  {
    id: "technical-seo",
    number: "01",
    title: "Technical SEO & Digital Architecture",
    tagline: "For organisations with web presence that is underperforming or structurally compromised.",
    buyer:
      "Marketing directors and CTOs at mid-size organisations who need a second opinion they can trust.",
    problem:
      "The site exists. It may even have had SEO work done. But it is not performing in proportion to the domain authority, the content investment, or the commercial opportunity. Something structural is wrong and previous advisors have not identified or fixed it.",
    approach:
      "An audit that goes beyond surface-level findings. Crawl architecture, structured data implementation, canonicalisation, page speed, content gap analysis relative to search intent, and a clear prioritised roadmap. The deliverable is a document that tells you exactly what to do, in what order, and why.",
    deliverable:
      "Written audit report. Prioritised roadmap. Optional implementation engagement at a separate day rate.",
    rate: "£600–£750/day",
  },
  {
    id: "headless-development",
    number: "02",
    title: "Headless Development Consultancy",
    tagline:
      "For organisations that have been told they need a rebuild and want someone who understands both layers.",
    buyer:
      "The person who has had three agency quotes and does not trust any of them. Usually a director or CTO who suspects something is off but cannot articulate what.",
    problem:
      "A rebuild has been recommended. The quotes range from £15,000 to £80,000. The proposals all reference different platforms, different timelines, and different success metrics. Nobody has explained why their approach is right for this specific organisation.",
    approach:
      "Architecture decision-making before any agency is commissioned. CMS selection, hosting infrastructure, data structure, integration requirements, performance targets. I give you the scoping document and technical brief that a competent agency needs to price accurately, rather than letting agencies define the scope themselves.",
    deliverable:
      "Technical architecture document. CMS selection rationale. Scoped brief for agency RFP. Optional: build the project myself if appropriate.",
    rate: "£700–£900/day",
  },
  {
    id: "footprint-intelligence",
    number: "03",
    title: "Digital Footprint Intelligence",
    tagline: "Mapping an organisation's public digital exposure before a significant event.",
    buyer:
      "Professional services firms, legal practices, communications consultancies, and PE-backed organisations managing sensitive mandates.",
    problem:
      "A significant event is approaching. An appointment, a transaction, a merger, a public filing, a regulatory matter, a press inquiry. The organisation needs to know what its public digital exposure looks like before someone else maps it.",
    approach:
      "The SIBA methodology applied commercially. Systematic mapping of publicly available digital information: web presence, structured data, corporate registry data, press archive, social footprint, third-party data sources. Written as a defensible report.",
    deliverable:
      "Written digital footprint report. Exposure summary. Risk annotation. Recommendations for remediation where relevant.",
    rate: "£1,200–£1,500/day",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Initial conversation",
    desc: "Tell us about your organisation and the challenge. If it is the right fit, we will say so. If it is not, we will tell you that too.",
  },
  {
    step: "02",
    title: "Scoping",
    desc: "A defined scope, timeline and deliverable agreed before any work begins. No open-ended engagements without clear endpoints.",
  },
  {
    step: "03",
    title: "Delivery",
    desc: "The work, done to the standard the scope specifies. Written, referenced, and defensible.",
  },
  {
    step: "04",
    title: "Review",
    desc: "A conversation about the findings and next steps. Implementation is a separate engagement if required.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-20 pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Services
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-8">
              Three service lines. Each with a specific buyer, a specific problem, and a specific deliverable.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-[17px] leading-relaxed text-[#3d3d3d] max-w-xl">
              Churchtown Media is not a generalist agency. We do not offer a menu of everything and execute on volume. We work with a small number of clients at any one time and we are selective about which engagements we take on.
            </p>
          </Reveal>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* Services */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto space-y-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <div id={s.id} className="scroll-mt-24">
                <div className="flex items-start gap-6 mb-8">
                  <span className="text-[#a0a0a0] font-mono text-xs pt-1 shrink-0">{s.number}</span>
                  <div>
                    <h2 className="mb-2" style={{ fontSize: "clamp(1.3rem, 1rem + 1vw, 1.75rem)" }}>{s.title}</h2>
                    <p className="text-[14px] text-[#2c4a52]">{s.tagline}</p>
                  </div>
                </div>

                <div className="ml-10 space-y-6">
                  <div>
                    <h3
                      className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2"
                      style={{ fontFamily: "inherit" }}
                    >
                      Who it is for
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#3d3d3d]">{s.buyer}</p>
                  </div>
                  <div>
                    <h3
                      className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2"
                      style={{ fontFamily: "inherit" }}
                    >
                      The problem
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#3d3d3d]">{s.problem}</p>
                  </div>
                  <div>
                    <h3
                      className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-2"
                      style={{ fontFamily: "inherit" }}
                    >
                      The approach
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#3d3d3d]">{s.approach}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2 pb-0 border-b border-[#e0e0d8] pb-6">
                    <div className="flex-1">
                      <h3
                        className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1"
                        style={{ fontFamily: "inherit" }}
                      >
                        Deliverable
                      </h3>
                      <p className="text-[15px] text-[#1c1c1c]">{s.deliverable}</p>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-block bg-[#f5f5f0] border border-[#e0e0d8] text-[#1c1c1c] text-xs font-mono px-4 py-2">
                        {s.rate}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* Process */}
      <section className="py-28 px-6 bg-[#f5f5f0]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              How we work
            </p>
            <h2 className="mb-12">The engagement process</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-10">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 60}>
                <span className="text-[#a0a0a0] font-mono text-xs">{p.step}</span>
                <h3
                  className="text-[15px] font-medium text-[#1c1c1c] mt-2 mb-2"
                  style={{ fontFamily: "inherit", fontSize: "inherit" }}
                >
                  {p.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#3d3d3d]">{p.desc}</p>
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
            <h2 className="mb-4">If this is the right fit, get in touch.</h2>
            <p className="text-[15px] text-[#3d3d3d] mb-8 max-w-xl leading-relaxed">
              Tell us about your organisation, the challenge, and the timescale. We will respond directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Start a conversation <ArrowRight size={13} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
              >
                See case studies <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

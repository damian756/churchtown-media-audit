import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About | Damian Roche | Churchtown Media",
  description:
    "Damian Roche. Ex-British Army. Twenty years in web development, fifteen in SEO. Founder of SIBA Digital and the Sefton Coast Network. Based in Churchtown, Southport.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/about",
  },
  openGraph: {
    title: "About | Damian Roche | Churchtown Media",
    description:
    "Ex-British Army. Twenty years in web development. Founder of Churchtown Media and creator of SIBA Digital, a public interest investigation platform operating across the UK.",
    url: "https://www.churchtownmedia.co.uk/about",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
  },
};

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.churchtownmedia.co.uk/#organization",
        name: "Churchtown Media",
        url: "https://www.churchtownmedia.co.uk",
        logo: "https://www.churchtownmedia.co.uk/icon.png",
        description:
          "Specialist digital advisory practice. Digital strategy, technical architecture and footprint intelligence.",
        founder: {
          "@type": "Person",
          "@id": "https://www.churchtownmedia.co.uk/about#founder",
        },
      },
      {
        "@type": "Person",
        "@id": "https://www.churchtownmedia.co.uk/about#founder",
        name: "Damian Roche",
        jobTitle: "Founder",
        worksFor: { "@id": "https://www.churchtownmedia.co.uk/#organization" },
        url: "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
        sameAs: [
          "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
          "https://github.com/damian756",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* INTRO */}
      <section className="pt-20 pb-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-8">
              Damian Roche
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mb-10">The biography is the qualification.</h1>
          </Reveal>

          <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">
            <Reveal delay={200}>
              <div className="space-y-5 text-[15px] leading-relaxed text-[#3d3d3d]">
                <p>
                  Ex-British Army, Queen&apos;s Guards. The discipline from that career shapes how this one operates. No waffle, no vanity, clear objectives and accountable outcomes.
                </p>
                <p>
                  Twenty years building for the web. Fifteen of those focused on how to make what I build rank, convert and compound. Self-taught throughout. That is not a limitation. It is how I understand the full stack from first principles rather than from someone else&apos;s curriculum.
                </p>
                <p>
                  I founded Churchtown Media as a vehicle for advisory work. Not to compete on price with generalist agencies, but to work with a small number of organisations at a level that a generalist agency cannot reach.
                </p>
                <p className="text-[#1c1c1c] font-medium">
                  The name comes from Churchtown in Southport, where this started. I have lived there most of my life.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
                >
                  Get in touch <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <figure>
                <Image
                  src="/images/about/damian-rspb-marshside.webp"
                  alt="Damian Roche at RSPB Marshside, Southport"
                  width={560}
                  height={560}
                  className="w-full border border-[#e0e0d8]"
                  priority
                />
                <figcaption className="text-center text-xs text-[#a0a0a0] mt-3">
                  RSPB Marshside, Southport.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* SIBA */}
      <section className="py-28 px-6 bg-[#f5f5f0]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              Primary case study
            </p>
            <h2 className="mb-6">SIBA Digital</h2>
          </Reveal>

          <div className="grid md:grid-cols-[1fr_auto] gap-16 items-start">
            <Reveal delay={100}>
              <div className="space-y-4 text-[15px] leading-relaxed text-[#3d3d3d]">
                <p>
                  SIBA Digital is a public interest investigation platform I built and operate. It uses structured data, OSINT methodology and Next.js architecture to publish accountability investigations from public records.
                </p>
                <p>
                  The first investigation series produced nine published reports. Formal complaints to regulatory bodies cited the findings. Solicitors acting for named parties made contact.
                </p>
                <p>
                  The significance for Churchtown Media is this: SIBA demonstrates the intersection of technical architecture, structured data, investigative methodology and publication strategy simultaneously. No agency in the north-west has a comparable credential.
                </p>
                <p className="text-[#1c1c1c] font-medium">
                  It was built from a phone over Easter weekend. The methodology, not the tooling, is what matters.
                </p>
              </div>
              <div className="flex gap-5 mt-8">
                <a
                  href="https://www.siba.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
                >
                  Visit SIBA Digital <ExternalLink size={13} />
                </a>
                <Link
                  href="/case-studies#siba"
                  className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
                >
                  Full case study <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white border border-[#e0e0d8] divide-y divide-[#e0e0d8] min-w-[200px]">
                {[
                  { label: "Reports published", value: "9" },
                  { label: "Regulatory impact", value: "Formal complaints. Solicitor contact." },
                  { label: "Technology", value: "Next.js, OSINT" },
                  { label: "Built in", value: "One Easter weekend" },
                ].map((item) => (
                  <div key={item.label} className="px-5 py-4">
                    <p className="text-[10px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-1">
                      {item.label}
                    </p>
                    <p className="text-[14px] text-[#1c1c1c] font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* HOW I WORK */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-widest text-[#a0a0a0] mb-4">
              How I work
            </p>
            <h2 className="mb-12">
              No vanity metrics. No open-ended retainers for things that do not matter.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal delay={100}>
              <div className="space-y-4 text-[15px] leading-relaxed text-[#3d3d3d]">
                <p>
                  Every engagement starts with a clear question: what does this organisation need to be able to do that it cannot do now? The answer determines everything that follows.
                </p>
                <p>
                  I work on Next.js for everything. Not because it is fashionable. Because static generation, App Router and TypeScript give organisations a technical foundation that compounds over time rather than accumulating technical debt.
                </p>
                <p>
                  SEO is structured data, crawl architecture, content that answers real questions, and links from places that actually matter. It is not a monthly report of impressions that has no connection to revenue.
                </p>
                <p>
                  I work with a small number of clients because the alternative is being spread thin and average. Every engagement is the same: agree the scope, deliver the work, measure the result. That is it.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-4">
                <div className="bg-[#f5f5f0] border border-[#e0e0d8] p-6">
                  <h3 className="text-sm font-medium text-[#1c1c1c] mb-4" style={{ fontFamily: "inherit" }}>Stack</h3>
                  <div className="space-y-3">
                    {[
                      ["Next.js 16 (App Router)", "Framework"],
                      ["TypeScript", "Type safety"],
                      ["Tailwind CSS v4", "Styling"],
                      ["Vercel", "Deployment"],
                      ["Prisma + PostgreSQL", "Database"],
                      ["Schema.org", "SEO & AI search"],
                      ["Plausible Analytics", "Privacy-first analytics"],
                    ].map(([tech, role]) => (
                      <div
                        key={tech}
                        className="flex items-center justify-between py-2 border-b border-[#e0e0d8] last:border-0"
                      >
                        <span className="text-[14px] text-[#1c1c1c]">{tech}</span>
                        <span className="text-[#a0a0a0] text-xs font-mono">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#f5f5f0] border border-[#e0e0d8] p-5">
                  <h3 className="text-sm font-medium text-[#1c1c1c] mb-2" style={{ fontFamily: "inherit" }}>Outside work</h3>
                  <p className="text-[14px] text-[#6b6b6b] leading-relaxed">
                    Walking Marshside with the kids. Badly playing golf, including once at Royal Birkdale. The Sefton Coast Network started as genuine personal interest in the places I grew up around, which is part of why it works editorially.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-3xl border-[#e0e0d8]" />

      {/* CTA */}
      <section className="py-28 px-6 bg-[#f5f5f0]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="mb-4">If you have a challenge that fits, we should talk.</h2>
            <p className="text-[15px] text-[#3d3d3d] mb-8 max-w-xl leading-relaxed">
              Tell us about your organisation and the problem. We will respond directly and tell you honestly whether this is the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm text-[#2c4a52] transition-colors hover:text-[#1c1c1c]"
              >
                Get in touch <ArrowRight size={13} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-sm text-[#a0a0a0] transition-colors hover:text-[#3d3d3d]"
              >
                See the work <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

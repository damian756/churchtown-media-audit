import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: 'About | Damian Roche | Churchtown Media',
  description: 'Damian Roche. Ex-British Army. Twenty years in web development, fifteen in SEO. Founder of SIBA Digital and the Sefton Coast Network. Based in Churchtown, Southport.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/about',
  },
  openGraph: {
    title: 'About | Damian Roche | Churchtown Media',
    description: 'Ex-British Army. Twenty years building for the web. Creator of SIBA Digital, covered by BBC News and Private Eye. Founder of Churchtown Media.',
    url: 'https://www.churchtownmedia.co.uk/about',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
  },
};

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.churchtownmedia.co.uk/#organization",
        "name": "Churchtown Media",
        "url": "https://www.churchtownmedia.co.uk",
        "logo": "https://www.churchtownmedia.co.uk/icon.png",
        "description": "Specialist digital advisory practice. Digital strategy, technical architecture and footprint intelligence.",
        "founder": { "@type": "Person", "@id": "https://www.churchtownmedia.co.uk/about#founder" },
      },
      {
        "@type": "Person",
        "@id": "https://www.churchtownmedia.co.uk/about#founder",
        "name": "Damian Roche",
        "jobTitle": "Founder",
        "worksFor": { "@id": "https://www.churchtownmedia.co.uk/#organization" },
        "url": "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
        "sameAs": [
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

      <main className="min-h-screen bg-slate-950 text-white pt-28">

        {/* ── INTRO ────────────────────────────────── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Damian Roche</p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-white">
                The biography is the qualification.
              </h1>

              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>
                  Ex-British Army, Queen&apos;s Guards. The discipline from that career shapes how this one operates. No waffle, no vanity, clear objectives and accountable outcomes.
                </p>
                <p>
                  Twenty years building for the web. Fifteen of those focused on how to make what I build rank, convert and compound. Self-taught throughout. That is not a limitation; it is how I understand the full stack from first principles rather than from someone else&apos;s curriculum.
                </p>
                <p>
                  I founded Churchtown Media as a vehicle for advisory work. Not to compete on price with generalist agencies, but to work with a small number of organisations at a level that a generalist agency cannot reach.
                </p>
                <p className="text-slate-300 font-medium">
                  The name comes from Churchtown in Southport, where this started. It seemed fitting. I have lived there most of my life.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-all text-sm"
                >
                  Get in touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div>
              <figure>
                <Image
                  src="/images/about/damian-rspb-marshside.webp"
                  alt="Damian Roche at RSPB Marshside, Southport"
                  width={600}
                  height={600}
                  className="rounded-2xl border border-slate-800 w-full"
                  priority
                />
                <figcaption className="text-center text-xs text-slate-600 mt-3">
                  RSPB Marshside, Southport.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── SIBA ─────────────────────────────────── */}
        <section className="py-20 px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Primary case study</p>
                <h2 className="text-3xl font-bold text-white mb-6 leading-snug">SIBA Digital</h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    SIBA Digital is a public interest investigation platform I built and operate. It uses structured data, OSINT methodology and Next.js architecture to publish accountability investigations from public records.
                  </p>
                  <p>
                    The first investigation series produced nine published reports. Coverage followed in BBC News, Private Eye, and national press. The investigation was cited in formal complaints to regulatory bodies.
                  </p>
                  <p>
                    The significance for Churchtown Media is this: SIBA demonstrates the intersection of technical architecture, structured data, investigative methodology and publication strategy simultaneously. No agency in the north-west has a comparable credential.
                  </p>
                  <p className="text-slate-300 font-medium">
                    It was built from a phone over Easter weekend. The methodology, not the tooling, is what matters.
                  </p>
                </div>
                <div className="flex gap-5 mt-8">
                  <a
                    href="https://www.siba.digital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
                  >
                    Visit SIBA Digital <ExternalLink className="w-4 h-4" />
                  </a>
                  <Link
                    href="/case-studies#siba"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm transition-colors"
                  >
                    Full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Reports published", value: "9" },
                  { label: "Coverage", value: "BBC News, Private Eye, national press" },
                  { label: "Technology", value: "Next.js, structured data, OSINT methodology" },
                  { label: "Built in", value: "One Easter weekend, from a phone" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start py-3 border-b border-slate-800 last:border-0">
                    <span className="text-slate-500 text-sm">{item.label}</span>
                    <span className="text-white text-sm font-medium text-right max-w-[55%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── METHOD ───────────────────────────────── */}
        <section className="py-20 px-6 border-t border-slate-800">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">How I work</p>
                <h2 className="text-3xl font-bold text-white mb-6 leading-snug">
                  No vanity metrics. No open-ended retainers for things that do not matter.
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    Every engagement starts with a clear question: what does this organisation need to be able to do that it cannot do now? The answer to that question determines everything that follows. The technology, the content, the architecture, the timelines.
                  </p>
                  <p>
                    I work on Next.js for everything. Not because it is fashionable. Because static generation, App Router and TypeScript give organisations a technical foundation that compounds over time rather than accumulating technical debt. WordPress does not do this.
                  </p>
                  <p>
                    SEO is structured data, crawl architecture, content that answers real questions, and links from places that actually matter. It is not a monthly report of impressions that has no connection to revenue.
                  </p>
                  <p>
                    I work with a small number of clients because the alternative is being spread thin and average. Alotek Shelters is a retained client. That relationship exists because I delivered what I said I would, on the timeline I said I would deliver it, and the results were verifiable.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7">
                  <h3 className="text-base font-bold text-white mb-5">Stack</h3>
                  <div className="space-y-3">
                    {[
                      ["Next.js 16 (App Router)", "Framework"],
                      ["TypeScript", "Type safety"],
                      ["Tailwind CSS v4", "Styling"],
                      ["Vercel", "Deployment"],
                      ["Prisma + PostgreSQL", "Database"],
                      ["Schema.org structured data", "SEO & AI search"],
                      ["Plausible Analytics", "Privacy-first analytics"],
                    ].map(([tech, role]) => (
                      <div key={tech} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                        <span className="text-white text-sm">{tech}</span>
                        <span className="text-slate-500 text-xs font-mono">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white mb-3">Outside work</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Walking Marshside with the kids. Badly playing golf, including once at Royal Birkdale. The Sefton Coast Network started as genuine personal interest in the places I grew up around, which is part of why it works editorially.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section className="py-20 px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              If you have a challenge that fits, we should talk.
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Tell us about your organisation and the problem. We will respond directly and tell you honestly whether this is the right fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-all text-sm"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-800 hover:border-slate-600 transition-all text-sm"
              >
                See the work
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

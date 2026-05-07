import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: 'Services | Churchtown Media',
  description: 'Three service lines: Technical SEO and digital architecture, headless development consultancy, and digital footprint intelligence. Specialist advisory, not generalist agency.',
  alternates: { canonical: 'https://www.churchtownmedia.co.uk/services' },
  openGraph: {
    title: 'Services | Churchtown Media',
    description: 'Technical SEO advisory, headless development consultancy, and digital footprint intelligence. A small number of clients at any one time.',
    url: 'https://www.churchtownmedia.co.uk/services',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
  },
};

const SERVICES = [
  {
    id: "technical-seo",
    number: "01",
    title: "Technical SEO & Digital Architecture",
    tagline: "For organisations with web presence that is underperforming or structurally compromised.",
    buyer: "Marketing directors and CTOs at mid-size organisations who need a second opinion they can trust.",
    problem: "The site exists. It may even have had SEO work done. But it is not performing in proportion to the domain authority, the content investment, or the commercial opportunity. Something structural is wrong and previous advisors have not identified or fixed it.",
    approach: "An audit that goes beyond surface-level findings. Crawl architecture, structured data implementation, canonicalisation, page speed, content gap analysis relative to search intent, and a clear prioritised roadmap. The deliverable is a document that tells you exactly what to do, in what order, and why.",
    deliverable: "Written audit report. Prioritised roadmap. Optional implementation engagement at a separate day rate.",
    rate: "£600–£750/day",
  },
  {
    id: "headless-development",
    number: "02",
    title: "Headless Development Consultancy",
    tagline: "For organisations that have been told they need a rebuild and want someone who understands both layers.",
    buyer: "The person who has had three agency quotes and does not trust any of them. Usually a director or CTO who suspects something is off but cannot articulate what.",
    problem: "A rebuild has been recommended. The quotes range from £15,000 to £80,000. The proposals all reference different platforms, different timelines, and different success metrics. Nobody has explained why their approach is right for this specific organisation.",
    approach: "Architecture decision-making before any agency is commissioned. CMS selection, hosting infrastructure, data structure, integration requirements, performance targets. I give you the scoping document and technical brief that a competent agency needs to price accurately, rather than letting agencies define the scope themselves.",
    deliverable: "Technical architecture document. CMS selection rationale. Scoped brief for agency RFP. Optional: build the project myself if appropriate.",
    rate: "£700–£900/day",
  },
  {
    id: "footprint-intelligence",
    number: "03",
    title: "Digital Footprint Intelligence",
    tagline: "Mapping an organisation's public digital exposure before a significant event.",
    buyer: "Professional services firms, legal practices, communications consultancies, and PE-backed organisations managing sensitive mandates.",
    problem: "A significant event is approaching. An appointment, a transaction, a merger, a public filing, a regulatory matter, a press inquiry. The organisation needs to know what its public digital exposure looks like before someone else maps it.",
    approach: "The SIBA methodology applied commercially. Systematic mapping of publicly available digital information: web presence, structured data, corporate registry data, press archive, social footprint, third-party data sources. Written as a defensible report.",
    deliverable: "Written digital footprint report. Exposure summary. Risk annotation. Recommendations for remediation where relevant.",
    rate: "£1,200–£1,500/day",
  },
];

const PROCESS = [
  { step: "01", title: "Initial conversation", desc: "Tell us about your organisation and the challenge. If it is the right fit, we will say so. If it is not, we will tell you that too." },
  { step: "02", title: "Scoping", desc: "A defined scope, timeline and deliverable agreed before any work begins. No open-ended engagements without clear endpoints." },
  { step: "03", title: "Delivery", desc: "The work, done to the standard the scope specifies. Written, referenced, and defensible." },
  { step: "04", title: "Review", desc: "A conversation about the findings and next steps. Implementation is a separate engagement if required." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Three service lines. Each with a specific buyer, a specific problem, and a specific deliverable.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Churchtown Media is not a generalist agency. We do not offer a menu of everything and execute on volume. We work with a small number of clients at any one time and we are selective about which engagements we take on.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto pt-20 space-y-20">
          {SERVICES.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <div className="flex items-start gap-6 mb-8">
                <span className="text-slate-700 font-mono text-sm pt-1 shrink-0">{s.number}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{s.title}</h2>
                  <p className="text-blue-400 text-sm font-medium">{s.tagline}</p>
                </div>
              </div>

              <div className="ml-10 space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Who it is for</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.buyer}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">The problem</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.problem}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">The approach</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.approach}</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 pb-6 border-b border-slate-800">
                  <div className="flex-1">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Deliverable</h3>
                    <p className="text-slate-300 text-sm">{s.deliverable}</p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block bg-slate-800 text-slate-300 text-xs font-mono px-4 py-2 rounded-lg">{s.rate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">How we work</p>
          <h2 className="text-2xl font-bold text-white mb-12">The engagement process</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {PROCESS.map((p) => (
              <div key={p.step}>
                <span className="text-slate-700 font-mono text-sm">{p.step}</span>
                <h3 className="text-base font-bold text-white mt-2 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">
            If this is the right fit, get in touch.
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed max-w-xl">
            Tell us about your organisation, the challenge, and the timescale. We will respond directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-all text-sm"
            >
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm transition-colors"
            >
              See case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

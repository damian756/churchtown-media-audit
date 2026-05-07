import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Churchtown Media | Digital Strategy & Technical Advisory',
  description: 'Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong. Specialist advisory practice founded by Damian Roche.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.churchtownmedia.co.uk',
    title: 'Churchtown Media | Digital Strategy & Technical Advisory',
    description: 'Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong.',
    siteName: 'Churchtown Media',
    images: [{ url: 'https://www.churchtownmedia.co.uk/opengraph-image.png', width: 1200, height: 630, alt: 'Churchtown Media' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.churchtownmedia.co.uk/#organization',
  'name': 'Churchtown Media',
  'url': 'https://www.churchtownmedia.co.uk',
  'logo': 'https://www.churchtownmedia.co.uk/icon.png',
  'description': 'Churchtown Media is a specialist digital advisory practice. Digital strategy, technical architecture and footprint intelligence. Founded by Damian Roche.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Cambridge Avenue',
    'addressLocality': 'Southport',
    'addressRegion': 'Merseyside',
    'postalCode': 'PR9 9SA',
    'addressCountry': 'GB',
  },
  'founder': {
    '@type': 'Person',
    'name': 'Damian Roche',
    'url': 'https://www.linkedin.com/in/damian-roche-7ba8293a5/',
  },
  'sameAs': ['https://www.linkedin.com/in/damian-roche-7ba8293a5/'],
};

const SERVICES = [
  {
    title: "Technical SEO & Digital Architecture",
    desc: "For organisations with web presence that is underperforming or structurally compromised. Audits, crawl architecture, structured data strategy, and a clear roadmap. Not a monthly retainer for vanity reports.",
    buyer: "Marketing directors and CTOs who need a second opinion they can trust.",
  },
  {
    title: "Headless Development Consultancy",
    desc: "For organisations that have been told they need a rebuild and want someone who understands both the technical and commercial layer before they commission an agency. Next.js, CMS architecture, performance, data structure.",
    buyer: "The person who has had three agency quotes and does not trust any of them.",
  },
  {
    title: "Digital Footprint Intelligence",
    desc: "Mapping an organisation's public digital exposure before a significant event. The SIBA methodology applied commercially. Written report. Defensible methodology. For organisations that need to know what they look like before someone else decides for them.",
    buyer: "Professional services, legal, and communications firms handling sensitive mandates.",
  },
];

const PROOF = [
  {
    label: "Investigation platform",
    name: "SIBA Digital",
    desc: "A public interest investigation platform built using Next.js, structured data and OSINT methodology. Nine published reports. Coverage in BBC News, Private Eye and national press. Built from a phone over Easter weekend.",
    href: "/case-studies#siba",
    external: "https://www.siba.digital",
    tag: "Primary case study",
    accent: "border-blue-500/40",
    tagColor: "bg-blue-500/20 text-blue-300",
  },
  {
    label: "Retained advisory",
    name: "Alotek Shelters",
    desc: "Manufacturing client. Previous agency: zero measurable results in 12 months. Month one of retained technical advisory: 10 number-one rankings on every core commercial keyword. 'Bus shelter suppliers' from position 16 to number one in 30 days.",
    href: "/case-studies#alotek",
    external: "https://www.alotekshelters.co.uk",
    tag: "Ongoing retainer",
    accent: "border-teal-500/40",
    tagColor: "bg-teal-500/20 text-teal-300",
  },
  {
    label: "Publishing architecture",
    name: "Sefton Coast Network",
    desc: "Five editorial sites built and operated simultaneously. SouthportGuide, FormbyGuide, SeftonLinks, SeftonCoastWildlife. Same Next.js architecture across all five. Demonstrates what properly engineered content infrastructure looks like at scale.",
    href: "/case-studies#network",
    external: "https://www.southportguide.co.uk",
    tag: "Owned and operated",
    accent: "border-slate-600/40",
    tagColor: "bg-slate-700/40 text-slate-300",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
            Churchtown Media
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-8">
            Digital strategy, technical architecture and intelligence for organisations that cannot afford to get it wrong.
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-4 max-w-2xl">
            Churchtown Media is a specialist advisory practice. We work with a small number of clients at any one time.
          </p>
          <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-2xl">
            Founded by Damian Roche. Ex-British Army. Twenty years building for the web. Creator of SIBA Digital, the public interest investigation platform covered by BBC News and Private Eye.
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
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold px-7 py-3.5 rounded-xl border border-slate-800 hover:border-slate-600 transition-all text-sm"
            >
              See the work
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">What we do</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-16">Three service lines. Each with a specific buyer and a specific outcome.</h2>

          <div className="space-y-12">
            {SERVICES.map((s, i) => (
              <div key={i} className="grid md:grid-cols-[1fr_auto] gap-6 pb-12 border-b border-slate-800 last:border-0 last:pb-0">
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-4 text-sm">{s.desc}</p>
                  <p className="text-slate-600 text-xs font-medium italic">{s.buyer}</p>
                </div>
                <div className="md:text-right shrink-0">
                  <span className="text-slate-700 text-xs font-mono">0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm transition-colors"
            >
              Full service detail <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROOF ────────────────────────────────── */}
      <section className="py-24 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">The work</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Three engagements. Each demonstrates a different capability.</h2>

          <div className="space-y-5">
            {PROOF.map((p) => (
              <div
                key={p.name}
                className={`bg-slate-950 border ${p.accent} rounded-2xl p-7`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">{p.label}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{p.name}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center gap-5">
                  <Link
                    href={p.href}
                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    Case study <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={p.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-1.5"
                  >
                    Live site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            If you have a challenge that fits, get in touch.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-10 max-w-xl">
            We do not take on every enquiry. Tell us about your organisation and the challenge. If it is the right fit, we will respond directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold px-7 py-3.5 rounded-xl hover:bg-slate-100 transition-all text-sm"
          >
            Contact us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

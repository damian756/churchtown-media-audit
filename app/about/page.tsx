import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Damian Roche, Churchtown Media",
  description: "Damian Roche built the Sefton Coast Network: SouthportGuide, FormbyGuide, SeftonLinks and SeftonCoastWildlife. 20 years in web development, 15 in SEO. Based in Churchtown, Southport.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/about',
  },
  openGraph: {
    title: 'About Churchtown Media | Damian Roche, Southport',
    description: 'Damian Roche built the Sefton Coast Network from scratch. Four editorial sites covering Southport, Formby, links golf and coastal wildlife. 20+ years in web, 15 in SEO.',
    url: 'https://www.churchtownmedia.co.uk/about',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Damian Roche, founder of Churchtown Media, at RSPB Marshside Southport',
    }],
  },
};

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.churchtownmedia.co.uk/#organization",
        "name": "Churchtown Media",
        "url": "https://www.churchtownmedia.co.uk",
        "logo": "https://www.churchtownmedia.co.uk/icon.png",
        "description": "Web design and SEO agency based in Southport, Merseyside. Creators of the Sefton Coast Network.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cambridge Avenue",
          "addressLocality": "Southport",
          "postalCode": "PR9 9SA",
          "addressCountry": "GB"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.6479,
          "longitude": -3.0051
        },
        "areaServed": [
          { "@type": "City", "name": "Southport" },
          { "@type": "City", "name": "Liverpool" },
          { "@type": "City", "name": "Manchester" }
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://www.churchtownmedia.co.uk/about#founder"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.churchtownmedia.co.uk/about#founder",
        "name": "Damian Roche",
        "jobTitle": "Founder & Lead Developer",
        "worksFor": { "@id": "https://www.churchtownmedia.co.uk/#organization" },
        "url": "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
        "sameAs": [
          "https://www.linkedin.com/in/damian-roche-7ba8293a5/",
          "https://twitter.com/churchtownmedia",
          "https://github.com/damian756"
        ],
        "owns": [
          { "@type": "WebSite", "name": "SouthportGuide.co.uk", "url": "https://www.southportguide.co.uk" },
          { "@type": "WebSite", "name": "FormbyGuide.co.uk", "url": "https://www.formbyguide.co.uk" },
          { "@type": "WebSite", "name": "SeftonLinks.com", "url": "https://www.seftonlinks.com" },
          { "@type": "WebSite", "name": "SeftonCoastWildlife.co.uk", "url": "https://www.seftoncoastwildlife.co.uk" }
        ],
        "homeLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Southport",
            "addressCountry": "GB"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-950 text-white pt-24">
        
        {/* ══════════════════════════════════════════
            HERO — split, personal
        ══════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-center">

              {/* Photo */}
              <div className="order-2 md:order-1">
                <figure className="relative">
                  <Image
                  src="/images/about/damian-rspb-marshside.webp"
                  alt="Damian Roche, founder of Churchtown Media, at RSPB Marshside nature reserve, Southport."
                    width={600}
                    height={600}
                    className="rounded-2xl border border-slate-800 shadow-2xl w-full"
                    priority
                  />
                  <figcaption className="text-center text-sm text-slate-500 mt-4">
                    RSPB Marshside, Southport. Five minutes from the office.
                  </figcaption>
                </figure>
              </div>

              {/* Text */}
              <div className="order-1 md:order-2">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Founder</p>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
                  Hi, I'm Damian.
                </h1>
                
                <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
                  <p>
                    I'm based in Churchtown, Southport. Have been most of my life. The name on the tin is not a marketing choice, it's where I actually live.
                  </p>
                  <p>
                    I've spent 20 years building websites and the last 15 obsessing over how to make them rank and convert. Former British Army, Queen's Guards. Self-taught developer. The discipline from the first career still shapes how I approach the second.
                  </p>
                  <p>
                    I started Churchtown Media because I wanted to build things properly for businesses that deserved better than what the agency market usually gives them. A lot of client work later, I also built the Sefton Coast Network, which is described below.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-7 py-3.5 rounded-xl font-bold transition-all text-sm"
                  >
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-7 py-3.5 rounded-xl font-bold transition-all text-sm"
                  >
                    See What I've Built
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            THE NETWORK — the centrepiece
        ══════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">The proof of concept</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                  The Sefton Coast Network
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    Before I pitch anything to a client, I built it for myself first. Four editorial sites covering the Sefton Coast, built on the same technical stack I use for client work, with no brief and no safety net.
                  </p>
                  <p>
                    <strong className="text-white">SouthportGuide.co.uk</strong> is the broadest: a full visitor guide to Southport covering restaurants, hotels, things to do, events, and two significant upcoming moments for the town. The Open Championship at Royal Birkdale in July 2026, and the Marine Lake Events Centre opening in 2027. The site has a business directory, a blog, and booking integrations. 999+ venues listed.
                  </p>
                  <p>
                    <strong className="text-white">FormbyGuide.co.uk</strong> exists because no dedicated guide to Formby existed anywhere online. The National Trust covers their own estate and stops at the car park gate. TripAdvisor is generic. There was a genuine editorial gap and nobody was filling it.
                  </p>
                  <p>
                    <strong className="text-white">SeftonLinks.com</strong> covers the links golf corridor: Royal Birkdale, Hillside, Formby Golf Club, West Lancashire, Southport & Ainsdale, Southport Old Links. Six courses, 18 languages, course conditions, tee time links, scorecards, and an Open 2026 hub. I built it partly because I play golf badly and wanted somewhere better than the club websites to find out what I needed to know before booking.
                  </p>
                  <p>
                    <strong className="text-white">SeftonCoastWildlife.co.uk</strong> is the one that surprised me most in the building. It's a 257-species database covering birds, mammals, insects and plants found between Southport and Formby. The Sefton Coast is a Special Area of Conservation and there was nowhere pulling it all together into something actually readable.
                  </p>
                  <p>
                    All four sites run on the same foundation: Next.js App Router, TypeScript, Tailwind CSS v4, deployed to Vercel. They cross-link editorially, not with generic footer links but with genuine contextual references placed where a real reader would benefit.
                  </p>
                  <p className="text-slate-300 font-medium">
                    The network is both the proof of concept for everything I build for clients, and a commercial project in its own right. If you want to see what a properly engineered content site looks like, technically and editorially, this is it.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: "SouthportGuide.co.uk", url: "https://www.southportguide.co.uk", desc: "Visitor guide, business directory, Open 2026 hub. 999+ venues.", meta: "Next.js · Prisma · PostgreSQL · Vercel" },
                  { name: "FormbyGuide.co.uk", url: "https://www.formbyguide.co.uk", desc: "Red squirrels, National Trust beach, pinewoods, village dining.", meta: "Next.js · TypeScript · Tailwind v4 · Vercel" },
                  { name: "SeftonLinks.com", url: "https://www.seftonlinks.com", desc: "Championship links golf in 18 languages. Royal Birkdale and 5 more.", meta: "Next.js · next-intl · 18 locales · Vercel" },
                  { name: "SeftonCoastWildlife.co.uk", url: "https://seftoncoastwildlife.co.uk", desc: "257-species database. Birds, mammals, insects, plants.", meta: "Next.js · TypeScript · Plausible Analytics" },
                ].map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-xl p-5 transition-all"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-white text-sm group-hover:text-slate-200 transition-colors">{site.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-slate-400 transition-colors shrink-0" />
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed mb-2">{site.desc}</p>
                      <p className="text-slate-600 text-[10px] font-mono">{site.meta}</p>
                    </div>
                  </a>
                ))}

                <Link
                  href="/blog/sefton-coast-network"
                  className="group flex items-center gap-2 text-slate-400 hover:text-white font-semibold text-sm transition-colors pt-2"
                >
                  Read the full case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            HOW I WORK — grounded, not performative
        ══════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-14 items-start">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">How I work</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
                  No fluff. No vanity metrics. Just things that work.
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    I don't start a project by asking what you want the website to look like. I start by asking what you need it to do, who needs to find it, and what stops them finding it now. The design follows the function.
                  </p>
                  <p>
                    Every site I build is on Next.js. Not because it's fashionable but because it's genuinely fast, because static generation means you don't pay for server infrastructure you don't need, and because it gives Google exactly what it needs to index your site properly. WordPress does not do any of these things reliably.
                  </p>
                  <p>
                    SEO is not mysterious. It's content that answers real questions, pages that load quickly, structured data that tells Google what you do, and links from places that genuinely matter. I've been doing this for 15 years. The fundamentals have not changed. What changes is the sophistication of the execution.
                  </p>
                  <p>
                    I'm not interested in black-hat tactics or quick-fix strategies that get penalised in six months. I build things that compound. Year two should be better than year one.
                  </p>
                  <p>
                    Rankings, traffic, leads, enquiries. That is what matters. If a metric doesn't connect to one of those four things, I'm not tracking it.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-6">
                  <h3 className="text-lg font-bold text-white mb-6">The stack I use for everything</h3>
                  <div className="space-y-3">
                    {[
                      { tech: "Next.js 16 (App Router)", role: "Framework" },
                      { tech: "TypeScript", role: "Type safety" },
                      { tech: "Tailwind CSS v4", role: "Styling" },
                      { tech: "Vercel", role: "Deployment" },
                      { tech: "Prisma + PostgreSQL (Neon)", role: "Database (where needed)" },
                      { tech: "Plausible Analytics", role: "Privacy-first analytics" },
                      { tech: "Schema.org structured data", role: "SEO & AI search" },
                    ].map((item) => (
                      <div key={item.tech} className="flex items-center justify-between py-2.5 border-b border-slate-800 last:border-0">
                        <span className="text-white font-medium text-sm">{item.tech}</span>
                        <span className="text-slate-500 text-xs font-mono">{item.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-white mb-3">Outside work</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Walking Marshside with the kids. Badly playing golf (I've at least played Royal Birkdale once, which I've documented). The Owl & Bird of Prey Sanctuary is a regular with the family. I have a healthy respect for anyone who can keep a Harris hawk interested in them for more than five minutes.
                  </p>
                  <p className="text-slate-600 text-xs mt-3 font-medium">
                    The name Churchtown Media comes from the area of Southport where this all started. It seemed fitting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA — understated
        ══════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              If your site needs to do more
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              A free audit takes two minutes and gives you an honest picture of where you're losing traffic and why. No sales pitch attached.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20"
              >
                Get Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Get in Touch
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <Link href="/portfolio" className="text-slate-500 hover:text-white font-semibold transition-colors flex items-center gap-1.5">
                See the portfolio <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/work" className="text-slate-500 hover:text-white font-semibold transition-colors flex items-center gap-1.5">
                How I work <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/testimonials" className="text-slate-500 hover:text-white font-semibold transition-colors flex items-center gap-1.5">
                Client reviews <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

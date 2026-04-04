import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle2, Search, TrendingUp, Map, Target, Lightbulb, BarChart3, Bot, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Strategy | SEO-Led Content Planning | Churchtown Media",
  description: "A content strategy built around what your audience searches for and what AI engines cite. Keyword research, topical authority mapping, competitor gap analysis, and a 12-month editorial calendar. No filler: just the roadmap.",
  keywords: [
    "content strategy service",
    "SEO content strategy",
    "content marketing strategy",
    "content strategy agency",
    "editorial strategy",
    "content roadmap",
    "topical authority",
    "content gap analysis",
    "keyword strategy",
    "content planning UK",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/content-strategy",
  },
  openGraph: {
    title: "Content Strategy | SEO-Led Content Planning | Churchtown Media",
    description: "Keyword research, topical authority mapping, competitor gap analysis, and a 12-month editorial calendar built around search intent and AI citability.",
    url: "https://www.churchtownmedia.co.uk/services/content-strategy",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Content Strategy - Churchtown Media",
      },
    ],
  },
};

export default function ContentStrategyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Content Strategy",
    serviceType: "Content Marketing Strategy",
    description:
      "SEO-led content strategy service covering keyword research, topical authority mapping, competitor content gap analysis, GEO alignment, and 12-month editorial calendar creation. Delivered as a standalone engagement or integrated with ongoing content production.",
    provider: {
      "@type": "Organization",
      "@id": "https://www.churchtownmedia.co.uk/#organization",
      name: "Churchtown Media",
      url: "https://www.churchtownmedia.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    offers: {
      "@type": "Offer",
      priceRange: "£1,200-£3,000",
      priceCurrency: "GBP",
      description: "One-time content strategy engagement",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a content strategy actually include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our content strategy deliverable includes: comprehensive keyword research (primary, secondary, long-tail, and question-based terms), topical authority map showing the content clusters you need to build, competitor content gap analysis (what they rank for that you don't), GEO/AI Overview opportunity identification, recommended content formats and page types, internal linking architecture, and a 12-month editorial calendar with prioritised topics.",
        },
      },
      {
        "@type": "Question",
        name: "Is this a document or an ongoing service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The strategy engagement is a one-time project that produces a concrete deliverable: a strategy document, keyword database, and editorial calendar. What you do with it is up to you: you can execute it yourself, have your in-house team follow it, or commission us to produce the content. We also offer optional quarterly strategy reviews for clients who want ongoing strategic guidance.",
        },
      },
      {
        "@type": "Question",
        name: "How is your content strategy different from a standard keyword list?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A keyword list tells you what people search for. A content strategy tells you what to create, in what order, in what format, targeting what intent, with what internal linking structure: and why each decision was made. It's the difference between a shopping list and a business plan. We also factor in GEO signals so the strategy accounts for AI search, not just traditional rankings.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the strategy engagement take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 3–4 weeks from brief to delivery. The process involves a discovery session, competitive landscape analysis, keyword research, topical mapping, and document production. We don't rush it: a good strategy document is the foundation for 12 months of content decisions.",
        },
      },
    ],
  };

  const deliverables = [
    {
      icon: Search,
      title: "Comprehensive Keyword Research",
      description: "Primary commercial terms, secondary supporting terms, long-tail question keywords, and AI search query mapping. Exported with search volume, difficulty, and intent classification.",
    },
    {
      icon: Map,
      title: "Topical Authority Map",
      description: "A visual map of the content clusters you need to own to become the recognised authority in your niche: in Google's eyes and in AI engines' citation models.",
    },
    {
      icon: Target,
      title: "Competitor Gap Analysis",
      description: "Every topic your competitors rank for that you don't. Sized by opportunity, prioritised by effort. The quickest wins are usually here.",
    },
    {
      icon: Bot,
      title: "GEO Opportunity Report",
      description: "Which queries currently trigger AI Overviews in your sector. Which competitors get cited. What content type and structure gets selected. Where your opportunity sits.",
    },
    {
      icon: FileText,
      title: "12-Month Editorial Calendar",
      description: "A month-by-month content schedule with titles, target keywords, recommended formats, and word count targets. Ready to hand to a writer or content team.",
    },
    {
      icon: Globe,
      title: "Internal Linking Architecture",
      description: "How your content clusters should interlink to pass authority between pages. A clear structure that compounds topical relevance over time.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 mb-8">
          <Map className="w-4 h-4 text-teal-400" />
          <span className="text-xs font-bold text-teal-400 uppercase tracking-wide">SEO-Led Content Strategy</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Stop guessing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400">
            what to write.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
          Most businesses publish content reactively: what feels timely, what someone had an idea about, what they
          think is interesting. Then wonder why it doesn't rank.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Content strategy means knowing exactly what to create, for whom, in what order: based on keyword data,
          competitor gaps, and AI search signals. We build that roadmap. You execute it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            Commission a Content Strategy <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services/ai-content"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            Need the Content Too? <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What the strategy includes</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Six concrete deliverables that tell you exactly what to create and why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-teal-500/30 transition-all group">
                <div className="w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Pricing</h2>
          <p className="text-xl text-slate-400">One-time engagement. Delivered in 3–4 weeks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Strategy Essentials",
              price: "£1,200",
              desc: "For businesses in a single niche or location with a clear audience.",
              features: [
                "Keyword research (up to 200 terms)",
                "Competitor gap analysis (3 competitors)",
                "Topical authority map",
                "6-month editorial calendar",
                "Internal linking recommendations",
              ],
              colour: "teal",
            },
            {
              name: "Strategy Full",
              price: "£3,000",
              desc: "For businesses across multiple sectors, locations, or audience segments.",
              features: [
                "Keyword research (500+ terms)",
                "Competitor gap analysis (6 competitors)",
                "Full topical authority map",
                "GEO opportunity report",
                "12-month editorial calendar",
                "Internal linking architecture",
                "Recommended page types and formats",
                "Quarterly review session (3 months)",
              ],
              colour: "blue",
              highlight: true,
            },
          ].map((pkg) => {
            const colours: Record<string, { border: string; check: string; button: string }> = {
              teal: { border: "border-teal-500/30", check: "text-teal-400", button: "bg-teal-600 hover:bg-teal-500" },
              blue: { border: "border-blue-500/50", check: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500" },
            };
            const c = colours[pkg.colour];
            return (
              <div key={pkg.name} className={`relative bg-slate-900 border rounded-2xl p-8 flex flex-col ${c.border} ${pkg.highlight ? "shadow-xl shadow-blue-500/10" : ""}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Recommended</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-white mb-3">{pkg.price}</div>
                  <p className="text-slate-400 text-sm">{pkg.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 ${c.check} shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-bold text-white transition-all ${c.button}`}>
                  Commission Strategy
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Common questions</h2>
        <div className="space-y-6">
          {faqSchema.mainEntity.map((item) => (
            <div key={item.name} className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-3">{item.name}</h3>
              <p className="text-slate-400 leading-relaxed">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-teal-900/40 to-blue-900/40 border border-teal-500/30 rounded-3xl p-12 text-center">
          <Lightbulb className="w-12 h-12 text-teal-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Know what to publish: and why.</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            12 months of content direction, backed by data. No guessing. No publishing for the sake of it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            Start the Brief <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/ai-content" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <Bot className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">AI Content Production</h3>
            <p className="text-slate-400 text-sm">We execute the strategy we create for you</p>
          </Link>
          <Link href="/services/generative-engine-optimisation" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-teal-500/30 transition-all group">
            <TrendingUp className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors mb-2">GEO</h3>
            <p className="text-slate-400 text-sm">Strategy aligned to AI search citation requirements</p>
          </Link>
          <Link href="/services/content-scaling" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
            <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">Content Scaling</h3>
            <p className="text-slate-400 text-sm">Programmatic execution of your content strategy at scale</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

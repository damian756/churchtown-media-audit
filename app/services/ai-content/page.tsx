import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, FileText, Zap, TrendingUp, Clock, Globe, ShieldCheck, BarChart3, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Content Production | Human-Edited, SEO-Optimised | Churchtown Media",
  description: "Scale your content output without scaling headcount. We use AI-augmented workflows with senior editorial oversight to produce authoritative, GEO-ready content at a fraction of the traditional cost.",
  keywords: [
    "AI content production",
    "AI content marketing",
    "AI SEO content",
    "AI writing service",
    "scalable content production",
    "AI content agency",
    "content at scale",
    "human edited AI content",
    "GEO ready content",
    "AI augmented content",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/ai-content",
  },
  openGraph: {
    title: "AI Content Production | Human-Edited, SEO-Optimised | Churchtown Media",
    description: "Scale your content output without scaling headcount. AI-augmented content production with senior editorial oversight: built for Google, GEO, and AI search.",
    url: "https://www.churchtownmedia.co.uk/services/ai-content",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AI Content Production - Churchtown Media",
      },
    ],
  },
};

export default function AIContentPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Content Production",
    serviceType: "Content Marketing",
    description:
      "AI-augmented content production service with senior editorial oversight. We use AI tools accelerate content workflows while human editors ensure quality, accuracy, and E-E-A-T compliance: producing authoritative content at scale.",
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
      priceRange: "£500-£3000/month",
      priceCurrency: "GBP",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Will AI content get penalised by Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google's guidance is clear: they care about content quality, not how it was produced. AI-generated content that is useful, accurate, and demonstrates real expertise is not penalised. The problem is low-quality AI content: generic, inaccurate, and written without subject matter knowledge. Our process combines AI efficiency with senior editorial oversight to produce content that meets Google's E-E-A-T standards.",
        },
      },
      {
        "@type": "Question",
        name: "How is your AI content different from just using ChatGPT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Raw ChatGPT output is a starting point, not a finished product. Our process adds: keyword and search intent research, expert editorial review, fact-checking against authoritative sources, proper E-E-A-T signals (named authors, credentials), structured data markup, internal linking, and optimisation for GEO and AI Overview citations. The AI accelerates production; the editorial process is what makes it rank.",
        },
      },
      {
        "@type": "Question",
        name: "What types of content do you produce?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We produce: landing pages, service pages, location pages, blog articles, long-form guides, FAQ content, case studies, and programmatic content at scale. We focus on content that has a clear search or AI citation purpose: not content produced for its own sake.",
        },
      },
      {
        "@type": "Question",
        name: "How much content can you produce per month?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depending on the package, we produce 4 to 50+ pieces of content per month. For programmatic SEO projects, we can generate thousands of templated pages from structured data. For authority content, we prioritise depth over volume: a single comprehensive guide can outperform ten thin articles.",
        },
      },
    ],
  };

  const process = [
    {
      step: "01",
      title: "Research & Intent Mapping",
      description:
        "Every piece of content starts with keyword and search intent data. We map what your audience is actually searching for: including the questions AI engines are answering.",
    },
    {
      step: "02",
      title: "Expert Brief Creation",
      description:
        "We build a detailed brief covering angle, target keywords, required facts, competitor gaps, and E-E-A-T requirements before any content is produced.",
    },
    {
      step: "03",
      title: "AI-Accelerated Production",
      description:
        "AI tools accelerate the drafting process. We use them strategically: for research, structure, and first drafts: while humans drive the creative and factual direction.",
    },
    {
      step: "04",
      title: "Editorial Review & Enrichment",
      description:
        "Senior editorial review: fact-checking, accuracy, voice consistency, brand alignment, and the addition of unique insights that raw AI can't provide.",
    },
    {
      step: "05",
      title: "SEO & GEO Optimisation",
      description:
        "Title tags, meta descriptions, schema markup, internal links, and GEO signals applied. Every piece is built to rank in traditional search and appear in AI answers.",
    },
    {
      step: "06",
      title: "Publish, Track, Improve",
      description:
        "Published to your CMS with tracking set up. We monitor rankings, AI citations, and engagement: and improve iteratively each month.",
    },
  ];

  const packages = [
    {
      name: "Content Essentials",
      price: "£500",
      period: "/month",
      pieces: "4 pieces",
      description: "Ideal for businesses that need consistent, quality content without an in-house writer.",
      colour: "blue",
      features: [
        "4 editorial pieces per month",
        "Up to 1,500 words per piece",
        "Keyword research included",
        "SEO meta optimisation",
        "Schema markup applied",
        "1 revision round",
      ],
    },
    {
      name: "Content Growth",
      price: "£1,400",
      period: "/month",
      pieces: "12 pieces",
      description: "Serious content output for businesses building topical authority.",
      colour: "purple",
      highlight: true,
      features: [
        "12 editorial pieces per month",
        "Up to 2,500 words per piece",
        "Competitor gap analysis",
        "GEO-optimised structure",
        "E-E-A-T author attribution",
        "FAQ schema on all pieces",
        "Internal linking strategy",
        "Monthly content performance report",
      ],
    },
    {
      name: "Content Authority",
      price: "£3,000",
      period: "/month",
      pieces: "30+ pieces",
      description: "Full content engine for businesses building category dominance.",
      colour: "emerald",
      features: [
        "30+ pieces per month",
        "Long-form guides (3,000–6,000 words)",
        "Programmatic content templates",
        "Subject matter expert input",
        "Digital PR content hooks",
        "AI Overview citation targeting",
        "Full GEO integration",
        "Bi-weekly strategy calls",
      ],
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
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 mb-8">
          <Bot className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">AI-Augmented Content Production</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Content that ranks -{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            produced at scale.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
          Your competitors are publishing 10x more content than you. AI gives us the production speed. Senior editorial
          oversight gives you the quality. Together: authoritative content that ranks and gets cited by AI engines.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Not raw AI output. Not human-only production at unsustainable cost. A third way: fast, expert, and built for
          how search works in 2026.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Discuss Content Strategy <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services/generative-engine-optimisation"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            See GEO Service <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* THE HONEST POSITION */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <ShieldCheck className="w-10 h-10 text-blue-400 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Our position on AI content</h2>
          <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-300 prose-p:leading-relaxed">
            <p>
              We don't pretend AI doesn't exist. We don't pretend it hasn't changed content production. And we don't
              pretend that raw AI output is a substitute for expertise.
            </p>
            <p>
              What we do: use AI tools to handle the parts of content production that don't require human judgement
              (research aggregation, structure, first drafts), and apply human expertise to the parts that do (accuracy,
              insight, brand voice, E-E-A-T compliance).
            </p>
            <p>
              The result is content that Google trusts, AI engines cite, and audiences actually read. That's the
              standard we hold ourselves to: not the word count.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How it works</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Six stages from brief to published, optimised, tracked content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step) => (
            <div key={step.step} className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all">
              <div className="text-6xl font-black text-slate-800 absolute top-4 right-6 select-none">{step.step}</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Content Packages</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Volume matched to your growth stage and competitive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const isHighlight = pkg.highlight;
            const colours: Record<string, { border: string; check: string; button: string; badge: string }> = {
              blue: { border: "border-blue-500/30", check: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500", badge: "bg-blue-500/10 text-blue-400" },
              purple: { border: "border-purple-500/50", check: "text-purple-400", button: "bg-purple-600 hover:bg-purple-500", badge: "bg-purple-500/10 text-purple-400" },
              emerald: { border: "border-emerald-500/30", check: "text-emerald-400", button: "bg-emerald-600 hover:bg-emerald-500", badge: "bg-emerald-500/10 text-emerald-400" },
            };
            const c = colours[pkg.colour];
            return (
              <div
                key={pkg.name}
                className={`relative bg-slate-900 border rounded-2xl p-8 flex flex-col ${c.border} ${isHighlight ? "shadow-xl shadow-purple-500/10" : ""}`}
              >
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-8">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${c.badge}`}>{pkg.pieces}/month</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-black text-white">{pkg.price}</span>
                    <span className="text-slate-400 mb-1">{pkg.period}</span>
                  </div>
                  <p className="text-slate-400">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 ${c.check} shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 rounded-xl font-bold text-white transition-all ${c.button}`}
                >
                  Get Started
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
        <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-3xl p-12 text-center">
          <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Ready to scale your content?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us your goals. We'll show you exactly what a content strategy looks like for your sector and
            competitive environment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Start the Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/generative-engine-optimisation" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
            <Bot className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">GEO</h3>
            <p className="text-slate-400 text-sm">Get your content cited by AI search engines</p>
          </Link>
          <Link href="/services/seo" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">SEO Services</h3>
            <p className="text-slate-400 text-sm">Traditional search rankings that content drives</p>
          </Link>
          <Link href="/services/content-strategy" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <FileText className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">Content Strategy</h3>
            <p className="text-slate-400 text-sm">The roadmap behind every piece we produce</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Search, Zap, TrendingUp, FileText, Globe, MessageSquare, BarChart3, ShieldCheck, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Generative Engine Optimisation (GEO) | Churchtown Media",
  description: "Get cited by ChatGPT, Google AI Overviews, and Perplexity. GEO is the new SEO — we optimise your content and authority so AI recommends your business, not your competitors.",
  keywords: [
    "generative engine optimisation",
    "GEO",
    "AI SEO",
    "Google AI Overviews",
    "ChatGPT SEO",
    "Perplexity SEO",
    "AI search optimisation",
    "AI Overview ranking",
    "appear in AI answers",
    "generative AI search",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/generative-engine-optimisation",
  },
  openGraph: {
    title: "Generative Engine Optimisation (GEO) | Churchtown Media",
    description: "Get cited by ChatGPT, Google AI Overviews, and Perplexity. We helped Alotek Shelters rank #1 in Google's AI Overview in 30 days. Now we do it for more businesses.",
    url: "https://www.churchtownmedia.co.uk/services/generative-engine-optimisation",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/images/google-ai-overviews-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Generative Engine Optimisation - Get cited by AI search engines",
      },
    ],
  },
};

export default function GEOPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Generative Engine Optimisation (GEO)",
    serviceType: "Search Engine Optimization",
    description:
      "Generative Engine Optimisation (GEO) is the practice of structuring your content, authority, and technical signals so that AI-powered search engines — Google AI Overviews, ChatGPT, Perplexity, Gemini — cite your business as a trusted source.",
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
      priceRange: "£750-£3500/month",
      priceCurrency: "GBP",
      description: "GEO retainer packages based on scope and content volume",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "GEO Service Tiers",
      itemListElement: [
        {
          "@type": "Offer",
          name: "GEO Starter",
          description: "AI citation audit, schema overhaul, and 4 authoritative content pieces/month",
          price: "750",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "750",
            priceCurrency: "GBP",
            unitCode: "MON",
          },
        },
        {
          "@type": "Offer",
          name: "GEO Growth",
          description: "Full GEO stack: E-E-A-T content, structured data, AI crawler optimisation, monthly reporting",
          price: "1800",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1800",
            priceCurrency: "GBP",
            unitCode: "MON",
          },
        },
        {
          "@type": "Offer",
          name: "GEO Authority",
          description: "Full retainer including digital PR, AI-ready technical SEO, and competitor displacement",
          price: "3500",
          priceCurrency: "GBP",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "3500",
            priceCurrency: "GBP",
            unitCode: "MON",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Generative Engine Optimisation (GEO)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generative Engine Optimisation (GEO) is the process of structuring your website content, technical signals, and brand authority so that AI search engines — including Google AI Overviews, ChatGPT search, Perplexity, and Gemini — cite your business as a source in their generated answers. Unlike traditional SEO where you rank in a list of links, GEO gets your business cited directly inside the AI-generated response.",
        },
      },
      {
        "@type": "Question",
        name: "How is GEO different from traditional SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional SEO gets you ranked in a list of ten blue links. GEO gets you cited inside the AI-generated answer at the top of the page — before the links. AI Overviews appear on roughly 15-30% of all searches and that number is growing. If your content and authority signals are right, you get cited. If they're not, your competitors do.",
        },
      },
      {
        "@type": "Question",
        name: "How long does GEO take to work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For less competitive terms, AI Overview citations can appear within 4–8 weeks of implementing correct E-E-A-T signals, schema, and content structure. We helped Alotek Shelters achieve #1 Google AI Overview appearances within 30 days for their core commercial terms. Competitive industries take longer but the citations are proportionally more valuable.",
        },
      },
      {
        "@type": "Question",
        name: "What does a GEO audit include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our GEO audit covers: structured data analysis (are AI crawlers reading your data cleanly?), E-E-A-T signals assessment (author expertise, business authority, trust factors), content gap analysis against current AI Overview citations, competitor citation analysis, and a technical review of how AI systems currently interpret your site.",
        },
      },
      {
        "@type": "Question",
        name: "Can you guarantee AI Overview appearances?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No ethical agency guarantees AI Overview rankings — AI systems decide what to cite based on signals we influence, not control. What we can guarantee is a rigorous application of the known factors that increase citation probability: E-E-A-T authority, clean structured data, authoritative content depth, and strong off-site trust signals. Our track record speaks for the results.",
        },
      },
    ],
  };

  const deliverables = [
    {
      icon: Search,
      title: "AI Citation Audit",
      description:
        "We map which AI engines currently cite you (if any), which competitors they cite instead, and exactly why. Data-driven — not guesswork.",
    },
    {
      icon: FileText,
      title: "E-E-A-T Content Production",
      description:
        "AI engines cite sources with demonstrated Experience, Expertise, Authoritativeness, and Trustworthiness. We build the content that proves yours.",
    },
    {
      icon: Bot,
      title: "Structured Data Overhaul",
      description:
        "Schema.org implementation done properly. FAQ, HowTo, Article, Organization, Service — the machine-readable signals AI needs to cite you cleanly.",
    },
    {
      icon: Globe,
      title: "AI Crawler Technical Audit",
      description:
        "GPTBot, ClaudeBot, PerplexityBot, GoogleOther — we check each crawler can access and interpret your site correctly. Most sites block AI crawlers by accident.",
    },
    {
      icon: MessageSquare,
      title: "Conversational Content Strategy",
      description:
        "AI engines answer questions. We structure your content around the exact questions your audience asks — so your answers are the ones cited.",
    },
    {
      icon: TrendingUp,
      title: "Citation Monitoring & Reporting",
      description:
        "Monthly reporting on your AI Overview appearances, Perplexity citations, and ChatGPT mentions — tracked, measured, improved.",
    },
  ];

  const tiers = [
    {
      name: "GEO Starter",
      price: "£750",
      period: "/month",
      description: "For businesses who need to get into AI answers and don't have a large content operation.",
      colour: "blue",
      features: [
        "AI citation audit (baseline report)",
        "Schema.org structured data implementation",
        "4 authoritative content pieces/month",
        "E-E-A-T author attribution setup",
        "AI crawler access check",
        "Monthly AI citation report",
      ],
      cta: "Start GEO",
      href: "/contact",
    },
    {
      name: "GEO Growth",
      price: "£1,800",
      period: "/month",
      description: "Full GEO stack for businesses competing in moderately contested sectors.",
      colour: "purple",
      highlight: true,
      features: [
        "Everything in Starter",
        "Competitor citation displacement strategy",
        "8 content pieces/month (long-form authority articles)",
        "FAQ and HowTo schema at scale",
        "Google AI Overview monitoring",
        "Perplexity and ChatGPT citation tracking",
        "Quarterly strategy review",
      ],
      cta: "Get GEO Growth",
      href: "/contact",
    },
    {
      name: "GEO Authority",
      price: "£3,500",
      period: "/month",
      description: "Full authority play. For businesses that need to own the AI answer in competitive markets.",
      colour: "emerald",
      features: [
        "Everything in Growth",
        "Digital PR and off-site citation building",
        "16+ content pieces/month",
        "Industry expert interviews and bylines",
        "Wikipedia/Wikidata entity management",
        "Full technical SEO integration",
        "Monthly strategy call with Damian",
      ],
      cta: "Discuss Authority",
      href: "/contact",
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
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">
            New Service — AI Search Optimisation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Get cited by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
            AI search engines.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
          Google AI Overviews, ChatGPT search, and Perplexity are changing how people find businesses. Most companies
          are invisible in these answers. We make sure yours isn't.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          <strong className="text-white">Generative Engine Optimisation (GEO)</strong> is the practice of structuring
          your content and authority signals so AI recommends your business. We helped Alotek Shelters rank{" "}
          <strong className="text-purple-400">#1 in Google's AI Overview in 30 days.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
          >
            Get Your GEO Audit <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/blog/alotek-shelters-month-1-seo-results"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            See the Case Study <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-8 px-6 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-purple-400 mb-2">30 days</div>
            <div className="text-slate-300 font-medium">to first AI Overview appearance — Alotek Shelters</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-400 mb-2">10 terms</div>
            <div className="text-slate-300 font-medium">ranking #1 with AI Overview citations simultaneously</div>
          </div>
          <div>
            <div className="text-4xl font-black text-emerald-400 mb-2">~25%</div>
            <div className="text-slate-300 font-medium">of all Google searches now trigger an AI Overview</div>
          </div>
        </div>
      </section>

      {/* WHAT IS GEO */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">What is GEO — and why does it matter now?</h2>
        <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-h3:text-white prose-h3:font-bold prose-li:text-slate-300">
          <p>
            Traditional SEO put you in a ranked list of ten links. People scrolled down, clicked a result, visited your
            site. That model still works — and we still do it — but it's no longer the whole picture.
          </p>
          <p>
            Google now generates a synthesised answer at the top of the page for an increasing percentage of searches.
            ChatGPT has web search built in. Perplexity cites sources like an AI-powered research assistant. These
            systems don't show you a list of options — they pick a source, summarise it, and present it as the answer.
          </p>
          <p>
            If you're the source they cite, you get the traffic, the authority, and the conversion. If you're not, your
            competitor does.
          </p>
          <p>
            <strong className="text-white">GEO is the work that makes AI engines choose you.</strong> It combines
            technical signals (structured data, clean crawlability), content signals (E-E-A-T, depth, specificity), and
            authority signals (off-site citations, expert authorship) into a coherent strategy.
          </p>
          <p>
            We've been building for this since before it had a name. The Alotek Shelters result — #1 AI Overview in 30
            days — wasn't luck. It was a set of deliberate technical and content decisions made on a well-structured
            Next.js site. We replicate that process for every GEO client.
          </p>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What's included in GEO</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Six interlocking work streams that give AI engines every reason to cite you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">GEO Packages</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Pick the scope that matches your competitive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const isHighlight = tier.highlight;
            const colours: Record<string, { border: string; badge: string; button: string; check: string }> = {
              blue: {
                border: "border-blue-500/30",
                badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                button: "bg-blue-600 hover:bg-blue-500",
                check: "text-blue-400",
              },
              purple: {
                border: "border-purple-500/50",
                badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                button: "bg-purple-600 hover:bg-purple-500",
                check: "text-purple-400",
              },
              emerald: {
                border: "border-emerald-500/30",
                badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                button: "bg-emerald-600 hover:bg-emerald-500",
                check: "text-emerald-400",
              },
            };
            const c = colours[tier.colour];
            return (
              <div
                key={tier.name}
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
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-slate-400 mb-1">{tier.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 ${c.check} shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`block w-full text-center py-4 rounded-xl font-bold text-white transition-all ${c.button}`}
                >
                  {tier.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">GEO — Common Questions</h2>
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
        <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-3xl p-12 text-center">
          <Lightbulb className="w-12 h-12 text-purple-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Is your business invisible in AI search?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We'll audit your current AI citation status, show you who AI is recommending instead of you, and tell you
            exactly what it would take to change that.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
          >
            Book Your GEO Audit <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-slate-500 text-sm mt-4">No commitment. Just data.</p>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/services/seo"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group"
          >
            <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              SEO Services
            </h3>
            <p className="text-slate-400 text-sm">Traditional search rankings that GEO builds upon</p>
          </Link>
          <Link
            href="/services/ai-content"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group"
          >
            <Bot className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
              AI Content Production
            </h3>
            <p className="text-slate-400 text-sm">The content engine that powers GEO at scale</p>
          </Link>
          <Link
            href="/services/content-scaling"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group"
          >
            <Globe className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
              Content Scaling
            </h3>
            <p className="text-slate-400 text-sm">Programmatic pages that multiply your GEO footprint</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

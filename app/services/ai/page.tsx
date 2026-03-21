import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, Workflow, FileText, Search, TrendingUp, Zap, CheckCircle2, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services | GEO, AI Content & Workflow Automation | Churchtown Media",
  description: "Our full AI service range: Generative Engine Optimisation (GEO), AI content production at scale, and AI workflow automation. Built for businesses that want to operate smarter and rank in the age of AI search.",
  keywords: [
    "AI services UK",
    "AI agency North West",
    "generative engine optimisation",
    "AI content production",
    "AI workflow automation",
    "AI SEO agency",
    "AI business services",
    "AI search optimisation",
    "GEO agency",
    "AI marketing agency UK",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/ai",
  },
  openGraph: {
    title: "AI Services | GEO, AI Content & Workflow Automation | Churchtown Media",
    description: "GEO, AI content production, and AI workflow automation — three services that prepare your business for the age of AI search and intelligent automation.",
    url: "https://www.churchtownmedia.co.uk/services/ai",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/images/google-ai-overviews-2026.jpg",
        width: 1200,
        height: 630,
        alt: "AI Services - Churchtown Media",
      },
    ],
  },
};

export default function AIServicesHubPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Services",
    serviceType: "Artificial Intelligence Services",
    description:
      "Churchtown Media's AI service range covers three areas: Generative Engine Optimisation (GEO) for AI search visibility, AI Content Production for scalable authority content, and AI Workflow Implementation for business process automation.",
    provider: {
      "@type": "Organization",
      "@id": "https://www.churchtownmedia.co.uk/#organization",
      name: "Churchtown Media",
      url: "https://www.churchtownmedia.co.uk",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Generative Engine Optimisation",
          url: "https://www.churchtownmedia.co.uk/services/generative-engine-optimisation",
          description: "Get cited by Google AI Overviews, ChatGPT, and Perplexity",
        },
        {
          "@type": "Offer",
          name: "AI Content Production",
          url: "https://www.churchtownmedia.co.uk/services/ai-content",
          description: "Scale your content output with AI-augmented production and senior editorial oversight",
        },
        {
          "@type": "Offer",
          name: "AI Workflow Implementation",
          url: "https://www.churchtownmedia.co.uk/services/ai-workflows",
          description: "Bespoke AI automation workflows that eliminate repetitive tasks and reduce operational costs",
        },
      ],
    },
  };

  const services = [
    {
      icon: Search,
      title: "Generative Engine Optimisation (GEO)",
      href: "/services/generative-engine-optimisation",
      colour: "purple",
      tag: "Rank in AI search",
      description:
        "Google AI Overviews, ChatGPT search, and Perplexity are changing how people find businesses. We structure your content and authority signals so AI recommends you — not your competitors.",
      proof: "Alotek Shelters: #1 AI Overview in 30 days",
      pricing: "from £750/month",
      features: [
        "AI citation audit and competitor analysis",
        "E-E-A-T content production",
        "Schema.org structured data implementation",
        "AI crawler access verification",
        "Monthly citation monitoring and reporting",
      ],
    },
    {
      icon: Bot,
      title: "AI Content Production",
      href: "/services/ai-content",
      colour: "blue",
      tag: "Scale your output",
      description:
        "AI-augmented content workflows with senior editorial oversight. Scale your content output without scaling headcount — authoritative, GEO-ready content that ranks.",
      proof: "From 4 to 50+ pieces per month depending on package",
      pricing: "from £500/month",
      features: [
        "Keyword research and intent mapping",
        "AI-accelerated production pipeline",
        "Senior editorial review and fact-checking",
        "SEO and GEO optimisation on every piece",
        "Schema markup and internal linking",
      ],
    },
    {
      icon: Workflow,
      title: "AI Workflow Implementation",
      href: "/services/ai-workflows",
      colour: "emerald",
      tag: "Automate operations",
      description:
        "We analyse your operations, identify where AI can replace manual work, and build the systems that do it. Content pipelines, lead qualification, reporting, onboarding — built to spec.",
      proof: "60–80% reduction in time spent on automated tasks",
      pricing: "from £1,500 (project)",
      features: [
        "Operations audit and opportunity report",
        "Working prototype before full build",
        "Multi-tool integrations (Make, n8n, OpenAI)",
        "Team training and full documentation",
        "Monitoring and iteration post-launch",
      ],
    },
  ];

  const colourMap: Record<string, { border: string; icon: string; tag: string; button: string; proof: string }> = {
    purple: {
      border: "border-purple-500/30",
      icon: "bg-purple-600/20 text-purple-400",
      tag: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      button: "bg-purple-600 hover:bg-purple-500",
      proof: "text-purple-400",
    },
    blue: {
      border: "border-blue-500/30",
      icon: "bg-blue-600/20 text-blue-400",
      tag: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      button: "bg-blue-600 hover:bg-blue-500",
      proof: "text-blue-400",
    },
    emerald: {
      border: "border-emerald-500/30",
      icon: "bg-emerald-600/20 text-emerald-400",
      tag: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      button: "bg-emerald-600 hover:bg-emerald-500",
      proof: "text-emerald-400",
    },
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8">
          <Bot className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">AI Services</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          AI is changing search.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
            We're ahead of it.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
          Three AI services that work individually or as a stack: get cited by AI search engines, scale your content
          output, and automate the operations that are slowing your business down.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          We've been building AI-integrated systems since before most agencies knew what to call them. The results are on
          the page — not in a slide deck.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-500 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
          >
            Discuss AI Strategy <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/blog/alotek-shelters-month-1-seo-results"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            See AI Case Study <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-8 px-6 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-purple-400 mb-2">30 days</div>
            <div className="text-slate-300 font-medium">to first Google AI Overview citation</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-400 mb-2">50+</div>
            <div className="text-slate-300 font-medium">content pieces/month at GEO-ready standard</div>
          </div>
          <div>
            <div className="text-4xl font-black text-emerald-400 mb-2">60–80%</div>
            <div className="text-slate-300 font-medium">time saving on automated business operations</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Three AI services. One coherent strategy.</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Each service stands alone. Together, they compound.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service) => {
            const Icon = service.icon;
            const c = colourMap[service.colour];
            return (
              <div
                key={service.title}
                className={`bg-slate-900 border rounded-3xl p-8 md:p-12 ${c.border} hover:shadow-lg transition-all`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${c.icon}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className={`text-xs font-bold border rounded-full px-3 py-1.5 ${c.tag}`}>
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>

                    <div className={`text-sm font-bold mb-6 ${c.proof}`}>
                      ✓ {service.proof}
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={service.href}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all ${c.button}`}
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                      <span className="text-slate-400 text-sm font-medium">{service.pricing}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-4">What's included</p>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${c.proof}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* THE STACK PLAY */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-900 border border-slate-700 rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">The full AI stack</h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              The three services compound when used together. GEO gets you cited in AI answers. AI Content Production
              gives the AI engines more authoritative material to cite. AI Workflows free up the internal capacity to
              invest in both. The result is a self-reinforcing loop: better content → more AI citations → more
              visibility → more time to produce better content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <Search className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-bold mb-1">GEO</div>
                <div className="text-slate-400 text-sm">AI search visibility</div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <FileText className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-white font-bold mb-1">AI Content</div>
                <div className="text-slate-400 text-sm">Authority at scale</div>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 text-center">
                <Workflow className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-white font-bold mb-1">AI Workflows</div>
                <div className="text-slate-400 text-sm">Operational efficiency</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all"
            >
              Discuss the Full Stack <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG LINKS */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">Read the thinking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/blog/what-is-generative-engine-optimisation"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group"
          >
            <BarChart3 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
              What is Generative Engine Optimisation?
            </h3>
            <p className="text-slate-400 text-sm">The complete explainer — what it is, how it works, and why it matters now.</p>
          </Link>
          <Link
            href="/blog/ai-seo-vs-traditional-seo"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group"
          >
            <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              AI SEO vs Traditional SEO: What's Actually Changed?
            </h3>
            <p className="text-slate-400 text-sm">Not everything changed. Here's what did — and how to adapt your strategy.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

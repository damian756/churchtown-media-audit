import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, CheckCircle2, Database, Zap, TrendingUp, BarChart3, Bot, Globe, Lightbulb, Settings, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Bespoke Systems & Custom Dashboards | Churchtown Media",
  description: "When off-the-shelf tools don't fit, we build to spec. Custom lead generation systems, analytics dashboards, AI-powered reporting tools, and data platforms — built on Next.js and PostgreSQL for businesses with complex requirements.",
  keywords: [
    "bespoke web systems",
    "custom dashboard development",
    "custom analytics platform",
    "lead generation system",
    "bespoke software UK",
    "custom web application",
    "Next.js custom development",
    "business intelligence dashboard",
    "custom CRM development",
    "data platform development",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/bespoke-systems",
  },
  openGraph: {
    title: "Bespoke Systems & Custom Dashboards | Churchtown Media",
    description: "Custom lead generation systems, analytics dashboards, AI-powered reporting tools, and data platforms built to spec on Next.js and PostgreSQL.",
    url: "https://www.churchtownmedia.co.uk/services/bespoke-systems",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Bespoke Systems - Churchtown Media",
      },
    ],
  },
};

export default function BespokeSystemsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bespoke Systems & Custom Development",
    serviceType: "Custom Software Development",
    description:
      "Bespoke digital systems for businesses with requirements that off-the-shelf tools can't meet. Includes custom dashboards, lead generation platforms, AI-powered reporting tools, data aggregation systems, and client portals — all built on Next.js, TypeScript, and PostgreSQL.",
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
      priceRange: "£5,000-£50,000+",
      priceCurrency: "GBP",
      description: "Project-based pricing based on scope, integrations, and complexity",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kind of custom systems do you build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build: custom lead generation platforms (multi-step forms, CRM integration, AI scoring), business intelligence dashboards (data from multiple sources, real-time reporting), client portals (login, reporting, document management), data aggregation systems (pulling from APIs, databases, third-party sources), AI-powered reporting tools (automated analysis and narrative generation), and bespoke directory and listing platforms.",
        },
      },
      {
        "@type": "Question",
        name: "What technology stack do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard stack is Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, Prisma ORM, PostgreSQL (Neon serverless), NextAuth for authentication, Stripe for payments, and Vercel for deployment. For AI integrations we use OpenAI and Anthropic APIs. For workflow automation we use Make (Integromat) or n8n. We choose the right tools for each project — not just the ones we're comfortable with.",
        },
      },
      {
        "@type": "Question",
        name: "Do you build MVPs or only finished products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both. We regularly build MVPs for businesses that need to validate a concept before committing to full development. An MVP typically takes 4–8 weeks and delivers core functionality in a production-ready but reduced-scope version. We're honest about what should be an MVP and what requires a full build from the start.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle ongoing maintenance after launch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our bespoke systems are documented and handed over with source code. We offer optional maintenance retainers covering security updates, feature additions, and performance monitoring. For systems with AI or data integrations, monitoring is especially important as APIs and data sources change over time.",
        },
      },
    ],
  };

  const systemTypes = [
    {
      icon: TrendingUp,
      title: "Lead Generation Platforms",
      description: "Multi-step qualification flows, AI lead scoring, CRM integration, automated routing and follow-up sequences. Built to convert — not just capture.",
      examples: ["Multi-step quote calculators", "Professional services intake forms", "B2B prospect qualification systems"],
    },
    {
      icon: BarChart3,
      title: "Analytics & BI Dashboards",
      description: "Pull data from GA4, Search Console, CRMs, ad platforms, and proprietary sources. Display it in purpose-built dashboards your team actually uses.",
      examples: ["SEO performance dashboards", "Multi-channel marketing overview", "Client reporting portals"],
    },
    {
      icon: Database,
      title: "Data Aggregation Systems",
      description: "Systems that collect, clean, and surface data from multiple disparate sources — APIs, databases, spreadsheets, web scraping — into a single coherent view.",
      examples: ["Property data platforms", "Competitor monitoring systems", "Market intelligence tools"],
    },
    {
      icon: Bot,
      title: "AI-Powered Reporting Tools",
      description: "Connect your data to AI models. Generate narrative reports, identify anomalies, surface insights, and produce automated client-ready documents.",
      examples: ["Automated weekly business reports", "AI-generated SEO briefings", "Client performance narrative generation"],
    },
    {
      icon: Globe,
      title: "Directory & Listing Platforms",
      description: "Full-featured directory platforms with business listings, categories, search, reviews, tiered subscriptions, and admin dashboards.",
      examples: ["Local business directories", "Industry supplier platforms", "Professional network listings"],
    },
    {
      icon: Shield,
      title: "Client Portals & Dashboards",
      description: "Secure, authenticated client-facing dashboards. Reporting, document delivery, project tracking, and communication — all in your brand.",
      examples: ["Agency client dashboards", "Service delivery portals", "Subscription management platforms"],
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
          <Code2 className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Custom Systems — Built to Spec</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          When off-the-shelf{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            isn't enough.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
          Some businesses have requirements that no SaaS tool handles properly. Custom lead generation flows.
          Proprietary data systems. AI-powered reporting at scale. Business intelligence dashboards built around how your
          team actually works.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          We build them. From specification to launch — on a stack that performs, scales, and doesn't create technical
          debt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Discuss Your Requirement <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services/web-design"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            See Web Design Instead <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* TECH STACK STRIP */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-8 px-6 mb-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-wide mb-6">Our Standard Stack</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js 15+", "TypeScript", "Tailwind CSS v4", "PostgreSQL (Neon)", "Prisma ORM", "NextAuth", "Stripe", "OpenAI API", "Anthropic Claude", "Vercel"].map((tech) => (
              <span key={tech} className="bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What we build</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Six categories of custom systems — each built around your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemTypes.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <ul className="space-y-1">
                  {item.examples.map((ex) => (
                    <li key={ex} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-600 shrink-0"></span>
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROOF: OUR OWN SYSTEMS */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <Lightbulb className="w-10 h-10 text-yellow-400 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">We build bespoke systems for ourselves too</h2>
          <div className="prose prose-invert prose-slate max-w-none prose-p:text-slate-300 prose-p:leading-relaxed">
            <p>
              SouthportGuide.co.uk is a bespoke data platform we built and run. It aggregates Land Registry property
              sales data, Ofsted school ratings, police crime data, EPC records, flood zone information, and broadband
              coverage into a unified postcode-level database — generating thousands of unique, data-rich landing pages
              automatically.
            </p>
            <p>
              FormbyGuide.co.uk, SeftonLinks.com, and SeftonCoastWildlife.co.uk are further examples of bespoke
              systems we've built on the same stack. We're not describing a theoretical capability. We're describing
              what we do every day.
            </p>
            <p>
              When you commission a bespoke system from us, you get the same architecture, the same attention to
              performance and SEO, and the same long-term thinking we apply to our own publishing network.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">How bespoke projects work</h2>
        <div className="space-y-4">
          {[
            { n: "01", title: "Discovery Call", body: "We understand your requirements, your existing systems, your team, and your constraints. No spec written yet." },
            { n: "02", title: "Technical Specification", body: "A written spec covering system architecture, data models, user flows, integrations, and delivery timeline. You approve before any code is written." },
            { n: "03", title: "Prototype / MVP", body: "Where appropriate, we build a working prototype for you to test against real requirements before committing to full development." },
            { n: "04", title: "Full Build", body: "Iterative development with regular check-ins and demos. No big bang delivery — you see progress throughout." },
            { n: "05", title: "Testing & Launch", body: "Thorough testing, UAT with your team, and a managed launch. Documentation and handover included as standard." },
            { n: "06", title: "Support & Iteration", body: "Optional maintenance retainer or fixed-price feature additions. The system is yours — fully documented and exportable." },
          ].map((step) => (
            <div key={step.n} className="flex gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-3xl font-black text-slate-700 shrink-0 w-10">{step.n}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <p className="text-slate-400">{step.body}</p>
              </div>
            </div>
          ))}
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
          <Settings className="w-12 h-12 text-blue-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">Tell us what you need.</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            We'll tell you if it's buildable, how long it will take, and what it will cost. No commitment, no sales
            process — just a straight answer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/ai-workflows" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <Bot className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">AI Workflows</h3>
            <p className="text-slate-400 text-sm">AI automation integrated into your bespoke system</p>
          </Link>
          <Link href="/services/web-design" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <Globe className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Web Design</h3>
            <p className="text-slate-400 text-sm">Marketing sites alongside your custom system</p>
          </Link>
          <Link href="/services/content-scaling" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
            <Database className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">Content Scaling</h3>
            <p className="text-slate-400 text-sm">Programmatic content from your system's data</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

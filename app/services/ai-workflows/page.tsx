import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Zap, Settings, TrendingUp, Clock, Globe, BarChart3, Workflow, Database, Lightbulb, Code2, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workflow Implementation | Automate Your Business Operations | Churchtown Media",
  description: "We build bespoke AI-powered workflows that eliminate repetitive tasks, reduce operational costs, and give your team back hours every week. From lead qualification to content pipelines — built to spec.",
  keywords: [
    "AI workflow automation",
    "AI business automation",
    "business AI implementation",
    "AI workflow agency",
    "automate business processes with AI",
    "AI tools for business",
    "custom AI workflows",
    "AI operations",
    "workflow automation UK",
    "AI process automation",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/ai-workflows",
  },
  openGraph: {
    title: "AI Workflow Implementation | Automate Your Business | Churchtown Media",
    description: "Bespoke AI-powered workflows that eliminate repetitive tasks and reduce operational costs. Built for North West businesses ready to operate smarter.",
    url: "https://www.churchtownmedia.co.uk/services/ai-workflows",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "AI Workflow Implementation - Churchtown Media",
      },
    ],
  },
};

export default function AIWorkflowsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Workflow Implementation",
    serviceType: "Business Process Automation",
    description:
      "Bespoke AI workflow implementation for businesses. We analyse your operations, identify automation opportunities, and build custom AI-powered systems that eliminate repetitive tasks, reduce costs, and accelerate output.",
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
      priceRange: "£1500-£15000",
      priceCurrency: "GBP",
      description: "Project-based pricing based on workflow complexity and integration requirements",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kinds of workflows can you automate with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We've built AI workflows for: lead qualification and routing, content production pipelines, customer onboarding sequences, report generation, data aggregation and analysis, competitor monitoring, invoice processing, and customer support triage. If a task is repetitive, rule-based, or data-driven, it's a candidate for AI automation.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need technical knowledge to use AI workflows?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We build the system, train your team, and document everything. The workflows we build are designed to be operated by non-technical staff through simple interfaces. You don't need to understand how the AI works — just the inputs and outputs.",
        },
      },
      {
        "@type": "Question",
        name: "What tools and platforms do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with: Make (Integromat), n8n, Zapier, OpenAI API, Claude API, Perplexity API, Airtable, Notion, Google Sheets, CRMs (HubSpot, Pipedrive), and custom Next.js dashboards. We recommend tools based on your requirements and existing tech stack — not what earns us the best referral fees.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an AI workflow?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple workflows (single-step automations, basic integrations) take 1–2 weeks. Complex multi-system workflows with custom AI components take 4–8 weeks. We always deliver a working prototype before the full build so you can validate the approach early.",
        },
      },
      {
        "@type": "Question",
        name: "What's the typical ROI on AI workflow projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It varies by workflow and business size. A content production pipeline that reduces a 4-hour task to 30 minutes saves 3.5 hours per day — at average agency rates that's £700/day in recovered capacity. Most clients see full project cost payback within 2–4 months. We model the expected ROI before starting any project.",
        },
      },
    ],
  };

  const useCases = [
    {
      icon: FileText,
      title: "Content Production Pipelines",
      description:
        "Automate research, brief creation, first drafts, SEO meta generation, and publishing to your CMS. What takes your team a day takes the workflow an hour.",
      saving: "Save 6+ hours per piece",
    },
    {
      icon: TrendingUp,
      title: "Lead Qualification & Routing",
      description:
        "AI analyses inbound enquiries, scores leads against your criteria, routes them to the right team member, and drafts the initial response — all before your team sees it.",
      saving: "Save 2+ hours per day",
    },
    {
      icon: BarChart3,
      title: "Competitor & Market Monitoring",
      description:
        "Automated daily monitoring of competitor pricing, content, rankings, and reviews. Weekly AI-generated summaries delivered to your inbox — no manual checking required.",
      saving: "Save 5+ hours per week",
    },
    {
      icon: Database,
      title: "Data Aggregation & Reporting",
      description:
        "Pull data from multiple sources (GA4, Search Console, CRM, social), run AI analysis, and generate formatted reports automatically. Delivered on schedule without manual effort.",
      saving: "Save 8+ hours per month",
    },
    {
      icon: Globe,
      title: "Customer Support Triage",
      description:
        "AI classifies inbound enquiries, routes to the right department, generates draft responses for approval, and handles common questions autonomously — with human escalation built in.",
      saving: "Handle 60% of enquiries automatically",
    },
    {
      icon: Settings,
      title: "Onboarding & Process Automation",
      description:
        "From client onboarding to invoice generation to contract delivery — AI-driven workflows that keep operations running without administrative overhead.",
      saving: "Save 3+ hours per new client",
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
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8">
          <Workflow className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">AI Workflow Implementation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Stop doing by hand{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400">
            what AI can do faster.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
          We analyse your operations, identify where AI can replace manual work, and build the systems that do it. Not
          generic tools. Bespoke workflows built around how your business actually runs.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Content pipelines. Lead qualification. Market monitoring. Reporting. Onboarding. If it's repetitive and
          rule-based, it's a candidate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            Discuss Your Workflow <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services/bespoke-systems"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            See Bespoke Systems <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-8 px-6 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-emerald-400 mb-2">1–2 weeks</div>
            <div className="text-slate-300 font-medium">to first working workflow prototype</div>
          </div>
          <div>
            <div className="text-4xl font-black text-blue-400 mb-2">2–4 months</div>
            <div className="text-slate-300 font-medium">typical full project cost payback period</div>
          </div>
          <div>
            <div className="text-4xl font-black text-purple-400 mb-2">60–80%</div>
            <div className="text-slate-300 font-medium">reduction in time spent on automated tasks</div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What we automate</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real workflows we build for real businesses — with measurable time savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-400">{item.saving}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">How we deliver it</h2>
        <div className="space-y-6">
          {[
            { n: "01", title: "Operations Audit", body: "We map your current workflows — where time goes, what the bottlenecks are, what's done manually that doesn't need to be. This is the discovery phase. We don't build anything yet." },
            { n: "02", title: "Automation Opportunity Report", body: "A ranked list of automation opportunities with estimated time savings, complexity, and cost for each. You choose what to prioritise. No obligation." },
            { n: "03", title: "Prototype Build", body: "We build a working prototype of the highest-priority workflow. You test it in your environment with real data before we commit to the full build." },
            { n: "04", title: "Full Implementation", body: "Approved workflows are built, integrated with your existing systems, documented, and handed over with full team training." },
            { n: "05", title: "Monitoring & Iteration", body: "We monitor workflow performance, catch edge cases, and iterate. AI workflows need tuning as your business and data change." },
          ].map((step) => (
            <div key={step.n} className="flex gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <div className="text-3xl font-black text-slate-700 shrink-0 w-12">{step.n}</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Pricing</h2>
        <p className="text-xl text-slate-400 text-center mb-12">Project-based. Scoped to your requirements.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Starter Workflow", price: "from £1,500", description: "Single-step automation or integration. Ideal for one specific bottleneck.", colour: "blue" },
            { name: "Multi-Step System", price: "from £4,500", description: "Complex workflows connecting multiple tools and AI models with conditional logic.", colour: "purple", highlight: true },
            { name: "Enterprise Automation", price: "from £12,000", description: "Full operations audit and multiple interconnected AI workflows across departments.", colour: "emerald" },
          ].map((pkg) => {
            const colours: Record<string, { border: string; button: string }> = {
              blue: { border: "border-blue-500/30", button: "bg-blue-600 hover:bg-blue-500" },
              purple: { border: "border-purple-500/50", button: "bg-purple-600 hover:bg-purple-500" },
              emerald: { border: "border-emerald-500/30", button: "bg-emerald-600 hover:bg-emerald-500" },
            };
            const c = colours[pkg.colour];
            return (
              <div key={pkg.name} className={`relative bg-slate-900 border rounded-2xl p-8 ${c.border} ${pkg.highlight ? "shadow-xl shadow-purple-500/10" : ""}`}>
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Most Common</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-2xl font-black text-white mb-4">{pkg.price}</div>
                <p className="text-slate-400 mb-6 leading-relaxed">{pkg.description}</p>
                <Link href="/contact" className={`block w-full text-center py-3 rounded-xl font-bold text-white transition-all ${c.button}`}>
                  Get a Quote
                </Link>
              </div>
            );
          })}
        </div>
        <p className="text-slate-500 text-sm text-center mt-6">All projects are quoted individually after the initial operations audit.</p>
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
        <div className="bg-gradient-to-br from-emerald-900/40 to-blue-900/40 border border-emerald-500/30 rounded-3xl p-12 text-center">
          <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">What would you automate first?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Tell us the task that takes your team the most time. We'll tell you whether AI can handle it, what it would
            take, and what the ROI looks like.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
          >
            Book an Operations Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/bespoke-systems" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <Code2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">Bespoke Systems</h3>
            <p className="text-slate-400 text-sm">Custom dashboards and tools for complex requirements</p>
          </Link>
          <Link href="/services/ai-content" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
            <Bot className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">AI Content Production</h3>
            <p className="text-slate-400 text-sm">The content workflow we've built — available to you</p>
          </Link>
          <Link href="/services/generative-engine-optimisation" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <TrendingUp className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">GEO</h3>
            <p className="text-slate-400 text-sm">AI-powered search visibility for your business</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

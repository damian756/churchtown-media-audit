import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, CheckCircle2, Clock, TrendingUp, Search, ShieldCheck, BarChart3, FileText, Lightbulb, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "One-Time SEO Optimisation Sprint | Fix Your Site in 30 Days | Churchtown Media",
  description: "Not ready for a monthly retainer? Our Optimisation Sprint fixes your site's biggest SEO problems in a single focused engagement. Technical audit, on-page fixes, schema, and a 90-day action plan. One price, one month.",
  keywords: [
    "one-time SEO service",
    "SEO optimisation sprint",
    "website SEO audit and fix",
    "technical SEO one-time",
    "SEO without retainer",
    "affordable SEO service",
    "one-off SEO audit",
    "SEO project UK",
    "website SEO fix",
    "SEO health check",
  ],
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/services/optimisation-sprint",
  },
  openGraph: {
    title: "One-Time SEO Optimisation Sprint | Fix Your Site in 30 Days | Churchtown Media",
    description: "Technical audit, on-page fixes, schema implementation, and a 90-day action plan. One price, 30 days, measurable results.",
    url: "https://www.churchtownmedia.co.uk/services/optimisation-sprint",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SEO Optimisation Sprint - Churchtown Media",
      },
    ],
  },
};

export default function OptimisationSprintPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO Optimisation Sprint",
    serviceType: "Search Engine Optimization",
    description:
      "A focused 30-day SEO engagement that identifies and fixes your site's biggest ranking blockers. Includes technical audit, on-page optimisation, schema implementation, Core Web Vitals remediation, and a 90-day self-execution action plan.",
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
      priceRange: "£1,500-£3,500",
      priceCurrency: "GBP",
      description: "One-time fixed-price engagement, no ongoing commitment required",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Optimisation Sprint Tiers",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Sprint Standard",
          price: "1500",
          priceCurrency: "GBP",
          description: "Full technical audit plus priority fixes for sites up to 50 pages",
        },
        {
          "@type": "Offer",
          name: "Sprint Pro",
          price: "2500",
          priceCurrency: "GBP",
          description: "Full audit, all on-page fixes, schema implementation, and 90-day action plan",
        },
        {
          "@type": "Offer",
          name: "Sprint Authority",
          price: "3500",
          priceCurrency: "GBP",
          description: "Everything in Pro plus GEO readiness audit and competitor citation analysis",
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
        name: "Is a one-time SEO engagement worth it without an ongoing retainer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, in the right circumstances. If your site has clear technical problems (slow load times, crawl errors, missing schema, poor title tags), fixing them produces lasting ranking improvements. A sprint removes the blockers that are stopping your site from performing. Whether you then continue with a retainer or execute the action plan yourself, you're starting from a better position.",
        },
      },
      {
        "@type": "Question",
        name: "What do you actually fix in 30 days?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We fix: technical crawl errors, redirect chains, canonical issues, missing or duplicate meta tags, thin content pages, broken internal links, image optimisation (alt tags, file sizes), schema markup (Organization, Service, FAQPage, BreadcrumbList), Core Web Vitals issues, and Google Business Profile alignment. We also produce 5 new keyword-optimised pages or rewrites for pages with the highest traffic potential.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly will I see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Technical fixes typically show results within 4–8 weeks — sometimes faster for crawl and indexing issues. Content improvements take longer: 8–12 weeks for new page rankings on competitive terms, faster for long-tail. The 90-day action plan is designed to compound the initial sprint results over the quarter after we've finished.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need developer access for this?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most fixes, yes — either we need access to your CMS/codebase, or your developer needs to implement changes we specify. We provide developer-ready implementation notes for every fix so any competent developer can implement them. If your site is on Next.js, WordPress, or Shopify, we can typically implement directly.",
        },
      },
    ],
  };

  const whatWeDeliver = [
    { icon: Search, title: "Full Technical SEO Audit", description: "Crawl analysis, index coverage, redirect chains, Core Web Vitals, mobile usability — the complete picture." },
    { icon: FileText, title: "On-Page Optimisation", description: "Title tags, H1 structure, meta descriptions, internal linking, content depth — every page reviewed and improved." },
    { icon: ShieldCheck, title: "Schema.org Implementation", description: "Organization, Service, FAQPage, BreadcrumbList, Article — structured data done properly so search engines (and AI) read you correctly." },
    { icon: TrendingUp, title: "5 Priority Page Rewrites", description: "Your five highest-opportunity pages rewritten for their target keywords, with proper E-E-A-T signals and GEO-compatible structure." },
    { icon: BarChart3, title: "Core Web Vitals Remediation", description: "LCP, CLS, FID/INP issues identified and, where possible, fixed. Recommendations for any requiring developer input." },
    { icon: Target, title: "90-Day Action Plan", description: "A prioritised roadmap of everything that couldn't be done in 30 days — with clear instructions so you or your team can continue the work." },
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
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1.5 mb-8">
          <Zap className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold text-orange-400 uppercase tracking-wide">No Monthly Commitment Required</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
          Fix your SEO in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400">
            30 days.
          </span>
        </h1>

        <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
          Not ready for a retainer? Fine. The Optimisation Sprint is a single focused engagement that identifies and
          fixes your site's biggest SEO problems — then leaves you with a roadmap for the next 90 days.
        </p>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          One price. One month. Audit, fixes, schema, content, and a plan. Whether you continue with us or not, your
          site comes out the other side ranked better than when we started.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Book Your Sprint <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all border border-slate-700"
          >
            Free Audit First <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What the Sprint delivers</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Six deliverables in 30 days — all substantive, all documented, all yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whatWeDeliver.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600/30 transition-colors">
                  <Icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sprint Pricing</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Fixed price. No surprises. No retainer required.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sprint Standard",
              price: "£1,500",
              desc: "Sites up to 50 pages. Full audit plus top-priority fixes.",
              colour: "blue",
              features: ["Full technical audit", "Top 10 priority fixes implemented", "Meta and title tag overhaul", "Schema implementation (core pages)", "30-day action plan"],
            },
            {
              name: "Sprint Pro",
              price: "£2,500",
              desc: "Sites up to 150 pages. Full audit, all fixes, 5 content rewrites.",
              colour: "orange",
              highlight: true,
              features: ["Everything in Standard", "All priority fixes implemented", "5 page content rewrites", "Full schema implementation", "Core Web Vitals remediation", "90-day action plan"],
            },
            {
              name: "Sprint Authority",
              price: "£3,500",
              desc: "Competitive sectors. Full sprint plus GEO readiness and competitor analysis.",
              colour: "purple",
              features: ["Everything in Pro", "GEO readiness audit", "Competitor AI citation analysis", "8 page content rewrites", "Google AI Overview readiness report"],
            },
          ].map((tier) => {
            const colours: Record<string, { border: string; check: string; button: string }> = {
              blue: { border: "border-blue-500/30", check: "text-blue-400", button: "bg-blue-600 hover:bg-blue-500" },
              orange: { border: "border-orange-500/50", check: "text-orange-400", button: "bg-orange-600 hover:bg-orange-500" },
              purple: { border: "border-purple-500/30", check: "text-purple-400", button: "bg-purple-600 hover:bg-purple-500" },
            };
            const c = colours[tier.colour];
            return (
              <div key={tier.name} className={`relative bg-slate-900 border rounded-2xl p-8 flex flex-col ${c.border} ${tier.highlight ? "shadow-xl shadow-orange-500/10" : ""}`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">Most Popular</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-black text-white mb-3">{tier.price}</div>
                  <p className="text-slate-400 text-sm">{tier.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className={`w-5 h-5 ${c.check} shrink-0 mt-0.5`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block w-full text-center py-4 rounded-xl font-bold text-white transition-all ${c.button}`}>
                  Book This Sprint
                </Link>
              </div>
            );
          })}
        </div>
        <p className="text-slate-500 text-sm text-center mt-6">One-time project fee. No hidden costs. Invoice on project start, balance on delivery.</p>
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
        <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/30 border border-orange-500/30 rounded-3xl p-12 text-center">
          <Clock className="w-12 h-12 text-orange-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">30 days to a better-ranking site.</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Start with the free audit if you want to see what we'd find. Or book the sprint directly if you already know
            the problems and want them fixed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Book the Sprint <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-700 transition-all"
            >
              Free Audit First <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-2xl font-bold text-white mb-8">After the Sprint</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/seo" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group">
            <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">SEO Retainer</h3>
            <p className="text-slate-400 text-sm">Continue with ongoing SEO management and content</p>
          </Link>
          <Link href="/services/generative-engine-optimisation" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all group">
            <Search className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">GEO Service</h3>
            <p className="text-slate-400 text-sm">Get cited by AI search engines after your foundation is fixed</p>
          </Link>
          <Link href="/services/content-strategy" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
            <FileText className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">Content Strategy</h3>
            <p className="text-slate-400 text-sm">Build on the sprint with a full content roadmap</p>
          </Link>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Database, Zap, Target, Rocket, CheckCircle2, TrendingUp, MapPin, Package, Users, Clock, Code2, Sparkles, BarChart3, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Scaling | 100+ SEO Landing Pages in 48 Hours | Programmatic SEO",
  description: "Stop writing pages one at a time. We use programmatic SEO to generate hundreds of high-quality landing pages instantly. Perfect for multi-location businesses, product catalogs, and service area companies. Data-driven templates, not spam.",
  keywords: ['programmatic seo', 'content scaling', 'automated seo content', 'multi-location seo', 'product catalog seo', 'landing page automation', 'pSEO'],
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/content-scaling',
  },
  openGraph: {
    title: 'Content Scaling | 100+ Landing Pages in 48 Hours | Churchtown Media',
    description: 'Programmatic SEO for multi-location businesses and product catalogs. Generate hundreds of high-quality landing pages instantly.',
    url: 'https://www.churchtownmedia.co.uk/services/content-scaling',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Content Scaling - Programmatic SEO for Multi-Location Businesses',
    }],
  },
};

export default function ContentScalingPage() {
  // JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Scaling & Programmatic SEO",
    "serviceType": "Search Engine Optimization",
    "description": "Programmatic SEO service for generating hundreds of high-quality landing pages using data-driven templates. Perfect for multi-location businesses, franchises, and product catalogs.",
    "provider": {
      "@type": "Organization",
      "@id": "https://www.churchtownmedia.co.uk/#organization",
      "name": "Churchtown Media",
      "url": "https://www.churchtownmedia.co.uk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "£5000-£20000",
      "priceCurrency": "GBP",
      "description": "Template development plus per-page generation cost"
    }
  };

  const perfectFor = [
    {
      icon: MapPin,
      title: "Multi-Location Businesses",
      description: "Franchises, chains, or service businesses operating in 20+ towns/cities. Dominate 'near me' searches everywhere you operate.",
      examples: ["National restaurant chains", "Multi-site law firms", "Regional plumbers serving 50 towns"]
    },
    {
      icon: Package,
      title: "Product Catalogs",
      description: "Manufacturers or distributors with 100+ SKUs. Give every product its own optimized landing page without manual writing.",
      examples: ["Industrial equipment suppliers", "B2B distributors", "E-commerce with large inventories"]
    },
    {
      icon: Globe,
      title: "Service Area Businesses",
      description: "Service providers covering multiple postcodes. Rank for '[service] in [town]' across your entire coverage area.",
      examples: ["Electricians serving 30 towns", "Law firms with regional focus", "Medical practices with multiple branches"]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Template Design",
      description: "We build one perfect, high-quality page template with all the SEO fundamentals: proper heading structure, schema markup, internal linking, and compelling copy.",
      deliverables: ["Single reference page", "Schema.org markup", "Conversion-optimized layout", "Mobile-first design"],
      duration: "Week 1"
    },
    {
      number: "02",
      title: "Data Connection",
      description: "Connect your data source: location spreadsheet, product database, or service area list. We map your data fields to template variables.",
      deliverables: ["Data structure mapping", "Variable schema", "Quality checks", "Preview generation"],
      duration: "Week 1-2"
    },
    {
      number: "03",
      title: "Mass Generation",
      description: "Our system generates 100+ unique pages automatically. Each page is technically unique—not duplicate content—with real value for users.",
      deliverables: ["100+ live pages", "Automated sitemap", "Internal linking structure", "Unique meta descriptions"],
      duration: "Week 2 (48 hours)"
    },
    {
      number: "04",
      title: "Index & Monitor",
      description: "We submit to Google Search Console, monitor indexation, and track rankings for all generated pages. Adjust strategy based on performance data.",
      deliverables: ["GSC submission", "Ranking dashboard", "Monthly performance reports", "Ongoing optimization"],
      duration: "Ongoing"
    }
  ];

  const caseStudies = [
    {
      client: "Our Industry Pages",
      challenge: "We needed to showcase SEO expertise across 35+ industries without writing 35 custom pages.",
      solution: "Built a single template with dynamic industry data, pain points, and local market insights.",
      results: [
        "35 pages generated from 1 template",
        "Each page ranks for '[industry] website design'",
        "Consistent quality across all pages",
        "90+ Lighthouse scores maintained"
      ]
    }
  ];

  const notRightFor = [
    "Single-location businesses (use standard SEO instead)",
    "Companies with <20 pages needed",
    "Businesses wanting 'set and forget' (requires data maintenance)",
    "Industries where every page needs custom legal review"
  ];

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-950 text-white pt-24">
        
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-950 to-blue-900/10" />
          
          <article className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-600/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-bold">Programmatic SEO</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                100+ Landing Pages.
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  48 Hours. Zero Spam.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stop writing pages one at a time. We use data-driven templates to generate hundreds of 
                high-quality, SEO-optimized landing pages instantly. Same quality, 100x the speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-purple-600/20"
                >
                  Discuss Your Project <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
                >
                  See Live Examples
                </Link>
              </div>

              {/* Problem Statement */}
              <div className="bg-red-900/20 border border-red-600/30 rounded-2xl p-6 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 rounded-lg p-2 flex-shrink-0">
                    <Clock className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white mb-2">The Problem You're Facing:</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      You need 100 location pages. Writing them manually would take <strong className="text-white">6 months and cost £20,000</strong>. 
                      By the time they're done, your competitors have already captured the market. <strong className="text-white">There's a better way.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* PERFECT FOR SECTION */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                This Is Perfect For...
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Content scaling works best when you have repetitive content needs with variable data. 
                Here's who benefits most:
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {perfectFor.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all">
                    <div className="bg-purple-600/20 rounded-2xl p-4 w-fit mb-6">
                      <IconComponent className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className="space-y-2">
                      {item.examples.map((example, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-400 text-xs">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* NOT Right For */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-slate-400" />
                This Is NOT Right For:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {notRightFor.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                    <span className="text-red-400 font-bold">✗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 px-4 sm:px-6">
          <article className="max-w-5xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                How Content Scaling Works
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From template design to live pages in 2 weeks. Here's the exact process:
              </p>
            </header>

            <div className="space-y-8">
              {process.map((step, idx) => (
                <div key={step.number} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-purple-600/50 transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-4 flex-shrink-0 h-fit">
                      <span className="text-4xl font-black text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-black text-white">{step.title}</h3>
                        <span className="text-xs text-purple-400 font-bold bg-purple-600/20 px-3 py-1 rounded-full">{step.duration}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
                      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                        <div className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-2">Deliverables</div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.deliverables.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* LIVE PROOF */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                We Practice What We Preach
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                This website uses programmatic SEO. Our 35 industry pages were generated from a single template.
              </p>
            </header>

            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="text-sm text-purple-400 font-bold mb-2">CASE STUDY</div>
                    <h3 className="text-3xl font-black text-white mb-4">{study.client}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-xs text-red-400 font-bold uppercase mb-2">The Challenge</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs text-green-400 font-bold uppercase mb-2">The Solution</div>
                        <p className="text-slate-300 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <Link 
                      href="/industries"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold transition-colors"
                    >
                      View All 35 Industry Pages <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <div className="text-sm text-green-400 font-bold mb-4">Results</div>
                    <div className="space-y-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </article>
        </section>

        {/* TECHNICAL EXCELLENCE */}
        <section className="py-16 px-4 sm:px-6">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Quality at Scale
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Programmatic doesn't mean generic. Every generated page maintains the same technical excellence as a custom page.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Code2,
                  title: "Semantic HTML",
                  description: "Proper heading hierarchy, semantic tags, and accessibility standards on every page."
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Built with Next.js for sub-1s load times. Programmatic pages perform as well as custom ones."
                },
                {
                  icon: Database,
                  title: "Schema Markup",
                  description: "Every page gets appropriate Schema.org structured data for rich search results."
                },
                {
                  icon: BarChart3,
                  title: "Unique Content",
                  description: "Not duplicate content—each page uses variable data to create genuinely unique value."
                },
                {
                  icon: TrendingUp,
                  title: "Internal Linking",
                  description: "Automated intelligent linking structure connects related pages for SEO authority flow."
                },
                {
                  icon: Target,
                  title: "Conversion Optimized",
                  description: "Each page includes proper CTAs, contact forms, and conversion tracking."
                }
              ].map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-600/20 rounded-xl p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        {/* PRICING */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Transparent Pricing
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                No hidden fees. No surprises. Here's exactly what it costs:
              </p>
            </header>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-600/30 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-purple-400 font-bold mb-2">Template Development</div>
                  <div className="text-5xl font-black text-white mb-4">£5,000</div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    One-time cost to build your custom template with all SEO optimizations, schema markup, and conversion elements.
                  </p>
                </div>
                <div>
                  <div className="text-purple-400 font-bold mb-2">Per-Page Generation</div>
                  <div className="text-5xl font-black text-white mb-4">£20-50</div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Cost per page generated, depending on complexity. Data mapping, quality checks, and deployment included.
                  </p>
                </div>
              </div>

              <div className="border-t border-purple-600/30 pt-6">
                <div className="text-sm text-purple-400 font-bold mb-4">Example Pricing</div>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span>100 location pages:</span>
                    <span className="font-bold text-white">£7,000 - £10,000 total</span>
                  </div>
                  <div className="flex justify-between">
                    <span>250 product pages:</span>
                    <span className="font-bold text-white">£10,000 - £17,500 total</span>
                  </div>
                  <div className="flex justify-between">
                    <span>500 service area pages:</span>
                    <span className="font-bold text-white">£15,000 - £30,000 total</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-sm">
                  <strong className="text-white">Compare:</strong> Writing 100 pages manually at £200/page = £20,000. 
                  Takes 3-6 months. Our approach: £7k-10k, delivered in 2 weeks.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20 border border-purple-600/30 rounded-3xl p-12">
            <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-600/30 rounded-full px-4 py-2 mb-6">
              <Rocket className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-bold">Ready to Scale?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Build Your Content Engine
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Book a strategy call to discuss your location data, product catalog, or service areas. 
              We'll map out exactly what's possible and what it'll cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-purple-600/30"
              >
                Book Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
              >
                See Live Examples
              </Link>
            </div>
            <p className="text-slate-400 text-sm mt-6">
              Used by franchises, manufacturers, and multi-location businesses nationwide
            </p>
          </div>
        </section>

      </main>
    </>
  );
}

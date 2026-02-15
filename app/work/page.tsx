import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Rocket, Code2, LineChart, Cog, Zap, Shield, Search, Gauge, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | High-Performance Web Development",
  description: "Our proven 4-phase process for building Next.js websites that rank, convert, and scale. From discovery to launch in 3-5 weeks. Technical SEO, Core Web Vitals optimization, and measurable results.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/work',
  },
  openGraph: {
    title: 'How We Build High-Performance Websites | Churchtown Media Process',
    description: 'Our proven methodology for building Next.js websites that rank, convert, and scale. Technical SEO, Core Web Vitals optimization, measurable results.',
    url: 'https://www.churchtownmedia.co.uk/work',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media - How We Build Websites',
    }],
  },
};

export default function WorkPage() {
  // JSON-LD Schema for Service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development Process",
    "description": "Proven 4-phase methodology for building high-performance Next.js websites with technical SEO optimization",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.churchtownmedia.co.uk/#organization",
      "name": "Churchtown Media",
      "url": "https://www.churchtownmedia.co.uk"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Southport, Liverpool, Manchester, United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Web Design",
            "url": "https://www.churchtownmedia.co.uk/services/web-design"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO",
            "url": "https://www.churchtownmedia.co.uk/services/seo"
          }
        }
      ]
    }
  };

  const phases = [
    {
      number: "01",
      title: "Discovery & Audit",
      duration: "Week 1",
      icon: Search,
      description: "We don't start by asking what you want. We start by analyzing what's actually working (and what isn't).",
      activities: [
        "Competitor technical analysis (speed, rankings, backlinks)",
        "Current site audit (if migrating)",
        "Keyword research for your industry and location",
        "User journey mapping",
        "Conversion funnel analysis"
      ],
      deliverable: "Strategic blueprint document with target keywords, conversion goals, and technical requirements"
    },
    {
      number: "02",
      title: "Architecture & Design",
      duration: "Week 2",
      icon: Code2,
      description: "We build the technical foundation first, then make it look good. Not the other way around.",
      activities: [
        "Information architecture (URL structure, content hierarchy)",
        "Semantic HTML planning (proper heading hierarchy, schema markup)",
        "Design system creation (components, colors, typography)",
        "Core Web Vitals optimization strategy",
        "Mobile-first responsive design"
      ],
      deliverable: "Design mockups + technical architecture document with schema implementation plan"
    },
    {
      number: "03",
      title: "Development & Content",
      duration: "Week 3-4",
      icon: Cog,
      description: "We build with Next.js 14+ and optimize every single line for performance and SEO.",
      activities: [
        "Next.js development (App Router, Server Components)",
        "Content migration or creation",
        "Schema.org JSON-LD implementation",
        "Image optimization (WebP conversion, lazy loading)",
        "Internal linking strategy implementation",
        "CMS integration (if needed)"
      ],
      deliverable: "Staging site for your review with full functionality and content"
    },
    {
      number: "04",
      title: "Launch & Optimization",
      duration: "Week 5",
      icon: Rocket,
      description: "We launch when the site hits our performance benchmarks. Not before.",
      activities: [
        "Pre-launch Core Web Vitals testing (must pass)",
        "SEO validation (metadata, schema, canonicals, redirects)",
        "Analytics & tracking setup (GA4, Search Console)",
        "DNS migration and SSL setup",
        "Post-launch monitoring (24/7 for first week)"
      ],
      deliverable: "Live site + analytics dashboard + handover documentation"
    }
  ];

  const techStack = [
    {
      name: "Next.js 14+",
      icon: Code2,
      description: "React framework with built-in SEO optimization, automatic code splitting, and server-side rendering",
      why: "Best-in-class performance and SEO out of the box"
    },
    {
      name: "TypeScript",
      icon: Shield,
      description: "Type-safe code that catches errors before they reach production",
      why: "Fewer bugs, more reliable, easier to maintain"
    },
    {
      name: "Tailwind CSS",
      icon: Zap,
      description: "Utility-first CSS framework for rapid, consistent styling",
      why: "Zero runtime CSS-in-JS overhead = faster sites"
    },
    {
      name: "Sanity CMS",
      icon: Cog,
      description: "Headless CMS for content management without performance penalties",
      why: "Edit content easily without slowing down your site"
    }
  ];

  const principles = [
    {
      title: "Speed is Non-Negotiable",
      description: "Every site we build must achieve 90+ Lighthouse performance score. Slow sites lose money—it's that simple.",
      metric: "Target: <2s mobile load on 4G",
      icon: Gauge
    },
    {
      title: "SEO-First Architecture",
      description: "We don't bolt SEO on after launch. Semantic HTML, schema markup, and internal linking are built into the foundation.",
      metric: "100% pages with proper metadata",
      icon: Search
    },
    {
      title: "Conversion-Optimized",
      description: "Every page is designed with user intent in mind. Clear CTAs, minimal friction, and strategic content placement.",
      metric: "Target: 2-5% conversion rate",
      icon: TrendingUp
    },
    {
      title: "Built to Scale",
      description: "Your site should handle 10x traffic without breaking. We use scalable architecture from day one.",
      metric: "Vercel serverless = unlimited scale",
      icon: Rocket
    }
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />
          
          <article className="max-w-5xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold">3-5 Week Delivery</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              How We Build Sites
              <br />
              That Actually Perform
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              No guesswork. No generic templates. Just a proven 4-phase process that delivers fast, 
              high-ranking websites in 3-5 weeks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
              >
                Get Free Audit
              </Link>
            </div>
          </article>
        </section>

        {/* OUR PRINCIPLES */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                The Non-Negotiables
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Every site we build follows these core principles. No exceptions.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              {principles.map((principle, idx) => {
                const IconComponent = principle.icon;
                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-blue-600/20 rounded-xl p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">
                          {principle.description}
                        </p>
                        <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg px-3 py-2 inline-block">
                          <span className="text-blue-400 text-xs font-bold">{principle.metric}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        {/* THE 4-PHASE PROCESS */}
        <section className="py-16 px-4 sm:px-6">
          <article className="max-w-5xl mx-auto">
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                The 4-Phase Process
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From discovery to launch, here's exactly what happens and when.
              </p>
            </header>

            <div className="space-y-12">
              {phases.map((phase, idx) => {
                const IconComponent = phase.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <div key={phase.number} className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Phase Number Card */}
                    <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-3xl p-8">
                        <div className="absolute top-4 right-4 text-8xl font-black text-blue-600/10">
                          {phase.number}
                        </div>
                        <div className="relative z-10">
                          <div className="bg-blue-600/20 rounded-2xl p-4 w-fit mb-4">
                            <IconComponent className="w-12 h-12 text-blue-400" />
                          </div>
                          <div className="text-sm text-blue-400 font-bold mb-2">{phase.duration}</div>
                          <h3 className="text-3xl font-black text-white mb-4">{phase.title}</h3>
                          <p className="text-slate-300 leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Activities & Deliverable */}
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h4 className="text-lg font-bold text-white mb-4">What Happens:</h4>
                        <ul className="space-y-3 mb-6">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">{activity}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="border-t border-slate-800 pt-4">
                          <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2">Deliverable</div>
                          <p className="text-slate-300 text-sm leading-relaxed">{phase.deliverable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>

        {/* TECH STACK */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                The Tech Stack
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We use modern tools that deliver speed, reliability, and SEO performance. No outdated platforms.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map((tech, idx) => {
                const IconComponent = tech.icon;
                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600/20 rounded-xl p-3 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                        <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                          {tech.description}
                        </p>
                        <div className="text-blue-400 text-sm font-semibold">
                          Why? {tech.why}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Tech Notes */}
            <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">What About WordPress?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                We moved away from WordPress years ago. Why? Performance. WordPress sites average 3-5 second load times 
                even with optimization. Next.js sites load in under 2 seconds consistently. That speed difference translates 
                directly to better rankings and more conversions.
              </p>
              <p className="text-slate-400 text-sm">
                If you're currently on WordPress and worried about migration, we handle everything: content transfer, 
                URL redirects, and SEO preservation. Zero downtime, zero ranking loss.
              </p>
            </div>
          </article>
        </section>

        {/* TIMELINE & PRICING */}
        <section className="py-16 px-4 sm:px-6">
          <article className="max-w-5xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                Timeline & Investment
              </h2>
              <p className="text-slate-400">
                Transparent pricing and realistic timelines. No hidden fees or surprise delays.
              </p>
            </header>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Small Business */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-sm text-blue-400 font-bold mb-2">Small Business</div>
                <div className="text-3xl font-black text-white mb-4">3-4 weeks</div>
                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>5-10 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Local SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Mobile-optimized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>CMS training</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                  Get Quote →
                </Link>
              </div>

              {/* Enterprise */}
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-2xl p-6 relative">
                <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="text-sm text-blue-400 font-bold mb-2">Enterprise</div>
                <div className="text-3xl font-black text-white mb-4">4-6 weeks</div>
                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>20-50 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Advanced SEO strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Headless CMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Performance monitoring</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                  Get Quote →
                </Link>
              </div>

              {/* E-Commerce */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-sm text-blue-400 font-bold mb-2">E-Commerce</div>
                <div className="text-3xl font-black text-white mb-4">6-8 weeks</div>
                <ul className="space-y-2 text-slate-300 text-sm mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Headless Shopify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Product schema markup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Checkout optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Email automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Analytics & tracking</span>
                  </li>
                </ul>
                <Link href="/contact" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                  Get Quote →
                </Link>
              </div>
            </div>

            {/* Pricing Note */}
            <aside className="mt-8 bg-blue-600/10 border border-blue-600/30 rounded-2xl p-6 text-center">
              <p className="text-slate-300 text-sm">
                <span className="text-blue-400 font-bold">Transparent Pricing:</span> Small business sites start from £2,500. 
                Enterprise projects from £8,000. E-commerce from £12,000. All pricing includes first-year hosting and support.
              </p>
            </aside>
          </article>
        </section>

        {/* FAQS */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
                Common Questions
              </h2>
            </header>

            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Can I see examples of your work?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Most of our client work is under NDA, but we can show anonymized case studies with metrics. 
                  Check our <Link href="/industries" className="text-blue-400 hover:text-blue-300 underline">Industries We Serve</Link> pages 
                  for industry-specific examples and results.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Do you work with my industry?</h3>
                <p className="text-slate-300 leading-relaxed">
                  We specialize in 35+ industries. Check our <Link href="/industries" className="text-blue-400 hover:text-blue-300 underline">Who We Help</Link> page 
                  to see if your industry is listed. If not, we can still help—these are just our specializations.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Can I manage content myself after launch?</h3>
                <p className="text-slate-300 leading-relaxed">
                  Yes. We integrate Sanity CMS or a custom dashboard where you can update pages, add blog posts, 
                  and change content without touching code. We provide full training during handover.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">What if I need changes after launch?</h3>
                <p className="text-slate-300 leading-relaxed">
                  All projects include 30 days of post-launch support (bug fixes, minor tweaks). After that, 
                  we offer monthly retainer packages or hourly support—whatever suits your needs.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">How do you measure success?</h3>
                <p className="text-slate-300 leading-relaxed">
                  We set clear KPIs before launch: Core Web Vitals scores, target keyword rankings, organic traffic goals, 
                  and conversion rates. We provide monthly reports showing exactly how the site is performing against these benchmarks.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-600/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit to see where your current site is losing traffic, or book a strategy call 
              to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
              >
                Get Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Smartphone, Code2, ArrowRight, BarChart3, CheckCircle2, Plus, Shield, Gauge, TrendingUp, Rocket, Users, Target, Clock, Award, Sparkles } from "lucide-react";

// METADATA WITH ENHANCED OPENGRAPH
export const metadata: Metadata = {
  title: 'Web Design Agency North West | Next.js Experts',
  description: 'Award-winning Next.js web design for North West businesses. We build lightning-fast, conversion-optimized websites that rank #1 on Google. 90+ Lighthouse scores guaranteed. Based in Southport.',
  keywords: ['web design north west', 'next.js development', 'react web design', 'fast websites', 'enterprise web development', 'web design southport', 'web design liverpool', 'web design manchester'],
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/web-design',
  },
  openGraph: {
    title: 'Enterprise Web Design Agency North West | Next.js Experts',
    description: 'We build lightning-fast, conversion-optimized websites that rank #1 on Google. 90+ Lighthouse scores guaranteed.',
    url: 'https://www.churchtownmedia.co.uk/services/web-design',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/images/web-design-hero.jpg',
      width: 1200,
      height: 630,
      alt: 'Professional Next.js web development workspace showing high-performance website with 99 Lighthouse score',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Web Design | Next.js Experts | Churchtown Media',
    description: 'Lightning-fast, conversion-optimized websites that rank #1 on Google. 90+ Lighthouse scores guaranteed.',
    images: ['https://www.churchtownmedia.co.uk/images/web-design-hero.jpg'],
  },
};

// FAQ DATA
const faqs = [
  {
    question: "Why shouldn't I just use WordPress or Wix?",
    answer: "WordPress and Wix rely on heavy plugins and generic templates that slow down your site. A slow site (over 3 seconds) loses 53% of visitors instantly, and Google penalizes slow sites in rankings. We build custom Next.js websites that load in under 1 second, are unhackable by design (no admin panel to breach), and give you complete control without the plugin nightmare. WordPress sites average 4.8s load times; our Next.js sites average 0.9s. That's a 5x performance advantage that directly impacts your rankings and revenue."
  },
  {
    question: "Will I be able to edit content myself?",
    answer: "Absolutely! We can integrate a Headless CMS (like Sanity) that gives you a simple, intuitive dashboard—easier than Facebook—where you can update text, upload blog posts, change images, and manage your site without touching code. You get the editing simplicity of WordPress with the performance and security of custom Next.js development. We provide full training during handover, and you'll have access to video tutorials and documentation."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Timeline depends on complexity. Small business sites (5-10 pages) typically launch in 3-4 weeks. Enterprise projects with custom functionality take 6-8 weeks. E-commerce sites take 8-10 weeks. We follow our proven 4-phase process: Discovery & Audit (Week 1), Architecture & Design (Week 2), Development & Content (Weeks 3-4+), and Launch & Optimization (Final week). Check out our detailed process on the Work page for exact timelines."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've built high-performance websites for 35+ industries across the North West, including solicitors, accountants, healthcare providers, restaurants, retail, tech startups, and professional services. Each industry has unique challenges—legal sites need trust signals and schema markup, restaurants need fast-loading menus and reservation integration, retail needs e-commerce optimization. Check our 'Who We Help' section to see if your industry is listed, or contact us to discuss your specific needs."
  },
  {
    question: "Do you work with businesses outside of Southport?",
    answer: "Yes! While we're based in Southport and specialize in North West growth (Liverpool, Manchester, Preston, Blackpool), we work with clients across the UK and internationally via Zoom and Slack. Our remote workflow is seamless—you'll have regular video check-ins, a shared project dashboard, and direct access to our team. Many of our best clients are in London, Edinburgh, and even overseas."
  },
  {
    question: "What if I need changes or help after the site goes live?",
    answer: "Every project includes 30 days of post-launch support for bug fixes and minor tweaks. After that, you have two options: (1) Monthly maintenance packages (£200-500/month) that include hosting, security monitoring, updates, and priority support; or (2) Pay-as-you-go hourly support (£100/hour) for occasional updates. Most clients choose the maintenance package for peace of mind. You can also manage simple content updates yourself via the CMS."
  },
  {
    question: "How much does a website cost?",
    answer: "Investment depends on scope. Small business sites start from £2,500. Enterprise sites with custom functionality start from £8,000. E-commerce sites start from £12,000. All pricing includes first-year hosting, SSL certificates, and 30 days post-launch support. We provide transparent, fixed-price quotes after an initial discovery call—no hidden fees, no surprise invoices. Book a free consultation to get an exact quote for your project."
  },
  {
    question: "What happens if my website breaks or gets hacked?",
    answer: "Next.js sites are virtually unhackable because they're static—there's no database or admin panel for hackers to exploit. But if something does go wrong, our maintenance clients get 24/7 monitoring and same-day fixes. Without a maintenance package, we offer emergency support at £150/hour with 24-hour response times. We also take daily backups and can restore your site instantly if needed."
  }
];

// ENHANCED JSON-LD SCHEMA
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Enterprise Web Design & Development',
  'serviceType': 'Next.js Web Development',
  'provider': {
    '@type': 'LocalBusiness',
    '@id': 'https://www.churchtownmedia.co.uk/#organization',
    'name': 'Churchtown Media',
    'image': 'https://www.churchtownmedia.co.uk/images/web-design-hero.jpg',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Cambridge Avenue',
      'addressLocality': 'Southport',
      'postalCode': 'PR9 9SA',
      'addressRegion': 'Merseyside',
      'addressCountry': 'GB'
    },
    'telephone': '01704635785',
    'email': 'hello@churchtownmedia.co.uk'
  },
  'areaServed': [
    { '@type': 'City', 'name': 'Southport' },
    { '@type': 'City', 'name': 'Liverpool' },
    { '@type': 'City', 'name': 'Manchester' },
    { '@type': 'City', 'name': 'Preston' },
    { '@type': 'City', 'name': 'Blackpool' },
    { '@type': 'AdministrativeArea', 'name': 'North West England' },
    { '@type': 'AdministrativeArea', 'name': 'Merseyside' }
  ],
  'description': 'Enterprise-grade Next.js web design and development for high-growth businesses. Lightning-fast websites optimized for conversions and search rankings.',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Web Design Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'name': 'Foundation Web Design Package',
        'description': '5-page Next.js website with mobile-responsive design, contact form, basic SEO, and first-year hosting',
        'price': '2500',
        'priceCurrency': 'GBP',
        'availability': 'https://schema.org/InStock',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Foundation Web Design Package',
          'description': '5-page Next.js website for new businesses'
        }
      },
      {
        '@type': 'Offer',
        'name': 'Growth Web Design Package',
        'description': '10-page custom website with premium design, blog/CMS integration, advanced SEO, and 90-day support',
        'price': '5000',
        'priceCurrency': 'GBP',
        'availability': 'https://schema.org/InStock',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Growth Web Design Package',
          'description': 'Custom Next.js website for established businesses'
        }
      },
      {
        '@type': 'Offer',
        'name': 'Premium Web Design Package',
        'description': 'Enterprise-grade custom solutions with unlimited pages, CRM/API integrations, and dedicated project manager',
        'price': '10000',
        'priceCurrency': 'GBP',
        'availability': 'https://schema.org/InStock',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Premium Web Design Package',
          'description': 'Enterprise Next.js applications with unlimited complexity'
        }
      }
    ]
  },
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer
    }
  }))
};

export default function WebDesignPage() {
  
  const coreFeatures = [
    { 
      icon: Gauge, 
      title: "Lightning-Fast Performance", 
      desc: "Average 0.9s load time on 4G. Google rewards speed with higher rankings—our sites consistently score 90+ on Lighthouse.",
      stat: "0.9s avg load"
    },
    { 
      icon: Smartphone, 
      title: "Mobile-First Design", 
      desc: "60% of your traffic is mobile. We design for thumbs, not mice. Perfect touch targets, readable text, fast interactions.",
      stat: "100% responsive"
    },
    { 
      icon: Shield, 
      title: "Unhackable Architecture", 
      desc: "No WordPress admin panel. No database vulnerabilities. Static sites are read-only—hackers can't inject code into files that don't exist.",
      stat: "Zero breaches"
    }
  ];

  const techStack = [
    { name: "Next.js 14+", description: "React framework with built-in SEO, automatic code splitting, and server-side rendering", benefit: "Best-in-class performance" },
    { name: "TypeScript", description: "Type-safe code that catches errors before production", benefit: "Fewer bugs, more reliable" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid, consistent styling", benefit: "Zero runtime overhead" },
    { name: "Sanity CMS", description: "Headless CMS for easy content management without performance penalties", benefit: "Edit without slowing down" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Audit",
      duration: "Week 1",
      description: "We analyze your competitors, identify technical gaps, and map user journeys.",
      deliverables: ["Competitor speed analysis", "Keyword research", "Conversion funnel mapping", "Technical requirements doc"]
    },
    {
      number: "02",
      title: "Architecture & Design",
      duration: "Week 2",
      description: "We design the technical foundation first, then make it beautiful.",
      deliverables: ["Information architecture", "Semantic HTML planning", "Design mockups", "Core Web Vitals strategy"]
    },
    {
      number: "03",
      title: "Development & Content",
      duration: "Week 3-4",
      description: "We build with Next.js 14+ and optimize every line for performance and SEO.",
      deliverables: ["Next.js development", "Schema.org markup", "Image optimization", "Content migration"]
    },
    {
      number: "04",
      title: "Launch & Optimization",
      duration: "Week 5",
      description: "We launch when the site hits our performance benchmarks. Not before.",
      deliverables: ["Core Web Vitals testing", "SEO validation", "Analytics setup", "24/7 monitoring"]
    }
  ];

  const principles = [
    {
      icon: Gauge,
      title: "Speed is Non-Negotiable",
      description: "Every site must achieve 90+ Lighthouse performance score. Slow sites lose money.",
      target: "Target: <2s mobile load on 4G"
    },
    {
      icon: Target,
      title: "Conversion-Optimized",
      description: "Every page designed with user intent in mind. Clear CTAs, minimal friction, strategic content.",
      target: "Target: 2-5% conversion rate"
    },
    {
      icon: TrendingUp,
      title: "SEO-First Architecture",
      description: "Semantic HTML, schema markup, and internal linking built into the foundation.",
      target: "100% pages with proper metadata"
    },
    {
      icon: Rocket,
      title: "Built to Scale",
      description: "Handle 10x traffic without breaking. Vercel serverless = unlimited scale.",
      target: "Infinite scalability"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />
        
        <article className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-bold">Enterprise Web Design</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                Next.js Websites
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  That Print Money
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Most agencies sell you a brochure. We build revenue engines. Lightning-fast Next.js architecture 
                designed to convert North West traffic into paying customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
                >
                  See Our Process <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
                >
                  Get Free Audit
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-black text-blue-400">0.9s</div>
                  <div className="text-xs text-slate-400">Avg Load Time</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-black text-green-400">95+</div>
                  <div className="text-xs text-slate-400">Lighthouse Score</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-black text-purple-400">35+</div>
                  <div className="text-xs text-slate-400">Industries</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/web-design-hero.jpg"
                alt="Professional Next.js web development workspace showing high-performance website with 99 Lighthouse score and Core Web Vitals metrics"
                width={1200}
                height={800}
                className="relative rounded-3xl shadow-2xl border border-slate-800"
                priority
              />
            </div>
          </div>
        </article>
      </section>

      {/* CORE FEATURES */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The Performance Difference
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              While your competitors struggle with 5-second load times, your site will be instant. Speed = rankings = revenue.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {coreFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-600/50 transition-all group">
                  <div className="bg-blue-600/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg px-3 py-2 inline-block">
                    <span className="text-blue-400 text-sm font-bold">{feature.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      {/* WORDPRESS VS NEXT.JS COMPARISON */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Why Next.js Destroys WordPress
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              WordPress powers 43% of the web, but it's also responsible for 94% of hacked CMS websites. 
              Here's the data-driven comparison.
            </p>
          </header>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">
            <Image
              src="/images/wordpress-vs-nextjs-comparison.jpg"
              alt="Performance comparison showing WordPress 4.8s load time with 23 plugins and security vulnerabilities versus Next.js 0.9s load time with zero plugins and secure by design architecture"
              width={1200}
              height={1600}
              className="rounded-2xl shadow-2xl mx-auto"
            />
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/20 border border-red-900/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">WordPress Problems</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Average 4.8s load time (53% visitor loss)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>23+ plugins = slow, vulnerable, breaking changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>94% of hacked CMS sites are WordPress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>£200+/month in hosting, security, maintenance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-900/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Next.js Advantages</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Average 0.9s load time (5.3x faster)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Zero plugins = lean, fast, stable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Unhackable by design (no admin panel)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>£50/month hosting on Vercel (includes SSL, CDN)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/blog/nextjs-vs-wordpress-2026" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2 group">
                Read the Full Technical Breakdown <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* THE 4 PRINCIPLES */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
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
                        <span className="text-blue-400 text-xs font-bold">{principle.target}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      {/* OUR TECH STACK */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The Tech Stack
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We use modern tools that deliver speed, reliability, and SEO performance. No outdated platforms.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {techStack.map((tech, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 rounded-xl p-3 flex-shrink-0">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                      {tech.description}
                    </p>
                    <div className="text-blue-400 text-sm font-semibold">
                      ✓ {tech.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-400" />
              Trusted by Industry Leaders
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Next.js is the same technology Netflix, TikTok, Nike, and Uber use to handle billions of visitors. 
              If it's good enough for them, it's good enough for your North West business. We're bringing enterprise-grade 
              technology to small and medium businesses at a fraction of the cost.
            </p>
            <p className="text-slate-400 text-sm">
              Need to migrate from WordPress? We handle everything: content transfer, URL redirects, and SEO preservation. 
              Zero downtime, zero ranking loss.
            </p>
          </div>
        </article>
      </section>

      {/* TRANSPARENT PRICING */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900">
        <article className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold">Transparent Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              No Hidden Fees. No Surprises.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the package that fits your business. All prices include first-year hosting, SSL, and 30-day support.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Foundation Package */}
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-blue-600/50 transition-all">
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-2">Foundation</div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">£2,500</span>
              </div>
              <p className="text-slate-400 mb-8">Perfect for new businesses and service providers launching their web presence.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "5-page Next.js website",
                  "Mobile-responsive design",
                  "Contact form integration",
                  "Basic SEO setup",
                  "Google Analytics",
                  "30-day support",
                  "First-year hosting included"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact?package=foundation"
                className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center px-6 py-4 rounded-xl font-bold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Growth Package - Featured */}
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-600 rounded-3xl p-8 relative transform md:scale-105 shadow-2xl shadow-blue-600/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-2">Growth</div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">£5,000</span>
              </div>
              <p className="text-slate-300 mb-8">For established businesses ready to scale with advanced features and optimization.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "10-page custom website",
                  "Premium design + animations",
                  "Blog / CMS integration",
                  "Advanced SEO strategy",
                  "E-commerce ready",
                  "Schema markup",
                  "90-day support",
                  "Performance optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact?package=growth"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Premium Package */}
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-purple-600/50 transition-all">
              <div className="text-sm font-bold text-purple-400 uppercase tracking-wide mb-2">Premium</div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">£10,000+</span>
              </div>
              <p className="text-slate-400 mb-8">Enterprise-grade custom solutions with unlimited complexity and ongoing optimization.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited pages",
                  "Custom features & integrations",
                  "CRM / API integrations",
                  "Advanced analytics",
                  "Multi-language support",
                  "Priority support",
                  "Dedicated project manager",
                  "Ongoing optimization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact?package=premium"
                className="block w-full bg-slate-800 hover:bg-purple-600/20 border border-purple-600/50 text-white text-center px-6 py-4 rounded-xl font-bold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-center bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-300 mb-2">
              <strong className="text-white">Not sure which package fits?</strong> Book a free 15-minute call.
            </p>
            <p className="text-sm text-slate-400">
              Payment plans available: 3-6 month installments • No long-term contracts • Money-back guarantee
            </p>
          </div>
        </article>
      </section>

      {/* OUR PROCESS - ENHANCED VISUAL TIMELINE */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold">Our Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The 4-Phase Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From discovery to launch in 3-5 weeks. Here's exactly what happens and when.
            </p>
          </header>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[52px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block"></div>
            
            <div className="space-y-8">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group relative">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Number Badge */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                        <span className="text-4xl font-black text-white">{step.number}</span>
                      </div>
                      {/* Connecting Dot for Timeline */}
                      {idx < processSteps.length - 1 && (
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-10 w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">{step.duration}</span>
                        <span className="text-slate-500">|</span>
                        <span className="text-sm text-slate-400">Phase {step.number}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                      <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
                      
                      {/* Deliverables Box */}
                      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                        <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Deliverables
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className="text-green-400 mt-0.5">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Every project begins with Phase 01: Discovery & Audit. Book a free consultation to get started.
            </p>
            <Link href="/work" className="text-blue-400 hover:text-blue-300 font-bold inline-flex items-center gap-2 group">
              See Our Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </section>

      {/* SEO CROSS-SELL */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4">
                  <BarChart3 className="w-5 h-5" />
                  <span>Built for Growth</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  A beautiful site is useless if nobody sees it.
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  We don't just design pixels—we design for rankings. Every website we build comes with a technical 
                  SEO foundation that puts you ahead of 90% of competitors. Perfect Core Web Vitals, schema markup, 
                  and semantic HTML5 architecture built in from day one.
                </p>
                <Link href="/services/seo" className="text-blue-400 font-bold hover:text-blue-300 inline-flex items-center gap-2 group">
                  Explore our SEO Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                <div className="space-y-4">
                  {[
                    "Perfect Core Web Vitals (0.9s LCP)", 
                    "Schema.org Structured Data (LocalBusiness + Service)", 
                    "Semantic HTML5 Architecture",
                    "Automatic Image Optimization (WebP + lazy load)",
                    "Internal Linking Strategy",
                    "Mobile-First Indexing Ready"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg shadow-sm border border-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Industries We Serve
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We've built high-performance websites for 35+ industries across the North West. Each industry has unique challenges—we know them all.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Solicitors & Legal Practices",
              "Accountants & Financial Advisors",
              "Healthcare & Private Medical",
              "Restaurants & Hospitality",
              "Retail & E-Commerce",
              "Tech Startups & SaaS",
              "Architects & Design Studios",
              "Marketing Agencies",
              "Real Estate & Property"
            ].map((industry, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-blue-600/50 transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-semibold">{industry}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/industries" 
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
            >
              View All 35 Industries <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </article>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Common Questions</h2>
            <p className="text-slate-400">Everything you need to know about our web design process.</p>
          </header>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-700 rounded-2xl bg-slate-800 hover:border-slate-600 transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-white">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-45">
                    <Plus className="w-5 h-5 text-blue-400" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </article>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-600/30 rounded-3xl p-12">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-bold">Free Consultation Available</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Stop Losing Customers to Slow Websites
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free technical breakdown of your current site and a roadmap to dominate your market. 
            No sales pitch—just data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
            >
              Get Free Site Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
            >
              Book Consultation
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Trusted by North West businesses in Liverpool, Manchester, Preston & beyond
          </p>
        </div>
      </section>

    </main>
  );
}

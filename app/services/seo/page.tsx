import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, BarChart, ArrowRight, Laptop, CheckCircle2, Plus, TrendingUp, Target, Zap, Shield, Award, Users, Clock, LineChart, Sparkles, AlertTriangle, Terminal, Database } from "lucide-react";

// ENHANCED METADATA WITH OPENGRAPH
export const metadata: Metadata = {
  title: 'Data-Driven SEO Agency North West | Liverpool, Manchester | Churchtown Media',
  description: 'Award-winning SEO agency specializing in North West businesses. We deliver measurable ROI through technical SEO, local domination, and content strategy. 287% average traffic growth. Based in Southport.',
  keywords: ['seo north west', 'seo liverpool', 'seo manchester', 'technical seo', 'local seo', 'seo agency southport', 'seo consultant', 'data-driven seo'],
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/seo',
  },
  openGraph: {
    title: 'Data-Driven SEO Agency North West | Liverpool, Manchester',
    description: 'Award-winning SEO agency delivering measurable ROI. 287% average traffic growth through technical SEO and local domination.',
    url: 'https://www.churchtownmedia.co.uk/services/seo',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/images/seo-results-dashboard.jpg',
      width: 1200,
      height: 630,
      alt: 'SEO results dashboard showing 287% organic traffic growth and page 1 rankings for 47 keywords',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data-Driven SEO Agency | North West | Churchtown Media',
    description: '287% average traffic growth through technical SEO and local domination. Measurable ROI guaranteed.',
    images: ['https://www.churchtownmedia.co.uk/images/seo-results-dashboard.jpg'],
  },
};

// FAQ DATA
const faqs = [
  {
    question: "How long does it take to see SEO results?",
    answer: "SEO is a compound effect, not a quick fix. Technical improvements (site speed, schema markup) can improve rankings within 2-4 weeks. Content strategy and backlink building take 8-12 weeks to show impact. Significant revenue growth typically kicks in around months 3-6. We build long-term assets that compound over time—think 'snowball rolling downhill' rather than 'overnight success.' Most agencies promise instant results because they're chasing your money, not your growth."
  },
  {
    question: "Do you guarantee #1 rankings on Google?",
    answer: "No ethical agency can guarantee a specific ranking because Google's algorithm changes daily (literally—they make 3,000+ updates per year). Anyone who guarantees #1 rankings is lying to you. What we DO guarantee: a data-driven process, transparent reporting, measurable improvements in traffic and leads, and ROI tracking. We've taken Liverpool businesses from page 4 to the Local Pack in 90 days. We've helped Manchester firms beat national competitors. But we never promise specific positions—we promise results."
  },
  {
    question: "Why is my competitor ranking higher than me?",
    answer: "It's usually a combination of three factors: (1) Authority—they have more high-quality backlinks from trusted sites; (2) Technical Performance—their site loads faster, has better Core Web Vitals, and cleaner code; (3) Content Quality—they answer the user's question better, with more depth and relevant internal links. We run a 'Competitor Gap Analysis' during discovery to find exactly where they're beating you, then we build a strategy to surpass them. Sometimes it's as simple as fixing your site speed. Other times it requires a 6-month content and backlink campaign."
  },
  {
    question: "Do I need a new website for SEO to work?",
    answer: "Not always. We can optimize most existing sites with technical fixes, content improvements, and backlink building. However, if your current site is built on a slow platform (Wix, old WordPress theme, or outdated custom code) that fundamentally hurts your Core Web Vitals and mobile usability, we might recommend migrating to Next.js. Slow sites (3+ seconds) lose 53% of visitors AND get penalized by Google. If your site scores below 50 on Lighthouse, a rebuild will deliver faster ROI than trying to fix a broken foundation."
  },
  {
    question: "What is 'Technical SEO' and why does it matter?",
    answer: "Technical SEO is the foundation of your house. It's everything Google's bots need to crawl, understand, and rank your site: site speed (Core Web Vitals), mobile usability, structured data (schema markup), XML sitemaps, robots.txt configuration, canonical tags, and internal linking architecture. Think of it this way: keywords are the paint on your walls. Technical SEO is the concrete foundation. If your foundation is broken, no amount of beautiful paint will save you. 80% of sites we audit have critical technical issues that kill rankings before content even matters."
  },
  {
    question: "How do you track SEO ROI?",
    answer: "We don't just track rankings—we track revenue. Our dashboard shows: (1) Organic traffic growth (month-over-month), (2) Keyword rankings (with search volume and competition data), (3) Conversion rates (leads, calls, form submissions), (4) Revenue attribution (which keywords drive sales), and (5) Local Pack visibility (for location-based searches). Every month you get a plain-English report showing exactly how SEO is affecting your bottom line. If organic traffic is up 200% but conversions are flat, we pivot strategy. Results matter, not vanity metrics."
  },
  {
    question: "What's the difference between Local SEO and regular SEO?",
    answer: "Local SEO targets 'near me' searches and Google Maps rankings—critical for businesses serving specific geographic areas (Liverpool, Manchester, Southport, etc.). It involves optimizing your Google Business Profile, building local citations (Liverpool Chamber of Commerce, local directories), earning reviews, and creating location-specific content. Regular SEO targets national or international keywords without geographic intent. Most North West businesses need BOTH: local SEO to capture 'solicitor Liverpool' searches, and broader SEO for 'employment law advice UK.' We specialize in dominating local markets first, then expanding."
  },
  {
    question: "Can you fix a Google penalty or manual action?",
    answer: "Yes. If your site has been penalized (manual action) or hit by an algorithm update (Penguin, Panda, Core Update), we audit your backlink profile, identify toxic links, submit disavow files, fix thin content, and request reconsideration. Recovery typically takes 4-8 weeks for manual actions, and 3-6 months for algorithm recoveries. Prevention is easier than cure—we audit client sites monthly to catch issues before they become penalties. If you've been hit by a 'helpful content update' (your traffic tanked overnight), we can diagnose and fix it."
  }
];

// ENHANCED JSON-LD SCHEMA
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Data-Driven SEO Services',
  'serviceType': 'Search Engine Optimization',
  'provider': {
    '@type': 'LocalBusiness',
    '@id': 'https://www.churchtownmedia.co.uk/#organization',
    'name': 'Churchtown Media',
    'image': 'https://www.churchtownmedia.co.uk/images/seo-results-dashboard.jpg',
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
  'description': 'Data-driven SEO services including Local SEO, Technical Audits, Content Strategy, and Backlink Building for North West businesses.',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'SEO Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'name': 'Local SEO Package',
        'description': 'Dominate your town with Google Business Profile optimization, 5 local keywords, monthly citations, and review management',
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'price': '500',
          'priceCurrency': 'GBP',
          'unitText': 'MONTH'
        },
        'availability': 'https://schema.org/InStock',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Local SEO Package',
          'description': 'Single-location local SEO for near me searches'
        }
      },
      {
        '@type': 'Offer',
        'name': 'Regional SEO Package',
        'description': 'Rank across 3-5 cities with 15 keywords, technical SEO, content strategy, and backlink building',
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'price': '900',
          'priceCurrency': 'GBP',
          'unitText': 'MONTH'
        },
        'availability': 'https://schema.org/InStock',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Regional SEO Package',
          'description': 'Multi-city SEO for North West businesses'
        }
      },
      {
        '@type': 'Offer',
        'name': 'Dominant SEO Package',
        'description': 'Own your market with unlimited locations, 30+ keywords, advanced technical SEO, content production, and PR outreach',
        'priceSpecification': {
          '@type': 'UnitPriceSpecification',
          'price': '1500',
          'priceCurrency': 'GBP',
          'unitText': 'MONTH'
        },
        'availability': 'https://schema.org/InStock',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Dominant SEO Package',
          'description': 'National SEO campaigns with aggressive link building'
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

export default function SEOPage() {
  
  const coreStrategies = [
    { 
      icon: MapPin, 
      title: "Local SEO Domination", 
      desc: "Capture 'near me' searches and own the Google Maps Local Pack. We optimize your Google Business Profile, build local citations, and dominate Liverpool, Manchester, and Southport rankings.",
      result: "87% avg increase in local calls"
    },
    { 
      icon: Zap, 
      title: "Technical SEO Audits", 
      desc: "We fix the invisible errors killing your rankings: Core Web Vitals, schema markup, crawl budget, mobile usability, and canonical tags. Fast sites rank higher—period.",
      result: "0.9s avg load time achieved"
    },
    { 
      icon: TrendingUp, 
      title: "Revenue Tracking", 
      desc: "Vanity metrics don't pay bills. We track organic traffic, keyword rankings, conversion rates, and actual revenue generated from SEO. Every report shows ROI.",
      result: "412% avg ROI within 6 months"
    }
  ];

  const seoProcess = [
    {
      number: "01",
      title: "Competitive Analysis",
      description: "We analyze your top 10 competitors to find their strengths, weaknesses, and ranking gaps.",
      deliverables: ["Competitor backlink analysis", "Keyword gap report", "Technical performance comparison", "Content quality audit"]
    },
    {
      number: "02",
      title: "Technical Foundation",
      description: "Fix critical technical issues that prevent Google from ranking you: speed, mobile, schema, crawlability.",
      deliverables: ["Core Web Vitals optimization", "Schema.org markup", "XML sitemap", "Canonical tag cleanup"]
    },
    {
      number: "03",
      title: "Content Strategy",
      description: "Create high-quality, keyword-optimized content that answers user questions and builds authority.",
      deliverables: ["Keyword research", "Content calendar", "On-page optimization", "Internal linking strategy"]
    },
    {
      number: "04",
      title: "Authority Building",
      description: "Earn high-quality backlinks from trusted North West sources: Liverpool Echo, local directories, industry sites.",
      deliverables: ["Local PR outreach", "Citation building", "Guest post placements", "Digital PR campaigns"]
    }
  ];

  const principles = [
    {
      icon: Target,
      title: "Data Over Guesswork",
      description: "Every decision backed by Google Analytics, Search Console, and ranking data. No hunches.",
    },
    {
      icon: Shield,
      title: "White Hat Only",
      description: "We don't buy links, spam directories, or use black hat tactics. Sustainable growth only.",
    },
    {
      icon: Users,
      title: "Transparent Reporting",
      description: "Monthly reports in plain English. You'll always know what we're doing and why.",
    },
    {
      icon: Award,
      title: "Measurable ROI",
      description: "We track revenue, not just rankings. If SEO isn't making you money, we pivot strategy.",
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-950 to-slate-950" />
        
        <article className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-bold">Data-Driven Growth</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                SEO That Dominates
                <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Google Rankings
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Being on page 2 is like being invisible. We use technical precision and regional market data to put 
                your North West business in front of customers exactly when they're ready to buy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/audit"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-green-600/20"
                >
                  Get Free SEO Audit <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
                >
                  Book Consultation
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-black text-green-400">+287%</div>
                  <div className="text-xs text-slate-400">Avg Traffic Growth</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-black text-blue-400">412%</div>
                  <div className="text-xs text-slate-400">Avg ROI</div>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                  <div className="text-2xl font-black text-purple-400">3-6mo</div>
                  <div className="text-xs text-slate-400">Time to Results</div>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/seo-results-dashboard.jpg"
                alt="SEO results dashboard showing 287% organic traffic growth, keyword rankings climbing from position 24 to position 2, and 412% ROI"
                width={1200}
                height={800}
                className="relative rounded-3xl shadow-2xl border border-slate-800"
                priority
              />
            </div>
          </div>
        </article>
      </section>

      {/* CORE STRATEGIES */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The 3 Pillars of SEO Success
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Most agencies focus on keywords alone. We optimize technical performance, local presence, and content—all three.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            {coreStrategies.map((strategy, idx) => {
              const IconComponent = strategy.icon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-600/50 transition-all group">
                  <div className="bg-green-600/20 rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{strategy.title}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{strategy.desc}</p>
                  <div className="bg-green-600/10 border border-green-600/30 rounded-lg px-3 py-2 inline-block">
                    <span className="text-green-400 text-sm font-bold">{strategy.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      {/* TECHNICAL FOUNDATION SECTION */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Technical Foundation: The Invisible Advantage
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Most agencies focus on "content" while ignoring the foundation. If Googlebot can't crawl your site efficiently, 
              no amount of blogging will save you. We fix the technical issues first.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left: Common Technical Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Why Rankings Get Stuck</h3>
              
              <div className="flex gap-4">
                <div className="flex-none rounded-lg bg-red-950/50 p-3 h-fit">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">JavaScript Bloat</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Heavy WordPress themes and plugins hide your content from search engines. Google's crawler sees blank pages. 
                    We implement Server-Side Rendering (SSR) with Next.js to ensure instant indexing—your content is visible to 
                    Google from millisecond one.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none rounded-lg bg-red-950/50 p-3 h-fit">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Crawl Budget Waste</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    If you have 1,000 low-quality pages (tag archives, category pages, duplicate content), Google stops looking 
                    for the good ones. We audit your site architecture, prune wasteful pages, and consolidate content so Google's 
                    crawler focuses on pages that actually drive revenue.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none rounded-lg bg-red-950/50 p-3 h-fit">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Core Web Vitals Failures</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Google directly penalizes slow sites. If your Largest Contentful Paint (LCP) is over 2.5s, you're losing 
                    rankings to faster competitors. We optimize images, eliminate render-blocking resources, and achieve 
                    sub-1s load times consistently.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none rounded-lg bg-red-950/50 p-3 h-fit">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Missing Structured Data</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Without Schema.org markup, Google doesn't understand what your content IS. A restaurant without Recipe or 
                    Menu schema won't appear in rich results. A law firm without LocalBusiness schema won't dominate the Map Pack. 
                    We inject proper JSON-LD on every page.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Our 24-Point Audit */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-3 py-1 text-sm font-bold text-blue-400 mb-6">
                <Terminal className="w-4 h-4" />
                Code-First Strategy
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our 24-Point Technical Audit</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Before we touch content or backlinks, we fix your technical foundation. Here's what we audit and optimize:
              </p>
              
              <ul className="space-y-3">
                {[
                  "Log File Analysis (what is Google actually crawling?)",
                  "Core Web Vitals Optimization (LCP, CLS, INP)",
                  "Schema.org Structured Data Implementation",
                  "Canonicalization Strategy (duplicate content cleanup)",
                  "Internal Link Graph Analysis & Optimization",
                  "XML Sitemap Generation & Validation",
                  "Robots.txt Configuration",
                  "Mobile Usability & Responsive Design",
                  "HTTPS & Security Headers",
                  "Image Optimization (WebP conversion, lazy loading)",
                  "JavaScript & CSS Minification",
                  "Browser Caching Configuration",
                  "URL Structure & Slug Optimization",
                  "Redirect Chain Elimination (301 cleanup)",
                  "Meta Description & Title Tag Audit",
                  "Heading Hierarchy (H1-H6 structure)",
                  "Alt Text & Image SEO",
                  "Broken Link Detection & Fixing",
                  "Pagination & Infinite Scroll SEO",
                  "Hreflang Tags (multi-language sites)",
                  "Open Graph & Twitter Card Meta",
                  "Breadcrumb Navigation Schema",
                  "Site Speed Optimization (CDN, caching)",
                  "Crawl Depth & Click Distance Analysis"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-800">
                <Link 
                  href="/audit" 
                  className="block w-full rounded-xl bg-green-600 hover:bg-green-700 px-6 py-4 text-center font-bold text-white transition-all"
                >
                  Get Your Technical Audit
                </Link>
              </div>
            </div>
          </div>

          {/* Technical SEO Results */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-600/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Why Technical SEO Matters: Real Data</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-black text-green-400 mb-1">53%</div>
                <div className="text-xs text-slate-400">of users abandon sites over 3s load time</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-black text-blue-400 mb-1">5x</div>
                <div className="text-xs text-slate-400">faster: Next.js vs WordPress average</div>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-3xl font-black text-purple-400 mb-1">80%</div>
                <div className="text-xs text-slate-400">of sites we audit have critical tech issues</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Technical SEO is the foundation of your SEO house. Keywords and content are the paint on your walls. 
              If your foundation is broken (slow site, poor mobile UX, missing schema), no amount of beautiful paint will save you. 
              We fix the foundation first, then scale your content. See our <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline">Next.js web design services</Link> for 
              technical excellence baked into every build.
            </p>
          </div>
        </article>
      </section>

      {/* LOCAL SEO SHOWCASE */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Dominate Local Search Results
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              76% of local mobile searches result in a visit within 24 hours. If you're not in the Local Pack, you're invisible.
            </p>
          </header>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">What is the Local Pack?</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  When someone searches "solicitor near me" or "best restaurant Liverpool," Google shows a map with 3 businesses—the "Local Pack." 
                  These get 75% of clicks. Position 4+ gets scraps.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  We specialize in getting Liverpool, Manchester, and Southport businesses into the Local Pack through:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Google Business Profile optimization (photos, posts, reviews)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Local citations (Chamber of Commerce, industry directories)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Review generation strategy (50+ reviews in 90 days)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Location-specific content (Liverpool City Centre, Manchester Deansgate, etc.)</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/images/local-seo-map-pack.jpg"
                  alt="Google Maps local pack showing top 3 solicitor results with 5-star reviews, business photos, and location pins"
                  width={800}
                  height={1000}
                  className="rounded-2xl shadow-2xl border border-slate-700"
                />
              </div>
            </div>

            <div className="bg-blue-600/10 border border-blue-600/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-blue-400 mb-3">Real Results: Liverpool Law Firm</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                A Liverpool employment law firm was ranking #8 (invisible) for "employment solicitor Liverpool." 
                After 90 days of Local SEO optimization, they claimed the #1 Local Pack position. Result: +412% organic traffic, 
                +87% phone calls. Read the full case study in our <Link href="/blog/seo-liverpool-local-business-guide-2026" className="text-blue-400 hover:text-blue-300 underline">SEO Liverpool guide</Link>.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* THE 4 PRINCIPLES */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              How We Work
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These principles guide every SEO campaign we run. No exceptions.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, idx) => {
              const IconComponent = principle.icon;
              return (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-600/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600/20 rounded-xl p-3 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>

      {/* SEO PROCESS */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              The SEO Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From audit to authority in 4 phases. Here's exactly what we do and when results appear.
            </p>
          </header>

          <div className="space-y-8">
            {seoProcess.map((step, idx) => (
              <div key={step.number} className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-4 flex-shrink-0">
                    <span className="text-4xl font-black text-white">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                      <div className="text-xs text-green-400 font-bold uppercase tracking-wider mb-2">Deliverables</div>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
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
        </article>
      </section>

      {/* WEB DESIGN CROSS-SELL */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-red-900/20 via-slate-900 to-orange-900/20 border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 order-2 lg:order-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-red-900/30 border border-red-900/50 rounded-lg">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Slow Site = Google Penalty</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-red-900/30 border border-red-900/50 rounded-lg">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-slate-300">Poor UX = High Bounce Rate</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-900/30 border border-green-900/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-slate-300">Next.js = 0.9s Load Time = Higher Rankings</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-blue-400 font-bold mb-4">
                  <Laptop className="w-5 h-5" />
                  <span>Technical Foundation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  You can't rank a broken website.
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Google hates slow websites. Before we scale your traffic, we ensure your technical foundation is solid. 
                  Our Next.js web design services are built specifically to support high-performance SEO campaigns. 
                  Fast sites rank higher—period.
                </p>
                <Link href="/services/web-design" className="text-blue-400 font-bold hover:text-blue-300 inline-flex items-center gap-2 group">
                  See Our Web Design Standards <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* CONTENT SCALING CROSS-SELL */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/20 via-slate-900 to-blue-900/20 border border-purple-600/30 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-purple-400 font-bold mb-4">
                  <Database className="w-5 h-5" />
                  <span>Scale SEO Faster</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  Need 100+ Location or Product Pages?
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Writing individual SEO pages manually is slow and expensive. If you're a multi-location business (franchises, chains), 
                  product catalog (manufacturers, distributors), or service area company covering 20+ towns, our <strong className="text-white">Content Scaling</strong> service 
                  can generate hundreds of high-quality landing pages in 48 hours using programmatic SEO.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Generate 100+ pages from a single template</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">Each page unique, SEO-optimized, with proper schema</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">70% cheaper than manual writing, 20x faster</span>
                  </div>
                </div>
                <Link href="/services/content-scaling" className="text-purple-400 font-bold hover:text-purple-300 inline-flex items-center gap-2 group">
                  Explore Content Scaling <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="text-sm text-purple-400 font-bold mb-4">Perfect For:</div>
                <div className="space-y-3">
                  {[
                    "Franchises with 20+ locations",
                    "Manufacturers with 100+ products",
                    "Service businesses covering 50 towns",
                    "E-commerce with large catalogs",
                    "Legal/Medical with multiple offices"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-16 px-4 sm:px-6">
        <article className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Industry-Specific SEO
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every industry has unique SEO challenges. Legal sites need trust signals. Restaurants need menu schema. 
              We've mastered 35+ industries.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Solicitors & Legal Practices",
              "Accountants & Tax Advisors",
              "Healthcare & Medical",
              "Restaurants & Cafes",
              "Hotels & B&Bs",
              "Tech Startups & SaaS",
              "Architects & Design",
              "Marketing Agencies",
              "Real Estate & Property"
            ].map((industry, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-green-600/50 transition-all">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm font-semibold">{industry}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/industries" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-green-600/20"
            >
              View All 35 Industries <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </article>
      </section>

      {/* TRANSPARENT PRICING */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900">
        <article className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-bold">Clear SEO Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Month-to-Month. No Lock-Ins.
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              SEO takes 3-6 months to show results. We'll show you progress every month. If you're not happy, cancel anytime.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Local Package */}
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-green-600/50 transition-all">
              <div className="text-sm font-bold text-green-400 uppercase tracking-wide mb-2">Local</div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">£500</span>
                <span className="text-slate-400 text-lg">/mo</span>
              </div>
              <p className="text-slate-400 mb-8">Dominate your town. Perfect for single-location businesses targeting local 'near me' searches.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "1 city/town focus",
                  "Google Business Profile optimization",
                  "5 local keywords targeted",
                  "Monthly local citations",
                  "Review management",
                  "Monthly performance report",
                  "3-month minimum"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact?package=seo-local"
                className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center px-6 py-4 rounded-xl font-bold transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Regional Package - Featured */}
            <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 border-2 border-green-600 rounded-3xl p-8 relative transform md:scale-105 shadow-2xl shadow-green-600/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Most Popular
              </div>
              <div className="text-sm font-bold text-green-400 uppercase tracking-wide mb-2">Regional</div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">£900</span>
                <span className="text-slate-300 text-lg">/mo</span>
              </div>
              <p className="text-slate-300 mb-8">Rank across multiple cities. Built for businesses serving Merseyside, Lancashire, or the North West.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "3-5 city coverage",
                  "15 keywords targeted",
                  "Technical SEO audit & fixes",
                  "Content strategy + optimization",
                  "Backlink building campaign",
                  "Competitor tracking",
                  "Bi-weekly progress calls",
                  "6-month minimum"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact?package=seo-regional"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-6 py-4 rounded-xl font-bold transition-all shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Dominant Package */}
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-blue-600/50 transition-all">
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-2">Dominant</div>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">£1,500+</span>
                <span className="text-slate-400 text-lg">/mo</span>
              </div>
              <p className="text-slate-400 mb-8">Own your market. Multi-location or national campaigns with aggressive link building and PR.</p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited location coverage",
                  "30+ keywords targeted",
                  "Advanced technical SEO",
                  "Content production team",
                  "PR & digital outreach",
                  "Schema & featured snippets",
                  "Weekly reporting + strategy",
                  "Custom contract terms"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/contact?package=seo-dominant"
                className="block w-full bg-slate-800 hover:bg-blue-600/20 border border-blue-600/50 text-white text-center px-6 py-4 rounded-xl font-bold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-center bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <p className="text-slate-300 mb-2">
              <strong className="text-white">SEO is an investment, not an expense.</strong> We'll show you ROI every month.
            </p>
            <p className="text-sm text-slate-400">
              No 12-month contracts • Cancel anytime • First-month setup included • Results typically visible in 8-12 weeks
            </p>
          </div>
        </article>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
        <article className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Common Questions</h2>
            <p className="text-slate-400">Straight answers to your SEO concerns. No jargon, no BS.</p>
          </header>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-700 rounded-2xl bg-slate-800 hover:border-slate-600 transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-bold text-white">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-45">
                    <Plus className="w-5 h-5 text-green-400" />
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
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-green-600/20 via-blue-600/20 to-green-600/20 border border-green-600/30 rounded-3xl p-12">
          <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-600/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-bold">Free Audit Available Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            See Exactly Why You Aren't Ranking #1
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Our automated audit tool scans your site for 50+ ranking factors and gives you a plain-English report in seconds. 
            No sales pitch—just data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-green-600/30"
            >
              Run Free SEO Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
            >
              Book Strategy Call
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-6">
            Serving Liverpool, Manchester, Preston, Blackpool & the North West
          </p>
        </div>
      </section>

    </main>
  );
}

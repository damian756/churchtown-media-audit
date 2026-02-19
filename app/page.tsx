import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, BarChart3, Globe, TrendingUp, Code2, Star, Quote, ExternalLink, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

// 1. REGIONAL STRATEGY METADATA
export const metadata: Metadata = {
  title: 'North West Digital Growth Partner | Churchtown Media',
  description: 'We build revenue engines, not just websites. The North West\'s leading digital growth partner. Data-driven SEO and high-performance development.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.churchtownmedia.co.uk',
    title: 'Digital Growth Partner North West | Revenue Engines & Strategy',
    description: 'We build revenue engines, not just websites. The North West\'s leading digital growth partner.',
    siteName: 'Churchtown Media',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media - Digital Growth Partner',
    }],
  },
};

// 2. THE KNOWLEDGE GRAPH (JSON-LD)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Churchtown Media',
  'url': 'https://www.churchtownmedia.co.uk',
  'logo': 'https://www.churchtownmedia.co.uk/icon.png',
  'image': 'https://www.churchtownmedia.co.uk/opengraph-image.png',
  'description': 'Churchtown Media is the North West\'s leading digital growth agency, specializing in Next.js Web Design and Data-Driven SEO.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '5 Cambridge Avenue',
    'addressLocality': 'Southport',
    'addressRegion': 'Merseyside',
    'postalCode': 'PR9 9SA',
    'addressCountry': 'UK'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 53.6567,
    'longitude': -2.9772
  },
  'sameAs': [
    'https://www.facebook.com/ChurchtownMedia/',
    'https://twitter.com/churchtownmedia',
    'https://www.linkedin.com/company/churchtownmedia'
  ],
  'areaServed': [
    { '@type': 'City', 'name': 'Southport' },
    { '@type': 'City', 'name': 'Liverpool' },
    { '@type': 'City', 'name': 'Manchester' },
    { '@type': 'City', 'name': 'Preston' },
    { '@type': 'City', 'name': 'Merseyside' },
    { '@type': 'City', 'name': 'Lancashire' }
  ],
  'priceRange': '££',
  'telephone': '+441704635785',
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '17:30'
    }
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Digital Growth Services',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Enterprise Web Design' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Regional SEO Strategy' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Technical Audits' } }
    ]
  }
};

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  
  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-slate-950 selection:bg-blue-400 selection:text-white">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden isolate">
        
        {/* ANIMATED BACKGROUND BLOBS - Heavily delayed for LCP optimization */}
        <div className="animated-blob-delayed absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[80px]"></div>
        <div className="animated-blob-delayed absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[80px] animation-delay-2000"></div>
        <div className="animated-blob-delayed absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[80px] animation-delay-4000"></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            
            {/* STATUS BADGE */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-8 shadow-sm ring-1 ring-emerald-500/20">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
                  Now accepting clients for 2026
                </span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
              We build revenue engines. <br/>
              <span className="text-blue-400">
                Not just websites.
              </span>
            </h1>

            {/* SUBHEAD */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              The North West's digital growth partner. We combine{" "}
              <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2 font-bold">
                Next.js performance
              </Link>{" "}
              with{" "}
              <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2 font-bold">
                data-driven SEO
              </Link>{" "}
              to turn traffic into profit.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/audit" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                    <Zap className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" /> Get Free Audit
                </Link>
                <Link href="/work" className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white font-bold border border-slate-700 rounded-xl hover:bg-slate-700 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-sm">
                    View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* TRUST INDICATORS */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-full">💰 From £1,500</span>
                <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-full">🤝 No Contracts</span>
                <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-full">⚡ 4-6 Weeks</span>
            </div>
        </div>
      </div>

      {/* 2. SERVICE SILOS */}
      <section className="py-16 bg-slate-900 relative z-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Growth Engine</h2>
                <p className="text-slate-400 text-lg">Specialized strategies for every stage of business.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* CARD 1: WEB DESIGN SILO */}
                <div className="group p-6 rounded-[2rem] bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Globe className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Enterprise Web Design</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        Blazing fast{" "}
                        <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300">
                          Next.js websites
                        </Link>
                        . No plugins, no bloat—just pure code designed to convert.
                    </p>
                    <div className="text-sm text-slate-500 font-medium mb-4">From £2,500</div>
                    <Link href="/services/web-design" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all">
                        Explore Design <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* CARD 2: SEO SILO */}
                <div className="group p-6 rounded-[2rem] bg-slate-800 border border-slate-700 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <BarChart3 className="w-7 h-7 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Data-Driven SEO</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        Dominate the{" "}
                        <Link href="/services/seo" className="text-emerald-400 hover:text-emerald-300">
                          Google Map Pack
                        </Link>{" "}
                        in the North West. We use data, not guesswork, to rank you #1.
                    </p>
                    <div className="text-sm text-slate-500 font-medium mb-4">From £500/month</div>
                    <Link href="/services/seo" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:gap-3 transition-all">
                        Explore SEO <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* CARD 3: AUDIT LEAD MAGNET */}
                <div className="group p-6 rounded-[2rem] bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 relative overflow-hidden">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                        <Zap className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 relative z-10">AI Website Audit</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed relative z-10">
                        Get a comprehensive report on your site's speed, SEO, and conversion blockers in 2 minutes.
                    </p>
                    <Link href="/audit" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all relative z-10">
                        Start Free Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </div>
      </section>

      {/* 3. PORTFOLIO SHOWCASE */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 relative overflow-hidden border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 border border-emerald-600/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-bold">Live Projects</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Built for Growth. Proven by Results.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From bus shelter manufacturers to tourism directories—real clients seeing real traffic growth.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            
            {/* Project 1: Alotek Shelters */}
            <Link 
              href="/portfolio" 
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/alotek-portfolio.jpg"
                  alt="Alotek Shelters - Bus Shelter Manufacturers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                  +86% Traffic
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="p-6">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wide mb-2">Manufacturing</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  Alotek Shelters
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  From invisible to industry leader in 6 weeks
                </p>
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  View Case Study <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Project 2: StreamKit */}
            <Link 
              href="/portfolio" 
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/streamkit-portfolio.jpg"
                  alt="StreamKit - Professional Video Capture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                  10+ Industries
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="p-6">
                <div className="text-xs font-bold text-purple-400 uppercase tracking-wide mb-2">Professional AV</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  StreamKit
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Professional video capture. Zero drivers.
                </p>
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  View Case Study <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Project 3: Southport Guide */}
            <Link 
              href="/portfolio" 
              className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-600/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/southportguide-portfolio.jpg"
                  alt="Southport Guide - Tourism Directory"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                  999+ Venues
                </div>
              </div>
              
              {/* Content Overlay */}
              <div className="p-6">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide mb-2">Tourism</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Southport Guide
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Britain's seaside town. 8M annual visitors.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  View Case Study <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>

          {/* View All Portfolio Link */}
          <div className="text-center">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 hover:border-slate-600 transition-all group"
            >
              View Full Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />
        
        <article className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <header className="text-center mb-16">
            <Link 
              href="https://share.google/EWApeBLNuBQUP506R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 border border-yellow-600/30 rounded-full px-4 py-2 mb-6 hover:border-yellow-600/50 hover:bg-slate-800 transition-all group"
            >
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-wide">
                5.0 on Google
              </span>
              <ExternalLink className="w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Trusted by North West Businesses
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Don't take our word for it. See why Liverpool, Manchester, and Southport businesses rate us 5 stars.
            </p>
          </header>

          {/* Featured Testimonials - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Testimonial 1: Matthew Brown - Web Design */}
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-600/30 rounded-2xl p-8 hover:border-blue-600/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20 relative group">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-600/20 group-hover:text-blue-600/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-sm relative z-10">
                "I honestly can't recommend Churchtown Media enough for web design. They actually listened and turned it into something way better than I expected. The site looks amazing, but more importantly, <strong className="text-white">it works perfectly.</strong>"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Matthew Brown</div>
                  <div className="text-xs text-blue-400 font-medium">Web Design Client</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2: Jay Hopkins - Liverpool SEO */}
            <div className="bg-gradient-to-br from-green-900/40 to-slate-900 border border-green-600/30 rounded-2xl p-8 hover:border-green-600/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-600/20 relative group">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-green-600/20 group-hover:text-green-600/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-sm relative z-10">
                "We hired Churchtown Media to help our Liverpool business gain traction, and I was <strong className="text-white">genuinely shocked by the speed of the results</strong>—we saw significant ranking improvements in less than a month."
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  J
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Jay Hopkins</div>
                  <div className="text-xs text-green-400 font-medium">Local SEO (Liverpool)</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3: Nina Thomas - Website Rebuild */}
            <div className="bg-gradient-to-br from-purple-900/40 to-slate-900 border border-purple-600/30 rounded-2xl p-8 hover:border-purple-600/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-600/20 relative group">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-purple-600/20 group-hover:text-purple-600/40 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 text-sm relative z-10">
                "We had been burnt by website agencies many times in the past, paying astronomical amounts for the bare minimum. Churchtown Media came in and fixed everything. <strong className="text-white">Professional and reliable.</strong>"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  N
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Nina Thomas</div>
                  <div className="text-xs text-purple-400 font-medium">Website Rebuild</div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link 
              href="https://share.google/EWApeBLNuBQUP506R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold group"
            >
              Read All Reviews on Google <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </section>

      {/* 5. LATEST INSIGHTS SECTION */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-bold">Knowledge Base</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Latest Insights & Strategies
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Data-driven SEO strategies, technical guides, and growth playbooks for North West businesses.
            </p>
          </div>

          {/* Blog Post Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="group block bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-600/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/20"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="text-blue-400 font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 hover:border-slate-600 transition-all group"
            >
              View All Insights <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
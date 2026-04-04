import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Globe, TrendingUp, Star, Quote, ExternalLink, Sparkles, MapPin } from "lucide-react";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: 'Web Design & SEO Agency Southport | Churchtown Media',
  description: 'Churchtown Media builds websites and SEO strategies for Southport and North West businesses. We built SouthportGuide, FormbyGuide, SeftonLinks and SeftonCoastWildlife. Based in Churchtown, Southport.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.churchtownmedia.co.uk',
    title: 'Churchtown Media | Web Design & SEO, Southport',
    description: 'We built the Sefton Coast Network from scratch. Four sites, one coastline. We build the same depth of thing for clients.',
    siteName: 'Churchtown Media',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media: Web Design & SEO, Southport',
    }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.churchtownmedia.co.uk/#organization',
  'name': 'Churchtown Media',
  'url': 'https://www.churchtownmedia.co.uk',
  'logo': 'https://www.churchtownmedia.co.uk/icon.png',
  'image': 'https://www.churchtownmedia.co.uk/opengraph-image.png',
  'description': 'Churchtown Media is a web design and SEO agency based in Southport, Merseyside. We built the Sefton Coast Network and build fast Next.js websites and local SEO campaigns for North West businesses.',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': '5 Cambridge Avenue',
    'addressLocality': 'Southport',
    'addressRegion': 'Merseyside',
    'postalCode': 'PR9 9SA',
    'addressCountry': 'GB'
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
    'name': 'Digital Services',
    'itemListElement': [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Web Design Southport', 'url': 'https://www.churchtownmedia.co.uk/services/web-design' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'SEO Services Southport', 'url': 'https://www.churchtownmedia.co.uk/services/seo' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Generative Engine Optimisation (GEO)', 'url': 'https://www.churchtownmedia.co.uk/services/generative-engine-optimisation' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'AI Content Production', 'url': 'https://www.churchtownmedia.co.uk/services/ai-content' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'AI Workflow Implementation', 'url': 'https://www.churchtownmedia.co.uk/services/ai-workflows' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Content Strategy', 'url': 'https://www.churchtownmedia.co.uk/services/content-strategy' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'SEO Optimisation Sprint', 'url': 'https://www.churchtownmedia.co.uk/services/optimisation-sprint' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Bespoke Systems & Custom Development', 'url': 'https://www.churchtownmedia.co.uk/services/bespoke-systems' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Technical Audits', 'url': 'https://www.churchtownmedia.co.uk/audit' } }
    ]
  }
};

const NETWORK_SITES = [
  {
    name: "SouthportGuide.co.uk",
    tagline: "Southport's visitor guide",
    desc: "999+ businesses. Hotels, restaurants, attractions, events. The Open 2026 hub. Built for 8M annual visitors.",
    href: "https://www.southportguide.co.uk",
    badge: "999+ venues",
    color: "border-blue-500/40 hover:border-blue-400/60",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    dot: "bg-blue-400",
  },
  {
    name: "FormbyGuide.co.uk",
    tagline: "Formby's local guide",
    desc: "Red squirrels, National Trust beach, pinewoods walks, and village dining. The guide Formby never had.",
    href: "https://www.formbyguide.co.uk",
    badge: "Live & ranking",
    color: "border-emerald-500/40 hover:border-emerald-400/60",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  {
    name: "SeftonLinks.com",
    tagline: "Championship links golf",
    desc: "Royal Birkdale, Hillside, Formby Golf Club. Course guides, scorecard data, tee time info. 18 languages.",
    href: "https://www.seftonlinks.com",
    badge: "18 languages",
    color: "border-sky-500/40 hover:border-sky-400/60",
    badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    dot: "bg-sky-400",
  },
  {
    name: "SeftonCoastWildlife.co.uk",
    tagline: "Coastal wildlife database",
    desc: "257 species. Birds, mammals, insects, plants. Field guides, seasonal filters, Marshside RSPB coverage.",
    href: "https://seftoncoastwildlife.co.uk",
    badge: "257 species",
    color: "border-teal-500/40 hover:border-teal-400/60",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    dot: "bg-teal-400",
  },
];

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  
  return (
    <>
      <main className="min-h-screen overflow-x-hidden bg-slate-950 selection:bg-blue-400 selection:text-white">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-28 pb-0 overflow-hidden isolate">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[520px] pb-16">
            
            {/* LEFT: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-3 py-1.5 mb-8">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Churchtown, Southport</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                We built the<br />
                <span className="text-slate-300">Sefton Coast.</span><br />
                <span className="text-slate-500 text-4xl md:text-5xl font-bold">We can build yours.</span>
              </h1>

              <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                Four editorial sites. One coastline. Built from scratch, fully owned, ranking in Google. SouthportGuide, FormbyGuide, SeftonLinks and SeftonCoastWildlife.
                That is what we build for clients.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link href="/work" className="px-7 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20">
                  See How We Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="px-7 py-3.5 bg-slate-800 text-white font-bold border border-slate-700 rounded-xl hover:bg-slate-700 transition-all flex items-center gap-2">
                  Get in Touch
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 uppercase tracking-widest">
                <span>From £1,500</span>
                <span className="text-slate-800">·</span>
                <span>No contracts</span>
                <span className="text-slate-800">·</span>
                <span>4-6 weeks</span>
                <span className="text-slate-800">·</span>
                <span>5.0 on Google</span>
              </div>
            </div>

            {/* RIGHT: Network cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {NETWORK_SITES.map((site) => (
                  <a
                    key={site.href}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block bg-slate-900 border ${site.color} rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-slate-800/80`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-2 h-2 rounded-full ${site.dot} shrink-0`} />
                      <span className={`text-[10px] font-bold uppercase tracking-wide border px-2 py-0.5 rounded-full ${site.badgeColor}`}>
                        {site.badge}
                      </span>
                    </div>
                    <div className="font-bold text-white text-sm mb-1 group-hover:text-slate-200 transition-colors">
                      {site.name}
                    </div>
                    <div className="text-slate-500 text-xs mb-2 font-medium">{site.tagline}</div>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{site.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-slate-600 text-xs group-hover:text-slate-400 transition-colors">
                      Visit live site <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
              </div>
              <p className="text-center text-[11px] text-slate-700 font-medium uppercase tracking-widest mt-4">
                The Sefton Coast Network — built & operated by Churchtown Media
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. THE NETWORK STORY — light breakout
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Story */}
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Why it matters</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
                We build for our own patch first.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Most agencies show you a portfolio of client work and ask you to take their word for it. We built four sites for our own area, with no client brief and no guarantee of return, because we thought they should exist.
                </p>
                <p>
                  SouthportGuide covers the restaurants, hotels, and events of a town we know intimately. SeftonLinks covers six championship golf courses in eighteen languages for an international audience. SeftonCoastWildlife is a 257-species database built because there was nowhere pulling it together properly.
                </p>
                <p>
                  They run on the same stack we use for clients. They are real publishing businesses. They rank, they attract visitors, and they demonstrate every technical capability we bring to client projects.
                </p>
                <p className="text-slate-800 font-medium">
                  When a Southport business works with us, they get an agency that genuinely understands this place and has put that understanding to work already.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/portfolio" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl transition-all hover:bg-blue-700 text-sm shadow-md shadow-blue-600/20">
                  See the full portfolio <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/blog/sefton-coast-network" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold text-sm transition-colors">
                  Read the case study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "4", label: "Sites built", sub: "All owned, all live" },
                { value: "18", label: "Languages", sub: "SeftonLinks internationalised" },
                { value: "257", label: "Species", sub: "Sefton Coast Wildlife database" },
                { value: "999+", label: "Businesses", sub: "Listed in SouthportGuide" },
                { value: "10", label: "#1 Rankings", sub: "Alotek Shelters, month one" },
                { value: "30 days", label: "To results", sub: "First SEO retainer" },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl font-black text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-800 mb-0.5">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. SERVICES
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">What we build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              The same approach, whatever the brief.
            </h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              We have built for a bus shelter manufacturer, a championship golf guide in 18 languages, and the definitive visitor guide to Southport. The technical approach is always the same. What changes is the editorial depth and local knowledge we bring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            
            <div className="group p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-600/40 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600/10 transition-colors">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Web Design</h3>
              <p className="text-slate-400 mb-5 leading-relaxed text-sm">
                Fast Next.js sites built to rank and convert. No WordPress, no plugins, no bloat. Pure code that loads in under a second and gives Google exactly what it needs.
              </p>
              <div className="text-xs text-blue-500/70 font-semibold mb-4">From £2,500</div>
              <Link href="/services/web-design" className="inline-flex items-center gap-2 text-slate-300 font-semibold hover:text-white transition-colors text-sm">
                Web design services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="group p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-600/40 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600/10 transition-colors">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO</h3>
              <p className="text-slate-400 mb-5 leading-relaxed text-sm">
                Local pack rankings, technical SEO, content that earns citations. We helped Alotek Shelters reach #1 on every commercial keyword within 30 days of their first retainer.
              </p>
              <div className="text-xs text-blue-500/70 font-semibold mb-4">From £500/month</div>
              <Link href="/services/seo" className="inline-flex items-center gap-2 text-slate-300 font-semibold hover:text-white transition-colors text-sm">
                SEO services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="group p-7 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-600/40 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600/10 transition-colors">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Search</h3>
              <p className="text-slate-400 mb-5 leading-relaxed text-sm">
                Google AI Overviews appear on 25%+ of searches now. We structure your content and authority signals so AI cites you, not your competitors. GEO, AI content, AI workflows.
              </p>
              <div className="text-xs text-blue-500/70 font-semibold mb-4">From £800/month</div>
              <Link href="/services/ai" className="inline-flex items-center gap-2 text-slate-300 font-semibold hover:text-white transition-colors text-sm">
                AI services <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Secondary services row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Content Strategy", href: "/services/content-strategy" },
              { label: "Optimisation Sprint", href: "/services/optimisation-sprint" },
              { label: "Bespoke Systems", href: "/services/bespoke-systems" },
              { label: "Free SEO Audit", href: "/audit" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center justify-between gap-2 bg-slate-900 border border-slate-800 hover:border-blue-600/40 rounded-xl px-4 py-3 transition-all text-sm font-semibold text-slate-400 hover:text-white">
                {item.label} <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. PORTFOLIO
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Client work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Real results, verifiable.
            </h2>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              Every result below is live and checkable. We do not use projected figures or vanity metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            
            {/* Alotek — primary feature */}
            <Link 
              href="/portfolio" 
              className="group md:col-span-2 relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="aspect-[16/7] relative overflow-hidden">
                <Image
                  src="/images/alotek-portfolio.jpg"
                  alt="Alotek Shelters: Bus Shelter Manufacturers"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-black px-3 py-1.5 rounded-full">
                  #1 for every tracked term
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-blue-400/70 uppercase tracking-wide mb-2">Manufacturing · SEO Retainer</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                  Alotek Shelters
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Previous agency: zero results in 12 months. Month one of our retainer: 10 #1 rankings, every core keyword, AI Overview appearances. "Bus shelter suppliers" moved from position 16 to #1 in 30 days.
                </p>
                <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read the case study <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* SouthportGuide */}
            <Link 
              href="/portfolio" 
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/southportguide-portfolio.jpg"
                  alt="Southport Guide: Tourism Directory"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-black px-3 py-1.5 rounded-full">
                  999+ venues
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-blue-400/70 uppercase tracking-wide mb-2">Tourism · Owned project</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-200 transition-colors">
                  SouthportGuide.co.uk
                </h3>
                <p className="text-sm text-slate-400 mb-4">
                  Built from scratch, fully owned. The definitive visitor guide to Southport.
                </p>
                <div className="flex items-center gap-2 text-slate-300 font-semibold text-sm group-hover:gap-3 transition-all">
                  View project <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          </div>

          {/* Second row: SeftonLinks + Sefton Wildlife */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Link 
              href="/portfolio" 
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/40 transition-all hover:shadow-xl flex gap-0"
            >
              <div className="w-40 shrink-0 relative overflow-hidden">
                <Image
                  src="/images/seftonlinks-portfolio.jpg"
                  alt="Sefton Links: Championship Golf Guide"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <div className="text-xs font-bold text-blue-400/70 uppercase tracking-wide mb-1">Golf · 18 languages</div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-slate-200 transition-colors">SeftonLinks.com</h3>
                <p className="text-xs text-slate-400 line-clamp-2">Royal Birkdale and 5 championship courses. International golf tourism for The Open 2026.</p>
              </div>
            </Link>
            <Link 
              href="/portfolio" 
              className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/40 transition-all hover:shadow-xl flex gap-0"
            >
              <div className="w-40 shrink-0 relative overflow-hidden bg-slate-700">
                <Image
                  src="/images/southport-marshside-nature-seo.jpg"
                  alt="Sefton Coast Wildlife: Species Database"
                  fill
                  sizes="160px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <div className="text-xs font-bold text-blue-400/70 uppercase tracking-wide mb-1">Wildlife · 257 species</div>
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-slate-200 transition-colors">SeftonCoastWildlife.co.uk</h3>
                <p className="text-xs text-slate-400 line-clamp-2">Species database covering every bird, mammal, insect and plant found between Southport and Formby.</p>
              </div>
            </Link>
          </div>

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

      {/* ══════════════════════════════════════════
          5. TESTIMONIALS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="https://share.google/EWApeBLNuBQUP506R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 border border-yellow-600/30 rounded-full px-4 py-2 mb-6 hover:border-yellow-600/50 hover:bg-slate-800 transition-all group"
            >
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 text-xs font-bold uppercase tracking-wide">
                5.0 on Google
              </span>
              <ExternalLink className="w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              What clients say
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Liverpool, Manchester, and Southport businesses. Verified Google reviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 relative group hover:border-slate-700 transition-all">
              <Quote className="absolute top-5 right-5 w-10 h-10 text-slate-800" />
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-5 text-sm relative z-10">
                "I honestly can't recommend Churchtown Media enough for web design. They actually listened and turned it into something way better than I expected. The site looks amazing, but more importantly, <strong className="text-white">it works perfectly.</strong>"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-9 h-9 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">M</div>
                <div>
                  <div className="font-bold text-white text-sm">Matthew Brown</div>
                  <div className="text-xs text-slate-500 font-medium">Web Design Client</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 relative group hover:border-slate-700 transition-all">
              <Quote className="absolute top-5 right-5 w-10 h-10 text-slate-800" />
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-5 text-sm relative z-10">
                "We hired Churchtown Media to help our Liverpool business gain traction, and I was <strong className="text-white">genuinely shocked by the speed of the results</strong>. We saw significant ranking improvements in less than a month."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-9 h-9 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">J</div>
                <div>
                  <div className="font-bold text-white text-sm">Jay Hopkins</div>
                  <div className="text-xs text-slate-500 font-medium">Local SEO (Liverpool)</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 relative group hover:border-slate-700 transition-all">
              <Quote className="absolute top-5 right-5 w-10 h-10 text-slate-800" />
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 leading-relaxed mb-5 text-sm relative z-10">
                "We had been burnt by website agencies many times in the past, paying astronomical amounts for the bare minimum. Churchtown Media came in and fixed everything. <strong className="text-white">Professional and reliable.</strong>"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <div className="w-9 h-9 bg-blue-600/20 border border-blue-600/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm">N</div>
                <div>
                  <div className="font-bold text-white text-sm">Nina Thomas</div>
                  <div className="text-xs text-slate-500 font-medium">Website Rebuild</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="https://share.google/EWApeBLNuBQUP506R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold group text-sm transition-colors"
            >
              Read all Google reviews <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. SOUTHPORT GROWTH CALLOUT
      ══════════════════════════════════════════ */}
      <section className="px-4 sm:px-6 py-10 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/southport-growth"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-blue-950/50 border border-blue-800/30 hover:border-blue-700/60 rounded-2xl px-8 py-7 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-blue-900/40 rounded-xl flex items-center justify-center mt-0.5">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Southport 2026</div>
                <p className="text-white font-bold text-base leading-snug">
                  500,000+ additional visitors. MLEC, The Open, the £37.5m Town Deal.
                </p>
                <p className="text-slate-400 text-sm mt-1">
                  What it means for local businesses and how to position before the traffic arrives.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-blue-400/70 font-semibold whitespace-nowrap group-hover:text-blue-300 group-hover:gap-3 transition-all text-sm">
              Read the growth guide <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. LATEST INSIGHTS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">From the blog</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Latest insights
              </h2>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors text-sm">
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="group block bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-600/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2 text-xs text-slate-600">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                    <span className="text-slate-500 font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="sm:hidden text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-semibold transition-colors text-sm">
              All posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}

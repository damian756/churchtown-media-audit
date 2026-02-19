import Link from "next/link";
import Image from "next/image";
import { Users, Coins, ExternalLink, Calendar, MapPin, CheckCircle2, ArrowRight, Zap, Search, Layout, HelpCircle, Sparkles, Music, Ticket } from "lucide-react";
import { posts } from "@/lib/posts"; 
import type { Metadata } from "next";

// 1. STRATEGIC METADATA
export const metadata: Metadata = {
  title: 'Southport Business Growth Hub | Grants, Networking & SEO',
  description: 'The complete growth playbook for Southport businesses. Access InvestSefton grants, Sandgrounders networking, and dominate local SEO. Southport 2026 events calendar.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/southport-growth',
  },
  openGraph: {
    title: 'Southport Business Growth Hub | Churchtown Media',
    description: 'Access £37.5m Town Deal opportunities, local grants, and digital strategies. Prepare for Southport 2026 cultural events programme.',
    url: 'https://www.churchtownmedia.co.uk/southport-growth',
    type: 'website',
    images: [{ url: '/images/mlec.jpg', width: 1200, height: 630, alt: 'Southport Growth Hub' }],
  },
};

// 2. FAQ SCHEMA (Rich Snippets)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What funding is available for businesses in Southport?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Southport businesses can access several funding streams in 2026, including the InvestSefton Growth Hub, the Merseyside Police Cashback Fund (up to £5k), and The King’s Trust Enterprise Programme.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How can I improve my local SEO in Southport?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Focus on three pillars: 1) Optimize your Google Business Profile. 2) Ensure <3s mobile load speeds. 3) Build local backlinks from Sefton directories.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What are the best business networking groups in Southport?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Top groups include Sandgrounders Business Club (casual), Real5 Networking (structured B2B), and Southport BID (retail/hospitality).'
      }
    },
    {
      '@type': 'Question',
      'name': 'What major events are coming to Southport in 2026?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Southport 2026 features Lightport (February), Cristal Palace by Transe Express (April), Big Top Festival (May), Southport Originals including Flower Show and Air Show (summer), and Books Alive! (October). These events bring thousands of visitors and significant search traffic opportunities for local businesses.'
      }
    }
  ]
};

// 3. EVENT SCHEMA (EventSeries for Southport 2026)
const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventSeries',
  'name': 'Southport 2026',
  'description': 'A year-long cultural events programme bringing world-class performance, art, and entertainment to Southport',
  'location': {
    '@type': 'Place',
    'name': 'Southport',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Southport',
      'addressRegion': 'Merseyside',
      'postalCode': 'PR8',
      'addressCountry': 'GB'
    }
  },
  'organizer': {
    '@type': 'Organization',
    'name': 'Sefton Council',
    'url': 'https://www.sefton.gov.uk/'
  }
};

export default function GrowthHub() {
  const recentPosts = posts ? posts.slice(0, 2) : [];

  return (
    <main className="min-h-screen bg-slate-950">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 px-6 py-16 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <Image 
                src="/images/mlec.jpg" 
                alt="Southport Marine Lake Events Centre Growth" 
                fill
                className="object-cover"
                priority
            />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-400 border border-blue-400/30">
            The 2026 Playbook
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Growing Your Business in <span className="text-blue-400">Southport</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From Churchtown Village to the Marine Lake. We've curated the essential grants, networks, and digital strategies you need to dominate the local Sefton market.
          </p>
        </div>
      </section>

      {/* 2. Intro & Digital First Reality */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-6">The "Digital First" Reality for Southport</h2>
                <div className="prose prose-lg text-slate-300 prose-strong:text-white space-y-6">
                    <p className="text-xl font-medium text-white">
                        The days of "word of mouth" are over. Today, word of mouth happens on Google Maps.
                    </p>
                    <p>
                        Southport is changing. With the <strong>Marine Lake Events Centre (MLEC)</strong> development and the <strong>£37.5m Town Deal</strong> reshaping our economy, the opportunity for local businesses has never been greater. But as the town grows, so does the competition.
                    </p>
                    <p>
                        For decades, business in Southport relied on footfall. In 2026, that conversation hasn't stopped—it has just moved online.
                    </p>
                    <p>
                        The reality is that <strong>93% of online experiences begin with a search engine</strong>. When a family in Ainsdale needs a plumber, they check Google. When tourists visiting the MLEC need dinner, they check Maps. If your business doesn’t appear in those micro-moments, you don’t exist.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <Image 
                    src="/images/img1-1.jpg" 
                    alt="Southport Local Search Map Pack Strategy" 
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl border border-slate-700 w-full h-auto"
                />
            </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid gap-8 md:grid-cols-3 mt-16">
            <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-500/20 w-fit rounded-lg text-blue-400 mb-6"><MapPin className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-white mb-3">The "Near Me" Explosion</h3>
                <p className="text-slate-300">Local search has shifted. "Web design near me" or "Roofers in Southport" are now the primary way customers find you. You need to dominate the Map Pack.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <div className="p-3 bg-yellow-500/20 w-fit rounded-lg text-yellow-400 mb-6"><Zap className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-white mb-3">Speed is Currency</h3>
                <p className="text-slate-300">Southport has 5G. If your mobile site takes &gt;3 seconds to load, 50% of visitors leave. We build engines that capture traffic, not just look pretty.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-700 hover:shadow-md transition-shadow">
                <div className="p-3 bg-red-500/20 w-fit rounded-lg text-red-400 mb-6"><Search className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-white mb-3">The Invisible Competitor</h3>
                <p className="text-slate-300">Your biggest rival isn't the shop next door—it's the digital-first business that optimized last month. Don't let them steal your leads.</p>
            </div>
        </div>
      </section>

      {/* 3. Networking Section (Row 1 Style) */}
      <section className="py-16 bg-slate-900 border-y border-slate-700">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
              <Users className="h-8 w-8" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-white">Local Networking & Community</h2>
                <p className="text-slate-400 mt-1">Growth doesn't happen in a silo. Connect with the best in Sefton.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Sandgrounders */}
            <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-800 relative border-b border-slate-700">
                <Image 
                    src="/images/sandgrounders.jpg" 
                    alt="Sandgrounders Business Club Southport" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">Sandgrounders Business Club</h3>
                <p className="mt-2 text-sm font-semibold text-blue-400">Casual Connection</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-300 text-sm">
                    <li className="flex gap-3"><Calendar className="h-5 w-5 shrink-0 text-slate-500"/> <span>2nd Thursday (5pm)</span></li>
                    <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-slate-500"/> <span>Southport FC, Haig Ave</span></li>
                </ul>
                <a href="https://www.facebook.com/SandgroundersBusinessClub/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                    Visit Website <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Southport BID */}
            <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-800 relative border-b border-slate-700">
                <Image 
                    src="/images/southport-bid.jpg" 
                    alt="Southport BID Business Improvement District" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">Southport BID</h3>
                <p className="mt-2 text-sm font-semibold text-blue-400">Retail & Hospitality</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-300 text-sm">
                    <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400"/> <span>Town Centre Security</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-400"/> <span>Seasonal Events</span></li>
                </ul>
                <a href="https://southportbid.com/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                    Explore Initiatives <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Real5 */}
            <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-800 relative border-b border-slate-700">
                <Image 
                    src="/images/real5.jpg" 
                    alt="Real5 Networking Southport" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">Real5 Networking</h3>
                <p className="mt-2 text-sm font-semibold text-blue-400">Structured Referrals</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-300 text-sm">
                    <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-slate-500"/> <span>The Grand / Lord St Hotel</span></li>
                    <li className="text-slate-400 text-xs">"Single Seat" model. Lock out your competition.</li>
                </ul>
                <a href="https://real5networking.com/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                    Check Seats <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUTHPORT 2026: WHAT'S COMING */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 border-y border-slate-800">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">Southport 2026</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              500,000+ Visitors Are Coming. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Is Your Business Ready?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Southport is transforming into a year-round cultural destination. These aren't just events—they're <strong>search traffic goldmines</strong>. Each one brings thousands of visitors searching for local businesses on mobile. The question is: will they find <em>you</em>?
            </p>
          </div>

          {/* Events Timeline */}
          <div className="space-y-8 max-w-5xl mx-auto mb-16">
            {/* Lightport - February */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0">
                  <Sparkles className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">February 2026</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-sm text-slate-400">Light Installation</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Lightport</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Immersive light and sound installation by <strong>Lucid Creates</strong>. Transforms Southport into a walk-through rainbow of colour and creativity. Captures the early-season tourism market when most seaside towns are quiet.
                  </p>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-400"><strong className="text-white">Business Opportunity:</strong> Evening footfall surge. Restaurants, bars, and retail near the illuminated areas will see "dinner near me Southport" searches spike. Optimize your <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 underline">Google Business Profile</Link> for evening hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cristal Palace - April */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20 shrink-0">
                  <Music className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-purple-400 uppercase tracking-wide">April 2026</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-sm text-slate-400">Street Theatre</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Cristal Palace by Transe Express</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    French street theatre company brings a <strong>15-metre flying chandelier</strong> to Lord Street. Open-air ballroom with live music, aerial performance, and dance. One of the year's defining spectacles.
                  </p>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-400"><strong className="text-white">Business Opportunity:</strong> Lord Street footfall explosion. <Link href="/industries/retail-shops" className="text-blue-400 hover:text-blue-300 underline">Independent shops</Link> and <Link href="/industries/restaurants" className="text-blue-400 hover:text-blue-300 underline">restaurants</Link> should prepare "what's on Lord Street" content. See our <Link href="/blog/invisible-on-lord-street" className="text-blue-400 hover:text-blue-300 underline">Lord Street visibility guide</Link>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Top Festival - May */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20 shrink-0">
                  <Ticket className="w-8 h-8 text-red-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-red-400 uppercase tracking-wide">May 2026</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-sm text-slate-400">Modern Circus</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Big Top Festival</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    World-renowned circus companies including <strong>Circa</strong> and <strong>Gandini Juggling</strong>. Open-air stages, breathtaking acts, live music, and family workshops. Southport becomes a circus town for May half-term.
                  </p>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-400"><strong className="text-white">Business Opportunity:</strong> Family audience with high spending power. <Link href="/industries/restaurants" className="text-blue-400 hover:text-blue-300 underline">Restaurants</Link> and <Link href="/industries/tourism" className="text-blue-400 hover:text-blue-300 underline">attractions</Link> should target "family day out Southport". See our <Link href="/blog/southport-family-days-out-seo-guide" className="text-blue-400 hover:text-blue-300 underline">family search guide</Link>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Southport Originals - Summer */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20 shrink-0">
                  <Calendar className="w-8 h-8 text-green-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-green-400 uppercase tracking-wide">Summer 2026</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-sm text-slate-400">Heritage Events</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Southport Originals</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Southport's classic calendar returns in force: <strong>Southport Flower Show</strong>, <strong>Food & Drink Festival</strong>, <strong>Air Show</strong>, and <strong>British Musical Fireworks Championships</strong>. These established events each draw 50,000+ visitors and proven search demand.
                  </p>
                  <div className="space-y-3 mb-4">
                    <Link href="/blog/southport-flower-show-seo-guide" className="block text-sm text-blue-400 hover:text-blue-300 underline">→ Flower Show SEO Strategy</Link>
                    <Link href="/blog/southport-food-drink-festival-seo-guide" className="block text-sm text-blue-400 hover:text-blue-300 underline">→ Food Festival SEO Playbook</Link>
                    <Link href="/blog/southport-air-show-seo-guide" className="block text-sm text-blue-400 hover:text-blue-300 underline">→ Air Show Traffic Guide</Link>
                    <Link href="/blog/southport-music-fireworks-seo-guide" className="block text-sm text-blue-400 hover:text-blue-300 underline">→ Fireworks Festival Strategy</Link>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-400"><strong className="text-white">Business Opportunity:</strong> Peak season demand. Every <Link href="/industries/hotels" className="text-blue-400 hover:text-blue-300 underline">hotel</Link>, <Link href="/industries/restaurants" className="text-blue-400 hover:text-blue-300 underline">restaurant</Link>, and <Link href="/industries/event-venues" className="text-blue-400 hover:text-blue-300 underline">event venue</Link> should have event-specific landing pages live 6-8 weeks before each festival.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Books Alive! - October */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/20 shrink-0">
                  <Ticket className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-bold text-orange-400 uppercase tracking-wide">October 2026</span>
                    <span className="text-slate-500">|</span>
                    <span className="text-sm text-slate-400">Literature Festival</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Books Alive!</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Reimagined literature festival for families and young readers. Half-term storytelling installations, live performances, author workshops. Turns Southport into a living storybook.
                  </p>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <p className="text-sm text-slate-400"><strong className="text-white">Business Opportunity:</strong> Half-term family searches. <Link href="/industries/tourism" className="text-blue-400 hover:text-blue-300 underline">Attractions</Link> and <Link href="/industries/restaurants" className="text-blue-400 hover:text-blue-300 underline">family restaurants</Link> should optimize for "things to do half term Southport". Content marketing targeting parents is critical.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy Callout */}
          <div className="bg-slate-900 border-2 border-blue-600/30 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              The 2026 Search Traffic Strategy
            </h3>
            <p className="text-slate-300 leading-relaxed mb-8">
              Every one of these events creates predictable search spikes. <strong>Lightport</strong> drives "things to do Southport winter" searches. <strong>Air Show</strong> drives "where to watch air show" and "parking near Southport beach". <strong>Food Festival</strong> drives "best restaurants Southport". The businesses that win are the ones that publish content <em>before</em> the search volume arrives.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="text-blue-400 font-bold mb-2">1. Content First</div>
                <p className="text-sm text-slate-400">Publish event-specific landing pages 6-8 weeks before each festival. Target long-tail searches like "where to eat after Southport air show".</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="text-blue-400 font-bold mb-2">2. Google Business Profile</div>
                <p className="text-sm text-slate-400">Update your GBP with event-specific posts and offers. "Special Air Show Menu Available" drives clicks and builds relevance.</p>
              </div>
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
                <div className="text-blue-400 font-bold mb-2">3. Speed Wins</div>
                <p className="text-sm text-slate-400">Event traffic is mobile-first. If your site takes &gt;3s to load, you lose 50% of visitors before they see your menu. <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline">Speed is currency</Link>.</p>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="https://www.sefton.gov.uk/mysefton-news/latest-news/southport-elegantly-eccentric-launch/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
              >
                View full Sefton Council announcement <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fueling Growth (Middle Section) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Coins className="h-6 w-6" /></div>
                    <h2 className="text-3xl font-bold text-white">Fueling Growth: Grants & Funding</h2>
                </div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Scaling a business requires more than just a great website; it requires capital. With the MLEC opening soon, Southport businesses have access to specific <strong>Sefton Council</strong> and <strong>Liverpool City Region</strong> funding streams designed to boost the visitor economy.
                </p>
                <div className="bg-green-500/10 border-l-4 border-green-400 p-6 rounded-r-lg">
                    <p className="font-bold text-green-400">Agency Tip:</p>
                    <p className="text-green-300 mt-1">Many of these grants can be used to fund <strong>40% to 100%</strong> of consultancy, training, or digital infrastructure projects.</p>
                </div>
            </div>
            <div className="lg:w-1/2 relative">
                <Image 
                    src="/images/grants-dashboard.jpg" 
                    alt="Sefton Business Grants Dashboard" 
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-xl border border-slate-700 w-full h-auto"
                />
            </div>
        </div>

        {/* 5. Grants Cards (UPDATED to match Row 1) */}
        <div className="grid gap-8 md:grid-cols-3 mt-12">
            {/* Grant 1 */}
            <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              {/* Changed class to overflow-hidden and removed padding/flex to match row 1 */}
              <div className="h-56 overflow-hidden bg-slate-800 relative border-b border-slate-700">
                {/* Changed object-contain to object-cover */}
                <Image 
                    src="/images/invest-sefton.jpg" 
                    alt="Invest Sefton Business Support" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">InvestSefton</h3>
                <p className="mt-1 text-sm text-slate-400 font-medium">The Growth Hub</p>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
                  The "Gatekeepers" to government funds. Full business diagnostics and access to LCR High Growth funds.
                </p>
                <div className="mt-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                    Priority: MLEC Services
                    </span>
                </div>
                <a href="mailto:investsefton@sefton.gov.uk" className="mt-auto w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                  Contact Hub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Grant 2 */}
            <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-800 relative border-b border-slate-700">
                <Image 
                    src="/images/police-fund.jpg" 
                    alt="Merseyside Police Cashback Fund" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">Police Cashback Fund</h3>
                <p className="mt-1 text-sm text-slate-400 font-medium">Community Safety</p>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
                  Grants up to <strong>£5,000</strong> from seized assets. Ideal for local CICs focusing on youth or safety.
                </p>
                <div className="mt-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400">
                    Max Grant: £5,000
                    </span>
                </div>
                <a href="https://cfmerseyside.org.uk/grants/merseyside-police-community-cashback-fund" target="_blank" className="mt-auto w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                  Check Criteria <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Grant 3 */}
            <div className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-800 relative border-b border-slate-700">
                <Image 
                    src="/images/kings-trust.jpg" 
                    alt="Kings Trust Enterprise Programme" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white">King’s Trust</h3>
                <p className="mt-1 text-sm text-slate-400 font-medium">Entrepreneurs (18-30)</p>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed flex-1">
                  Low-interest loans up to <strong>£25,000</strong>. Includes a dedicated business mentor for 12 months.
                </p>
                <div className="mt-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-400">
                    Ages 18-30
                    </span>
                </div>
                <a href="https://www.kingstrust.org.uk/help-for-young-people/programmes/enterprise/" target="_blank" className="mt-auto w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                  Start App <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* 6. Performance-First Strategy */}
      <section className="bg-slate-950 py-16 border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white">The Performance-First Strategy</h2>
                <p className="mt-4 text-lg text-slate-300">Most agencies focus on how a website looks. We focus on how it works.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2">
                    <p>
                        In 2026, a beautiful website that nobody visits is a liability. We build{" "}
                        <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2 font-semibold">
                          high-performance digital engines
                        </Link>{" "}
                        designed to capture the existing demand in Southport and convert it into revenue.
                    </p>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg shadow-sm h-fit border border-slate-700"><Zap className="h-6 w-6 text-blue-400"/></div>
                            <div>
                                <h4 className="font-bold text-white">Technical Velocity</h4>
                                <p className="text-sm text-slate-300 mt-1">We code for raw speed. Fast sites rank higher on Google and sell more.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg shadow-sm h-fit border border-slate-700"><MapPin className="h-6 w-6 text-blue-400"/></div>
                            <div>
                                <h4 className="font-bold text-white">Hyper-Local SEO</h4>
                                <p className="text-sm text-slate-300 mt-1">
                                  We optimize your digital footprint to signal that <em>you</em> are the authority in Southport. Learn more about our{" "}
                                  <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2 font-semibold">
                                    data-driven SEO services
                                  </Link>.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-slate-900 rounded-lg shadow-sm h-fit border border-slate-700"><Layout className="h-6 w-6 text-blue-400"/></div>
                            <div>
                                <h4 className="font-bold text-white">Design that Sells</h4>
                                <p className="text-sm text-slate-300 mt-1">Psychology-driven layouts that guide visitors exactly where you want them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <Image 
                        src="/images/analytics.jpg" 
                        alt="Digital Performance Analytics for Southport Businesses" 
                        width={800}
                        height={600}
                        className="rounded-2xl shadow-xl border border-slate-700 w-full h-auto"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* 7. Latest Insights */}
      <section className="bg-slate-900 py-16 border-y border-slate-700">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Insights</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {recentPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-slate-950 rounded-2xl p-6 hover:bg-slate-900 transition-colors border border-slate-700">
                        <div className="flex items-center gap-3 mb-4 text-sm text-slate-400">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                            <span className="text-blue-400 font-medium">{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{post.title}</h3>
                        <p className="mt-2 text-slate-300 line-clamp-2">{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {/* 1 */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-white flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-400 shrink-0 mt-1"/> 
                        What funding is available for businesses in Southport?
                    </h3>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Southport businesses can access several funding streams in 2026, including the <strong>InvestSefton Growth Hub</strong> for general business support, the <strong>Merseyside Police Cashback Fund</strong> for community projects, and <strong>The King’s Trust Enterprise Programme</strong> for young entrepreneurs aged 18-30. Additionally, specific digital transformation grants are often available to help local businesses prepare for the Marine Lake Events Centre visitor influx.
                    </p>
                </div>
                {/* 2 */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-white flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-400 shrink-0 mt-1"/> 
                        How can I improve my local SEO in Southport?
                    </h3>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        To dominate local search in Southport, focus on three pillars: 1) Claim and optimize your <strong>Google Business Profile</strong> with accurate categories and local photos. 2) Ensure your{" "}
                        <Link href="/services/web-design" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">
                          website loads in under 3 seconds
                        </Link>{" "}
                        to satisfy mobile users. 3) Build local authority with our{" "}
                        <Link href="/services/seo" className="text-blue-400 hover:text-blue-300 underline decoration-1 underline-offset-2">
                          comprehensive SEO strategies
                        </Link>, including getting listed in reputable Sefton directories and networking groups like the <strong>Sandgrounders Business Club</strong> or <strong>Southport BID</strong>.
                    </p>
                </div>
                {/* 3 */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-white flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-400 shrink-0 mt-1"/> 
                        What are the best business networking groups in Southport?
                    </h3>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        Southport offers diverse networking options. <strong>Sandgrounders Business Club</strong> is excellent for casual, pressure-free connections. <strong>Real5 Networking (Southport & Formby)</strong> is ideal for established B2B companies looking for a structured referral model. For retail and hospitality, <strong>Southport BID</strong> offers crucial advocacy and town center support.
                    </p>
                </div>
                {/* 4 */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-white flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-400 shrink-0 mt-1"/> 
                        How will the Marine Lake Events Centre benefit local businesses?
                    </h3>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        The new <strong>Marine Lake Events Centre (MLEC)</strong> is projected to bring over 500,000 additional visitors to Southport annually. This creates a massive opportunity for hospitality, retail, and service businesses to capture 'digital tourist' traffic. Businesses that optimize their online presence for 'near me' searches stand to gain the most from this £19 million economic boost.
                    </p>
                </div>
                {/* 5 - NEW: Southport 2026 Events */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-white flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-400 shrink-0 mt-1"/> 
                        What major events are coming to Southport in 2026?
                    </h3>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                        <strong>Southport 2026 "Elegantly Eccentric"</strong> brings world-class cultural events year-round: <strong>Lightport</strong> (February light installation), <strong>Cristal Palace</strong> by Transe Express (April street theatre on Lord Street), <strong>Big Top Festival</strong> (May circus), <strong>Southport Originals</strong> (summer classics: Flower Show, Air Show, Food Festival, Fireworks), and <strong>Books Alive!</strong> (October literature festival). Each event creates predictable search traffic spikes—businesses that publish content 6-8 weeks early capture the most visitors. Learn more in our <Link href="/blog/mlec-effect-southport" className="text-blue-400 hover:text-blue-300 underline">MLEC Effect guide</Link>.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-slate-900 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to dominate the Southport search results?</h2>
        <p className="mt-4 text-slate-400 mb-8 max-w-2xl mx-auto">Stop being the town's best-kept secret. Get a free, no-nonsense audit of your digital presence today.</p>
        <Link href="/audit" className="rounded-full bg-blue-500 px-8 py-4 font-bold text-white hover:bg-blue-400 transition-colors shadow-xl inline-block hover:-translate-y-1">
          Claim Your Free Audit
        </Link>
      </section>

    </main>
  );
}
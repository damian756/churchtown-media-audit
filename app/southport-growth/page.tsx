import Link from "next/link";
import Image from "next/image";
import { Users, Coins, ExternalLink, Calendar, MapPin, CheckCircle2, ArrowRight, Zap, Search, Layout, HelpCircle } from "lucide-react";
import { posts } from "@/lib/posts"; 
import type { Metadata } from "next";

// 1. STRATEGIC METADATA
export const metadata: Metadata = {
  title: 'Southport Business Growth Hub | Grants, Networking & SEO',
  description: 'The complete growth playbook for Southport businesses. Access InvestSefton grants, join Sandgrounders networking, and dominate local SEO. Updated for 2026.',
  openGraph: {
    title: 'Southport Business Growth Hub | Churchtown Media',
    description: 'Access £37.5m Town Deal opportunities, local grants, and digital strategies.',
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
    }
  ]
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
                <div className="prose prose-lg text-slate-300 space-y-6">
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

      {/* 4. Fueling Growth (Middle Section) */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Coins className="h-6 w-6" /></div>
                    <h2 className="text-3xl font-bold text-white">Fueling Growth: Grants & Funding</h2>
                </div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                    Scaling a business requires more than just a great website; it requires capital. With the MLEC now active, Southport businesses have access to specific <strong>Sefton Council</strong> and <strong>Liverpool City Region</strong> funding streams designed to boost the visitor economy.
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
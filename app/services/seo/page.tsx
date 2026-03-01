import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plus, MapPin, TrendingUp, Search, AlertCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: 'SEO Agency Southport | Churchtown Media',
  description: 'SEO agency based in Southport. We rank #1 in the local pack for "seo southport" — and we got a client to #1 in Google\'s AI Overview in 30 days. Honest pricing, real data.',
  keywords: ['seo southport', 'seo agency southport', 'seo company southport', 'local seo southport', 'technical seo southport', 'seo services merseyside', 'seo north west'],
  alternates: { canonical: 'https://www.churchtownmedia.co.uk/services/seo' },
  openGraph: {
    title: 'SEO Agency Southport | Churchtown Media',
    description: 'SEO agency based in Southport. #1 local pack for "seo southport". Real results, real data.',
    url: 'https://www.churchtownmedia.co.uk/services/seo',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{ url: 'https://www.churchtownmedia.co.uk/og-default.png', width: 1200, height: 630, alt: 'Churchtown Media SEO Agency Southport' }],
  },
  twitter: { card: 'summary_large_image', title: 'SEO Agency Southport | Churchtown Media', description: '#1 local pack for "seo southport". Real results, honest pricing.' },
};

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Honestly: 8–12 weeks before rankings move meaningfully, 3–6 months before you're seeing a real change in enquiry volume. Technical fixes (crawlability, speed, schema) can show impact in 2–4 weeks. Content and authority building takes longer. We'll show you what's moving every month so you're never in the dark. If nothing is moving after 12 weeks, we'll tell you why and what needs to change."
  },
  {
    question: "Do you guarantee #1 rankings?",
    answer: "No — and you should be suspicious of anyone who does. Google's algorithm changes constantly and no agency controls it. What we can control: the quality of the technical foundation, the relevance of the content, and the consistency of the process. We can show you exactly where we rank for our own SEO terms — that's the most honest proof available. If we can rank ourselves, we can rank you."
  },
  {
    question: "Why is my competitor ranking higher than me?",
    answer: "Almost always one of three things: their site is faster and better-structured, they have more relevant content that directly answers buyer queries, or they've been doing this longer and have accumulated more authority. We do a competitor gap analysis at the start of every engagement to find exactly where they're beating you — and whether it's a gap we can close quickly or one that takes sustained effort."
  },
  {
    question: "Do I need a new website for SEO to work?",
    answer: "Not always. We can work with most existing sites. But if your site is on a slow, bloated platform with poor structure, SEO work on top of it is like painting a broken wall — it'll look better temporarily but the underlying problem remains. We'll tell you honestly whether your current site is a viable foundation before any money changes hands."
  },
  {
    question: "What do I actually receive each month?",
    answer: "A plain-English report covering: rankings movement (which terms went up or down and why), traffic and impressions from Google Search Console, what work was done that month and what it was for, and what's planned next. We also flag anything we're seeing in the data that you need to know about — algorithm updates, competitor movements, new opportunities. You'll never have to chase us for an update."
  },
  {
    question: "What's the difference between local pack and organic rankings?",
    answer: "The local pack (the map and three listings that appear at the top of Google for location-based searches) is won through your Google Business Profile, local citations, and reviews. Organic web results are won through content quality, technical SEO, and domain authority. Both matter — local pack gets you calls, organic gets people to your site. We work on both."
  },
  {
    question: "Can you fix a Google penalty or a traffic drop?",
    answer: "Yes. If your site was hit by a core update or has a manual action, we audit the likely causes — thin content, toxic backlinks, technical issues — fix what's fixable, and track recovery. Algorithm recoveries take time (weeks to months depending on severity) and we'll be straight with you about what's realistic."
  },
  {
    question: "Do you work with businesses outside Southport?",
    answer: "Yes — we work across Merseyside, Lancashire and the wider North West. Most of the process works well remotely. But if you're a Southport, Birkdale, Formby or Sefton Coast business, we're your local option and we know this market in detail."
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'SEO Agency Southport',
  'serviceType': 'Search Engine Optimisation',
  'provider': {
    '@type': 'LocalBusiness',
    '@id': 'https://www.churchtownmedia.co.uk/#organization',
    'name': 'Churchtown Media',
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
    { '@type': 'City', 'name': 'Preston' },
    { '@type': 'AdministrativeArea', 'name': 'Merseyside' },
    { '@type': 'AdministrativeArea', 'name': 'Lancashire' },
    { '@type': 'AdministrativeArea', 'name': 'North West England' },
  ],
  'description': 'SEO agency based in Southport. Local pack, technical SEO, and content strategy for North West businesses.',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'SEO Packages',
    'itemListElement': [
      { '@type': 'Offer', 'name': 'Local SEO', 'priceSpecification': { '@type': 'UnitPriceSpecification', 'price': '500', 'priceCurrency': 'GBP', 'unitText': 'MONTH' }, 'availability': 'https://schema.org/InStock', 'itemOffered': { '@type': 'Service', 'name': 'Local SEO', 'description': 'Local pack and Google Business Profile optimisation for Southport businesses' } },
      { '@type': 'Offer', 'name': 'Regional SEO', 'priceSpecification': { '@type': 'UnitPriceSpecification', 'price': '900', 'priceCurrency': 'GBP', 'unitText': 'MONTH' }, 'availability': 'https://schema.org/InStock', 'itemOffered': { '@type': 'Service', 'name': 'Regional SEO', 'description': 'Multi-city SEO for North West businesses' } },
      { '@type': 'Offer', 'name': 'Full SEO Retainer', 'priceSpecification': { '@type': 'UnitPriceSpecification', 'price': '1500', 'priceCurrency': 'GBP', 'unitText': 'MONTH' }, 'availability': 'https://schema.org/InStock', 'itemOffered': { '@type': 'Service', 'name': 'Full SEO Retainer', 'description': 'National and multi-location SEO with content production and authority building' } },
    ]
  },
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
  }))
};

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-slate-950 to-slate-950" />

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="inline-flex items-center gap-2 text-green-400 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Based in Southport · Serving Merseyside, Lancashire & the North West</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            SEO Agency
            <br />
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Southport
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed max-w-3xl">
            We rank #1 in the local pack for "seo southport". We got a client to #1 in Google's AI Overview in 30 days. Here's how both of those happened — and what it would look like for your business.
          </p>

          <p className="text-slate-400 mb-10 max-w-2xl">
            No fabricated case studies. No invented traffic stats. Real data, published publicly. If you want to verify anything on this page, we'll show you the Search Console.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-green-600/20"
            >
              Talk to Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
            >
              Free Site Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ── WE PRACTICE WHAT WE PREACH ───────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">Proof of craft</div>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            We rank for our own keywords
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            The simplest test for any SEO agency: do they rank for their own terms? Here's where Churchtown Media sits right now, verified in SEMrush position tracking as of 1 March 2026.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { keyword: "seo southport", position: "#1", type: "Local Pack", vol: "590/mo", note: "The primary target keyword — we're in the 3-pack" },
              { keyword: "seo company near me", position: "#2", type: "Local Pack", vol: "1,300/mo", note: "Geo-qualified by Google based on searcher location" },
              { keyword: "technical seo southport", position: "#1", type: "Local Pack", vol: "—", note: "Consistent for the past week" },
              { keyword: "seo audit southport", position: "#1", type: "Local Pack", vol: "—", note: "Consistent for the past week" },
              { keyword: "seo services merseyside", position: "#2", type: "Local Pack", vol: "—", note: "Consistent all week" },
              { keyword: "business growth southport", position: "#1", type: "AI Overview", vol: "—", note: "Featured in Google's AI-generated answer" },
            ].map((row, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-4 flex items-start gap-4">
                <div className="flex-shrink-0 text-center min-w-[52px]">
                  <div className="text-2xl font-black text-green-400">{row.position}</div>
                  <div className="text-xs text-slate-500 leading-tight">{row.type}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm mb-0.5">"{row.keyword}"</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{row.note}{row.vol !== "—" ? ` · ${row.vol}` : ""}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
            <p className="text-slate-300 text-sm leading-relaxed">
              The local pack positions mean when a Southport business owner searches "seo southport" right now, we're the first result in the map. Organic web rankings for broader terms are improving — the trajectory is upward. We publish the data here because transparency is the point: if we can do this for ourselves, we can do it for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── ALOTEK CASE STUDY (SEO RETAINER ANGLE) ───────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-4">Case Study — Month 1</div>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            10 #1 rankings in 30 days. AI Overview on every core term.
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Alotek Shelters are a Lancashire manufacturer — bus shelters, covered walkways, outdoor canopies. When we took them on as an SEO retainer client, the site had already been rebuilt on Next.js. Month one was pure SEO work: on-page content restructuring, semantic targeting, and schema. No backlinks purchased. No tricks.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-4">Before the retainer</div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Averaging position 50 — page 5 on Google for every core keyword</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> ~200 Google impressions per day across all terms</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> No page was clearly answering any specific buyer query</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> £20,000 spent with a previous agency for a flat line</li>
              </ul>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-4">After month 1 of the retainer</div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> #1 in Google's AI Overview for "bus shelter manufacturers" nationally</li>
                <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> 10 keywords at position #1, including "bus shelter suppliers" (vol 210)</li>
                <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> AI Overview appearances on every core commercial term</li>
                <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Daily impressions grew from 200 to 800+ over 3 months</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-bold mb-3">What month 1 actually involved</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              Month one was on-page work: restructuring content around the specific search terms their actual buyers use, tightening the page hierarchy, and making sure every product page was doing a clear job. No smoke and mirrors. The AI Overviews followed from content quality — Google's AI pulls from pages that give clear, structured, authoritative answers. That's what we optimised for.
            </p>
            <p className="text-slate-400 text-sm">
              "Bus shelter suppliers" at volume 210 sounds small. But it's 210 searches a month from procurement officers at parish councils and local authorities looking to place an order. One contract is worth £5,000–£50,000. We're #1 for it. That's the point of B2B SEO.
            </p>
          </div>

          <Link href="/blog/alotek-shelters-month-1-seo-results" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-semibold group">
            Read the full month-1 data breakdown — every ranking, every position change <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── SOUTHPORT MARKET SECTION ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Why Southport businesses need to move on SEO now
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Two things are about to change search competition in Southport significantly. Both are time-sensitive.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <div className="text-2xl mb-3">🏗️</div>
              <h3 className="text-white font-bold text-lg mb-2">The Marine Lake Events Centre</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The MLEC is projected to bring 500,000 additional visitors to Southport annually. That means a sustained surge in "restaurant near Marine Lake", "hotel Southport", "things to do Southport" searches — starting from opening day. The businesses that rank well before it opens will capture that traffic. The ones that start their SEO after it opens will spend 6 months trying to catch up.
              </p>
              <Link href="/southport-growth" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-xs font-semibold mt-4 group">
                Read the full Southport growth analysis <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
              <div className="text-2xl mb-3">⛳</div>
              <h3 className="text-white font-bold text-lg mb-2">The Open 2026 at Royal Birkdale</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Open Championship brings international search volume to Southport that usually doesn't exist. "Hotel near Royal Birkdale", "restaurants Southport", "stay in Southport for the Open" — these terms spike months before the tournament and the bookings go to whoever ranks. Local hotels and restaurants that have decent SEO in place by spring 2026 will take that business. It's a one-off opportunity that won't repeat for years.
              </p>
            </div>
          </div>

          <div className="bg-green-950/30 border border-green-900/40 rounded-xl p-5">
            <p className="text-slate-300 text-sm leading-relaxed">
              Both of these are 2026 events. SEO takes 3–6 months to meaningfully move the needle. If you start in March, you're positioned by summer. If you start in summer, you've missed the window for The Open and you're late for the MLEC opening period.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE ACTUALLY DO ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">What we do each month</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Concrete work, not vague "optimisation". Here's what's actually happening on your retainer.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {[
              {
                title: "Technical audit & fixes",
                desc: "Month one starts with a technical audit — crawlability, site speed, schema markup, canonical tags, mobile usability. We fix what's broken before we build on top of it.",
              },
              {
                title: "Content restructuring",
                desc: "We identify which pages should be ranking for which queries, rewrite or restructure them around specific buyer intent, and make sure each page has a clear job. This is what moved Alotek from page 5 to #1 in month one.",
              },
              {
                title: "Google Business Profile management",
                desc: "For local pack rankings, your GBP is critical. We optimise your listing, keep it updated with posts and photos, and manage the review response process.",
              },
              {
                title: "Rank tracking & Search Console monitoring",
                desc: "We watch what's moving, what Google is crawling, and what queries are generating impressions vs. clicks. When something changes — algorithm update, competitor movement, ranking drop — we're on it.",
              },
              {
                title: "Monthly reporting",
                desc: "Plain-English report covering ranking changes (with explanations), Search Console impressions and clicks, what was done that month and why, and what's next. You'll never have to chase us.",
              },
              {
                title: "Authority building",
                desc: "Citations, local directory listings, and — on higher-tier retainers — digital PR and backlink outreach. We do this properly: no link farms, no purchased links.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-bold mb-1.5">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <p className="text-slate-400 text-sm leading-relaxed">
              We also build and run our own local web properties — <a href="https://www.southportguide.co.uk" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">SouthportGuide.co.uk</a> and <a href="https://www.formbyguide.co.uk" className="text-green-400 hover:text-green-300" target="_blank" rel="noopener noreferrer">FormbyGuide.co.uk</a>. Building organic traffic from scratch for our own sites is how we stay sharp on what actually works. You can go look at how they rank right now.
            </p>
          </div>
        </div>
      </section>

      {/* ── IS SEO RIGHT FOR YOU ─────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4">
            <AlertCircle className="w-4 h-4" />
            <span>Read this before you enquire</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Is SEO right for your business?
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            We turn down enquiries when SEO isn't the right fit. It's worth being honest about when it makes sense and when it doesn't.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-950/30 border border-green-900/40 rounded-2xl p-6">
              <h3 className="text-green-400 font-bold text-lg mb-4">SEO makes sense when:</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Your customers search Google before buying (most B2B and considered purchases)</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> You have a long sales cycle where appearing in search at the right moment matters</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Your average client value is high enough that one extra enquiry per month covers the retainer</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> You're prepared to wait 3–6 months for meaningful results and can sustain the investment</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> You're a local service business (solicitor, restaurant, trade, hospitality) competing for "near me" searches</li>
              </ul>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6">
              <h3 className="text-red-400 font-bold text-lg mb-4">SEO probably isn't right when:</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> You need results within the next 30 days (that's a paid ads conversation)</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> You're a brand new business with very limited cash flow</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Your margins are too tight for the retainer to pay for itself within a year</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Your customers don't find you through search — they come through referrals or trade relationships exclusively</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Your website is too broken to be worth optimising (in which case, fix the site first)</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-400 text-sm">
            If you're not sure which side you fall on, book a call. We'll give you a straight answer — and if we think SEO isn't the right move right now, we'll tell you that too.
          </p>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Pricing</h2>
          <p className="text-slate-400 mb-3 max-w-2xl">
            Month-to-month after an initial commitment period. No 12-month lock-ins. Cancel when you want.
          </p>
          <p className="text-slate-500 text-sm mb-12 max-w-2xl">
            A rough ROI check: at £500/month you're spending £6,000/year. If one extra client per quarter covers that — and for most service businesses it does — the question is whether Google search is a realistic source of enquiries for your sector. If you're not sure, we can tell you before you sign up.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
              <div className="text-sm font-bold text-green-400 uppercase tracking-wide mb-2">Local</div>
              <div className="text-5xl font-black text-white mb-1">£500</div>
              <div className="text-slate-400 text-sm mb-6">/month · 3-month minimum</div>
              <p className="text-slate-400 text-sm mb-8">For single-location Southport businesses competing for local "near me" searches.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Local pack focus — 1 town/area",
                  "Google Business Profile optimisation",
                  "5 target keywords tracked",
                  "Monthly local citations",
                  "Review management",
                  "Monthly plain-English report",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?package=seo-local" className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
                Get a Quote
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-slate-900 border-2 border-green-600 rounded-3xl p-8 relative shadow-2xl shadow-green-600/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
              <div className="text-sm font-bold text-green-400 uppercase tracking-wide mb-2">Regional</div>
              <div className="text-5xl font-black text-white mb-1">£900</div>
              <div className="text-slate-300 text-sm mb-6">/month · 6-month minimum</div>
              <p className="text-slate-300 text-sm mb-8">For businesses serving multiple towns across Merseyside and Lancashire, or with national B2B ambitions.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "3–5 city/area coverage",
                  "15 keywords tracked",
                  "Technical SEO audit + fixes",
                  "Content strategy + on-page optimisation",
                  "Local citation and directory building",
                  "Competitor tracking",
                  "Bi-weekly check-in calls",
                  "Full monthly report",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?package=seo-regional" className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
                Get a Quote
              </Link>
            </div>

            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-2">Full Retainer</div>
              <div className="text-5xl font-black text-white mb-1">£1,500+</div>
              <div className="text-slate-400 text-sm mb-6">/month · custom terms</div>
              <p className="text-slate-400 text-sm mb-8">For businesses with national reach, large product catalogues, or multi-location operations.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Unlimited location coverage",
                  "30+ keywords tracked",
                  "Advanced technical SEO",
                  "Content production included",
                  "Digital PR and backlink outreach",
                  "Schema and featured snippet targeting",
                  "Weekly reporting",
                  "Dedicated strategy sessions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?package=seo-retainer" className="block w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center">
            <p className="text-slate-300 text-sm">
              Not sure which fits? <Link href="/contact" className="text-green-400 hover:text-green-300 font-semibold">Book a free call</Link> — we'll be honest about whether SEO makes sense for your business and at what level.
            </p>
          </div>
        </div>
      </section>

      {/* ── CROSSLINK: WEB DESIGN ────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold mb-1">SEO on a slow website is wasted effort</div>
              <p className="text-slate-400 text-sm">If your site loads in 5 seconds, Google is already penalising your rankings. We build fast Next.js sites designed specifically to support SEO campaigns.</p>
            </div>
            <Link href="/services/web-design" className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
              Web Design <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-10">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-700 rounded-2xl bg-slate-800/60 hover:border-slate-600 transition-all">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-white text-[15px]">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-45 flex-shrink-0 ml-4">
                    <Plus className="w-5 h-5 text-green-400" />
                  </span>
                </summary>
                <div className="px-5 pb-5 text-slate-300 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-green-600/15 via-slate-900 to-green-600/10 border border-green-600/25 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Want to know if SEO would work for your business?
          </h2>
          <p className="text-slate-300 mb-2 leading-relaxed">
            Book a call and we'll give you a straight answer — including if we think it isn't the right move right now.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Or run a free automated audit of your site first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-green-600/20"
            >
              Book a Call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all"
            >
              Free Audit
            </Link>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            Southport · Birkdale · Formby · Liverpool · Preston · across the North West
          </p>
        </div>
      </section>

    </main>
  );
}

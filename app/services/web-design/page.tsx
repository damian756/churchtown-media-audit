import type { Metadata } from 'next';
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Plus, MapPin, Phone, TrendingUp, Zap, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: 'Web Design Southport | Churchtown Media',
  description: 'Web design for Southport businesses. Fast Next.js sites that rank on Google. Honest pricing from £2,500. Based in Southport — you can actually come and meet us.',
  keywords: ['web design southport', 'website design southport', 'web design agency southport', 'next.js development southport', 'web design north west', 'web design liverpool', 'southport web designer'],
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/services/web-design',
  },
  openGraph: {
    title: 'Web Design Southport | Churchtown Media',
    description: 'Web design for Southport businesses. Fast Next.js sites that rank on Google. Honest pricing from £2,500. Based in Southport.',
    url: 'https://www.churchtownmedia.co.uk/services/web-design',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{ url: 'https://www.churchtownmedia.co.uk/images/web-design-hero.jpg', width: 1200, height: 630, alt: 'Churchtown Media — web design Southport' }],
  },
  twitter: { card: 'summary_large_image', title: 'Web Design Southport | Churchtown Media', description: 'Fast, rankable websites for Southport businesses. From £2,500. Based in Southport.' },
};

const faqs = [
  {
    question: "I've been let down by a web designer before — how is this different?",
    answer: "Directly: we're a small local operation and our reputation depends on every project we take on. We don't take on work we can't do properly. Before we quote, we'll tell you honestly whether your existing site is fixable or whether it needs a rebuild — and why. If we're not the right fit, we'll say so. If you want to see how we work, read the Alotek Shelters case study on the blog — that's a real client, real data, nothing dressed up."
  },
  {
    question: "How much does a website actually cost?",
    answer: "Small business sites (5 pages, contact form, basic SEO) start from £2,500. Sites with a blog, CMS so you can edit content yourself, and more advanced SEO start from £5,000. E-commerce or custom functionality starts from £10,000. All prices include first-year hosting and 30 days of post-launch support. We give fixed quotes — no surprises, no ongoing fees you didn't agree to."
  },
  {
    question: "Will I be able to update the site myself?",
    answer: "Yes. We integrate a simple content management system that lets you update text, upload images, and add blog posts without touching code. It's easier to use than your email. We provide a walkthrough at handover and you'll have written guidance to refer back to."
  },
  {
    question: "Why Next.js and not WordPress?",
    answer: "WordPress sites are slow by default — the average WordPress site loads in 4–5 seconds. A slow site loses visitors and ranks lower on Google. Our Next.js sites load in under a second. They're also secure by design: there's no admin panel for hackers to find, no plugins to keep updated, no monthly maintenance bill to keep things running. Most of our clients save more on hosting and maintenance in year two than the difference in initial build cost."
  },
  {
    question: "Can I come and meet you in person?",
    answer: "Yes — we're based in Churchtown, Southport. If you'd rather have a proper conversation in person than a Zoom call, that's fine with us. Most local clients prefer it."
  },
  {
    question: "How long does it take to build a site?",
    answer: "Small business sites typically launch in 3–4 weeks. Larger projects with custom functionality take 6–8 weeks. We don't launch until the site hits our performance benchmarks. Timeline depends partly on how quickly we get content and feedback from you — the more responsive, the faster it goes."
  },
  {
    question: "Do you work with businesses outside Southport?",
    answer: "Yes. We work with businesses across Merseyside, Lancashire and the wider North West. Most of the process works just as well over email and video call. But if you're in Southport, Formby, Birkdale, Churchtown or anywhere on the Sefton Coast, we're your local option."
  },
  {
    question: "What are the ongoing costs after launch?",
    answer: "Hosting on Vercel is free for most small sites or around £20/month for higher-traffic sites. That's it for the basics. We offer optional monthly maintenance packages (£200–£500/month) covering updates, monitoring and priority support — but these aren't mandatory. Many clients manage updates themselves via the CMS."
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Web Design Southport',
  'serviceType': 'Web Design & Development',
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
  'description': 'Web design for Southport businesses. Fast Next.js sites built to rank on Google and convert visitors into enquiries.',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Web Design Packages',
    'itemListElement': [
      { '@type': 'Offer', 'name': 'Foundation', 'price': '2500', 'priceCurrency': 'GBP', 'availability': 'https://schema.org/InStock', 'itemOffered': { '@type': 'Service', 'name': 'Foundation Web Design', 'description': '5-page Next.js website for small businesses' } },
      { '@type': 'Offer', 'name': 'Growth', 'price': '5000', 'priceCurrency': 'GBP', 'availability': 'https://schema.org/InStock', 'itemOffered': { '@type': 'Service', 'name': 'Growth Web Design', 'description': 'Custom Next.js website with CMS and advanced SEO' } },
      { '@type': 'Offer', 'name': 'Premium', 'price': '10000', 'priceCurrency': 'GBP', 'availability': 'https://schema.org/InStock', 'itemOffered': { '@type': 'Service', 'name': 'Premium Web Design', 'description': 'Enterprise Next.js with custom integrations' } },
    ]
  },
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer }
  }))
};

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />

        <div className="max-w-5xl mx-auto relative z-10">

          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4" />
            <span>Based in Churchtown, Southport</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Web Design
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Southport
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed max-w-3xl">
            We build fast, well-structured websites that rank on Google and turn visitors into enquiries.
            No templates. No WordPress. Honest pricing.
          </p>

          <p className="text-slate-400 mb-10 max-w-2xl">
            We're a small Southport team. We take on projects we can do properly and we're straightforward about what your site needs — even if that's not what you were expecting to hear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
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

      {/* ── ALOTEK CASE STUDY ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">

          <div className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Case Study</div>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Page 5 to #1 in the AI Overview — in 6 weeks
          </h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            Alotek Shelters are a Lancashire manufacturer of bus shelters, covered walkways and outdoor canopies. They came to us after spending significant money with a previous agency and having almost nothing to show for it.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Starting position", value: "Page 5", sub: "averaging position 50 on Google", color: "text-red-400" },
              { label: "After 6 weeks", value: "#1", sub: "AI Overview + organic for core terms", color: "text-green-400" },
              { label: "Google impressions", value: "800+/day", sub: "up from ~200/day at launch", color: "text-blue-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-2xl p-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">{stat.label}</div>
                <div className={`text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h3 className="text-lg font-bold text-white mb-4">What changed</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-3">Before</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> WordPress site averaging position 50 — effectively invisible</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> ~200 Google impressions per day across all keywords</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Poor page structure — no page was clearly answering any specific buyer query</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✗</span> Slow load times penalising rankings</li>
                </ul>
              </div>
              <div>
                <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-3">After (6 weeks)</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> #1 in Google's AI Overview for "bus shelter manufacturers" nationally</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> 800+ daily impressions — 4× growth in 3 months</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> Page 1 rankings across bus shelters, covered walkways, buggy shelters, entrance canopies</li>
                  <li className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✓</span> 67 keywords now tracked nationally in a niche B2B sector</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-2">
            We rebuilt the site on Next.js, restructured the content around specific buyer search terms, and ran month-one SEO. The AI Overviews followed from the content quality — Google's AI pulls from pages that give clear, authoritative answers.
          </p>

          <Link href="/blog/alotek-shelters-month-1-seo-results" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold group">
            Read the full month-1 data breakdown <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── WHAT WE BUILD ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">What we build</h2>
          <p className="text-slate-400 mb-10 max-w-2xl">
            You can see our work directly. We also run our own network of local guide sites on the Sefton Coast — built on the same stack, same approach.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              { name: "SouthportGuide.co.uk", desc: "Local directory and visitor guide — restaurants, hotels, golf, attractions. 150+ listings.", href: "https://www.southportguide.co.uk", tag: "Directory & guides" },
              { name: "FormbyGuide.co.uk", desc: "Nature-first visitor guide covering Formby Beach, red squirrels, pinewoods and local businesses.", href: "https://www.formbyguide.co.uk", tag: "Directory & guides" },
              { name: "SeftonCoast.network", desc: "Umbrella brand and landing page for the Sefton Coast network of sites.", href: "https://www.seftoncoast.network", tag: "Brand site" },
            ].map((site, i) => (
              <a key={i} href={site.href} target="_blank" rel="noopener noreferrer" className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-all block">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">{site.tag}</div>
                <div className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors">{site.name}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{site.desc}</p>
                <div className="mt-4 text-blue-400 text-xs font-semibold flex items-center gap-1">
                  View live site <ArrowRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Loads fast", desc: "Under 1 second on mobile. Fast sites rank higher and lose fewer visitors.", stat: "Sub-1s load time" },
              { icon: TrendingUp, title: "Built to rank", desc: "Semantic structure, schema markup and clean URLs built in from the start — not bolted on later.", stat: "SEO-first architecture" },
              { icon: Shield, title: "No WordPress headaches", desc: "No plugins to break, no admin panel to hack, no monthly maintenance bill to keep things running.", stat: "Zero plugin dependencies" },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="bg-blue-600/20 rounded-xl p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{feature.desc}</p>
                  <div className="text-blue-400 text-xs font-bold">{feature.stat}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WORDPRESS VS NEXT.JS ─────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900/60">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Why not just use WordPress?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            WordPress powers a lot of the web. It also accounts for the vast majority of hacked websites and slow-loading business sites. Here's the practical difference.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-red-950/30 border border-red-900/40 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-red-400 mb-4">WordPress — what it actually costs</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> 4–5s average load time (53% of visitors leave before 3s)</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> 20+ plugins = slow, vulnerable, and something breaks every update</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Hosting + security + maintenance: £150–300/month ongoing</li>
                <li className="flex items-start gap-2"><span className="text-red-400">✗</span> 94% of hacked CMS sites are WordPress</li>
              </ul>
            </div>
            <div className="bg-green-950/30 border border-green-900/40 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-green-400 mb-4">Next.js — what you actually get</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Under 1s load time — better rankings, fewer lost visitors</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Zero plugins — nothing to break, nothing to update</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Hosting from £0–£20/month on Vercel</li>
                <li className="flex items-start gap-2"><span className="text-green-400">✓</span> No admin panel = nothing to hack</li>
              </ul>
            </div>
          </div>

          <Link href="/blog/nextjs-vs-wordpress-2026" className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center gap-2 group">
            Full comparison with real cost data <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Pricing</h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Fixed quotes. No ongoing fees you didn't agree to. All packages include first-year hosting and 30 days of post-launch support.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-2">Foundation</div>
              <div className="text-5xl font-black text-white mb-2">£2,500</div>
              <p className="text-slate-400 text-sm mb-8">For new businesses or simple service sites. Everything you need to get online properly.</p>
              <ul className="space-y-3 mb-8">
                {["5-page Next.js site", "Mobile-responsive design", "Contact form", "Basic SEO setup", "Google Analytics", "30-day support", "First-year hosting"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?package=foundation" className="block w-full bg-slate-800 hover:bg-slate-700 text-white text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
                Get a Quote
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 border-2 border-blue-600 rounded-3xl p-8 relative shadow-2xl shadow-blue-600/10">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                Most Popular
              </div>
              <div className="text-sm font-bold text-blue-400 uppercase tracking-wide mb-2">Growth</div>
              <div className="text-5xl font-black text-white mb-2">£5,000</div>
              <p className="text-slate-300 text-sm mb-8">For established businesses that want to rank and convert. CMS so you can update content yourself.</p>
              <ul className="space-y-3 mb-8">
                {["Up to 15 pages", "Premium design", "Blog + CMS (edit yourself)", "Advanced SEO", "Schema markup", "90-day support", "Performance optimisation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?package=growth" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
                Get a Quote
              </Link>
            </div>

            <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
              <div className="text-sm font-bold text-purple-400 uppercase tracking-wide mb-2">Premium</div>
              <div className="text-5xl font-black text-white mb-2">£10k+</div>
              <p className="text-slate-400 text-sm mb-8">Custom builds, e-commerce, CRM integrations, and anything that doesn't fit a standard template.</p>
              <ul className="space-y-3 mb-8">
                {["Unlimited pages", "Custom functionality", "CRM / API integrations", "E-commerce", "Dedicated project manager", "Priority support", "Ongoing optimisation"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact?package=premium" className="block w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-center px-6 py-3.5 rounded-xl font-bold text-sm transition-all">
                Get a Quote
              </Link>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 text-center">
            <p className="text-slate-300 text-sm">
              Not sure which fits? <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold">Book a free call</Link> — we'll tell you honestly what your site needs and what it'll cost. Payment plans available on all packages.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold mb-4">
            <Clock className="w-4 h-4" />
            <span>Typically 3–5 weeks from start to launch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-10">How a project works</h2>

          <div className="space-y-4">
            {[
              { n: "01", title: "Discovery", time: "Week 1", desc: "We look at your existing site, your competitors and the specific search terms your actual buyers use. We tell you what needs fixing and why — before any money changes hands." },
              { n: "02", title: "Design & Structure", time: "Week 2", desc: "We plan the page structure for SEO first, then design around it. Every page has a clear job. We get your approval before we build anything." },
              { n: "03", title: "Build & Content", time: "Week 3–4", desc: "Next.js development, schema markup, image optimisation, and content either written or migrated from your existing site. We handle all of it." },
              { n: "04", title: "Launch", time: "Week 5", desc: "We run performance checks before going live. 90+ Lighthouse score is our standard — we don't launch below it. You get a walkthrough and handover documentation." },
            ].map((step) => (
              <div key={step.n} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl px-4 py-3 flex-shrink-0 text-center min-w-[64px]">
                  <div className="text-2xl font-black text-white">{step.n}</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white font-bold text-lg">{step.title}</span>
                    <span className="text-blue-400 text-xs font-semibold bg-blue-600/10 border border-blue-600/20 rounded-full px-2.5 py-0.5">{step.time}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL ────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Based in Southport.<br />
                <span className="text-slate-400 font-normal">You can actually meet us.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We're based in Churchtown, Southport — not a distant agency with a local landing page. We know Lord Street, we know the seasonal pattern of the town, we know what the Marine Lake Events Centre will do to search competition over the next five years.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                If you'd rather have a conversation in person than a Zoom call, that's completely fine. Most of our local clients prefer it.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Cambridge Avenue, Churchtown, Southport PR9 9SA</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a href="tel:01704635785" className="hover:text-blue-400 transition-colors">01704 635785</a>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold mb-2">Areas we cover</h3>
              {[
                "Southport — town centre, Lord Street, Birkdale, Ainsdale, Churchtown",
                "Formby, Freshfield, Hightown",
                "Crosby and the wider Sefton Coast",
                "Liverpool and Merseyside",
                "Preston, Blackpool and Lancashire",
                "Remote projects across the UK",
              ].map((area, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
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
                    <Plus className="w-5 h-5 text-blue-400" />
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
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600/15 via-slate-900 to-blue-600/10 border border-blue-600/25 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 mb-2 leading-relaxed">
            Get in touch and we'll tell you honestly what your site needs. No sales pitch — just a straight answer about what's wrong and what it would take to fix it.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Or get a free automated audit of your current site first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all"
            >
              Free Audit
            </Link>
          </div>
          <p className="text-slate-500 text-xs mt-6">
            Serving Southport, Formby, Liverpool, Preston and across the North West
          </p>
        </div>
      </section>

    </main>
  );
}

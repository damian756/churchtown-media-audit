import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, BarChart3, Shield, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO for Solicitors, Accountants & Financial Advisers | Southport & Blackpool",
  description:
    "Churchtown Media builds websites and SEO strategies for professional services firms in Southport and Blackpool. Solicitors, accountants, IFAs. No WordPress. No generalist agency work.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/sectors/professional-services",
  },
  openGraph: {
    title: "Professional Services Web Design & SEO | Southport & Blackpool | Churchtown Media",
    description:
      "Fast, technically excellent websites for solicitors, accountants and financial advisers in Southport and Blackpool. Built to rank for high-value service searches.",
    url: "https://www.churchtownmedia.co.uk/sectors/professional-services",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media: Professional Services Web Design",
      },
    ],
  },
};

const problems = [
  {
    title: "Websites last updated in 2016",
    desc: "A Southport solicitor's firm with a WordPress site from 2016 is invisible in mobile search, fails Core Web Vitals, and has no content targeting the queries potential clients actually use. The technical debt is significant and the opportunity cost is real.",
  },
  {
    title: "No local pack presence",
    desc: "When someone searches 'solicitor Southport' or 'accountant Blackpool', the map pack shows three results. Firms outside those three are invisible to the majority of searchers. Most professional services firms have never actively managed their local search presence.",
  },
  {
    title: "Generic content that ranks for nothing",
    desc: "Boilerplate practice area pages with no keyword targeting, no schema markup, and no local signals. The firm that built a page titled 'Conveyancing Services in Southport' with 800 words of specific, useful content beats the firm with 'Our Services' containing four bullet points.",
  },
  {
    title: "High-value queries left to national aggregators",
    desc: "Searches like 'divorce solicitor Southport' or 'IFA Blackpool' are worth hundreds or thousands of pounds per converted lead. National directories like Unbiased and Bark.com dominate these searches because local firms don't have the content depth to compete. That is fixable.",
  },
];

const whatWeDeliver = [
  "Fast Next.js websites built to rank: not WordPress, not Wix, not a solicitor platform template",
  "Practice area pages with proper keyword targeting: the specific queries your potential clients use",
  "Local SEO: Google Business Profile optimisation, citation building, map pack positioning",
  "Schema markup for professional services: increases eligibility for rich results and AI search citations",
  "Content strategy: 12-month editorial roadmap targeting high-value service queries in both towns",
  "Technical SEO: Core Web Vitals, mobile performance, structured data, canonical and indexing setup",
  "Transparent monthly reporting: positions, traffic, enquiry conversions tracked and reviewed",
];

const whyItMatters = [
  {
    icon: BarChart3,
    title: "High-value searches, low competition",
    desc: "Professional services searches have high commercial intent and relatively weak local competition from a technical SEO standpoint. Most local firms have never done proper on-page optimisation. The bar to rank above them is lower than you might expect.",
  },
  {
    icon: Shield,
    title: "Long client relationships, high lifetime value",
    desc: "A conveyancing client who returns for probate, then refers their family, is worth thousands. The investment in a properly built website and SEO strategy pays back across a much longer horizon than a one-off transactional sector.",
  },
  {
    icon: Search,
    title: "AI search changes the game for professional services",
    desc: "Google AI Overviews increasingly appear for legal and financial queries. Firms whose content is structured correctly for AI citation will appear in those overviews. Firms whose content isn't structured won't. This is a new advantage available now for early movers.",
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design & SEO for Professional Services',
  description: 'Churchtown Media builds websites and SEO strategies for solicitors, accountants and financial advisers in Southport and Blackpool.',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Churchtown Media',
    url: 'https://www.churchtownmedia.co.uk',
    address: { '@type': 'PostalAddress', addressLocality: 'Southport', addressRegion: 'Merseyside', addressCountry: 'GB' },
  },
  areaServed: [
    { '@type': 'City', name: 'Southport' },
    { '@type': 'City', name: 'Blackpool' },
  ],
  serviceType: 'Web Design and SEO',
};

export default function ProfessionalServicesSectorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wide">
              Solicitors · Accountants · Financial Advisers
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Web design and SEO<br />
            <span className="text-purple-400">for professional services.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
            Solicitors, accountants, financial advisers. Two markets: Southport and Blackpool. The most under-digitised high-value sector in both towns. Firms turning over millions with websites that haven't been updated since 2016 and no local search presence to speak of.
          </p>
          <p className="text-slate-500 max-w-2xl leading-relaxed mb-10">
            The technical bar to rank above most local professional services firms is genuinely low. A fast, well-structured site with targeted content and proper local SEO is often all it takes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
            >
              Talk to us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold border border-slate-700 px-8 py-3.5 rounded-xl transition-all"
            >
              Free SEO audit
            </Link>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-12 px-4 sm:px-6 bg-purple-950/20 border-t border-purple-900/20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-8">
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Case study</p>
            <h3 className="text-xl font-bold text-white mb-2">Alotek Shelters: 10 #1 rankings in 30 days.</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              Previous agency: zero results in 12 months. Month one of our SEO retainer: 10 #1 rankings across every commercial keyword. "Bus shelter suppliers" moved from position 16 to #1 in 30 days. Alotek is manufacturing, not professional services, but the SEO approach is identical: technical foundation, targeted content, local signals, monthly tracking.
            </p>
            <Link href="/blog/alotek-shelters-month-1-seo-results" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
              Read the case study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            The same four issues across most professional services firms in both towns.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-slate-800/60 border border-slate-700 rounded-2xl p-7">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-white">{p.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">Why it matters</p>
          <h2 className="text-3xl font-bold text-white mb-12">The commercial logic.</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {whyItMatters.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-purple-950/30 border border-purple-900/50 rounded-2xl p-7">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">What we deliver</p>
          <h2 className="text-3xl font-bold text-white mb-10">The specifics.</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whatWeDeliver.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-purple-950/40 border-t border-purple-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            What are your current rankings?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            The free SEO audit takes your domain and shows you exactly where you rank, what you are missing, and what it would take to fix it. No commitment, no sales call required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
            >
              Get the free audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Talk to us first
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

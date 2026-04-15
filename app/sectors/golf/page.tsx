import Link from "next/link";
import { ArrowRight, CheckCircle2, Trophy, Globe, Calendar, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO for Golf Clubs | Southport & Blackpool | Churchtown Media",
  description:
    "Churchtown Media builds websites and SEO for golf clubs on the Lancashire coast. We built SeftonLinks.com in 18 languages. Royal Birkdale, Hillside, Southport & Ainsdale. The Open 2026.",
  alternates: {
    canonical: "https://www.churchtownmedia.co.uk/sectors/golf",
  },
  openGraph: {
    title: "Golf Club Web Design & SEO | Southport & Blackpool | Churchtown Media",
    description:
      "We built SeftonLinks.com: championship golf guides in 18 languages. We know this market. Now we build for golf clubs.",
    url: "https://www.churchtownmedia.co.uk/sectors/golf",
    type: "website",
    siteName: "Churchtown Media",
    locale: "en_GB",
    images: [
      {
        url: "https://www.churchtownmedia.co.uk/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Churchtown Media: Golf Club Web Design & SEO",
      },
    ],
  },
};

const problems = [
  {
    title: "Club websites built in 2014",
    desc: "Golf clubs have exceptional product and often embarrassing digital presence. Slow, mobile-hostile sites with no SEO structure, no booking integration, and content that hasn't been updated since a previous captain's tenure.",
  },
  {
    title: "Visitor rounds missed to competitors",
    desc: "Golfers travelling to play Southport and Blackpool courses search by reputation, proximity and course condition. Clubs that don't rank for those searches are sending visitor rounds to the club down the road.",
  },
  {
    title: "International visitors not reached",
    desc: "The Lancashire coast has some of the most significant links golf in the world. Japanese, German, American and Scandinavian golfers travel specifically to play Birkdale, Hillside and Royal Lytham. Clubs with English-only content are invisible to them.",
  },
  {
    title: "No Open 2026 positioning",
    desc: "Royal Birkdale hosts The Open on 12–19 July 2026. Every golf club within 45 minutes is a potential accommodation and round destination for visiting golfers. Clubs that rank for relevant searches in the six months before the event will take that traffic.",
  },
];

const whatWeDeliver = [
  "Fast, modern club websites built in Next.js: not WordPress, not a club management platform template",
  "International SEO: multilingual implementation for the languages that matter (Japanese, German, Scandinavian, US English)",
  "Visitor round targeting: keywords, content and landing pages that capture golfers searching for courses in the area",
  "The Open 2026 content strategy: positioned to rank before the search spike arrives",
  "Course and scorecard pages built for SEO: yardage data, slope ratings, course difficulty content",
  "Membership enquiry optimisation: structured to convert visiting golfers into membership conversations",
  "Local citation building and Google Business Profile management",
];

export default function GolfSectorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">

      {/* HERO */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 rounded-full px-4 py-1.5 mb-8">
            <Trophy className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wide">
              The Open 2026 · Royal Birkdale · 12–19 July
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
            Web design and SEO<br />
            <span className="text-teal-400">for golf clubs.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-6">
            We built SeftonLinks.com: championship golf guides for Royal Birkdale, Hillside and Southport &amp; Ainsdale in 18 languages. We know how golfers search, what they read before booking a round, and what the Lancashire coast offers that no other region can match.
          </p>
          <p className="text-slate-500 max-w-2xl leading-relaxed mb-10">
            Now we build for golf clubs directly. The product is the same: fast Next.js sites, technical SEO, and content structured for international visitors and local members alike.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/30"
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

      {/* PROOF — SeftonLinks */}
      <section className="py-16 px-4 sm:px-6 bg-teal-950/30 border-t border-teal-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: "18", label: "Languages", sub: "Japanese, German, Scandinavian, US English and more" },
              { stat: "6", label: "Courses covered", sub: "Royal Birkdale, Hillside, S&A, Formby, Birkdale, West Lancs" },
              { stat: "#1", label: "Open 2026 content", sub: "Ranking ahead of major golf publishers on key terms" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-teal-400 mb-1">{s.stat}</div>
                <div className="font-bold text-white mb-1">{s.label}</div>
                <div className="text-sm text-slate-500">{s.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-8">
            SeftonLinks.com — built and operated by Churchtown Media.{" "}
            <a href="https://www.seftonlinks.com" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 font-semibold">
              Visit the site
            </a>
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 px-4 sm:px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">The problem</p>
          <h2 className="text-3xl font-bold text-white mb-12 max-w-2xl">
            The Lancashire coast has world-class golf and often terrible club websites.
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

      {/* THE OPEN 2026 CALLOUT */}
      <section className="py-12 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-teal-950/50 border border-teal-800/40 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 bg-teal-600/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">The Open 2026</p>
              <h3 className="text-xl font-bold text-white mb-2">Royal Birkdale. July 12–19 2026.</h3>
              <p className="text-slate-400 leading-relaxed">
                Golf's most international major comes to Southport in July 2026. Golfers travelling from Japan, Germany, the US and Scandinavia will be searching for courses to play before and after the event. Clubs that rank for those searches before the event will take that traffic. The window to build those rankings is now, not in June.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL SEO CALLOUT */}
      <section className="py-12 px-4 sm:px-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-950/50 border border-blue-800/40 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">International reach</p>
              <h3 className="text-xl font-bold text-white mb-2">The golfers who travel specifically for links courses.</h3>
              <p className="text-slate-400 leading-relaxed">
                Japanese golfers travel to play British links courses as a pilgrimage. German and Scandinavian golfers plan dedicated golf trips to the Lancashire coast. American Ryder Cup and Open fans build trips around the courses they've watched on television. SeftonLinks is in 18 languages because we know this audience exists. Golf clubs that are only visible in English are missing it.
              </p>
            </div>
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
      <section className="py-16 px-4 sm:px-6 bg-teal-950/40 border-t border-teal-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Is your club ready for The Open 2026?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            The search traffic spike starts six months before the event. We can audit your current rankings and tell you exactly what needs to happen before the window closes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-teal-900/30"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Free SEO audit first
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

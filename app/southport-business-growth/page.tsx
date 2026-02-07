import Link from "next/link";
import { Users, Coins, ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Southport Business Growth Hub | 2026 Playbook",
  description: "The ultimate guide to growing your business in Southport. Local grants, networking events, and digital strategies for the MLEC economy.",
};

export default function GrowthHub() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold text-blue-400 border border-blue-500/30">
            The 2026 Playbook
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Growing Your Business in Southport
          </h1>
          <p className="mt-6 text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From Churchtown Village to the Marine Lake. We've curated the essential grants, networks, and strategies you need to dominate the local market.
          </p>
        </div>
      </section>

      {/* Intro Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-2xl text-slate-700 font-medium">
            The days of "word of mouth" are over. Today, word of mouth happens on Google.
          </p>
          <p>
            For decades, business in Southport relied on footfall. Whether you were a cafe on Lord Street or a solicitor in Birkdale, your reputation was built by neighbors talking to neighbors. In 2026, that conversation hasn't stopped—it has just moved online.
          </p>
          <p>
            With the <strong>Marine Lake Events Centre (MLEC)</strong> bringing 500,000 new visitors, the businesses that win won't just be the ones with the best service—they'll be the ones that are easiest to find.
          </p>
        </div>
      </section>

      {/* Networking Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Local Networking & Community</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900">Sandgrounders Business Club</h3>
              <p className="mt-2 text-sm font-semibold text-blue-600">Casual Connection</p>
              <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                <li className="flex gap-2"><Calendar className="h-4 w-4 shrink-0 text-slate-400"/> 2nd Thursday of Month (5pm)</li>
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-slate-400"/> Southport FC, Haig Ave</li>
                <li>Free to attend. No pressure. Hosted by Southport FC and Stand Up For Southport.</li>
              </ul>
              <a href="https://www.facebook.com/SandgroundersBusinessClub/" target="_blank" className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                View Website <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900">Southport BID</h3>
              <p className="mt-2 text-sm font-semibold text-blue-600">Retail & Hospitality Focus</p>
              <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                <li>Best for town centre businesses. Focuses on security, events (Christmas Lights), and advocacy.</li>
                <li>Access to "Your Southport Stars" awards to boost profile.</li>
              </ul>
              <a href="https://southportbid.com/" target="_blank" className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                View Initiatives <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900">Real5 Networking</h3>
              <p className="mt-2 text-sm font-semibold text-blue-600">Structured Referrals</p>
              <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-slate-400"/> The Grand / Lord St Hotel</li>
                <li>"Single Seat" model (lock out your competition).</li>
                <li>Focus on high-level profit sharing and genuine leads.</li>
              </ul>
              <a href="https://real5networking.com/" target="_blank" className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Check Availability <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-green-100 rounded-lg text-green-700">
              <Coins className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Fueling Growth: Grants & Funding</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Grant 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">InvestSefton</h3>
              <p className="mt-2 text-sm text-slate-500">The Growth Hub</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                The "Gatekeepers" to government funds. They provide full business diagnostics and access to LCR High Growth funds.
              </p>
              <p className="mt-4 text-sm font-bold text-slate-900">Priority: MLEC Support Services</p>
            </div>

            {/* Grant 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Police Cashback Fund</h3>
              <p className="mt-2 text-sm text-slate-500">Community Safety</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Grants up to <strong>£5,000</strong> derived from seized assets. Ideal for CICs and social enterprises in Southport/Birkdale focusing on youth or safety.
              </p>
            </div>

            {/* Grant 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">King’s Trust</h3>
              <p className="mt-2 text-sm text-slate-500">Young Entrepreneurs (18-30)</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Low-interest loans up to <strong>£25,000</strong> per partner. Includes a dedicated business mentor for 12 months (often worth more than the cash).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to dominate the Southport search results?</h2>
        <p className="mt-4 text-blue-100 mb-8">Stop being the town's best-kept secret. Get a free, no-nonsense audit today.</p>
        <Link href="/contact" className="rounded-full bg-white px-8 py-4 font-bold text-blue-600 hover:bg-blue-50 transition-colors shadow-xl">
          Get Your Free Audit
        </Link>
      </section>

    </main>
  );
}
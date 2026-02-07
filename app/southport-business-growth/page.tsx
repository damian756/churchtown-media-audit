import Link from "next/link";
import { Users, Coins, ExternalLink, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Southport Business Growth Hub | 2026 Playbook",
  description: "The ultimate guide to growing your business in Southport. Local grants, networking events, and digital strategies for the MLEC economy.",
};

export default function GrowthHub() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 px-6 py-24 text-center text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Southport-Growth-1024x559.png" 
                alt="Southport Lord Street" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-blue-600/20 px-4 py-1.5 text-sm font-semibold text-blue-400 border border-blue-500/30">
            The 2026 Playbook
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Growing Your Business in Southport
          </h1>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
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
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Local Networking & Community</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1: Sandgrounders */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                    src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/sandgrounders-business-club-scaled.png" 
                    alt="Sandgrounders Business Club"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Sandgrounders Business Club</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Casual Connection</p>
                <ul className="mt-6 space-y-3 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-2"><Calendar className="h-4 w-4 shrink-0 text-slate-400"/> 2nd Thursday of Month (5pm)</li>
                    <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-slate-400"/> Southport FC, Haig Ave</li>
                    <li className="text-slate-500">Free to attend. No pressure. Hosted by Southport FC and Stand Up For Southport.</li>
                </ul>
                <a href="https://www.facebook.com/SandgroundersBusinessClub/" target="_blank" className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                    Visit Website <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Card 2: Southport BID */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                    src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Southport-BID-scaled.png" 
                    alt="Southport BID"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Southport BID</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Retail & Hospitality Focus</p>
                <ul className="mt-6 space-y-3 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-600"/> Town Centre Security</li>
                    <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-green-600"/> Seasonal Events</li>
                    <li className="text-slate-500">Access to "Your Southport Stars" awards to boost profile. Essential for Lord St businesses.</li>
                </ul>
                <a href="https://southportbid.com/" target="_blank" className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                    View Initiatives <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Card 3: Real5 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                    src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/real5-networking-2-scaled.png" 
                    alt="Real5 Networking"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Real5 Networking</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Structured Referrals</p>
                <ul className="mt-6 space-y-3 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-slate-400"/> The Grand / Lord St Hotel</li>
                    <li className="text-slate-500">"Single Seat" model (lock out your competition). Focus on high-level profit sharing and genuine leads.</li>
                </ul>
                <a href="https://real5networking.com/" target="_blank" className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                    Check Availability <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grants Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-green-100 rounded-lg text-green-700">
              <Coins className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Fueling Growth: Grants & Funding</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Grant 1 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="mb-6 h-16 w-full flex items-center justify-start">
                 <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/InvestSefton.png" alt="Invest Sefton" className="h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">InvestSefton</h3>
              <p className="mt-1 text-sm text-slate-500">The Growth Hub</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                The "Gatekeepers" to government funds. They provide full business diagnostics and access to LCR High Growth funds.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Priority: MLEC Services
                </span>
              </div>
            </div>

            {/* Grant 2 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="mb-6 h-16 w-full flex items-center justify-start">
                 <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Merseyside-Police-Cashback-Fund.png" alt="Police Fund" className="h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Police Cashback Fund</h3>
              <p className="mt-1 text-sm text-slate-500">Community Safety</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                Grants up to <strong>£5,000</strong> derived from seized assets. Ideal for CICs and social enterprises in Southport/Birkdale focusing on youth or safety.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                  Max: £5,000
                </span>
              </div>
            </div>

            {/* Grant 3 */}
            <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
              <div className="mb-6 h-16 w-full flex items-center justify-start">
                 <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/kingstrust.png" alt="Kings Trust" className="h-14 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">King’s Trust</h3>
              <p className="mt-1 text-sm text-slate-500">Young Entrepreneurs (18-30)</p>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                Low-interest loans up to <strong>£25,000</strong> per partner. Includes a dedicated business mentor for 12 months (often worth more than the cash).
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  Ages 18-30
                </span>
              </div>
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
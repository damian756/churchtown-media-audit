import Link from "next/link";
import { Users, Coins, ExternalLink, Calendar, MapPin, CheckCircle2, ArrowRight, Zap, Search, Layout, HelpCircle } from "lucide-react";
import { posts } from "../lib/posts"; // Import blog posts for 'Latest Insights'

export const metadata = {
  title: "Southport Business Growth Hub | 2026 Playbook",
  description: "The ultimate guide to growing your business in Southport. Local grants, networking events, and digital strategies for the MLEC economy.",
};

export default function GrowthHub() {
  // Get latest 2 blog posts for the "Insights" section
  const recentPosts = posts.slice(0, 2);

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 px-6 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Southport-Growth-1024x559.png" 
                alt="Southport Lord Street Growth" 
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

      {/* 2. Intro & Digital First Reality */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Digital First" Reality for Southport</h2>
                <div className="prose prose-lg text-slate-600 space-y-6">
                    <p className="text-xl font-medium text-slate-900">
                        The days of "word of mouth" are over. Today, word of mouth happens on Google.
                    </p>
                    <p>
                        Southport is changing. With the Marine Lake Events Centre development and the £37.5m Town Deal now reshaping our economy, the opportunity for local businesses has never been greater. But as the town grows, so does the competition.
                    </p>
                    <p>
                        For decades, business in Southport relied on footfall. In 2026, that conversation hasn't stopped—it has just moved online.
                    </p>
                    <p>
                        The reality is that <strong>93% of online experiences begin with a search engine</strong>. When a family in Ainsdale needs a plumber, they check Google. When tourists visiting the new MLEC need dinner, they check Maps. If your business doesn’t appear in those micro-moments, you don’t exist.
                    </p>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img 
                    src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/img1-1.png" 
                    alt="Southport Local Search Map Pack" 
                    className="rounded-2xl shadow-2xl border border-slate-200"
                />
            </div>
        </div>

        {/* 3 Pillars of Digital Reality */}
        <div className="grid gap-8 md:grid-cols-3 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="p-3 bg-blue-100 w-fit rounded-lg text-blue-600 mb-6"><MapPin className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The "Near Me" Explosion</h3>
                <p className="text-slate-600">Local search has shifted. "Web design near me" or "Roofers in Southport" are now the primary way customers find you. You need to dominate the Map Pack.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="p-3 bg-yellow-100 w-fit rounded-lg text-yellow-600 mb-6"><Zap className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Speed is Currency</h3>
                <p className="text-slate-600">Southport has 5G. If your mobile site takes >3 seconds to load, 50% of visitors leave. We build engines that capture traffic, not just look pretty.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="p-3 bg-red-100 w-fit rounded-lg text-red-600 mb-6"><Search className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Invisible Competitor</h3>
                <p className="text-slate-600">Your biggest rival isn't the shop next door—it's the digital-first business that optimized last month. Don't let them steal your leads.</p>
            </div>
        </div>
      </section>

      {/* 3. Networking Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
              <Users className="h-8 w-8" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-slate-900">Local Networking & Community</h2>
                <p className="text-slate-500 mt-1">Growth doesn't happen in a silo. Connect with the best.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Sandgrounders */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/sandgrounders-business-club-scaled.png" alt="Sandgrounders" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Sandgrounders Business Club</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Casual Connection</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-3"><Calendar className="h-5 w-5 shrink-0 text-slate-400"/> <span>2nd Thursday (5pm)</span></li>
                    <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-slate-400"/> <span>Southport FC, Haig Ave</span></li>
                </ul>
                <a href="https://www.facebook.com/SandgroundersBusinessClub/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                    Visit Website <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Southport BID */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Southport-BID-scaled.png" alt="Southport BID" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Southport BID</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Retail & Hospitality</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-600"/> <span>Town Centre Security</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-600"/> <span>Seasonal Events</span></li>
                </ul>
                <a href="https://southportbid.com/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                    Explore Initiatives <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Real5 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/real5-networking-2-scaled.png" alt="Real5 Networking" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Real5 Networking</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Structured Referrals</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-slate-400"/> <span>The Grand / Lord St Hotel</span></li>
                    <li className="text-slate-500 text-xs">"Single Seat" model. Lock out your competition.</li>
                </ul>
                <a href="https://real5networking.com/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                    Check Seats <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fueling Growth (Middle Section) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 rounded-lg text-green-700"><Coins className="h-6 w-6" /></div>
                    <h2 className="text-3xl font-bold text-slate-900">Fueling Growth: Grants & Funding</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Scaling a business requires more than just a great website; it requires capital. With the MLEC now active, Southport businesses have access to specific regional funding streams designed to boost the visitor economy.
                </p>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <p className="font-bold text-green-800">Agency Tip:</p>
                    <p className="text-green-700 mt-1">Many of these grants can be used to fund <strong>40% to 100%</strong> of consultancy, training, or digital infrastructure projects.</p>
                </div>
            </div>
            <div className="lg:w-1/2">
                <img 
                    src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Fueling-Growth-Grants-Funding-1024x559.png" 
                    alt="Sefton Grants Dashboard" 
                    className="rounded-2xl shadow-xl border border-slate-200"
                />
            </div>
        </div>

        {/* 5. Grants Cards */}
        <div className="grid gap-8 md:grid-cols-3 mt-16">
            {/* Grant 1 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="h-56 bg-white flex items-center justify-center p-8 border-b border-slate-100">
                 <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/InvestSefton.png" alt="Invest Sefton" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">InvestSefton</h3>
                <p className="mt-1 text-sm text-slate-500">The Growth Hub</p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                  The "Gatekeepers" to government funds. Full business diagnostics and access to LCR High Growth funds.
                </p>
                <a href="mailto:investsefton@sefton.gov.uk" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                  Contact Hub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Grant 2 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="h-56 bg-white flex items-center justify-center p-8 border-b border-slate-100">
                 <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Merseyside-Police-Cashback-Fund.png" alt="Police Fund" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Police Cashback Fund</h3>
                <p className="mt-1 text-sm text-slate-500">Community Safety</p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                  Grants up to <strong>£5,000</strong> from seized assets. Ideal for local CICs focusing on youth or safety.
                </p>
                <a href="https://cfmerseyside.org.uk/grants/merseyside-police-community-cashback-fund" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                  Check Criteria <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Grant 3 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full">
              <div className="h-56 bg-white flex items-center justify-center p-8 border-b border-slate-100">
                 <img src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/kingstrust.png" alt="Kings Trust" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">King’s Trust</h3>
                <p className="mt-1 text-sm text-slate-500">Entrepreneurs (18-30)</p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                  Low-interest loans up to <strong>£25,000</strong>. Includes a dedicated business mentor for 12 months.
                </p>
                <a href="https://www.kingstrust.org.uk/help-for-young-people/programmes/enterprise/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors">
                  Start App <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
        </div>
      </section>

      {/* 6. Performance-First Strategy */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900">The Performance-First Strategy</h2>
                <p className="mt-4 text-lg text-slate-600">Most agencies focus on how a website looks. We focus on how it works.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        In 2026, a beautiful website that nobody visits is a liability. We build high-performance digital engines designed to capture the existing demand in Southport and convert it into revenue.
                    </p>
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm h-fit"><Zap className="h-6 w-6 text-blue-600"/></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Technical Velocity</h4>
                                <p className="text-sm text-slate-600 mt-1">We code for raw speed. Fast sites rank higher and sell more.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm h-fit"><MapPin className="h-6 w-6 text-blue-600"/></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Hyper-Local SEO</h4>
                                <p className="text-sm text-slate-600 mt-1">We optimize your digital footprint to signal that <em>you</em> are the authority in Southport.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 bg-white rounded-lg shadow-sm h-fit"><Layout className="h-6 w-6 text-blue-600"/></div>
                            <div>
                                <h4 className="font-bold text-slate-900">Design that Sells</h4>
                                <p className="text-sm text-slate-600 mt-1">Psychology-driven layouts that guide visitors exactly where you want them.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img 
                        src="https://churchtownmedia.co.uk/wp-content/uploads/2026/01/Results-1024x559.png" 
                        alt="Performance Analytics" 
                        className="rounded-2xl shadow-xl border border-slate-200"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* 7. Latest Insights */}
      <section className="bg-white py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Latest Insights</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {recentPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors">
                        <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                            <span className="text-blue-600 font-medium">{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                        <p className="mt-2 text-slate-600 line-clamp-2">{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2"><HelpCircle className="h-5 w-5 text-blue-600"/> What funding is available?</h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                        Access funding via InvestSefton (Growth Hub), Police Cashback Fund (Community), and King's Trust (Young Entrepreneurs). MLEC-specific digital grants are also periodically available.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2"><HelpCircle className="h-5 w-5 text-blue-600"/> How can I improve Local SEO?</h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                        Claim your Google Business Profile, ensure N.A.P. consistency (Name, Address, Phone), and get listed in reputable local directories like Sandgrounders.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to dominate the Southport search results?</h2>
        <p className="mt-4 text-slate-400 mb-8 max-w-2xl mx-auto">Stop being the town's best-kept secret. Get a free, no-nonsense audit of your digital presence today.</p>
        <Link href="/contact" className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-colors shadow-xl inline-block">
          Claim Your Free Audit
        </Link>
      </section>

    </main>
  );
}
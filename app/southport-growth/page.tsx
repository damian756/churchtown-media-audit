import Link from "next/link";
import Image from "next/image";
import { Users, Coins, ExternalLink, Calendar, MapPin, CheckCircle2, ArrowRight, Zap, Search, Layout, HelpCircle } from "lucide-react";
import { posts } from "../../lib/posts"; 

export const metadata = {
  title: 'Southport Business Growth Hub | Free Digital Audit',
  description: 'Exclusive for Southport businesses: Claim your free 15-point digital performance audit. Identify wasted ad spend and missed SEO opportunities.',
};

export default function GrowthHub() {
  const recentPosts = posts ? posts.slice(0, 2) : [];

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 px-6 py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Using mlec.png or southport-hero.png if you have it */}
            <Image 
                src="/images/mlec.png" // Switched to mlec.png as I saw it in your list
                alt="Southport Lord Street Growth" 
                fill
                className="object-cover"
                priority
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
            <div className="lg:w-1/2 relative">
                {/* Mapped to img1-1.png based on your file list */}
                <Image 
                    src="/images/img1-1.png" 
                    alt="Southport Local Search Map Pack" 
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl border border-slate-200 w-full h-auto"
                />
            </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid gap-8 md:grid-cols-3 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="p-3 bg-blue-100 w-fit rounded-lg text-blue-600 mb-6"><MapPin className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The "Near Me" Explosion</h3>
                <p className="text-slate-600">Local search has shifted. "Web design near me" or "Roofers in Southport" are now the primary way customers find you. You need to dominate the Map Pack.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="p-3 bg-yellow-100 w-fit rounded-lg text-yellow-600 mb-6"><Zap className="h-6 w-6"/></div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Speed is Currency</h3>
                <p className="text-slate-600">Southport has 5G. If your mobile site takes &gt;3 seconds to load, 50% of visitors leave. We build engines that capture traffic, not just look pretty.</p>
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
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-100 relative border-b border-slate-100">
                <Image 
                    src="/images/sandgrounders.png" 
                    alt="Sandgrounders" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Sandgrounders Business Club</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Casual Connection</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-3"><Calendar className="h-5 w-5 shrink-0 text-slate-400"/> <span>2nd Thursday (5pm)</span></li>
                    <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-slate-400"/> <span>Southport FC, Haig Ave</span></li>
                </ul>
                <a href="https://www.facebook.com/SandgroundersBusinessClub/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                    Visit Website <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Southport BID */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-100 relative border-b border-slate-100">
                {/* NOTE: I did not see 'southport-bid.png' in your screenshot list. 
                    If this image is broken, please ensure 'southport-bid.png' is inside the 'public/images' folder. */}
                <Image 
                    src="/images/southport-bid.png" 
                    alt="Southport BID" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Southport BID</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Retail & Hospitality</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-600"/> <span>Town Centre Security</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-green-600"/> <span>Seasonal Events</span></li>
                </ul>
                <a href="https://southportbid.com/" target="_blank" className="mt-8 w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                    Explore Initiatives <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Real5 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 overflow-hidden bg-slate-100 relative border-b border-slate-100">
                <Image 
                    src="/images/real5.png" 
                    alt="Real5 Networking" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Real5 Networking</h3>
                <p className="mt-2 text-sm font-semibold text-blue-600">Structured Referrals</p>
                <ul className="mt-6 space-y-4 flex-1 text-slate-600 text-sm">
                    <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-slate-400"/> <span>The Grand / Lord St Hotel</span></li>
                    <li className="text-slate-500 text-xs">"Single Seat" model. Lock out your competition.</li>
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
            <div className="lg:w-1/2 relative">
                <Image 
                    src="/images/grants-dashboard.png" 
                    alt="Sefton Grants Dashboard" 
                    width={800}
                    height={600}
                    className="rounded-2xl shadow-xl border border-slate-200 w-full h-auto"
                />
            </div>
        </div>

        {/* 5. Grants Cards */}
        <div className="grid gap-8 md:grid-cols-3 mt-16">
            {/* Grant 1 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 bg-slate-50 relative border-b border-slate-100 flex items-center justify-center p-6">
                 <div className="relative w-full h-full">
                    <Image 
                        src="/images/invest-sefton.png" 
                        alt="Invest Sefton" 
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">InvestSefton</h3>
                <p className="mt-1 text-sm text-slate-500 font-medium">The Growth Hub</p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                  The "Gatekeepers" to government funds. Full business diagnostics and access to LCR High Growth funds.
                </p>
                <div className="mt-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    Priority: MLEC Services
                    </span>
                </div>
                <a href="mailto:investsefton@sefton.gov.uk" className="mt-auto w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                  Contact Hub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Grant 2 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 bg-slate-50 relative border-b border-slate-100 flex items-center justify-center p-6">
                 <div className="relative w-full h-full">
                    <Image 
                        src="/images/police-fund.png" 
                        alt="Police Fund" 
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">Police Cashback Fund</h3>
                <p className="mt-1 text-sm text-slate-500 font-medium">Community Safety</p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                  Grants up to <strong>£5,000</strong> from seized assets. Ideal for local CICs focusing on youth or safety.
                </p>
                <div className="mt-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    Max Grant: £5,000
                    </span>
                </div>
                <a href="https://cfmerseyside.org.uk/grants/merseyside-police-community-cashback-fund" target="_blank" className="mt-auto w-full flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-700 transition-colors shadow-md">
                  Check Criteria <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Grant 3 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full group">
              <div className="h-56 bg-slate-50 relative border-b border-slate-100 flex items-center justify-center p-6">
                 <div className="relative w-full h-full">
                    <Image 
                        src="/images/kings-trust.png" 
                        alt="Kings Trust" 
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                 </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900">King’s Trust</h3>
                <p className="mt-1 text-sm text-slate-500 font-medium">Entrepreneurs (18-30)</p>
                <p className="mt-4 text-slate-600 text-sm leading-relaxed flex-1">
                  Low-interest loans up to <strong>£25,000</strong>. Includes a dedicated business mentor for 12 months.
                </p>
                <div className="mt-4 mb-4">
                    <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-800">
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
                <div className="lg:w-1/2 relative">
                    <Image 
                        src="/images/analytics.png" 
                        alt="Performance Analytics" 
                        width={800}
                        height={600}
                        className="rounded-2xl shadow-xl border border-slate-200 w-full h-auto"
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

      {/* 8. FAQ Section */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {/* 1 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1"/> 
                        What funding is available for businesses in Southport?
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Southport businesses can access several funding streams in 2026, including the InvestSefton Growth Hub for general business support, the Merseyside Police Cashback Fund for community projects, and The King’s Trust Enterprise Programme for young entrepreneurs aged 18-30. Additionally, specific digital transformation grants are often available to help local businesses prepare for the Marine Lake Events Centre visitor influx.
                    </p>
                </div>
                {/* 2 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1"/> 
                        How can I improve my local SEO in Southport?
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        To dominate local search in Southport, focus on three pillars: 1) Claim and optimize your Google Business Profile with accurate categories and local photos. 2) Ensure your website loads in under 3 seconds to satisfy mobile users. 3) Build local authority by getting listed in reputable Sefton directories and networking groups like the Sandgrounders Business Club or Southport BID.
                    </p>
                </div>
                {/* 3 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1"/> 
                        What are the best business networking groups in Southport?
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Southport offers diverse networking options. 'Sandgrounders Business Club' is excellent for casual, pressure-free connections. 'Real5 Networking (Southport & Formby)' is ideal for established B2B companies looking for a structured referral model. For retail and hospitality, 'Southport BID' offers crucial advocacy and town center support.
                    </p>
                </div>
                {/* 4 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1"/> 
                        How will the Marine Lake Events Centre benefit local businesses?
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        The new Marine Lake Events Centre (MLEC) is projected to bring over 500,000 additional visitors to Southport annually. This creates a massive opportunity for hospitality, retail, and service businesses to capture 'digital tourist' traffic. Businesses that optimize their online presence for 'near me' searches stand to gain the most from this £19 million economic boost.
                    </p>
                </div>
                {/* 5 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1"/> 
                        Why is website speed critical for Southport customers?
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        Southport now benefits from widespread 5G coverage, setting a new standard for mobile browsing. Data shows that if your mobile site takes longer than 3 seconds to load, over 50% of potential visitors will abandon it before seeing your content. Speed isn't just technical—it's customer service.
                    </p>
                </div>
                {/* 6 */}
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm h-full hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-slate-900 flex items-start gap-3 text-lg">
                        <HelpCircle className="h-6 w-6 text-blue-600 shrink-0 mt-1"/> 
                        How does the Southport Town Deal impact my business?
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                        The £37.5m Town Deal is funding major infrastructure projects like the Enterprise Arcade and public realm improvements. This investment is designed to increase footfall and make the town center more attractive for both locals and tourists, directly benefiting retail and hospitality sectors.
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
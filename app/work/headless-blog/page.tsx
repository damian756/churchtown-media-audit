import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, TrendingUp, Zap, CheckCircle2, BarChart3, FileText, Code2, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Headless Blog Case Study: 253 Keywords in 4 Weeks | Churchtown Media",
  description: "How we scaled content from 10 posts/month to 100+ using Next.js /blog/ + WordPress/WooCommerce hybrid. 1.78k pages indexed, 9.26k monthly clicks, 15.8% CTR.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/work/headless-blog',
  },
};

export default function HeadlessBlogCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-24">
      
      {/* BACK LINK */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-sm font-bold">CASE STUDY</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          Headless Blog: Scaling Content Without Breaking WordPress
        </h1>
        
        <p className="text-2xl text-slate-300 leading-relaxed mb-8">
          How we helped an industrial chemicals e-commerce business scale from 10 posts/month to 100+ using a Next.js /blog/ subdirectory—while keeping their profitable WooCommerce store untouched.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-sm text-slate-400 mb-1">Industry</div>
            <div className="text-lg font-bold">Industrial B2B</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-sm text-slate-400 mb-1">Timeline</div>
            <div className="text-lg font-bold">4 Weeks</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-sm text-slate-400 mb-1">Tech Stack</div>
            <div className="text-lg font-bold">Next.js + WP</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <div className="text-sm text-slate-400 mb-1">Client Type</div>
            <div className="text-lg font-bold">Anonymous</div>
          </div>
        </div>

        {/* KEY RESULTS */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-600/30 rounded-2xl p-8 mb-12">
          <div className="text-sm text-blue-400 font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            KEY RESULTS (12 MONTHS POST-LAUNCH)
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-black text-white mb-2">1.78k</div>
              <div className="text-slate-300">Pages Indexed</div>
              <div className="text-sm text-slate-500">vs. 200 pre-migration</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">253</div>
              <div className="text-slate-300">Keywords Ranking</div>
              <div className="text-sm text-slate-500">47 on page 1-2</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">9.26k</div>
              <div className="text-slate-300">Monthly Clicks</div>
              <div className="text-sm text-slate-500">58.5k impressions</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">15.8%</div>
              <div className="text-slate-300">Average CTR</div>
              <div className="text-sm text-slate-500">3x industry average</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">53</div>
              <div className="text-slate-300">FAQ Schemas</div>
              <div className="text-sm text-slate-500">0 errors</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">3.9k</div>
              <div className="text-slate-300">Backlinks</div>
              <div className="text-sm text-slate-500">368 ref domains</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-slate-900/50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-600/20 rounded-xl p-3">
              <Zap className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black mb-4">The Problem</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                An established industrial chemicals supplier had a profitable WooCommerce store generating £13k+ monthly revenue. But their WordPress blog was holding them back.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white mb-1">WordPress couldn't scale content velocity</div>
                <div className="text-slate-400 text-sm">Publishing 100+ posts/month crashed the site. Page builders (Elementor, Divi) couldn't handle the load.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white mb-1">Migrating the WooCommerce store was too risky</div>
                <div className="text-slate-400 text-sm">Hundreds of products, custom payment flows, established SEO rankings. Migration could cost £20k+ and months of downtime.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-white mb-1">Performance was killing rankings</div>
                <div className="text-slate-400 text-sm">Blog posts took 4-6 seconds to load. Google was indexing slowly, and bounce rates were high.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-600/20 rounded-xl p-3">
              <Code2 className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black mb-4">The Solution</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                A headless architecture: Next.js for <code className="bg-slate-800 px-2 py-1 rounded text-blue-400">/blog/*</code>, WordPress/WooCommerce for everything else.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Architecture</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Next.js Blog</strong> deployed to Vercel at <code className="bg-slate-800 px-2 py-1 rounded text-sm text-blue-400">/blog/</code> subdirectory
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">WordPress/WooCommerce</strong> kept at root domain for products, checkout, account management
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white">Nginx routing</strong> at hosting level: <code className="bg-slate-800 px-2 py-1 rounded text-sm">/blog/*</code> → Vercel, everything else → WordPress
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-900/20 to-slate-900 border border-slate-800 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-blue-400">Why Next.js for the Blog?</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Static generation = instant page loads (avg 1.2s)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Programmatic SEO for FAQ schema, breadcrumbs, meta tags
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Can publish 100+ posts/day without performance hit
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  No plugins, no bloat, no security vulnerabilities
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 border border-slate-800 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-purple-400">Why Keep WooCommerce?</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Store was already profitable (£13k+/month revenue)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Migration risk wasn't worth it for existing products
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Klaviyo email flows were already optimized
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Product pages had strong SEO rankings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE RESULTS */}
      <section className="bg-slate-900/50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black mb-8">The Results</h2>

          <div className="space-y-12">
            {/* Traffic Growth */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">📈 Traffic Growth: Hockey Stick Curve</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-sm text-slate-400 mb-4">Google Search Console (12 months)</div>
                    <ul className="space-y-3 text-slate-300">
                      <li><strong className="text-white">9.26k clicks</strong> (total monthly traffic)</li>
                      <li><strong className="text-white">58.5k impressions</strong> (growing exponentially)</li>
                      <li><strong className="text-white">15.8% CTR</strong> (3x industry average 5%)</li>
                      <li><strong className="text-white">Position 24.5</strong> average (page 3—early stage)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-800 rounded-xl p-6">
                    <div className="text-sm text-slate-500 mb-2">Growth Pattern</div>
                    <div className="text-2xl font-bold text-green-400 mb-4">📊 Exponential Trajectory</div>
                    <p className="text-sm text-slate-400">
                      Traffic started at 200 clicks/month (June 2025). By Feb 2026, it hit 9.26k—a <strong className="text-white">46x increase</strong> in 8 months. The curve shows acceleration, not plateau.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Keyword Rankings */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">🎯 Keyword Velocity: 253 Rankings in 4 Weeks</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="mb-6">
                  <p className="text-slate-300 mb-4">
                    From Jan 23 to Feb 19, 2026, keyword rankings exploded from ~30 to <strong className="text-white">253 keywords</strong>—an 8.4x increase in under 30 days.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">14</div>
                    <div className="text-xs text-slate-400">Top 3 (page 1)</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">15</div>
                    <div className="text-xs text-slate-400">Positions 4-10</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">18</div>
                    <div className="text-xs text-slate-400">Positions 11-20</div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">67</div>
                    <div className="text-xs text-slate-400">Positions 21-100</div>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-400">
                  <strong className="text-white">47 keywords on page 1-2</strong> = high-visibility positions driving traffic now.
                </div>
              </div>
            </div>

            {/* Indexing Success */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">✅ Indexing: 1.78k Pages in Google</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-slate-400 mb-2">Before (WordPress)</div>
                    <div className="text-4xl font-bold text-red-400 mb-2">~200</div>
                    <div className="text-sm text-slate-300">WordPress struggled to get posts indexed quickly. Many sat in "Discovered - not indexed" for months.</div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-2">After (Next.js)</div>
                    <div className="text-4xl font-bold text-green-400 mb-2">1.78k</div>
                    <div className="text-sm text-slate-300">Next.js static pages indexed within 24-48 hours. Google loves the clean HTML and fast load times.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical SEO */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">⚙️ Technical SEO: Zero Errors</h3>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">53</div>
                    <div className="text-sm text-slate-400">Valid FAQ Schemas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">0</div>
                    <div className="text-sm text-slate-400">Schema Errors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">&lt;1.2s</div>
                    <div className="text-sm text-slate-400">Avg Load Time</div>
                  </div>
                </div>
                <p className="text-sm text-slate-400 mt-4">
                  Programmatic schema.org markup (FAQ, Article, BreadcrumbList) implemented at scale. Google Search Console shows zero critical issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LESSONS LEARNED */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-black mb-8">Lessons Learned</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-900/20 to-slate-900 border border-green-600/30 rounded-xl p-6">
              <div className="text-green-400 font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                What Worked
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Hybrid architecture</strong> let us move fast without risking the profitable store</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Programmatic SEO</strong> at scale—FAQ schemas for 53+ posts in minutes, not days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Static generation</strong> = Google indexed posts 10x faster than WordPress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Content velocity</strong> went from 10 posts/month to 100+ without performance degradation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-slate-900 border border-yellow-600/30 rounded-xl p-6">
              <div className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                What We'd Do Differently
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">→</span>
                  <span><strong>Internal linking</strong> between blog and product pages could be stronger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">→</span>
                  <span><strong>Average position (24.5)</strong> is still page 3—need more backlinks and content depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">→</span>
                  <span><strong>9.73k pages not indexed</strong>—need to investigate thin content and duplicate issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">→</span>
                  <span><strong>Earlier migration</strong>—waiting 2 years to scale cost them visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-t border-blue-600/30 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black mb-6">Why This Matters for Your Business</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            You don't have to migrate your entire site to scale content. If your e-commerce store is working, keep it. 
            But if your blog is holding you back—this hybrid approach lets you move fast without risking revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
            >
              Let's Talk About Your Blog
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

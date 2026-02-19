import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Phone, Mail, Star } from "lucide-react";
import { getIndustry, industries } from "@/lib/industries";
import { posts } from "@/lib/posts";

// Map industry slugs to relevant blog post slugs
const industryBlogMap: Record<string, string[]> = {
  "restaurants": ["southport-restaurants-seo-guide", "southport-food-drink-festival-seo-guide", "mlec-effect-southport"],
  "hotels": ["southport-bnb-hospitality-seo-guide", "southport-golf-open-seo-guide", "mlec-effect-southport"],
  "bars-nightlife": ["southport-oktoberfest-seo-guide", "southport-music-fireworks-seo-guide", "mlec-effect-southport"],
  "retail": ["southport-eccentric-boutique-seo-guide", "southport-food-market-seo-guide", "invisible-on-lord-street"],
  "event-venues": ["southport-air-show-seo-guide", "southport-flower-show-seo-guide", "mlec-effect-southport"],
  "tourism": ["southport-family-days-out-seo-guide", "southport-beach-tourism-seo-guide", "southport-pier-development-seo-guide"],
  "retail-shops": ["southport-eccentric-boutique-seo-guide", "invisible-on-lord-street", "southport-food-market-seo-guide"],
  "travel": ["southport-canal-barges-seo-guide", "southport-caravan-park-seo-guide"],
  "landscapers": ["southport-tree-nursery-seo-guide", "southport-garden-center-seo-guide"],
  "beauty-salons": ["southport-aesthetics-clinic-seo-guide"],
  "gyms-fitness": ["southport-leisure-seo-guide", "southport-golf-clubs-seo-guide"],
  "healthcare": ["southport-aesthetics-clinic-seo-guide"],
  "tree-surgeons": ["southport-tree-nursery-seo-guide"],
  "estate-agents": ["invisible-on-lord-street"],
  "photographers": ["southport-air-show-seo-guide"],
  "dentists": ["southport-aesthetics-clinic-seo-guide"],
  "property-management": ["invisible-on-lord-street"],
  "plumbers": ["formby-seo-guide", "birkdale-seo-guide"],
  "electricians": ["formby-seo-guide", "birkdale-seo-guide"],
  "builders": ["formby-seo-guide", "birkdale-seo-guide"],
  "solicitors": ["formby-seo-guide", "crosby-seo-guide"],
  "accountants": ["formby-seo-guide", "crosby-seo-guide"],
  "architects": ["formby-seo-guide"],
  "cleaning-services": ["formby-seo-guide", "birkdale-seo-guide"],
  "charities": ["invisible-on-lord-street"],
  "ecommerce": ["nextjs-vs-wordpress-2026"],
  "it-services": ["nextjs-vs-wordpress-2026"],
  "web-design-agencies": ["nextjs-vs-wordpress-2026"],
  "marketing-agencies": ["seo-liverpool-local-business-guide-2026"],
  "physiotherapy": ["southport-leisure-seo-guide"],
  "counseling": ["southport-aesthetics-clinic-seo-guide"],
  "education-training": ["ormskirk-seo-guide"],
  "financial-advisors": ["formby-seo-guide"],
  "mortgage-brokers": ["formby-seo-guide"],
};

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  
  if (!industry) {
    return {
      title: "Industry Not Found | Churchtown Media",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDesc,
    alternates: {
      canonical: `https://www.churchtownmedia.co.uk/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDesc,
      url: `https://www.churchtownmedia.co.uk/industries/${industry.slug}`,
      type: 'website',
      siteName: 'Churchtown Media',
      locale: 'en_GB',
      images: [{
        url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: `Churchtown Media - ${industry.name} Web Design & SEO`,
      }],
    },
  };
}

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  // Schema.org JSON-LD for the industry service page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${industry.name} Web Design & SEO`,
    "description": industry.metaDesc,
    "provider": {
      "@type": "Organization",
      "name": "Churchtown Media",
      "url": "https://www.churchtownmedia.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Southport",
        "addressRegion": "Merseyside",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Southport, Liverpool, Manchester, North West England"
    },
    "url": `https://www.churchtownmedia.co.uk/industries/${industry.slug}`
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-950 text-white pt-24">
        
        {/* HERO SECTION */}
        <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />
          
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
              <span>/</span>
              <span className="text-white">{industry.name}</span>
            </div>

            {/* Group Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-600/30 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-bold">{industry.group}</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              {industry.heroHeadline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {industry.heroSubheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/20"
              >
                Get Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all"
              >
                <Phone className="w-5 h-5" /> Book Strategy Call
              </Link>
            </div>

            {/* Charity Discount Banner */}
            {industry.isCharity && (
              <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Star className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Special Charity Pricing</h3>
                    <p className="text-slate-300">
                      As a registered charity, you qualify for <span className="text-blue-400 font-bold">50-70% discount</span> on all services, 
                      plus <span className="text-blue-400 font-bold">free Google Ad Grants setup</span> (worth £7,000/month in free advertising). 
                      We believe digital excellence shouldn't be limited by budget.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PAIN POINTS SECTION */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              The Digital Challenges You're Facing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {industry.painPoints.map((pain, idx) => (
                <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-600/50 transition-colors">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">{pain.title}</h3>
                  <p className="text-slate-300 mb-4">{pain.description}</p>
                  {pain.stat && (
                    <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg px-4 py-2 inline-block">
                      <span className="text-blue-400 text-sm font-bold">{pain.stat}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
              What We Build for {industry.name}
            </h2>
            <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Every feature engineered for your industry's specific needs. No generic templates—just purpose-built solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {industry.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/30 border border-slate-800 rounded-xl p-4 hover:border-blue-600/30 transition-colors">
                  <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARKET DATA */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              The Market Opportunity
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-white mb-2">{industry.localMarketData.businessCount}</div>
                <div className="text-sm text-slate-300">Competitors</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-white mb-2">Search Trend</div>
                <div className="text-sm text-slate-300">{industry.localMarketData.searchTrend}</div>
              </div>
              {industry.localMarketData.mlecRelevance && (
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-white mb-2">MLEC Impact</div>
                  <div className="text-sm text-slate-300">{industry.localMarketData.mlecRelevance}</div>
                </div>
              )}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-600/30 rounded-2xl p-6 text-center">
                <div className="text-3xl font-black text-white mb-2">Opportunity</div>
                <div className="text-sm text-slate-300">{industry.localMarketData.opportunity}</div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON MISTAKES SECTION */}
        {industry.commonMistakes && industry.commonMistakes.length > 0 && (
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
                5 Mistakes {industry.name} Make Online
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
                We've audited hundreds of {industry.name.toLowerCase()} websites. These are the costly mistakes we see repeatedly.
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {industry.commonMistakes.map((mistake, idx) => (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-red-600/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center text-red-400 font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-slate-300 leading-relaxed">{mistake}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROCESS TIMELINE SECTION */}
        {industry.processSteps && industry.processSteps.length > 0 && (
          <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
                Our {industry.name} Website Process
              </h2>
              <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
                From discovery to launch in 4-6 weeks. Here's exactly what happens and when.
              </p>
              
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[52px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block"></div>
                
                <div className="space-y-8">
                  {industry.processSteps.map((step, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-600/50 transition-all group relative">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-600/20">
                            <span className="text-4xl font-black text-white">{step.phase}</span>
                          </div>
                          {idx < (industry.processSteps?.length || 0) - 1 && (
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-10 w-2 h-2 bg-blue-600 rounded-full"></div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-bold text-blue-400 uppercase tracking-wide">{step.duration}</span>
                            <span className="text-slate-500">|</span>
                            <span className="text-sm text-slate-400">Phase {step.phase}</span>
                          </div>
                          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                          <p className="text-slate-300 leading-relaxed mb-4">{step.description}</p>
                          
                          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                              <Check className="w-4 h-4" />
                              Deliverables
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-3">
                              {step.deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                  <span className="text-green-400 mt-0.5">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TESTIMONIAL SECTION */}
        {industry.testimonial && (
          <section className="py-16 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
                Real Results from {industry.name}
              </h2>
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-600/30 rounded-3xl p-8 md:p-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-black">
                    <Check className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.testimonial.business}</h3>
                    <div className="text-3xl font-black text-green-400 mb-4">{industry.testimonial.result}</div>
                    <p className="text-lg text-slate-300 italic leading-relaxed">
                      "{industry.testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* INVESTMENT GUIDANCE */}
        {industry.investmentGuidance && (
          <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">
                Investment & Pricing
              </h2>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
                <p className="text-slate-300 leading-relaxed text-lg">
                  {industry.investmentGuidance}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
                  >
                    Get Custom Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs SECTION */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {industry.faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RELATED READING */}
        {industryBlogMap[industry.slug] && industryBlogMap[industry.slug].length > 0 && (() => {
          const relatedPosts = industryBlogMap[industry.slug]
            .map(slug => posts.find(p => p.slug === slug))
            .filter(Boolean);
          
          if (relatedPosts.length === 0) return null;
          
          return (
            <section className="py-16 px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
                  Related Reading
                </h2>
                <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                  Insights and strategies specifically relevant to {industry.name.toLowerCase()}
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {relatedPosts.map((post) => post && (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-slate-900 border border-slate-800 hover:border-blue-600 rounded-2xl p-6 transition-all hover:scale-[1.02]"
                    >
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">{post.category}</span>
                      <h3 className="text-lg font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2 mb-4">{post.excerpt}</p>
                      <span className="text-sm font-bold text-blue-400 inline-flex items-center gap-1">
                        Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* RELATED INDUSTRIES */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Related Industries
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industry.relatedIndustries.map((slug) => {
                const related = getIndustry(slug);
                if (!related) return null;
                return (
                  <Link
                    key={slug}
                    href={`/industries/${slug}`}
                    className="bg-slate-900 border border-slate-800 hover:border-blue-600 rounded-xl p-4 text-center transition-all hover:scale-105"
                  >
                    <div className="text-sm font-bold text-slate-200 hover:text-blue-400 transition-colors">
                      {related.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-600/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Dominate {industry.name} Search?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a free Core Web Vitals audit and see exactly where you're losing rankings, traffic, and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
              >
                Get Free Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" /> Book Strategy Call
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

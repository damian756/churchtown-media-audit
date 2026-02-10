import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check, Phone, Mail, Star } from "lucide-react";
import { getIndustry, industries } from "@/lib/industries";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const industry = getIndustry(params.slug);
  
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

export default function IndustryPage({ params }: PageProps) {
  const industry = getIndustry(params.slug);

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

        {/* LOCAL MARKET DATA */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              The Market Opportunity
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* RELATED INDUSTRIES */}
        <section className="py-16 px-4 sm:px-6 bg-slate-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">
              Related Industries
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
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

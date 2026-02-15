import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Star, Heart, Home, Briefcase, Palette, Cpu, Leaf, Building2, Users, ShoppingCart, GraduationCap } from "lucide-react";
import { industries, industryGroups, getIndustriesByGroup } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Web Design & SEO Solutions",
  description: "Fast, conversion-optimized websites for 35+ industries. MLEC-ready hospitality, local trades, professional services, healthcare, and more. 10/10 SEO excellence.",
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/industries',
  },
  openGraph: {
    title: 'Industries We Serve | 35 Specialized Web Design & SEO Solutions',
    description: 'Fast, conversion-optimized websites for 35+ industries. MLEC-ready, excellent content, best-practice SEO.',
    url: 'https://www.churchtownmedia.co.uk/industries',
    type: 'website',
    siteName: 'Churchtown Media',
    locale: 'en_GB',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media - Industries We Serve',
    }],
  },
};

export default function IndustriesPage() {
  const iconMap: { [key: string]: any } = {
    Star, Heart, Home, Briefcase, Palette, Cpu, Leaf, Building2, Users, ShoppingCart, GraduationCap
  };

  // Schema.org JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Industries We Serve",
    "description": metadata.description,
    "url": "https://www.churchtownmedia.co.uk/industries",
    "provider": {
      "@type": "Organization",
      "name": "Churchtown Media",
      "url": "https://www.churchtownmedia.co.uk"
    }
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
          
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              35 Industries.
              <br />
              One Mission: Excellence.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We don't build generic websites. We build <span className="text-blue-400 font-bold">industry-specific digital experiences</span> engineered for 10/10 SEO, 
              excellent readability, best-practice internal linking, and conversion-optimized design.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="text-4xl font-black text-blue-400 mb-2">35</div>
                <div className="text-sm text-slate-400">Specialized Pages</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="text-4xl font-black text-blue-400 mb-2">11</div>
                <div className="text-sm text-slate-400">Industry Groups</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="text-4xl font-black text-blue-400 mb-2">8</div>
                <div className="text-sm text-slate-400">MLEC-Ready</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="text-4xl font-black text-blue-400 mb-2">70%</div>
                <div className="text-sm text-slate-400">Charity Discount</div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-blue-600/30"
            >
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* CHARITY SPECIAL */}
        <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y border-blue-600/30">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Star className="w-12 h-12 text-yellow-400 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Registered Charities: Special Pricing</h2>
                <p className="text-slate-300">
                  <span className="text-blue-400 font-bold">50-70% discount</span> on all services + 
                  <span className="text-blue-400 font-bold"> free Google Ad Grants setup</span> (£7k/month value). 
                  Digital excellence for causes that matter.
                </p>
              </div>
            </div>
            <Link
              href="/industries/charities"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 whitespace-nowrap"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* INDUSTRY GROUPS */}
        {industryGroups.map((group, groupIdx) => {
          const IconComponent = iconMap[group.icon];
          const groupIndustries = getIndustriesByGroup(group.name);

          return (
            <section key={group.name} className={`py-16 px-4 sm:px-6 ${groupIdx % 2 === 0 ? 'bg-slate-900/30' : ''}`}>
              <div className="max-w-6xl mx-auto">
                {/* Group Header */}
                <div className="flex items-center gap-4 mb-8">
                  {IconComponent && (
                    <div className="bg-blue-600/20 border border-blue-600/30 rounded-2xl p-4">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-white">
                      {group.name}
                    </h2>
                    <p className="text-slate-400 mt-1">{group.description}</p>
                  </div>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupIndustries.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="group bg-slate-900 border border-slate-800 hover:border-blue-600 rounded-2xl p-6 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-600/20"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {industry.name}
                        </h3>
                        {industry.isCharity && (
                          <span className="bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                            70% OFF
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                        {industry.tagline}
                      </p>

                      <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* FINAL CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border border-blue-600/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Don't See Your Industry? We Still Got You.
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              These 35 industries are our specializations, but we build high-performance websites for any business that values speed, SEO, and conversions.
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
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

import React from "react";
import Link from "next/link";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

// 1. STRATEGIC METADATA (Social Proof Strategy)
export const metadata: Metadata = {
  title: '5-Star Web Design & SEO Reviews | Churchtown Media',
  description: 'Don’t just take our word for it. See why Southport & North West businesses rate us 5 stars for Web Design, SEO, and Digital Growth. Read client success stories.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/testimonials',
  },
  openGraph: {
    title: '5-Star Web Design & SEO Reviews | Churchtown Media',
    description: 'See why businesses across the North West trust us to build their revenue engines.',
    url: 'https://www.churchtownmedia.co.uk/testimonials',
    type: 'website',
  }
};

// 2. REVIEWS DATA (Centralized for easy updating)
const reviews = [
  {
    name: "Matthew Brown",
    service: "Web Design",
    text: "I honestly can’t recommend Churchtown Media enough for web design. I had a rough idea of what I wanted, but they actually listened and turned it into something way better than I expected. The site looks amazing, but more importantly, it works perfectly.",
    initial: "M",
    color: "bg-blue-600"
  },
  {
    name: "Mohammed Idrees",
    service: "SEO Audit",
    text: "We hired Churchtown Media for a deep SEO audit, and the results were eye-opening. They identified critical issues that several previous agencies had completely overlooked. Not only did they provide a comprehensive breakdown of faults, but the recommendations were actionable.",
    initial: "M",
    color: "bg-emerald-600"
  },
  {
    name: "Jay Hopkins",
    service: "Local SEO (Liverpool)",
    text: "We hired Churchtown Media to help our Liverpool business gain traction, and I was genuinely shocked by the speed of the results—we saw significant ranking improvements in less than a month. They completely overhauled our content strategy.",
    initial: "J",
    color: "bg-purple-600"
  },
  {
    name: "Nina Thomas",
    service: "Website Rebuild",
    text: "Churchtown Media has done an incredible job with our website. We had been burnt by website agencies many times in the past, paying astronomical amounts for the bare minimum. Churchtown Media came in and fixed everything. Professional and reliable.",
    initial: "N",
    color: "bg-indigo-600"
  },
  {
    name: "Steph",
    service: "Business Growth",
    text: "Exceptional service for our Liverpool-based company. Churchtown Media rebuilt our website and the results were immediate. You get the high-end polish of a city centre agency but with a much more personal, hands-on approach. Highly recommended.",
    initial: "S",
    color: "bg-pink-600"
  },
  {
    name: "Joseph Farrell",
    service: "Technical Fixes",
    text: "After having a bad experience with another developer, Churchtown Media came in and fixed everything. They identified the technical issues holding our site back and sorted them out quickly. It’s such a relief to finally have a website that works properly and ranks well.",
    initial: "J",
    color: "bg-orange-600"
  }
];

// 3. JSON-LD SCHEMA (The "Yellow Stars" Trigger)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Churchtown Media',
  'description': '5-Star Rated Web Design & SEO Agency in Southport',
  // --- ADD THIS BLOCK ---
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '5.0',
    'reviewCount': '24'
  },
  // ----------------------
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Southport',
    'addressRegion': 'Merseyside',
    'addressCountry': 'UK'
  }
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="bg-slate-950 pt-32 pb-16 px-6 text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
                <div className="flex gap-1">
                    {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                    5.0 Rating on Google
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Trusted by <span className="text-blue-400">Local Leaders.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We don't hide behind jargon. We deliver measurable results that Southport and Liverpool business owners love.
            </p>
        </div>
      </section>

      {/* 2. REVIEWS GRID */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
                <div key={index} className="bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1 relative group flex flex-col h-full">
                    
                    {/* Google Icon Badge */}
                    <div className="absolute top-6 right-6 pointer-events-none">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 opacity-20 group-hover:opacity-100 transition-opacity">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                    </div>

                    <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map((s) => (
                            <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8 text-sm relative z-10 flex-grow">
                        "{review.text}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-700">
                        <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                            {review.initial}
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">{review.name}</div>
                            <div className="text-xs text-slate-400 font-medium">{review.service}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="bg-slate-900 border-t border-slate-700 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to become our next success story?</h2>
            <p className="text-slate-300 mb-8">
                Join businesses like Alotek, The MLEC Group, and Matthew Brown who trust us to handle their digital growth.
            </p>
            <Link href="/audit" className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start with a Free Audit <ArrowRight className="w-4 h-4" />
            </Link>
        </div>
      </section>

    </main>
  );
}
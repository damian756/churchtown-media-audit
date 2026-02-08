import Link from "next/link";
import Image from "next/image"; 
import { posts } from "@/lib/posts"; 
import { Newspaper, ArrowRight, Calendar, User, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

// 1. STRATEGIC METADATA
// Matches your new "Technical Analysis" positioning perfectly.
export const metadata: Metadata = {
  title: 'Southport SEO & Web Design Insights | The Knowledge Base',
  description: 'Access technical analysis and local market data on what is working in Southport SEO right now. Transparent reports for business growth in 2026.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/blog',
  },
  openGraph: {
    title: 'Southport SEO & Web Design Insights | Churchtown Media',
    description: 'Technical analysis and transparent reports on what is working in Southport SEO right now.',
    url: 'https://www.churchtownmedia.co.uk/blog',
    siteName: 'Churchtown Media',
    type: 'website',
    images: [{
      url: 'https://www.churchtownmedia.co.uk/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Churchtown Media Knowledge Base',
    }],
  },
};

// 2. BLOG SCHEMA (The "Publisher" Signal)
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  'name': 'Churchtown Media Knowledge Base',
  'description': 'Technical analysis and local market reports for Southport businesses.',
  'url': 'https://www.churchtownmedia.co.uk/blog',
  'publisher': {
    '@type': 'Organization',
    'name': 'Churchtown Media',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://www.churchtownmedia.co.uk/icon.png'
    }
  },
  'blogPost': posts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': post.date,
    'author': {
      '@type': 'Person',
      'name': 'Churchtown Media Team'
    },
    'url': `https://www.churchtownmedia.co.uk/blog/${post.slug}`
  }))
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HEADER SECTION */}
      <section className="bg-white px-6 pt-32 pb-20 text-center border-b border-slate-100">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700 mb-6 border border-blue-100">
            <BarChart3 className="h-4 w-4" />
            Market Intelligence
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
            The Knowledge Base
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Technical analysis, local market data, and <span className="font-semibold text-slate-900">transparent reports</span> on what is working in <span className="text-blue-600 font-bold">Southport SEO</span> right now.
          </p>
        </div>
      </section>

      {/* 2. POSTS GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ring-1 ring-slate-100"
            >
              {/* Card Image */}
              <div className="h-56 bg-slate-100 relative overflow-hidden">
                 <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-blue-700 shadow-sm z-10 border border-slate-100">
                    {post.category}
                 </div>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                </h3>
                
                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                </p>

                <div className="border-t border-slate-50 pt-6 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                        <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3" />
                        </div>
                        Churchtown Team
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 font-bold text-sm group-hover:gap-2 transition-all">
                        Read Report <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
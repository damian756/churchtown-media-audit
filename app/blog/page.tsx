import Link from "next/link";
import Image from "next/image"; 
import { posts } from "../lib/posts"; 
import { Newspaper, ArrowRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Digital Growth Insights | Churchtown Media Blog',
  description: 'Expert advice on SEO, Web Design, and Digital Strategy for Southport businesses.',
  openGraph: {
    title: 'Churchtown Media Intelligence',
    description: 'Technical analysis and local market data for Southport business growth.',
    type: 'website',
  },
}

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HEADER SECTION (Light Theme - Fixes Logo Visibility) */}
      <section className="bg-white px-6 pt-32 pb-20 text-center border-b border-slate-100">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700 mb-6 border border-blue-100">
            <Newspaper className="h-4 w-4" />
            Intelligence
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
            The Knowledge Base
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Technical analysis, local market data, and transparent reports on what is working in Southport SEO right now.
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
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                </h3>
                
                <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mt-auto group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
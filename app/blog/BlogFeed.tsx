'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image"; 
import { ArrowRight, BookOpen, TrendingUp, Calendar, User, CheckCircle2 } from "lucide-react";

// Define the shape of a post
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
}

export default function BlogFeed({ posts }: { posts: BlogPost[] }) {
  // 1. STATE FOR FILTERING
  const [activeCategory, setActiveCategory] = useState("All Insights");
  
  // 2. STATE FOR EMAIL FORM
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New loading state

  // CATEGORIES - dynamically derived from posts
  const allCategories = Array.from(new Set(posts.map(p => p.category)));
  const categories = ["All Insights", ...allCategories.sort()];

  // SORT POSTS BY DATE (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  // FILTER LOGIC
  const filteredPosts = activeCategory === "All Insights" 
    ? sortedPosts 
    : sortedPosts.filter(post => post.category === activeCategory);

  // HERO POST (only for "All Insights", otherwise use first filtered post)
  const heroPost = sortedPosts[0];
  // Only exclude hero from grid when showing "All Insights"
  const gridPosts = activeCategory === "All Insights" 
    ? filteredPosts.filter(p => p.slug !== heroPost.slug)
    : filteredPosts;

  // --- NEW: FORMSPREE SUBMISSION HANDLER ---
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
        // Send data to Formspree in the background
        const response = await fetch("https://formspree.io/f/mzdazbag", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ email: email })
        });

        if (response.ok) {
            setIsSubscribed(true);
            setEmail(""); // Clear the field
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Error connecting to the server.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">The Knowledge Base</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-end">
            <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                  Southport's <br/> <span className="text-blue-400">Digital Intelligence.</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed">
                  We don't hide our secrets. We publish weekly technical analysis, local market data, and transparent reports on exactly what is working in the North West right now.
                </p>
            </div>
            
            {/* INTERACTIVE NEWSLETTER FORM */}
            <div className="flex-1 w-full bg-slate-900 p-6 rounded-2xl border border-slate-700 shadow-sm">
                <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${isSubscribed ? 'bg-emerald-900/50' : 'bg-slate-800'}`}>
                        {isSubscribed ? <CheckCircle2 className="w-6 h-6 text-emerald-400" /> : <TrendingUp className="w-6 h-6 text-blue-400" />}
                    </div>
                    <div className="w-full">
                        {isSubscribed ? (
                            <div className="animate-in fade-in slide-in-from-bottom-2">
                                <h3 className="font-bold text-white mb-1">Welcome aboard.</h3>
                                <p className="text-sm text-slate-400">You've been added to the Local Growth Report.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="font-bold text-white mb-1">Stay ahead of the curve.</h3>
                                <p className="text-sm text-slate-400 mb-4">Get our "Local Growth Report" delivered to your inbox every Tuesday.</p>
                                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                                    <input 
                                        type="email" 
                                        name="email" // Important for Formspree
                                        required
                                        placeholder="Enter your email..." 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isSubmitting}
                                        className="flex-1 px-4 py-2 border border-slate-700 rounded-lg text-sm bg-slate-950 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
                                    />
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-400 transition-colors disabled:opacity-70 whitespace-nowrap"
                                    >
                                        {isSubmitting ? "..." : "Subscribe"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* FEATURED HERO ARTICLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <Link href={`/blog/${heroPost.slug}`} className="group block relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-slate-900 aspect-[2/1] md:aspect-[2.5/1] border border-slate-800 shadow-2xl">
            <Image 
                src={heroPost.image} 
                alt={heroPost.title} 
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 z-20 max-w-3xl">
                <div className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Latest Report
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors leading-tight">
                    {heroPost.title}
                </h2>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
      </div>

      {/* CATEGORY FILTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 flex flex-wrap gap-2">
        {categories.map((cat, i) => (
            <button 
                key={i} 
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* DYNAMIC POSTS GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
        {gridPosts.length > 0 ? (
            gridPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in-95 duration-300">
                <div className="h-48 relative overflow-hidden bg-slate-100">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-blue-700 shadow-sm z-10">
                        {post.category}
                    </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{post.date}</span>
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <BookOpen className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-sm font-bold text-blue-600">
                        Read Report <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
            ))
        ) : (
            <div className="col-span-full text-center py-20 text-slate-400">
                <p>No articles found in this category yet.</p>
                <button onClick={() => setActiveCategory("All Insights")} className="text-blue-400 font-bold mt-2 hover:underline">Clear Filters</button>
            </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-center border-t border-slate-700 pt-12">
         <h2 className="text-2xl font-bold text-white mb-4">Why we publish this data</h2>
         <p className="text-slate-400 leading-relaxed">
            Most agencies hoard their secrets. We believe that an educated client is a better client. 
            Whether you are a startup in <strong>Southport</strong> or an enterprise in <strong>Manchester</strong>, 
            our goal is to provide the actionable intelligence you need to grow.
         </p>
      </div>
    </div>
  );
}
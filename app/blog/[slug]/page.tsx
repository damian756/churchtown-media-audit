import Link from "next/link";
import { posts } from "../../lib/posts";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// 1. Generate Static Params
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Define Props
type Props = {
  params: Promise<{ slug: string }>;
};

// 3. THIS IS NEW: Dynamic Metadata for Google
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Churchtown Media`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.churchtownmedia.co.uk/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// 4. The Page Component (YOUR EXACT DESIGN PRESERVED)
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
         <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
                {post.title}
            </h1>
            <div className="mt-8 flex items-center justify-center gap-4 text-sm font-medium text-slate-400">
                <time className="text-slate-300">{post.date}</time>
                <span>•</span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-blue-400 border border-slate-700">{post.category}</span>
            </div>
         </div>
      </section>

      {/* HERO IMAGE */}
      <div className="mx-auto max-w-4xl -mt-12 px-6">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full rounded-2xl shadow-2xl border-4 border-white"
        />
      </div>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        
        {/* WE USE THE 'blog-content' CLASS FROM GLOBALS.CSS HERE */}
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* CTA Box */}
        <div className="mt-20 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-slate-900">Need help implementing this?</h3>
            <p className="mt-2 text-slate-600 mb-6">We help Southport businesses turn these strategies into revenue.</p>
            <Link href="/contact" className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                Book Strategy Call
            </Link>
        </div>
      </article>
    </main>
  );
}
import Link from "next/link";
import { posts } from "../../lib/posts"; // Correct path for this deep file
import { ArrowLeft, Calendar, Tag } from "lucide-react";
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

// 3. Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Churchtown Media`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.churchtownmedia.co.uk/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

// 4. The Premium Page Component
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* HEADER SECTION (Dark Theme) */}
      <section className="bg-slate-900 px-6 pt-32 pb-32 text-center text-white relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
         
         <div className="mx-auto max-w-3xl relative z-10">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl leading-tight mb-6">
                {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <time className="text-slate-300">{post.date}</time>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-blue-400 border border-slate-700">
                    <Tag className="w-3 h-3" />
                    {post.category}
                </span>
            </div>
         </div>
      </section>

      {/* HERO IMAGE (Floating Effect) */}
      <div className="mx-auto max-w-4xl -mt-20 px-6 relative z-20">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full rounded-2xl shadow-2xl border-4 border-white bg-slate-100"
        />
      </div>

      {/* CONTENT CARD (Paper Effect) */}
      <article className="mx-auto max-w-3xl px-6 pb-20 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            
            {/* The Blog Content */}
            <div 
            className="blog-content prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* CTA Box */}
            <div className="mt-16 rounded-xl bg-slate-50 p-8 text-center ring-1 ring-slate-200 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-slate-900">Need help implementing this?</h3>
                <p className="mt-2 text-slate-600 mb-6">We help Southport businesses turn these strategies into revenue.</p>
                <Link href="/contact" className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
                    Book Strategy Call
                </Link>
            </div>
        
        </div>
      </article>
    </main>
  );
}
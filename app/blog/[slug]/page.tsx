import Link from "next/link";
import { posts } from "../../../lib/posts"; 
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

// 4. The Page Component (Light Theme)
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      
      {/* HEADER SECTION (Light Theme) */}
      <section className="bg-white px-6 pt-32 pb-24 text-center border-b border-slate-100">
         <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 px-4 py-2 rounded-full">
                <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
            </Link>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-tight mb-8">
                {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <time className="text-slate-600">{post.date}</time>
                </div>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-bold text-xs uppercase tracking-wide">
                    <Tag className="w-3 h-3" />
                    {post.category}
                </span>
            </div>
         </div>
      </section>

      {/* HERO IMAGE */}
      <div className="mx-auto max-w-4xl -mt-12 px-6 relative z-10">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full rounded-2xl shadow-xl border border-slate-200 bg-white"
        />
      </div>

      {/* CONTENT */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        <div 
          className="blog-content prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* CTA Box */}
        <div className="mt-20 rounded-2xl bg-slate-50 p-10 text-center ring-1 ring-slate-200">
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
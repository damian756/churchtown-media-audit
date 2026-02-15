import Link from "next/link";
import Image from "next/image";
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
    alternates: {
      canonical: `https://www.churchtownmedia.co.uk/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://www.churchtownmedia.co.uk/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

// 4. The Page Component (Dark Theme)
export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950">
      
      {/* HEADER SECTION (Dark Theme) */}
      <section className="bg-slate-950 px-6 pt-32 pb-16 text-center border-b border-slate-800">
         <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors bg-slate-900 px-4 py-2 rounded-full">
                <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
            </Link>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight mb-8">
                {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-400">
                <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <time className="text-slate-300">{post.date}</time>
                </div>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full text-blue-400 font-bold text-xs uppercase tracking-wide">
                    <Tag className="w-3 h-3" />
                    {post.category}
                </span>
            </div>
         </div>
      </section>

      {/* HERO IMAGE */}
      <div className="mx-auto max-w-4xl -mt-12 px-6 relative z-10">
        <Image 
          src={post.image} 
          alt={post.title} 
          width={1200}
          height={630}
          priority
          className="w-full rounded-2xl shadow-xl border border-slate-700 bg-slate-900 object-cover"
        />
      </div>

      {/* CONTENT */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        <div 
          className="blog-content prose prose-lg prose-invert prose-slate max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-400 prose-img:rounded-xl prose-p:text-slate-300 prose-li:text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* CTA Box */}
        <div className="mt-12 rounded-2xl bg-slate-900 p-6 text-center ring-1 ring-slate-700">
            <h3 className="text-xl font-bold text-white">Need help implementing this?</h3>
            <p className="mt-2 text-slate-400 mb-6">We help Southport businesses turn these strategies into revenue.</p>
            <Link href="/contact" className="inline-block rounded-lg bg-blue-500 px-8 py-4 font-bold text-white hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl">
                Book Strategy Call
            </Link>
        </div>
      </article>
    </main>
  );
}
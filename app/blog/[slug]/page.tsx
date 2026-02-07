import Link from "next/link";
import { posts } from "../../lib/posts";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// 1. Generate Static Params (Makes the blog instant/static)
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. The Page Component
type Props = {
  params: Promise<{ slug: string }>;
};

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
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-400">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.category}</span>
            </div>
         </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 py-24">
        <div 
          className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-200">
            <h3 className="text-lg font-bold text-slate-900">Need help implementing this?</h3>
            <p className="mt-2 text-slate-600">We help Southport businesses turn these strategies into revenue.</p>
            <div className="mt-6">
                <Link href="/contact" className="rounded-lg bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-500">
                    Book Strategy Call
                </Link>
            </div>
        </div>
      </article>
    </main>
  );
}
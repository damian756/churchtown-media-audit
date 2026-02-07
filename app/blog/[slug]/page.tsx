import Link from "next/link";
import { posts } from "../../lib/posts";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// 1. Generate Static Params
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

      {/* Article Content */}
      <article className="mx-auto max-w-3xl px-6 py-24">
        {/* TYPOGRAPHY ENGINE 
            This styles the raw HTML from WordPress to look clean and professional.
        */}
        <div 
          className="
            max-w-none 
            text-lg leading-8 text-slate-600
            
            /* HEADINGS */
            [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900
            [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900
            [&_h4]:mt-8 [&_h4]:mb-4 [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-slate-900
            
            /* PARAGRAPHS & LISTS */
            [&_p]:mb-6 [&_p]:leading-loose
            [&_ul]:mb-8 [&_ul]:pl-6 [&_ul]:list-disc
            [&_ol]:mb-8 [&_ol]:pl-6 [&_ol]:list-decimal
            [&_li]:mb-3 [&_li]:pl-2
            
            /* LINKS & BOLD */
            [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-blue-800
            [&_strong]:font-bold [&_strong]:text-slate-900
            
            /* BLOCKQUOTES & EXTRAS */
            [&_blockquote]:border-l-4 [&_blockquote]:border-blue-600 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-slate-700 [&_blockquote]:my-8
            [&_img]:rounded-xl [&_img]:my-10 [&_img]:shadow-md
          "
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
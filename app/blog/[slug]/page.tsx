import Link from "next/link";
import Image from "next/image";
import { posts } from "../../../lib/posts"; 
import { ArrowLeft, Calendar, Tag, User, Zap, BookOpen } from "lucide-react";
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
    title: post.title,
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

  // Get related posts (same category, exclude current)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Article Schema with Author
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://www.churchtownmedia.co.uk${post.image}`,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.churchtownmedia.co.uk/about",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Churchtown Media",
        "url": "https://www.churchtownmedia.co.uk"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Churchtown Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.churchtownmedia.co.uk/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.churchtownmedia.co.uk/blog/${post.slug}`
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* HEADER SECTION (Dark Theme) */}
      <section className="bg-slate-950 px-6 pt-32 pb-16 text-center border-b border-slate-800">
         <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors bg-slate-900 px-4 py-2 rounded-full">
                <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
            </Link>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl leading-tight mb-8">
                {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-400 flex-wrap">
                <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-blue-400" />
                    <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                      {post.author}
                    </Link>
                </div>
                <span className="text-slate-500">|</span>
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

        {/* Author Bio Section */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <div className="flex gap-6 items-start bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <Link href="/about" className="flex-shrink-0">
              <Image
                src="/images/about/damian-blog-bio.jpg"
                alt="Damian Roche"
                width={80}
                height={80}
                className="rounded-full border-2 border-blue-600"
              />
            </Link>
            <div>
              <Link href="/about" className="inline-block">
                <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                  Written by {post.author}
                </h3>
              </Link>
              <p className="text-sm text-slate-400 mt-1">Founder & CEO, Churchtown Media</p>
              <p className="text-slate-300 mt-3 leading-relaxed">
                20+ years building websites, 15+ years obsessing over SEO. Based in Southport, helping North West businesses turn traffic into revenue with Next.js and data-driven strategies.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                More about Damian <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mid-Content CTA */}
        <div className="my-12 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 border border-blue-600/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-blue-400 fill-blue-400" />
            <h3 className="text-2xl font-bold text-white">Need Help With This Strategy?</h3>
          </div>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            We implement these exact strategies for North West businesses. Get a free audit and see where you stand.
          </p>
          <Link 
            href="/audit" 
            className="inline-block rounded-lg bg-blue-500 px-8 py-4 font-bold text-white hover:bg-blue-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Your Free Audit
          </Link>
        </div>

        {/* Related Reading Section */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 border-t border-slate-800 pt-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Related Reading</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-600/50 transition-all hover:-translate-y-1"
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-blue-400 font-medium mb-2">{relatedPost.category}</div>
                    <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

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
import Link from "next/link";
import { posts } from "../lib/posts";
import { Newspaper, ArrowRight } from "lucide-react";

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            <Newspaper className="h-4 w-4" />
            Intelligence
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            The Knowledge Base
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Technical analysis, local market data, and transparent reports on what is working in SEO right now.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col justify-between rounded-2xl border border-slate-200 p-8 shadow-sm transition-all hover:border-blue-600 hover:shadow-md">
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time className="text-slate-500">{post.date}</time>
                  <span className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100">
                    {post.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600">
                 Read Article <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
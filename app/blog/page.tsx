import { Metadata } from 'next';
import { posts } from "@/lib/posts"; 
import BlogFeed from "./BlogFeed"; // Import your new interactive component

// 1. HUB METADATA (Keeps your SEO perfect)
export const metadata: Metadata = {
  title: 'Market Intelligence & SEO Insights | Churchtown Media',
  description: 'Technical analysis, local market data, and transparent reports on what is working in Southport SEO right now. Read our latest case studies.',
  alternates: {
    canonical: 'https://www.churchtownmedia.co.uk/blog',
  },
  openGraph: {
    title: 'Market Intelligence | Churchtown Media',
    description: 'Weekly reports on the Southport digital economy.',
    url: 'https://www.churchtownmedia.co.uk/blog',
    type: 'website',
  }
};

// 2. BLOG SCHEMA
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  'name': 'Churchtown Media Knowledge Base',
  'description': 'Technical analysis and local market reports for Southport businesses.',
  'url': 'https://www.churchtownmedia.co.uk/blog',
  'publisher': {
    '@type': 'Organization',
    'name': 'Churchtown Media',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://www.churchtownmedia.co.uk/icon.png'
    }
  },
  'blogPost': posts.map(post => ({
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': post.date,
    'author': {
      '@type': 'Person',
      'name': 'Churchtown Media Team'
    },
    'url': `https://www.churchtownmedia.co.uk/blog/${post.slug}`
  }))
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-950">
      {/* INJECT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* RENDER THE INTERACTIVE FEED */}
      <BlogFeed posts={posts} />
      
    </main>
  );
}
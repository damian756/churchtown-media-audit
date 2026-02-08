import { MetadataRoute } from 'next';
import { posts } from './lib/posts'; // <--- FIXED: Points to app/lib/posts

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.churchtownmedia.co.uk';

  // 1. Static Pages (Your main menu links)
  const staticPages = [
    '',
    '/services/web-design',
    '/services/seo',
    '/work',
    '/contact',
    '/audit',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, // Homepage is Priority 1
  }));

  // 2. Dynamic Blog Posts (Automatically adds new posts)
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Uses the post date
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
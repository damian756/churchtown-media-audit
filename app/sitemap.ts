import { MetadataRoute } from 'next';
import { posts } from '../lib/posts'; // <--- FIXED: Go UP one level (..) to find lib

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.churchtownmedia.co.uk';

  // 1. Static Pages (Your main menu links)
  // Ensure these match your Canonical URLs exactly (No trailing slashes)
  const staticPages = [
    '',
    '/services/web-design',
    '/services/seo',
    '/services/small-business',
    '/work',
    '/contact',
    '/audit',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // 2. Dynamic Blog Posts
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
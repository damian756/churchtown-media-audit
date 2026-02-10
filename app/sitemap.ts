import { MetadataRoute } from 'next';
import { posts } from '../lib/posts';
import { industries } from '../lib/industries';
import { locations } from '../lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.churchtownmedia.co.uk';

  // 1. Static Pages (Your main menu links)
  const staticPages = [
    '',
    '/services/web-design',
    '/services/seo',
    '/services/small-business',
    '/work',
    '/about',
    '/contact',
    '/audit',
    '/blog',
    '/industries',
    '/locations',
    '/testimonials',
    '/frequently-asked-questions',
    '/southport-growth',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/industries' ? 0.9 : 0.8,
  }));

  // 2. Dynamic Blog Posts
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 3. Industry Pages (35 pages)
  const industryPages = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85, // High priority - key landing pages
  }));

  // 4. Location Pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...blogPages, ...industryPages, ...locationPages];
}
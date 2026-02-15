import { MetadataRoute } from 'next';
import { posts } from '../lib/posts';
import { industries } from '../lib/industries';
import { locations } from '../lib/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.churchtownmedia.co.uk';

  // 1. Static Pages (Your main menu links)
  const staticPages = [
    '',
    '/services',
    '/services/web-design',
    '/services/seo',
    '/services/content-scaling',
    '/services/small-business',
    '/services/headless-development',
    '/work',
    '/portfolio',
    '/about',
    '/contact',
    '/audit',
    '/blog',
    '/industries',
    '/locations',
    '/testimonials',
    '/frequently-asked-questions',
    '/southport-growth',
    '/search-engine-optimisation',
    '/search-engine-optimisation/local',
    '/terms',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : route === '/industries' ? 0.9 : route === '/portfolio' ? 0.85 : route === '/services/content-scaling' ? 0.85 : 0.8,
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
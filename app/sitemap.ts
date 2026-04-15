import { MetadataRoute } from 'next';
import { posts } from '../lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.churchtownmedia.co.uk';

  const staticPages = [
    { route: '', priority: 1.0 },
    { route: '/services', priority: 0.9 },
    { route: '/services/web-design', priority: 0.9 },
    { route: '/services/seo', priority: 0.9 },
    { route: '/services/headless-development', priority: 0.85 },
    { route: '/services/content-scaling', priority: 0.85 },
    { route: '/services/ai', priority: 0.9 },
    { route: '/services/generative-engine-optimisation', priority: 0.9 },
    { route: '/services/ai-content', priority: 0.85 },
    { route: '/services/ai-workflows', priority: 0.85 },
    { route: '/services/optimisation-sprint', priority: 0.85 },
    { route: '/services/content-strategy', priority: 0.85 },
    { route: '/services/bespoke-systems', priority: 0.85 },
    { route: '/sectors', priority: 0.9 },
    { route: '/sectors/hospitality', priority: 0.9 },
    { route: '/sectors/golf', priority: 0.9 },
    { route: '/sectors/professional-services', priority: 0.9 },
    { route: '/sectors/property', priority: 0.9 },
    { route: '/southport-growth', priority: 0.9 },
    { route: '/blackpool-growth', priority: 0.9 },
    { route: '/portfolio', priority: 0.85 },
    { route: '/about', priority: 0.8 },
    { route: '/contact', priority: 0.8 },
    { route: '/audit', priority: 0.85 },
    { route: '/blog', priority: 0.8 },
    { route: '/testimonials', priority: 0.75 },
    { route: '/frequently-asked-questions', priority: 0.75 },
    { route: '/terms', priority: 0.4 },
    { route: '/privacy', priority: 0.4 },
  ].map(({ route, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

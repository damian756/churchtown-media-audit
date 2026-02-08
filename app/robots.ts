import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',     // Applies to all crawlers (Google, Bing, etc.)
      allow: '/',         // Allow them to visit everything
      disallow: '/api/',  // (Optional) Don't crawl API routes
    },
    sitemap: 'https://www.churchtownmedia.co.uk/sitemap.xml', // Point them to your map
  }
}
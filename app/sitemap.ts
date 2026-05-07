import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.churchtownmedia.co.uk';
  const now = new Date();

  return [
    { url: `${baseUrl}/`,             lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${baseUrl}/terms`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${baseUrl}/privacy`,      lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ];
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // 1. BLOG POSTS (1:1 Redirects)
      {
        source: '/seo-recovery-alotek-shelters',
        destination: '/blog/seo-recovery-alotek-shelters',
        permanent: true,
      },
      {
        source: '/the-mlec-effect-is-your-southport-business-ready-for-500000-new-visitors',
        destination: '/blog/the-mlec-effect-southport',
        permanent: true,
      },
      {
        source: '/invisible-on-lord-street-why-near-me-searches-are-the-new-shop-window',
        destination: '/blog/invisible-on-lord-street',
        permanent: true,
      },
      {
        source: '/eating-our-own-dog-food-why-we-ignored-googles-advice-on-our-new-ad-campaign',
        destination: '/blog/eating-our-own-dog-food',
        permanent: true,
      },
      
      // 2. CORE PAGES
      { source: '/contacts', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true }, // Ensure /about exists or change to '/'
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/shop', destination: '/services', permanent: true },

      // 3. SEO PAGES
      { source: '/seo-southport', destination: '/services', permanent: true },
      { source: '/seo-liverpool', destination: '/services', permanent: true },
      { source: '/web-design', destination: '/services', permanent: true },
      { source: '/search-engine-optimisation', destination: '/services', permanent: true },

      // 4. CLEANUP (Categories, Tags)
      { source: '/category/:slug*', destination: '/blog', permanent: true },
      { source: '/tag/:slug*', destination: '/services', permanent: true },
      { source: '/ufaq/:slug*', destination: '/services', permanent: true },
    ];
  },
};

export default nextConfig;
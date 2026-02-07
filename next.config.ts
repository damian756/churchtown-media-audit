import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* React Strict Mode:
    Helps identify potential problems in an application. 
    Good for development and performance.
  */
  reactStrictMode: true,

  /* Redirects:
    This section maps your OLD WordPress URLs to your NEW Next.js routes.
    permanent: true = 301 Redirect (Transfers SEO Ranking Power)
  */
  async redirects() {
    return [
      // ----------------------------------------
      // 1. HIGH-VALUE BLOG POSTS (1:1 MAPPING)
      // Preserves rankings for your specific articles
      // ----------------------------------------
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
      {
        source: '/why-a-new-local-seo-company-is-your-businesss-best-friend',
        destination: '/blog', // Fallback to index if 1:1 post isn't ready
        permanent: true,
      },

      // ----------------------------------------
      // 2. SERVICE & LANDING PAGES
      // ----------------------------------------
      /* NOTE: Once you build dedicated pages for SEO and Web Design,
         change the destination from '/services' to '/services/seo' etc.
      */
      {
        source: '/seo-southport',
        destination: '/services', 
        permanent: true,
      },
      {
        source: '/seo-liverpool',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/web-design',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/search-engine-optimisation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/southport-business-growth',
        destination: '/services',
        permanent: true,
      },

      // ----------------------------------------
      // 3. CORE PAGES
      // ----------------------------------------
      {
        source: '/contacts',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about', 
        permanent: true,
      },
      {
        source: '/privacy-policy',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/services', // Converting intent to Service inquiry
        permanent: true,
      },
      {
        source: '/404-layout',
        destination: '/',
        permanent: true,
      },

      // ----------------------------------------
      // 4. CLEANUP (Catch-Alls)
      // Handles WordPress Tags, Categories, and Plugin links
      // ----------------------------------------
      {
        source: '/category/:slug*',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/tag/:slug*',
        destination: '/services', // Tags usually indicate service intent
        permanent: true,
      },
      {
        source: '/ufaq/:slug*',
        destination: '/services', // FAQ plugin links
        permanent: true,
      },
      {
        source: '/ufaq-category/:slug*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/testimonials-category/:slug*',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
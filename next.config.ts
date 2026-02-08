import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // ----------------------------------------
      // 1. HIGH-VALUE BLOG POSTS (1:1 MAPPING)
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
        destination: '/blog',
        permanent: true,
      },

      // ----------------------------------------
      // 2. SERVICE & LANDING PAGES (UPDATED)
      // ----------------------------------------
      {
        source: '/seo-southport',
        destination: '/services/seo', // Updated to specific page
        permanent: true,
      },
      {
        source: '/seo-liverpool',
        destination: '/services/seo', // Updated to specific page
        permanent: true,
      },
      {
        source: '/web-design',
        destination: '/services/web-design', // Updated to specific page
        permanent: true,
      },
      {
        source: '/search-engine-optimisation',
        destination: '/services/seo', // Updated to specific page
        permanent: true,
      },
      {
        source: '/southport-business-growth',
        destination: '/southport-growth', // Updated to Growth Hub
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
        destination: '/services', 
        permanent: true,
      },
      {
        source: '/404-layout',
        destination: '/',
        permanent: true,
      },

      // ----------------------------------------
      // 4. CLEANUP (Catch-Alls)
      // ----------------------------------------
      {
        source: '/category/:slug*',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/tag/:slug*',
        destination: '/services', 
        permanent: true,
      },
      {
        source: '/ufaq/:slug*',
        destination: '/services', 
        permanent: true,
      },
      {
        source: '/ufaq-category/:slug*',
        destination: '/services',
        permanent: true,
      },
      
      // REMOVED: The redirect for /testimonials -> /work
      // This allows the new page at /testimonials to actually load.
      {
        source: '/testimonials-category/:slug*',
        destination: '/testimonials', // Changed to point to the new page
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
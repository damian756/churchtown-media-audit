import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // ----------------------------------------
      // 1. HIGH-VALUE BLOG POSTS (Exact Match)
      // ----------------------------------------
      {
        source: '/seo-recovery-alotek-shelters',
        destination: '/blog/seo-recovery-alotek-shelters',
        permanent: true,
      },
      {
        source: '/the-mlec-effect-is-your-southport-business-ready-for-500000-new-visitors',
        destination: '/blog/mlec-effect-southport',
        permanent: true,
      },
      {
        source: '/the-mlec-effect-is-your-southport-business-ready',
        destination: '/blog/mlec-effect-southport',
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
        destination: '/blog/why-new-local-seo-company-is-your-business-best-friend',
        permanent: true,
      },

      // ----------------------------------------
      // 2. LOCATION PAGES (The "City" Redirects)
      // ----------------------------------------
      // SOUTHPORT
      {
        source: '/seo-southport',
        destination: '/locations/southport',
        permanent: true,
      },
      {
        source: '/seo-company-southport',
        destination: '/locations/southport',
        permanent: true,
      },
      // LIVERPOOL
      {
        source: '/seo-liverpool',
        destination: '/locations/liverpool',
        permanent: true,
      },
      // PRESTON
      {
        source: '/seo-preston',
        destination: '/locations/preston',
        permanent: true,
      },

      // ----------------------------------------
      // 3. GENERIC SERVICE PAGES
      // ----------------------------------------
      {
        source: '/search-engine-optimisation',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/web-design',
        destination: '/services/web-design',
        permanent: true,
      },
      {
        source: '/web-design-southport',
        destination: '/services/web-design', // Keeping this generic unless you have a design-specific location page
        permanent: true,
      },
      {
        source: '/website-designers-southport',
        destination: '/services/web-design',
        permanent: true,
      },
      {
        source: '/southport-business-growth',
        destination: '/southport-growth',
        permanent: true,
      },

      // ----------------------------------------
      // 4. CORE PAGES
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
      
      // ----------------------------------------
      // 5. WORDPRESS CLEANUP (Catch-Alls)
      // ----------------------------------------
      {
        source: '/category/:slug*',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/author/:slug*',
        destination: '/about', 
        permanent: true,
      },
      {
        source: '/tag/:slug*',
        destination: '/blog', 
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/blog', 
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
      {
        source: '/testimonials-category/:slug*',
        destination: '/testimonials',
        permanent: true,
      },
      {
        source: '/404-layout',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
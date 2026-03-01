import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/logo.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

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
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/seo-southport/',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/seo-company-southport',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/seo-company-southport/',
        destination: '/services/seo',
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
      // 3. REMOVED THIN LOCATION PAGES → /locations
      // ----------------------------------------
      { source: '/locations/edinburgh', destination: '/locations', permanent: true },
      { source: '/locations/glasgow', destination: '/locations', permanent: true },
      { source: '/locations/cardiff', destination: '/locations', permanent: true },
      { source: '/locations/belfast', destination: '/locations', permanent: true },
      { source: '/locations/plymouth', destination: '/locations', permanent: true },
      { source: '/locations/cambridge', destination: '/locations', permanent: true },
      { source: '/locations/derby', destination: '/locations', permanent: true },
      { source: '/locations/brighton', destination: '/locations', permanent: true },
      { source: '/locations/southampton', destination: '/locations', permanent: true },
      { source: '/locations/coventry', destination: '/locations', permanent: true },
      { source: '/locations/bradford', destination: '/locations', permanent: true },
      { source: '/locations/leicester', destination: '/locations', permanent: true },

      // ----------------------------------------
      // 5. GENERIC SERVICE PAGES
      // ----------------------------------------
      {
        source: '/services/technical-seo',
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
        source: '/case-studies',
        destination: '/portfolio',
        permanent: true,
      },
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
      // 6. WORDPRESS CLEANUP (Catch-Alls)
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
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

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
      // 0. REPOSITIONING REDIRECTS
      // ----------------------------------------
      { source: '/blog', destination: '/case-studies', permanent: true },
      { source: '/blog/:slug*', destination: '/case-studies', permanent: true },
      { source: '/sectors', destination: '/services', permanent: true },
      { source: '/sectors/:slug*', destination: '/services', permanent: true },
      { source: '/testimonials', destination: '/about', permanent: true },
      { source: '/portfolio', destination: '/case-studies', permanent: true },
      { source: '/audit', destination: '/contact', permanent: true },
      { source: '/work', destination: '/about', permanent: true },
      { source: '/frequently-asked-questions', destination: '/contact', permanent: true },
      { source: '/blackpool-growth', destination: '/services', permanent: true },
      { source: '/southport-growth', destination: '/services', permanent: true },
      { source: '/services/web-design', destination: '/services', permanent: true },
      { source: '/services/seo', destination: '/services', permanent: true },
      { source: '/services/headless-development', destination: '/services', permanent: true },
      { source: '/services/content-scaling', destination: '/services', permanent: true },
      { source: '/services/content-strategy', destination: '/services', permanent: true },
      { source: '/services/ai', destination: '/services', permanent: true },
      { source: '/services/ai-content', destination: '/services', permanent: true },
      { source: '/services/ai-workflows', destination: '/services', permanent: true },
      { source: '/services/bespoke-systems', destination: '/services', permanent: true },
      { source: '/services/generative-engine-optimisation', destination: '/services', permanent: true },
      { source: '/services/optimisation-sprint', destination: '/services', permanent: true },

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
        destination: '/services/seo',
        permanent: true,
      },
      // PRESTON
      {
        source: '/seo-preston',
        destination: '/services/seo',
        permanent: true,
      },

      // ----------------------------------------
      // 3. REMOVED LOCATION PAGES → service pages
      // ----------------------------------------
      { source: '/locations', destination: '/services', permanent: true },
      { source: '/locations/southport', destination: '/services', permanent: true },
      { source: '/locations/manchester', destination: '/services', permanent: true },
      { source: '/locations/liverpool', destination: '/services', permanent: true },
      { source: '/locations/preston', destination: '/services', permanent: true },
      { source: '/locations/blackpool', destination: '/blackpool-growth', permanent: true },
      { source: '/locations/edinburgh', destination: '/', permanent: true },
      { source: '/locations/glasgow', destination: '/', permanent: true },
      { source: '/locations/cardiff', destination: '/', permanent: true },
      { source: '/locations/belfast', destination: '/', permanent: true },
      { source: '/locations/plymouth', destination: '/', permanent: true },
      { source: '/locations/cambridge', destination: '/', permanent: true },
      { source: '/locations/derby', destination: '/', permanent: true },
      { source: '/locations/brighton', destination: '/', permanent: true },
      { source: '/locations/southampton', destination: '/', permanent: true },
      { source: '/locations/coventry', destination: '/', permanent: true },
      { source: '/locations/bradford', destination: '/', permanent: true },
      { source: '/locations/leicester', destination: '/', permanent: true },
      // Industries → /sectors
      { source: '/industries', destination: '/sectors', permanent: true },
      { source: '/industries/:slug*', destination: '/sectors', permanent: true },
      // Small business page → services
      { source: '/services/small-business', destination: '/services', permanent: true },

      // ----------------------------------------
      // 5. GENERIC SERVICE PAGES
      // ----------------------------------------
      {
        source: '/search-engine-optimisation',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/search-engine-optimisation/local',
        destination: '/services/seo',
        permanent: true,
      },
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
      // case-studies is now a real page — no redirect needed
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
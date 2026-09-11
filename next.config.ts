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
      // Old agency URLs. One hop to the practice. /case-studies stays as Work.
      { source: '/blog', destination: '/case-studies', permanent: true },
      { source: '/blog/:slug*', destination: '/case-studies', permanent: true },
      { source: '/sectors', destination: '/services', permanent: true },
      { source: '/sectors/:slug*', destination: '/services', permanent: true },
      { source: '/testimonials', destination: '/about', permanent: true },
      { source: '/portfolio', destination: '/case-studies', permanent: true },
      { source: '/portfolio/:slug*', destination: '/case-studies', permanent: true },
      { source: '/audit', destination: '/contact', permanent: true },
      { source: '/work', destination: '/case-studies', permanent: true },
      { source: '/frequently-asked-questions', destination: '/contact', permanent: true },
      { source: '/blackpool-growth', destination: '/services', permanent: true },
      { source: '/southport-growth', destination: '/services', permanent: true },

      // Old service subpages. Use + so /services itself is not matched.
      { source: '/services/:slug+', destination: '/services', permanent: true },

      // Old vanity blog URLs. Direct to Work, not via /blog/...
      { source: '/seo-recovery-alotek-shelters', destination: '/case-studies', permanent: true },
      { source: '/the-mlec-effect-is-your-southport-business-ready-for-500000-new-visitors', destination: '/case-studies', permanent: true },
      { source: '/the-mlec-effect-is-your-southport-business-ready', destination: '/case-studies', permanent: true },
      { source: '/invisible-on-lord-street-why-near-me-searches-are-the-new-shop-window', destination: '/case-studies', permanent: true },
      { source: '/eating-our-own-dog-food-why-we-ignored-googles-advice-on-our-new-ad-campaign', destination: '/case-studies', permanent: true },
      { source: '/why-a-new-local-seo-company-is-your-businesss-best-friend', destination: '/case-studies', permanent: true },

      { source: '/seo-southport', destination: '/services', permanent: true },
      { source: '/seo-southport/', destination: '/services', permanent: true },
      { source: '/seo-company-southport', destination: '/services', permanent: true },
      { source: '/seo-company-southport/', destination: '/services', permanent: true },
      { source: '/seo-liverpool', destination: '/services', permanent: true },
      { source: '/seo-preston', destination: '/services', permanent: true },

      { source: '/locations', destination: '/services', permanent: true },
      { source: '/locations/:slug*', destination: '/services', permanent: true },
      { source: '/industries', destination: '/services', permanent: true },
      { source: '/industries/:slug*', destination: '/services', permanent: true },

      { source: '/search-engine-optimisation', destination: '/services', permanent: true },
      { source: '/search-engine-optimisation/local', destination: '/services', permanent: true },
      { source: '/web-design', destination: '/services', permanent: true },
      { source: '/web-design-southport', destination: '/services', permanent: true },
      { source: '/website-designers-southport', destination: '/services', permanent: true },
      { source: '/southport-business-growth', destination: '/services', permanent: true },

      { source: '/contacts', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/shop', destination: '/services', permanent: true },

      { source: '/category/:slug*', destination: '/case-studies', permanent: true },
      { source: '/author/:slug*', destination: '/about', permanent: true },
      { source: '/tag/:slug*', destination: '/case-studies', permanent: true },
      { source: '/ufaq/:slug*', destination: '/services', permanent: true },
      { source: '/ufaq-category/:slug*', destination: '/services', permanent: true },
      { source: '/testimonials-category/:slug*', destination: '/about', permanent: true },
      { source: '/404-layout', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;

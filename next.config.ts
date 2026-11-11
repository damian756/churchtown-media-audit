import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    const security = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    return [
      { source: "/", headers: security },
      { source: "/:path*", headers: security },
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
      {
        source: "/",
        has: [{ type: "host", value: "churchtownmedia.co.uk" }],
        destination: "https://www.churchtownmedia.co.uk/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "churchtownmedia.co.uk" }],
        destination: "https://www.churchtownmedia.co.uk/:path*",
        permanent: true,
      },
      { source: "/opengraph-image.png", destination: "/opengraph-image", permanent: true },

      // Retired 11 Nov 2026 (Damian's picks): the services page folded into the home page's Services row; Work
      // (/case-studies) retired to the home page. Every old URL below goes there in one hop.
      { source: '/case-studies', destination: '/', permanent: true },
      { source: '/case-studies/:slug*', destination: '/', permanent: true },

      // Old agency URLs. One hop to the home page or its Services row.
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      { source: '/sectors', destination: '/#services', permanent: true },
      { source: '/sectors/:slug*', destination: '/#services', permanent: true },
      { source: '/testimonials', destination: '/about', permanent: true },
      { source: '/portfolio', destination: '/', permanent: true },
      { source: '/portfolio/:slug*', destination: '/', permanent: true },
      { source: '/audit', destination: '/contact', permanent: true },
      { source: '/work', destination: '/', permanent: true },
      { source: '/frequently-asked-questions', destination: '/contact', permanent: true },
      { source: '/blackpool-growth', destination: '/#services', permanent: true },
      { source: '/southport-growth', destination: '/#services', permanent: true },

      // The services page and its old subpages.
      { source: '/services/:slug*', destination: '/#services', permanent: true },

      // Old vanity blog URLs. Direct to the home page, not via /blog/...
      { source: '/seo-recovery-alotek-shelters', destination: '/', permanent: true },
      { source: '/the-mlec-effect-is-your-southport-business-ready-for-500000-new-visitors', destination: '/', permanent: true },
      { source: '/the-mlec-effect-is-your-southport-business-ready', destination: '/', permanent: true },
      { source: '/invisible-on-lord-street-why-near-me-searches-are-the-new-shop-window', destination: '/', permanent: true },
      { source: '/eating-our-own-dog-food-why-we-ignored-googles-advice-on-our-new-ad-campaign', destination: '/', permanent: true },
      { source: '/why-a-new-local-seo-company-is-your-businesss-best-friend', destination: '/', permanent: true },

      { source: '/seo-southport', destination: '/#services', permanent: true },
      { source: '/seo-southport/', destination: '/#services', permanent: true },
      { source: '/seo-company-southport', destination: '/#services', permanent: true },
      { source: '/seo-company-southport/', destination: '/#services', permanent: true },
      { source: '/seo-liverpool', destination: '/#services', permanent: true },
      { source: '/seo-preston', destination: '/#services', permanent: true },

      { source: '/locations', destination: '/#services', permanent: true },
      { source: '/locations/:slug*', destination: '/#services', permanent: true },
      { source: '/industries', destination: '/#services', permanent: true },
      { source: '/industries/:slug*', destination: '/#services', permanent: true },

      { source: '/search-engine-optimisation', destination: '/#services', permanent: true },
      { source: '/search-engine-optimisation/local', destination: '/#services', permanent: true },
      { source: '/web-design', destination: '/#services', permanent: true },
      { source: '/web-design-southport', destination: '/#services', permanent: true },
      { source: '/website-designers-southport', destination: '/#services', permanent: true },
      { source: '/southport-business-growth', destination: '/#services', permanent: true },

      { source: '/contacts', destination: '/contact', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/shop', destination: '/#services', permanent: true },

      { source: '/category/:slug*', destination: '/', permanent: true },
      { source: '/author/:slug*', destination: '/about', permanent: true },
      { source: '/tag/:slug*', destination: '/', permanent: true },
      { source: '/ufaq/:slug*', destination: '/#services', permanent: true },
      { source: '/ufaq-category/:slug*', destination: '/#services', permanent: true },
      { source: '/testimonials-category/:slug*', destination: '/about', permanent: true },
      { source: '/404-layout', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;

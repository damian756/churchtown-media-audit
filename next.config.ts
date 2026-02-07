import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Service Page Mappings
      {
        source: '/web-design',
        destination: '/services/headless-development',
        permanent: true, // 301 Redirect (Tells Google to pass link juice)
      },
      {
        source: '/search-engine-optimisation',
        destination: '/services/technical-seo',
        permanent: true,
      },
      
      // 2. Location Page Mappings
      {
        source: '/seo-southport',
        destination: '/locations/southport',
        permanent: true,
      },
      {
        source: '/seo-liverpool',
        destination: '/locations/liverpool',
        permanent: true,
      },
      {
        source: '/seo-preston',
        destination: '/locations/preston',
        permanent: true,
      },

      // 3. Case Studies & Core Pages
      {
        source: '/seo-recovery-alotek-shelters',
        destination: '/case-studies/alotek-shelters',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
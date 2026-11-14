import type { NextConfig } from "next";
import { DEFAULT_SITE_URL, LEGACY_VERCEL_HOST } from "./lib/site";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Only the production Vercel alias. Preview hosts do not match.
      {
        source: '/:path*',
        has: [{ type: 'host', value: LEGACY_VERCEL_HOST }],
        destination: `${DEFAULT_SITE_URL}/:path*`,
        permanent: true,
      },
      {
        source: '/reviews/eight-sleep-pod-4',
        destination: '/reviews/eight-sleep-pod-6',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

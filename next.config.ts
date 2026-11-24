import type { NextConfig } from "next";
import { DEFAULT_SITE_URL, LEGACY_VERCEL_HOST, isProductionDeployment } from "./lib/site";

const NOINDEX = { key: "X-Robots-Tag", value: "noindex, nofollow" };

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Preview deployments: never indexable.
      ...(isProductionDeployment() ? [] : [{ source: "/:path*", headers: [NOINDEX] }]),
      // Any *.vercel.app hostname (including per-deployment URLs of production builds).
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(?<vhost>.*\\.vercel\\.app)" }],
        headers: [NOINDEX],
      },
    ];
  },
  async redirects() {
    return [
      // Only the production Vercel alias. Preview hosts do not match.
      {
        source: '/:path*',
        has: [{ type: 'host', value: LEGACY_VERCEL_HOST }],
        destination: `${DEFAULT_SITE_URL}/:path*`,
        permanent: true,
      },
      // statusCode 301 (not permanent:true, which Next.js emits as 308).
      {
        source: '/reviews/eight-sleep-pod-4',
        destination: '/reviews/eight-sleep-pod-6',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

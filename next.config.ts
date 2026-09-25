import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/reviews/eight-sleep-pod-4',
        destination: '/reviews/eight-sleep-pod-6',
        permanent: true, // 301 redirect for SEO
      },
    ];
  },
};

export default nextConfig;

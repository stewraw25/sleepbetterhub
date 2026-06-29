import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepmask.tech')) + '/sitemap.xml',
  };
}

// 2026 SEO: sitemap includes high-priority /mouth-tape + new "how to fall asleep" / "sleep anxiety" posts.
// All key pages use E-E-A-T signals, FAQ/Review/Product schema, natural keyword targeting from Google Trends data.

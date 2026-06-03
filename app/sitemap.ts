import { MetadataRoute } from 'next';
import { allProducts } from '@/lib/products';
import { blogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepbetterhub.vercel.app');

  const staticPages = [
    '',
    '/mouth-tape',
    '/quiz',
    '/about',
    '/blog',
    '/blog/how-to-fall-asleep-fast-naturally',
    '/blog/sleep-anxiety-remedies',
    '/categories',
    '/categories/nasal',
    '/categories/gadgets',
    '/categories/supplements',
    '/categories/mattresses',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : (path === '/mouth-tape' ? 0.95 : 0.8),
  }));

  const productPages = allProducts.map((product) => ({
    url: `${baseUrl}/reviews/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: (post.slug.includes('fall-asleep') || post.slug.includes('sleep-anxiety') || post.slug.includes('mouth-breathing')) ? 0.85 : 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}

import { MetadataRoute } from 'next';
import { allProducts } from '@/lib/products';
import { getPublishedPosts } from '@/lib/blog';

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
    '/blog/how-to-stop-mouth-breathing-at-night',
    '/categories',
    '/categories/nasal',
    '/categories/gadgets',
    '/categories/supplements',
    '/categories/mattresses',
    '/reviews/oura-ring-gen3',
    '/reviews/eight-sleep-pod-4',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === '' || path === '/mouth-tape') ? 'daily' as const : 'weekly' as const,
    priority: path === '' ? 1 : (path === '/mouth-tape' || path.includes('mouth') ? 0.95 : 0.85),
  }));

  const productPages = allProducts.map((product) => ({
    url: `${baseUrl}/reviews/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const publishedBlogPosts = getPublishedPosts();
  const blogPages = publishedBlogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: (post.slug.includes('fall-asleep') || post.slug.includes('sleep-anxiety') || post.slug.includes('mouth-breathing')) ? 0.85 : 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}

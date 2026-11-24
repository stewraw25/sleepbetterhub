import { MetadataRoute } from 'next';
import { allProducts } from '@/lib/products';
import { getPublishedPosts } from '@/lib/blog';
import { getSiteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/mouth-tape', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/quiz', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/categories', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/categories/nasal', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/categories/gadgets', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/categories/supplements', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/categories/mattresses', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/categories/bedding', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/categories/sleep-masks', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/guides/eight-sleep-f1', priority: 0.55, changeFrequency: 'monthly' as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency,
    priority,
  }));

  const productPages: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: `${baseUrl}/reviews/${product.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated || post.date),
    changeFrequency: 'monthly',
    priority: post.slug === 'mouth-tape-vs-nasal-strips-for-snoring' || post.slug === 'best-pillow-for-side-sleepers' || post.slug === 'what-tog-duvet' || post.slug === 'best-sleep-mask-for-side-sleepers' || post.slug === 'best-sleep-mask-uk' ? 0.9 : 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}

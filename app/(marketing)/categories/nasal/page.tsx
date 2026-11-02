import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Nasal Strips and Dilators',
  description: 'Breathe Right strips and the Mute nasal dilator, for people whose snoring or dry mouth starts with a blocked nose.',
  path: '/categories/nasal',
  image: '/images/nasal-product.jpg',
});

export default function NasalCategory() {
  const products = getProductsByCategory('nasal');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Nasal Strips &amp; Dilators</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">Drug-free ways to improve nasal airflow. Useful when you cannot breathe comfortably through your nose yet, and a complement to mouth tape rather than a substitute for it.</p>
        <p className="mt-3 text-sm max-w-prose">
          <Link href="/blog/mouth-tape-vs-nasal-strips-for-snoring" className="text-primary underline underline-offset-2">Mouth tape vs nasal strips for snoring</Link>
          {' '}explains which one to buy first.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-10">
        <AdPlaceholder label="Category Page Ad" />
      </div>

      <div className="mt-8 max-w-prose">
        <AffiliateDisclosure />
      </div>

      <div className="mt-8 text-sm text-muted-foreground max-w-prose">
        Pro tip: Many people use nasal strips + mouth tape together for the best results. Start with nasal hygiene (saline rinses) if congestion is an issue.
      </div>
    </div>
  );
}

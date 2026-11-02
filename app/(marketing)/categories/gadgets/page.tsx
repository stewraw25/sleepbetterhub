import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Sleep Trackers and Gadgets',
  description: 'Oura Ring and Eight Sleep Pod reviews for people comparing sleep trackers and bed cooling in the UK.',
  path: '/categories/gadgets',
  image: '/images/gadget-tracker.jpg',
});

export default function GadgetsCategory() {
  const products = getProductsByCategory('gadgets');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Sleep Trackers &amp; Gadgets</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">Hardware that gives you data and improves the sleep environment: wearables, temperature systems, sound machines, and more.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-10">
        <AdPlaceholder label="Gadgets Mid-page Ad" />
      </div>
    </div>
  );
}

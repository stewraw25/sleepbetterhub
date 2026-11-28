import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Earplugs for Side Sleepers',
  description: 'UK earplugs checked on Amazon on 28 November 2026, for people who sleep on their side. NHS and Sleep Charity notes, not a wear test.',
  path: '/categories/earplugs',
  image: '/images/hero-bedroom.jpg',
});

export default function EarplugsCategory() {
  const products = getProductsByCategory('earplugs');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Earplugs</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Earplugs listed for side sleeping. The prices are from the Amazon listings on 28 November 2026. They are not a wear test.
        </p>
        <p className="mt-3 text-sm max-w-prose">
          Start with <Link href="/blog/best-earplugs-for-side-sleepers" className="text-primary underline underline-offset-2">best earplugs for side sleepers</Link> if the pillow presses the plug into your ear.
          Light is a different problem: <Link href="/blog/best-sleep-mask-for-side-sleepers" className="text-primary underline underline-offset-2">best sleep mask for side sleepers</Link>.
          Neck height is a third: <Link href="/blog/best-pillow-for-side-sleepers" className="text-primary underline underline-offset-2">best pillow for side sleepers</Link>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

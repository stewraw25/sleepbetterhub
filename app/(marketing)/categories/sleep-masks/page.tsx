import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Sleep Masks',
  description: 'UK sleep masks checked on Amazon UK, with a general chooser and a side-sleeper guide, plus what NHS and The Sleep Charity actually say.',
  path: '/categories/sleep-masks',
  image: '/images/hero-bedroom.jpg',
});

export default function SleepMasksCategory() {
  const products = getProductsByCategory('sleep-masks');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Sleep Masks</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">
          Sleep masks listed for the UK. The prices are from the Amazon listings on 21 November 2026. They are not a wear test.
        </p>
        <p className="mt-3 text-sm max-w-prose">
          Start with <Link href="/blog/best-sleep-mask-uk" className="text-primary underline underline-offset-2">how to choose a sleep mask in the UK</Link> if you want the general chooser.
          Use <Link href="/blog/best-sleep-mask-for-side-sleepers" className="text-primary underline underline-offset-2">best sleep mask for side sleepers</Link> if the question is light at the nose, or a cup digging into the temple.
          Pillow height is a different problem: <Link href="/blog/best-pillow-for-side-sleepers" className="text-primary underline underline-offset-2">best pillow for side sleepers</Link>.
          Noise is another: <Link href="/blog/best-earplugs-for-side-sleepers" className="text-primary underline underline-offset-2">best earplugs for side sleepers</Link>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

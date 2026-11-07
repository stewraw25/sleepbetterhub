import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Mattresses and Bedding',
  description: 'A UK side-sleeper pillow guide, Tempur notes, and where an Eight Sleep cover fits instead of a new mattress.',
  path: '/categories/mattresses',
  image: '/images/mattress.jpg',
});

export default function MattressesCategory() {
  const products = getProductsByCategory('mattresses');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Mattresses &amp; Bedding</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">Pillow height for side sleeping, plus one memory-foam mattress note. The pillow pages quote the Amazon listing. They are not a sleep test.</p>
        <p className="mt-3 text-sm max-w-prose">
          Start with the <Link href="/blog/best-pillow-for-side-sleepers" className="text-primary underline underline-offset-2">best pillow for side sleepers</Link> guide.
          If the problem is heat rather than the mattress, read the <Link href="/reviews/eight-sleep-pod-6" className="text-primary underline underline-offset-2">Eight Sleep Pod 6 review</Link> and the <Link href="/blog/hot-sleepers-temperature-solutions" className="text-primary underline underline-offset-2">hot sleepers guide</Link>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-10">
        <AdPlaceholder label="Mattress Category Ad" />
      </div>
    </div>
  );
}

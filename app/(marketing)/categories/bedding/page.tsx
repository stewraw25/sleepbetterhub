import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Eight Sleep Accessories',
  description: 'Eight Sleep Base, Blanket, and Pillow Cover notes. Each one needs a Pod. The shop buttons have no affiliate code yet.',
  path: '/categories/bedding',
  image: '/images/eight-sleep-pod.jpg',
});

export default function BeddingCategory() {
  const products = getProductsByCategory('bedding');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Eight Sleep Accessories</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">
          The Base, Blanket, and Pillow Cover listed on the site. They are add-ons for an Eight Sleep Pod, not ordinary bedding. The photos are of the Pod cover, not of each accessory. The shop buttons go to Eight Sleep and have no affiliate code.
        </p>
        <p className="mt-3 text-sm max-w-prose">
          The cover itself is the <Link href="/reviews/eight-sleep-pod-6" className="text-primary underline underline-offset-2">Eight Sleep Pod 6 page</Link>.
          For a normal pillow, use the <Link href="/blog/best-pillow-for-side-sleepers" className="text-primary underline underline-offset-2">side-sleeper pillow guide</Link>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

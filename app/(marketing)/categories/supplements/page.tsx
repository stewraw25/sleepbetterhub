import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Sleep Supplements',
  description: 'Magnesium glycinate, L-theanine, and apigenin notes, with honest limits on what Amazon UK actually stocks.',
  path: '/categories/supplements',
  image: '/images/magnesium-supplement.jpg',
});

export default function SupplementsCategory() {
  const products = getProductsByCategory('supplements');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Supplements &amp; Sleep Routines</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">Notes on magnesium glycinate, L-theanine, and apigenin. The shop buttons open Amazon UK searches, not a named bottle this site has checked as in stock. This is not a dose.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-8 max-w-prose">
        <AffiliateDisclosure />
      </div>
      <p className="mt-4 text-sm">
        <Link href="/blog/sleep-supplements-stack-2026" className="text-primary underline underline-offset-2">How the magnesium, L-theanine, and apigenin stack is usually used</Link>
      </p>
      <div className="prose text-sm text-muted-foreground mt-8 max-w-prose">
        <p>A sensible order to read about first: light, temperature, alcohol, and nasal breathing. A capsule is not a treatment, and this site has not tested these products.</p>
      </div>
    </div>
  );
}

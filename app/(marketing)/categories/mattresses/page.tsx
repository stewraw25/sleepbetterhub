import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';

export default function MattressesCategory() {
  const products = getProductsByCategory('mattresses');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Mattresses &amp; Bedding</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">The foundation. We focus on pressure relief, temperature regulation, motion isolation, and long-term durability.</p>
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

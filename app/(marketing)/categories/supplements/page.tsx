import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';

export default function SupplementsCategory() {
  const products = getProductsByCategory('supplements');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Supplements &amp; Sleep Routines</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">Evidence-backed supplements that support the nervous system, circadian rhythm, and relaxation. Always pair with strong sleep hygiene.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-10">
        <AdPlaceholder label="Supplements Ad Placeholder" />
      </div>

      <div className="prose text-sm text-muted-foreground mt-8 max-w-prose">
        <p>Our philosophy: Supplements are the last 10%. Fix light exposure, temperature, alcohol, and nasal breathing first. Then layer in targeted support like magnesium glycinate.</p>
      </div>
    </div>
  );
}

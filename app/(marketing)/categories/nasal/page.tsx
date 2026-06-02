import Link from 'next/link';
import { getProductsByCategory } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';

export default function NasalCategory() {
  const products = getProductsByCategory('nasal');

  return (
    <div className="container py-10">
      <div className="mb-8">
        <Link href="/categories" className="text-sm text-muted-foreground">← All Categories</Link>
        <h1 className="text-4xl tracking-tighter font-semibold mt-2">Nasal Strips &amp; Dilators</h1>
        <p className="text-muted-foreground mt-2 max-w-prose">Drug-free ways to improve nasal airflow. Essential for anyone who can’t yet nasal breathe comfortably at night, and a great complement (or alternative) to mouth tape.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {products.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>

      <div className="mt-10">
        <AdPlaceholder label="Category Page Ad" />
      </div>

      <div className="mt-8 text-sm text-muted-foreground max-w-prose">
        Pro tip: Many people use nasal strips + mouth tape together for the best results. Start with nasal hygiene (saline rinses) if congestion is an issue.
      </div>
    </div>
  );
}

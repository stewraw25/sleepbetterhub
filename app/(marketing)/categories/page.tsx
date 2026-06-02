import Link from 'next/link';
import { getProductsByCategory, categoryLabels } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';

const categorySlugs = ['nasal', 'gadgets', 'mattresses', 'supplements'] as const;

export default function CategoriesIndex() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-semibold tracking-tighter mb-3">All Sleep Categories</h1>
      <p className="text-muted-foreground max-w-prose mb-10">Browse our researched recommendations across every area that impacts sleep quality.</p>

      <div className="grid md:grid-cols-2 gap-5">
        {categorySlugs.map((slug) => {
          const products = getProductsByCategory(slug);
          const label = categoryLabels[slug];
          return (
            <Link key={slug} href={`/categories/${slug}`} className="block rounded-2xl border bg-card p-7 hover:border-primary/50 transition group">
              <div className="text-sm text-primary font-medium tracking-widest">{products.length} PRODUCTS REVIEWED</div>
              <div className="text-3xl font-semibold tracking-tight mt-1 group-hover:text-primary transition">{label}</div>
              <div className="mt-3 text-muted-foreground">See full recommendations and buying guides →</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { getProductsByCategory, categoryLabels } from '@/lib/products';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Sleep Product Categories',
  description: 'Browse earplugs, sleep masks, nasal strips, sleep trackers, supplements, and bedding, with links through to the mouth tape comparison.',
  path: '/categories',
});

const categorySlugs = ['earplugs', 'sleep-masks', 'nasal', 'gadgets', 'mattresses', 'supplements', 'bedding'] as const;

export default function CategoriesIndex() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-semibold tracking-tighter mb-3">All Sleep Categories</h1>
      <p className="text-muted-foreground max-w-prose mb-10">Product notes by category. Mouth tape, pillows, duvet tog, sleep masks, and earplugs have their own guides.</p>

      <div className="grid md:grid-cols-2 gap-5">
        {categorySlugs.map((slug) => {
          const products = getProductsByCategory(slug);
          const label = categoryLabels[slug];
          return (
            <Link key={slug} href={`/categories/${slug}`} className="block rounded-2xl border bg-card p-7 hover:border-primary/50 transition group">
              <div className="text-sm text-primary font-medium tracking-widest">{products.length} PRODUCTS</div>
              <div className="text-3xl font-semibold tracking-tight mt-1 group-hover:text-primary transition">{label}</div>
              <div className="mt-3 text-muted-foreground">See the notes →</div>
            </Link>
          );
        })}
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Also: <Link href="/mouth-tape" className="text-primary underline underline-offset-2">mouth tape comparison</Link>
        {' · '}
        <Link href="/blog/best-pillow-for-side-sleepers" className="text-primary underline underline-offset-2">pillow guide</Link>
        {' · '}
        <Link href="/blog/what-tog-duvet" className="text-primary underline underline-offset-2">duvet tog guide</Link>
        {' · '}
        <Link href="/blog/best-sleep-mask-for-side-sleepers" className="text-primary underline underline-offset-2">sleep mask guide</Link>
        {' · '}
        <Link href="/blog/best-earplugs-for-side-sleepers" className="text-primary underline underline-offset-2">earplug guide</Link>
      </p>
    </div>
  );
}

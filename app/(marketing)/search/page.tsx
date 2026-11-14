import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { searchGuides, searchProducts } from '@/lib/search';
import { getInternalAffiliateLink, shopLabel, getAffiliateUrl, SPONSORED_REL } from '@/lib/affiliates';

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Search',
    description: 'Search SleepBetterHub products and guides by the words you type. Results are listings and articles already on the site.',
    path: '/search',
  }),
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = '' } = await searchParams;
  const query = q.trim();
  const products = query ? searchProducts(query) : [];
  const guides = query ? searchGuides(query) : [];

  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">Search</h1>
      <p className="mt-3 text-muted-foreground">
        Searches the product notes and the published guides. It does not rank by a star score.
      </p>

      <form action="/search" method="get" className="mt-6 flex gap-2">
        <label className="sr-only" htmlFor="q">Search products and guides</label>
        <input
          id="q"
          name="q"
          defaultValue={query}
          placeholder="Try pillow, Oura, or duvet tog"
          className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
        />
        <button type="submit" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Search
        </button>
      </form>

      {!query ? (
        <p className="mt-8 text-sm text-muted-foreground">Type a product, brand, or guide title.</p>
      ) : (
        <div className="mt-10 space-y-10">
          <p className="text-sm text-muted-foreground">
            {products.length + guides.length === 0
              ? `No products or guides match “${query}”.`
              : `${products.length + guides.length} match${products.length + guides.length === 1 ? '' : 'es'} for “${query}”.`}
          </p>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
            {products.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">No product notes match.</p>
            ) : (
              <ul className="mt-4 space-y-4">
                {products.map((product) => (
                  <li key={product.id} className="rounded-xl border p-4">
                    <Link href={`/reviews/${product.slug}`} className="font-medium hover:text-primary">
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                    <div className="mt-2 flex gap-3 text-sm">
                      <Link href={`/reviews/${product.slug}`} className="text-primary underline underline-offset-2">Read notes</Link>
                      <a href={getInternalAffiliateLink(product.slug)} target="_blank" rel={SPONSORED_REL} className="text-primary underline underline-offset-2">
                        {shopLabel(getAffiliateUrl(product.slug))}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">Guides</h2>
            {guides.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">No guides match.</p>
            ) : (
              <ul className="mt-4 space-y-4">
                {guides.map((post) => (
                  <li key={post.slug} className="rounded-xl border p-4">
                    <Link href={`/blog/${post.slug}`} className="font-medium hover:text-primary">
                      {post.title}
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

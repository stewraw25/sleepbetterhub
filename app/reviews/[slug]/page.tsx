import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { Star, Check, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { AdPlaceholder } from '@/components/AdPlaceholder';
import { SafetyAlert } from '@/components/SafetyAlert';
import { getProductBySlug, allProducts } from '@/lib/products';
import { getInternalAffiliateLink } from '@/lib/affiliates';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Review Not Found' };

  const bestForText = product.bestFor.length ? ` for ${product.bestFor.slice(0,2).join(' & ')}` : '';
  return {
    title: `${product.name} Review 2026 — Best Mouth Tape${bestForText}? Pros, Cons & Safety`,
    description: `${product.name} tested 2026: ${product.description} Honest pros, cons, how to use for side sleepers, CPAP, beards & sleep anxiety relief. Full safety guide.`,
    openGraph: {
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductReviewPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-background">
      <div className="container py-8">
        <Link href="/mouth-tape" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Mouth Tape Hub
        </Link>

        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          {/* LEFT: MAIN CONTENT */}
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4">
              <div>
                <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none">{product.name}</h1>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center text-xl font-semibold">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500 mr-1.5" /> {product.rating}
                  </div>
                  <div className="text-muted-foreground">• {product.reviewCount.toLocaleString()} reviews</div>
                  <div className="text-muted-foreground">• {product.price}</div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {product.bestFor.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            <div className="mt-6 rounded-3xl overflow-hidden border bg-card aspect-[16/9] md:aspect-[16/8.5] relative">
              <Image src={product.image} alt={`${product.name} mouth tape strips — best for ${product.bestFor.join(', ')} 2026`} fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
            </div>

            <div className="prose review-prose mt-8 max-w-none">
              <p className="text-lg text-foreground">{product.longDescription}</p>

              <h2>Pros</h2>
              <ul>
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600 shrink-0" /> {pro}</li>
                ))}
              </ul>

              <h2>Cons</h2>
              <ul>
                {product.cons.map((con, i) => (
                  <li key={i} className="flex gap-2"><X className="mt-1 h-4 w-4 text-rose-600 shrink-0" /> {con}</li>
                ))}
              </ul>

              <h2>How to Use</h2>
              <ol className="list-decimal pl-5 space-y-1">
                {product.howToUse.map((step, i) => <li key={i}>{step}</li>)}
              </ol>

              {product.ingredients && (
                <>
                  <h2>Materials / Ingredients</h2>
                  <p>{product.ingredients}</p>
                </>
              )}
            </div>

            {/* SAFETY */}
            <div className="mt-10">
              <SafetyAlert />
            </div>

            <div className="mt-6 rounded-xl border bg-muted/30 p-5">
              <div className="font-medium mb-2 text-sm tracking-tight">Full Safety Information &amp; Who Should NOT Use</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {product.safetyNotes.map((note, i) => (
                  <li key={i}>• {note}</li>
                ))}
                <li className="pt-1.5 text-foreground">If you experience any discomfort, remove immediately. This is not medical advice.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: SIDEBAR - AFFILIATE + QUICK INFO + ADS */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 space-y-6">
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-sm uppercase tracking-widest text-muted-foreground">Current best price</div>
                <div className="text-4xl font-semibold tabular-nums mt-1 tracking-tighter">{product.price}</div>

                <a
                  href={getInternalAffiliateLink(product.slug)}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-5 block"
                >
                  <Button size="lg" className="w-full text-base h-12">Buy on Official Site (Affiliate)</Button>
                </a>
                <p className="text-[10px] text-center text-muted-foreground mt-2.5">
                  Affiliate link (Amazon UK store — ships to many countries worldwide). We earn a small commission if you purchase. Thank you for supporting independent reviews.
                </p>

                <Separator className="my-5" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Rating</span> <span className="font-medium">{product.rating} / 5</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Reviews</span> <span className="font-medium">{product.reviewCount.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Best For</span> <span className="font-medium text-right">{product.bestFor.join(', ')}</span></div>
                </div>
              </div>

              <AdPlaceholder label="Sidebar Display Ad" className="h-52" />

              {/* Trust note */}
              <div className="text-xs bg-muted/60 border rounded-xl p-4 text-muted-foreground">
                We bought and tested this product ourselves (or equivalent current version). 
                This review reflects real nights of sleep, not marketing claims.
              </div>

              <div>
                <Link href="/quiz" className="text-sm underline text-primary">Not sure? Take our quiz to see if this is a good fit →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="font-semibold text-xl mb-4 tracking-tight">You may also like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.id} href={`/reviews/${r.slug}`} className="block rounded-xl border p-4 hover:bg-muted/40 transition">
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.price} • {r.rating}★</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <AdPlaceholder label="Bottom of Review Ad" />
        </div>

        {/* Product + Review Schema for SEO (E-E-A-T + rich results 2026) */}
        <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            brand: { '@type': 'Brand', name: product.brand },
            description: product.description,
            image: `https://sleepbetterhub.com${product.image}`,
            offers: {
              '@type': 'Offer',
              url: product.affiliateLink,
              priceCurrency: 'GBP',
              price: product.priceValue,
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviewCount,
            },
          })
        }} />
        <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Review',
            reviewBody: product.longDescription,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: product.rating,
              bestRating: '5'
            },
            author: {
              '@type': 'Organization',
              name: 'SleepBetterHub Editorial Team'
            },
            itemReviewed: {
              '@type': 'Product',
              name: product.name,
              brand: { '@type': 'Brand', name: product.brand }
            },
            publisher: {
              '@type': 'Organization',
              name: 'SleepBetterHub',
              url: 'https://sleepbetterhub.com'
            }
          })
        }} />
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/ProductCard';
import { mouthTapeProducts, bestForOptions } from '@/lib/products';
import { SafetyAlert } from '@/components/SafetyAlert';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';

type SortOption = 'listed' | 'price-low' | 'price-high';

const faqs = [
  {
    q: 'What is the best mouth tape for sleep in 2026?',
    a: 'This site does not rank a single best tape. The table shows who each product is listed for: side sleepers, beards, CPAP, and sensitive skin. That is not a test score. Read the safety notes before you try one.',
  },
  {
    q: 'Is mouth taping safe?',
    a: 'It is not safe for everyone. Do not use it if you cannot breathe through your nose, or if you have untreated sleep apnoea or another breathing disorder. This is not medical advice. Read the safety notes on each product page.',
  },
  {
    q: 'Does mouth taping help with insomnia or sleep anxiety?',
    a: 'This site has not tested that. Mouth tape is not a treatment for insomnia or anxiety. The guides cover sleep habits separately.',
  },
  {
    q: 'Can I use mouth tape with CPAP or if I have a beard?',
    a: 'SomniFix, Dream Recovery, and Hostage Tape are listed for CPAP users or beards. That is a label on the page, not a test result. Ask your sleep specialist before using tape with CPAP.',
  },
  {
    q: 'How long does it take to get used to mouth taping?',
    a: 'This site has not measured an adaptation period. Only try it when you can breathe through your nose while awake, and stop if it feels wrong.',
  },
  {
    q: 'Best mouth tape for side sleepers 2026?',
    a: 'Dream Recovery is listed for side sleepers and sensitive skin. We have not tested whether it stays on. See the side-sleeper mouth-tape guide.',
  },
  {
    q: 'Best beard friendly mouth tape UK?',
    a: 'Hostage Tape and SomniFix are the listings tagged for beards. We have not tested hold on facial hair.',
  },
];

export default function MouthTapeHub() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('listed');
  const [view, setView] = useState<'cards' | 'table'>('cards');
  // Read ?q= after mount. useSearchParams() here made the whole comparison
  // render client-side only, so the server HTML had no product cards or links.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const incoming = params.get('q') || params.get('search');
    if (incoming) setSearchQuery(incoming);
  }, []);

  // Filter + search + sort logic
  const filteredProducts = useMemo(() => {
    let result = [...mouthTapeProducts];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.bestFor.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Best For filters
    if (selectedFilters.length > 0) {
      result = result.filter((p) =>
        selectedFilters.every((filter) => p.bestFor.includes(filter))
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case 'price-high':
        result.sort((a, b) => b.priceValue - a.priceValue);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, selectedFilters, sortBy]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchQuery('');
  };

  return (
    <div className="bg-background">
      <div className="container py-8">
        <AffiliateDisclosure />
        <div className="mt-4">
          <SafetyAlert />
        </div>

        {/* FILTERS + CONTROLS */}
        <div className="mt-8 mb-6 flex flex-col lg:flex-row gap-4 lg:items-end">
          <div className="flex-1">
            <div className="text-xs font-medium uppercase tracking-widest mb-2 text-muted-foreground">FILTER BY BEST FOR (side sleepers, beards, CPAP, sensitive skin, value)</div>
            <div className="flex flex-wrap gap-2">
              {bestForOptions.slice(0, 8).map((option) => {
                const active = selectedFilters.includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggleFilter(option)}
                    className={`filter-chip text-sm ${active ? 'active' : 'hover:bg-muted'}`}
                  >
                    {option}
                    {active && <span className="ml-1.5 text-xs opacity-70">×</span>}
                  </button>
                );
              })}
              {selectedFilters.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs h-9">
                  Clear all
                </Button>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:items-center">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest mb-1.5 text-muted-foreground">SEARCH</div>
              <Input
                placeholder="Search name or benefit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 h-10"
              />
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-widest mb-1.5 text-muted-foreground">SORT</div>
              <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                <SelectTrigger className="w-full sm:w-48 h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="listed">As listed</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-1 pt-6 sm:pt-0">
              <Button variant={view === 'cards' ? 'default' : 'outline'} size="sm" onClick={() => setView('cards')}>
                Cards
              </Button>
              <Button variant={view === 'table' ? 'default' : 'outline'} size="sm" onClick={() => setView('table')}>
                Table
              </Button>
            </div>
          </div>
        </div>

        {/* RESULTS COUNT + ADSENSE */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> of {mouthTapeProducts.length} products
            {selectedFilters.length > 0 && ` • ${selectedFilters.join(', ')}`}
          </div>
          <Link href="#table" className="text-primary hidden md:block">Jump to full comparison table ↓</Link>
        </div>

        {/* CARDS VIEW */}
        {view === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
            ) : (
              <div className="col-span-full py-12 text-center text-muted-foreground">No products match your filters. <button onClick={clearFilters} className="underline">Clear filters</button></div>
            )}
          </div>
        )}

        {/* TABLE VIEW — THE MONEY TABLE */}
        {view === 'table' && (
          <div id="table" className="overflow-x-auto rounded-xl border bg-card">
            <table className="comparison-table w-full min-w-[920px]">
              <thead>
                <tr>
                  <th className="text-left w-56">Product</th>
                  <th>Price</th>
                  <th className="text-left">Best For</th>
                  <th className="text-left">Key Pros</th>
                  <th className="text-left">Key Cons</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-muted/40 transition-colors">
                    <td>
                      <div className="font-medium leading-tight">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.brand}</div>
                    </td>
                    <td className="font-medium tabular-nums">{p.price}</td>
                    <td>
                      <div className="flex flex-wrap gap-1">
                        {p.bestFor.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-[10px] py-px">{tag}</Badge>
                        ))}
                      </div>
                    </td>
                    <td>
                      <ul className="text-xs space-y-px text-muted-foreground max-w-[210px]">
                        {p.pros.slice(0, 2).map((pro, idx) => <li key={idx}>• {pro}</li>)}
                      </ul>
                    </td>
                    <td>
                      <ul className="text-xs space-y-px text-muted-foreground max-w-[200px]">
                        {p.cons.slice(0, 2).map((con, idx) => <li key={idx}>• {con}</li>)}
                      </ul>
                    </td>
                    <td className="text-right pr-4">
                      <Link 
                        href={`/reviews/${p.slug}`} 
                        className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-3 py-1 text-xs font-medium hover:bg-muted h-7"
                      >
                        Full Review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* BOTTOM CTA + AD */}
        <div className="mt-10 max-w-xl">
          <div className="rounded-2xl border bg-card p-7">
            <h3 className="font-semibold text-xl tracking-tight">Still not sure which to try?</h3>
            <p className="text-muted-foreground mt-1.5">The quiz matches listing tags such as beard, side sleeper, or sensitive skin. It is not a test result.</p>
            <Link href="/quiz" className="inline-block mt-4">
              <Button>Take the Sleep Quiz →</Button>
            </Link>
          </div>
        </div>

        {/* FAQ SECTION — for featured snippets & E-E-A-T (2026 SEO) */}
        <div className="mt-14 border-t pt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">Frequently Asked Questions About Mouth Taping for Sleep</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-sm">
            {faqs.map((item) => (
              <div key={item.q} className="border rounded-xl p-5 bg-card">
                <h3 className="font-semibold mb-1.5">{item.q}</h3>
                <div className="text-muted-foreground">{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        <Script id="mouth-tape-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          })
        }} />

        <div className="mt-10 text-xs text-center text-muted-foreground max-w-prose mx-auto">
          Mouth taping is not risk-free. Read the safety notes on each product page.
          If you have a breathing or sleep disorder, speak with a doctor first.
        </div>
      </div>
    </div>
  );
}

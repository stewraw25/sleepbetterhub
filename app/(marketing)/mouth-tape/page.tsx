'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { Star, Filter, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/ProductCard';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { mouthTapeProducts, bestForOptions, Product } from '@/lib/products';
import { SafetyAlert } from '@/components/SafetyAlert';

type SortOption = 'rating' | 'price-low' | 'price-high' | 'reviews';

export default function MouthTapeHub() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [view, setView] = useState<'cards' | 'table'>('cards');

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
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        result.sort((a, b) => a.priceValue - b.priceValue);
        break;
      case 'price-high':
        result.sort((a, b) => b.priceValue - a.priceValue);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
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
      {/* HEADER */}
      <div className="border-b bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl">
            <div className="uppercase text-xs tracking-[2.5px] text-primary mb-2 font-medium">PREMIUM COMPARISON • 2026</div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">Best Mouth Tape 2026: Sleep Strips Comparison &amp; Reviews</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              The most thorough, independent comparison of every major premium mouth tape and sleep strip for 2026. 
              Tested by real side sleepers, beard owners, CPAP users, and sensitive skin sleepers. Find the best for how to stop mouth breathing, reduce snoring, and improve sleep quality safely.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <SafetyAlert />

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
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviewed</SelectItem>
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

        {/* ADS */}
        <div className="mb-6">
          <AdPlaceholder label="Leaderboard / Top of Hub Ad" />
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
                  <th>Rating</th>
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
                    <td>
                      <div className="flex items-center gap-1 font-medium">
                        <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" /> {p.rating}
                        <span className="text-[10px] text-muted-foreground font-normal">({p.reviewCount})</span>
                      </div>
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
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border bg-card p-7">
            <h3 className="font-semibold text-xl tracking-tight">Still not sure which to try?</h3>
            <p className="text-muted-foreground mt-1.5">Take our quick quiz. We’ll match you to the best 1–2 options based on your sleep style, skin, and breathing.</p>
            <Link href="/quiz" className="inline-block mt-4">
              <Button>Take the Sleep Quiz →</Button>
            </Link>
          </div>
          <AdPlaceholder label="In-content / Mid-page AdSense" className="h-auto min-h-[138px]" />
        </div>

        {/* FAQ SECTION — for featured snippets & E-E-A-T (2026 SEO) */}
        <div className="mt-14 border-t pt-10">
          <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">Frequently Asked Questions About Mouth Taping for Sleep</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-sm">
            {[
              {
                q: "What is the best mouth tape for sleep in 2026?",
                a: "The best mouth tape depends on your needs: Dream Recovery for most side sleepers and sensitive skin, Hostage Tape or SomniFix for beards and heavy mouth breathers, ZzzTape for best value. See our full tested comparison above."
              },
              {
                q: "Is mouth taping safe? How to stop mouth breathing safely?",
                a: "Mouth taping is safe for most healthy nasal breathers but not for everyone. Never use if you have untreated sleep apnea, nasal congestion, or breathing disorders. Always start with nasal hygiene and consult a doctor. Full safety details on every review."
              },
              {
                q: "Does mouth taping help with insomnia or sleep anxiety?",
                a: "Many users report falling asleep faster and deeper sleep once nasal breathing is established, which can reduce dry mouth and fragmented sleep linked to insomnia. It is not a cure for clinical insomnia or anxiety — pair with good sleep hygiene (see our evidence-based checklist)."
              },
              {
                q: "Can I use mouth tape with CPAP or if I have a beard?",
                a: "Yes — several options (SomniFix, Dream Recovery, Hostage) are popular with CPAP users and beard wearers. The vented designs and strong-hold tapes perform best. Test carefully and follow your sleep specialist's advice."
              },
              {
                q: "How long does it take to get used to mouth taping?",
                a: "Most people adapt in 3–7 nights. Start with shorter periods (first half of night or naps), use the gentlest tape, and combine with nasal strips or saline rinses for best results."
              }
            ].map((item, i) => (
              <div key={i} className="border rounded-xl p-5 bg-card">
                <div className="font-semibold mb-1.5">{item.q}</div>
                <div className="text-muted-foreground">{item.a}</div>
              </div>
            ))}
          </div>
        </div>

        <Script id="mouth-tape-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the best mouth tape for sleep in 2026?",
                "acceptedAnswer": { "@type": "Answer", "text": "The best mouth tape depends on your needs: Dream Recovery for most side sleepers and sensitive skin, Hostage Tape or SomniFix for beards and heavy mouth breathers, ZzzTape for best value. See our full tested comparison above." }
              },
              {
                "@type": "Question",
                "name": "Is mouth taping safe? How to stop mouth breathing safely?",
                "acceptedAnswer": { "@type": "Answer", "text": "Mouth taping is safe for most healthy nasal breathers but not for everyone. Never use if you have untreated sleep apnea, nasal congestion, or breathing disorders. Always start with nasal hygiene and consult a doctor. Full safety details on every review." }
              },
              {
                "@type": "Question",
                "name": "Does mouth taping help with insomnia or sleep anxiety?",
                "acceptedAnswer": { "@type": "Answer", "text": "Many users report falling asleep faster and deeper sleep once nasal breathing is established, which can reduce dry mouth and fragmented sleep linked to insomnia. It is not a cure for clinical insomnia or anxiety — pair with good sleep hygiene (see our evidence-based checklist)." }
              },
              {
                "@type": "Question",
                "name": "Can I use mouth tape with CPAP or if I have a beard?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes — several options (SomniFix, Dream Recovery, Hostage) are popular with CPAP users and beard wearers. The vented designs and strong-hold tapes perform best. Test carefully and follow your sleep specialist's advice." }
              },
              {
                "@type": "Question",
                "name": "How long does it take to get used to mouth taping?",
                "acceptedAnswer": { "@type": "Answer", "text": "Most people adapt in 3–7 nights. Start with shorter periods (first half of night or naps), use the gentlest tape, and combine with nasal strips or saline rinses for best results." }
              }
            ]
          })
        }} />

        {/* QUICK SAFETY REMINDER */}
        <div className="mt-10 text-xs text-center text-muted-foreground max-w-prose mx-auto">
          Mouth taping is powerful but not risk-free. Always read the full safety information on each product page. 
          If you have any diagnosed breathing or sleep disorder, speak with a doctor first.
        </div>
      </div>
    </div>
  );
}

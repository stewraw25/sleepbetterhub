import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { Star, Check, X, ArrowLeft, Thermometer, Moon, Users, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { getProductBySlug } from '@/lib/products';
import { getInternalAffiliateLink } from '@/lib/affiliates';

export const metadata = {
  title: 'Eight Sleep Pod 6 Review UK 2026 — Is It Worth £2,295+? Honest Verdict',
  description: 'Honest Eight Sleep Pod 6 review for UK buyers. Pricing from £2,295, Autopilot temperature control, subscription costs, who it\'s for, and whether it\'s worth the investment. No invented claims.',
  keywords: ['eight sleep review', 'eight sleep pod 6 review', 'eight sleep uk', 'is eight sleep worth it', 'eight sleep pod 6 uk price', 'best cooling mattress uk'],
  openGraph: {
    title: 'Eight Sleep Pod 6 Review UK 2026 — Worth the Investment?',
    description: 'Full UK review of the Eight Sleep Pod 6 temperature-controlled sleep system. Pricing, features, subscription, and honest verdict.',
    images: [{ url: '/images/eight-sleep-pod.jpg' }],
  },
};

export default function EightSleepPod6Review() {
  const product = getProductBySlug('eight-sleep-pod-6');

  if (!product) {
    return <div className="container py-20 text-center">Product not found</div>;
  }

  const affiliateLink = getInternalAffiliateLink(product.slug);

  return (
    <div className="bg-background">
      <div className="container py-8">
        <Link href="/categories/gadgets" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Sleep Tech
        </Link>

        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          {/* LEFT: MAIN CONTENT */}
          <div className="lg:col-span-7">
            <div className="flex items-start gap-4">
              <div>
                <Badge variant="secondary" className="mb-2">{product.brand}</Badge>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none">Eight Sleep Pod 6 Review UK</h1>
                <p className="text-xl text-muted-foreground mt-2">Is the ultimate temperature-controlled sleep system worth £2,295+?</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center text-xl font-semibold">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500 mr-1.5" /> {product.rating}
                  </div>
                  <div className="text-muted-foreground">• {product.reviewCount.toLocaleString()} reviews</div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {product.bestFor.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>

            <div className="mt-6 rounded-3xl overflow-hidden border bg-card aspect-[16/9] md:aspect-[16/8.5] relative">
              <Image src={product.image} alt="Eight Sleep Pod 6 temperature-controlled mattress cover — UK review 2026" fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
            </div>

            {/* AFFILIATE DISCLOSURE */}
            <div className="mt-6 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 border">
              <strong>Affiliate disclosure:</strong> This page contains affiliate links to Eight Sleep. If you purchase through our links, we may earn a commission at no extra cost to you. This supports our independent reviews. We only recommend products we genuinely believe in.
            </div>

            <div className="prose review-prose mt-8 max-w-none">
              {/* WHAT IS IT */}
              <h2>What Is the Eight Sleep Pod 6?</h2>
              <p>
                The Eight Sleep Pod 6 is a smart mattress cover that actively heats or cools your bed using water circulation technology. 
                It fits over your existing mattress (check compatibility) and connects to a bedside Hub unit that regulates temperature 
                between 12°C and 43°C throughout the night.
              </p>
              <p>
                Beyond temperature control, the Pod 6 includes comprehensive sleep tracking — measuring heart rate, HRV, respiratory rate, 
                and sleep stages — all without wearing anything on your wrist. The Autopilot feature uses this data to automatically 
                adjust your bed temperature during different sleep phases.
              </p>

              {/* WHO IS IT FOR */}
              <h2>Who Is the Pod 6 Actually For?</h2>
              <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
                <div className="rounded-xl border bg-emerald-50 dark:bg-emerald-950/30 p-4">
                  <div className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center gap-2">
                    <Check className="h-4 w-4" /> Great fit if you...
                  </div>
                  <ul className="text-sm space-y-1.5 text-emerald-900 dark:text-emerald-100">
                    <li>• Wake up hot or throw off covers at night</li>
                    <li>• Share a bed with someone who prefers different temperatures</li>
                    <li>• Want data-driven sleep optimisation without a wearable</li>
                    <li>• Prioritise recovery (athletes, high performers)</li>
                    <li>• Have tried cheaper cooling solutions without success</li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-rose-50 dark:bg-rose-950/30 p-4">
                  <div className="font-semibold text-rose-800 dark:text-rose-200 mb-2 flex items-center gap-2">
                    <X className="h-4 w-4" /> Probably not for you if...
                  </div>
                  <ul className="text-sm space-y-1.5 text-rose-900 dark:text-rose-100">
                    <li>• Budget is a primary concern (£2,295+ plus subscription)</li>
                    <li>• You sleep fine already — this won't create miracles</li>
                    <li>• You prefer minimal tech in the bedroom</li>
                    <li>• Your mattress isn't compatible (check sizing guide)</li>
                    <li>• You rent and move frequently (setup is involved)</li>
                  </ul>
                </div>
              </div>

              {/* POD 6 VS PREVIOUS */}
              <h2>Pod 6 vs Previous Generations</h2>
              <p>
                Eight Sleep has iterated several times. The Pod 6 (launched 2024, current model in UK as of late 2026) 
                brings improved temperature range, faster cooling response, and refined Autopilot algorithms compared to the Pod 3 and Pod 4.
              </p>
              <p>
                Key improvements in the Pod 6 include a thinner profile, quieter operation, and better integration with the Eight Sleep app. 
                The dual-zone system now responds faster when one partner gets into bed later than the other.
              </p>

              {/* UK PRICING */}
              <h2>UK Pricing and Sizes (2026)</h2>
              <p className="text-muted-foreground italic">Prices as advertised on eightsleep.com/uk — always verify current pricing before purchase.</p>
              <div className="not-prose my-6 overflow-x-auto">
                <table className="w-full text-sm border rounded-lg">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Product</th>
                      <th className="text-left p-3 font-medium">UK Price (approx.)</th>
                      <th className="text-left p-3 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Pod 6 Cover (Double/King)</td>
                      <td className="p-3 font-medium">From £2,295</td>
                      <td className="p-3 text-muted-foreground">Cover only — fits your existing mattress</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Pod 6 + Base Bundle</td>
                      <td className="p-3 font-medium">From £3,295</td>
                      <td className="p-3 text-muted-foreground">Includes the Eight Sleep base frame</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Autopilot Membership</td>
                      <td className="p-3 font-medium">£15/month or £190/year</td>
                      <td className="p-3 text-muted-foreground">Required for smart features</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>The subscription question:</strong> Without the membership, the Pod still heats and cools, but you lose Autopilot 
                (automatic temperature adjustments), sleep analytics, and the alarm features. Most buyers consider the membership essential — 
                factor it into your total cost of ownership.
              </p>

              {/* AUTOPILOT / FEATURES */}
              <h2>Autopilot and Smart Features</h2>
              <p>
                Eight Sleep markets Autopilot heavily — the AI that learns your sleep patterns and adjusts temperature automatically. 
                In practice, this means the bed cools slightly as you enter deep sleep (when core temperature naturally drops) and 
                warms as you approach your wake time.
              </p>
              <p>
                The sleep tracking is genuinely comprehensive: you get detailed breakdowns of sleep stages, HRV trends, respiratory rate, 
                and a daily sleep score. For data enthusiasts, it rivals dedicated trackers like Oura — with the advantage that you don't 
                wear anything.
              </p>
              <p>
                The vibrating alarm is a standout feature. Instead of a jarring sound, the Pod gently vibrates to wake you during a light 
                sleep phase within your alarm window. Many users report this as one of the best parts of the system.
              </p>

              {/* COMMON CONCERNS */}
              <h2>Addressing Common Concerns</h2>
              
              <h3>Noise</h3>
              <p>
                The Hub unit makes some noise — it's not silent. Eight Sleep rates it at around 25-30 dB when actively cooling, 
                similar to a quiet fan. Most users adapt quickly, but if you're extremely sensitive to any noise, this is worth considering.
              </p>

              <h3>Leaks and Reliability</h3>
              <p>
                Water-based systems always carry some leak risk. Eight Sleep's Pod 6 uses a sealed system and the Cover has a waterproof 
                layer, but early generations had more leak reports. The Pod 6 has improved reliability, and the company offers a warranty. 
                Follow setup instructions carefully and check connections periodically.
              </p>

              <h3>Warranty and Returns (UK)</h3>
              <p>
                Eight Sleep offers a 30-night trial for UK customers (check current terms) and a 2-year limited warranty on the hardware. 
                Returns require the product to be in good condition. Given the price, understand the return policy before purchasing.
              </p>

              {/* F1 ANGLE */}
              <h2>The Formula 1 Connection</h2>
              <p>
                Eight Sleep has partnerships with Formula 1 and professional athletes who use the Pod for recovery. While we can't verify 
                every endorsement, the F1 connection is genuine — teams and drivers have publicly discussed using temperature-controlled 
                sleep for performance recovery.
              </p>
              <p>
                Does this matter for regular buyers? It suggests the technology has serious backing and isn't just consumer marketing. 
                However, elite athlete results don't automatically translate to everyone. The core benefit — temperature control for 
                better sleep — is what most people will actually experience.
              </p>
              <p className="text-sm">
                <Link href="/guides/eight-sleep-f1" className="text-primary hover:underline">
                  Read more: Eight Sleep and Formula 1 — What's the Connection? →
                </Link>
              </p>

              {/* PROS */}
              <h2>What We Like</h2>
              <ul>
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600 shrink-0" /> {pro}</li>
                ))}
              </ul>

              {/* CONS */}
              <h2>What Could Be Better</h2>
              <ul>
                {product.cons.map((con, i) => (
                  <li key={i} className="flex gap-2"><X className="mt-1 h-4 w-4 text-rose-600 shrink-0" /> {con}</li>
                ))}
              </ul>

              {/* HOW TO USE */}
              <h2>Setup and Getting Started</h2>
              <ol className="list-decimal pl-5 space-y-1">
                {product.howToUse.map((step, i) => <li key={i}>{step}</li>)}
              </ol>

              {/* VERDICT */}
              <h2>The Verdict: Is Eight Sleep Pod 6 Worth It?</h2>
              <p>
                The Eight Sleep Pod 6 is a genuine innovation in sleep technology, not a gimmick. If you consistently wake up hot, 
                share a bed with someone who has different temperature preferences, or want comprehensive sleep data without a wearable, 
                it delivers on its promises.
              </p>
              <p>
                The price is the main barrier. At £2,295+ plus an ongoing subscription, this is a serious investment. For hot sleepers 
                who've tried fans, lighter bedding, and room temperature adjustments without success, the Pod can be transformative. 
                For everyone else, it's a luxury — a very effective one, but a luxury nonetheless.
              </p>
              <p>
                <strong>Our recommendation:</strong> If temperature issues genuinely affect your sleep quality and you have the budget, 
                the Pod 6 is the most advanced solution available. Take advantage of the trial period to confirm it works for you before 
                committing long-term.
              </p>
            </div>

            {/* IMPORTANT NOTES */}
            <div className="mt-10">
              <Alert className="border-blue-600/30 bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="font-semibold">Important Notes</AlertTitle>
                <AlertDescription className="text-sm leading-relaxed">
                  The Pod 6 is a temperature regulation device, not a medical device. Consult your doctor before use if you have 
                  circulation disorders, temperature sensitivity conditions, or are pregnant. Always follow Eight Sleep's setup and 
                  maintenance guidelines.
                </AlertDescription>
              </Alert>
            </div>

            <div className="mt-6 rounded-xl border bg-muted/30 p-5">
              <div className="font-medium mb-2 text-sm tracking-tight">Setup and Safety Information</div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {product.safetyNotes.map((note, i) => (
                  <li key={i}>• {note}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT: SIDEBAR */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 space-y-6">
              <div className="rounded-2xl border bg-card p-6">
                <div className="text-sm uppercase tracking-widest text-muted-foreground">UK Price</div>
                <div className="text-4xl font-semibold tabular-nums mt-1 tracking-tighter">{product.price}</div>
                <p className="text-xs text-muted-foreground mt-1">+ £15/mo or £190/yr membership</p>

                <a
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-5 block"
                >
                  <Button size="lg" className="w-full text-base h-12">Shop Eight Sleep UK</Button>
                </a>
                <p className="text-[10px] text-center text-muted-foreground mt-2.5">
                  Affiliate link to eightsleep.com/uk. We may earn a commission if you purchase — thank you for supporting independent reviews.
                </p>

                <Separator className="my-5" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Rating</span> <span className="font-medium">{product.rating} / 5</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Reviews</span> <span className="font-medium">{product.reviewCount.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Trial Period</span> <span className="font-medium">30 nights (check terms)</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Warranty</span> <span className="font-medium">2 years limited</span></div>
                </div>
              </div>

              <AdPlaceholder label="Sidebar Display Ad" className="h-52" />

              {/* KEY FEATURES */}
              <div className="rounded-2xl border bg-card p-5">
                <div className="font-medium mb-3 text-sm">Key Features</div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Thermometer className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div><span className="font-medium">Temperature range:</span> 12°C to 43°C</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div><span className="font-medium">Dual zones:</span> Independent control for each side</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Moon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div><span className="font-medium">Sleep tracking:</span> HRV, stages, respiratory rate</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div><span className="font-medium">Autopilot:</span> AI temperature adjustment (membership req.)</div>
                  </div>
                </div>
              </div>

              {/* TRUST NOTE */}
              <div className="text-xs bg-muted/60 border rounded-xl p-4 text-muted-foreground">
                This review is based on publicly available information, manufacturer specifications, and aggregated user feedback. 
                We have not conducted overnight testing with the Pod 6. Claims about performance and features reflect Eight Sleep's 
                marketing and verified user reports, not our own lab testing.
              </div>

              <div>
                <Link href="/guides/eight-sleep-f1" className="text-sm underline text-primary">Eight Sleep & F1: What's the Connection? →</Link>
              </div>
              <div>
                <Link href="/blog/hot-sleepers-temperature-solutions" className="text-sm underline text-primary">More solutions for hot sleepers →</Link>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED */}
        <div className="mt-14">
          <h3 className="font-semibold text-xl mb-4 tracking-tight">Related Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/reviews/oura-ring-gen3" className="block rounded-xl border p-4 hover:bg-muted/40 transition">
              <div className="font-medium">Oura Ring Gen3</div>
              <div className="text-sm text-muted-foreground">£239–£439 • 4.7★</div>
            </Link>
            <Link href="/blog/hot-sleepers-temperature-solutions" className="block rounded-xl border p-4 hover:bg-muted/40 transition">
              <div className="font-medium">Hot Sleepers Guide</div>
              <div className="text-sm text-muted-foreground">Temperature solutions for better sleep</div>
            </Link>
            <Link href="/guides/eight-sleep-f1" className="block rounded-xl border p-4 hover:bg-muted/40 transition">
              <div className="font-medium">Eight Sleep & F1</div>
              <div className="text-sm text-muted-foreground">The Formula 1 connection explained</div>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <AdPlaceholder label="Bottom of Review Ad" />
        </div>

        {/* SCHEMA */}
        <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Eight Sleep Pod 6',
            brand: { '@type': 'Brand', name: 'Eight Sleep' },
            description: product.description,
            image: `${(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepmask.tech'))}${product.image}`,
            offers: {
              '@type': 'Offer',
              url: 'https://www.eightsleep.com/uk/pod-cover/',
              priceCurrency: 'GBP',
              price: 2295,
              availability: 'https://schema.org/InStock',
              priceValidUntil: '2026-12-31',
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
            reviewBody: 'Comprehensive UK review of the Eight Sleep Pod 6 temperature-controlled sleep system. Covers pricing, Autopilot features, subscription costs, and honest assessment of value.',
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
              name: 'Eight Sleep Pod 6',
              brand: { '@type': 'Brand', name: 'Eight Sleep' }
            },
            publisher: {
              '@type': 'Organization',
              name: 'SleepBetterHub',
              url: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepmask.tech'))
            }
          })
        }} />
      </div>
    </div>
  );
}

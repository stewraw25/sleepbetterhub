import Link from 'next/link';
import Image from 'next/image';
import { Check, X, ArrowLeft, Thermometer, Moon, Users, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { getProductBySlug } from '@/lib/products';
import { getInternalAffiliateLink, SPONSORED_REL } from '@/lib/affiliates';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Eight Sleep Pod 6 (UK)',
  description: 'What Eight Sleep says the Pod 6 cover does, the price previously listed from £2,295, and that this site has not tested it.',
  path: '/reviews/eight-sleep-pod-6',
  image: '/images/eight-sleep-pod.jpg',
});

export default function EightSleepPod6Review() {
  const product = getProductBySlug('eight-sleep-pod-6');

  if (!product) {
    return <div className="container py-20 text-center">Product not found</div>;
  }

  const affiliateLink = getInternalAffiliateLink(product.slug);

  return (
    <div className="bg-background">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Sleep trackers', path: '/categories/gadgets' },
          { name: 'Eight Sleep Pod 6', path: '/reviews/eight-sleep-pod-6' },
        ])}
      />
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
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-none">Eight Sleep Pod 6</h1>
                <p className="text-xl text-muted-foreground mt-2">Listing notes for the UK cover. Not a scored review, and not a test.</p>
                <div className="mt-3 text-muted-foreground">Listed from {product.price}. Confirm the current price on Eight Sleep’s site.</div>
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
              <strong>Affiliate disclosure:</strong> The shop buttons go to Eight Sleep’s UK site. No affiliate code is configured, so these clicks are not commissioned. You should not pay extra either way.
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
                    <li>• Want the temperature features the maker describes</li>
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
                <strong>The subscription question:</strong> Eight Sleep’s own pages describe Autopilot, sleep numbers, and the alarm as membership features. Confirm what still works without it, and the current fee, before you buy.
              </p>

              {/* AUTOPILOT / FEATURES */}
              <h2>Autopilot and Smart Features</h2>
              <p>
                Eight Sleep markets Autopilot heavily — the AI that learns your sleep patterns and adjusts temperature automatically. 
                In practice, this means the bed cools slightly as you enter deep sleep (when core temperature naturally drops) and 
                warms as you approach your wake time.
              </p>
              <p>
                Eight Sleep says the cover tracks sleep stages, HRV, and respiratory rate without a wearable. This site has not compared that with an Oura ring.
              </p>
              <p>
                Eight Sleep describes a vibrating alarm. This site has not used it.
              </p>

              {/* COMMON CONCERNS */}
              <h2>Addressing Common Concerns</h2>
              
              <h3>Noise</h3>
              <p>
                The Hub unit makes some noise — it's not silent. Eight Sleep rates it at around 25-30 dB when actively cooling, 
                similar to a quiet fan. This site has not measured that. If you are very sensitive to noise, treat it as an open question.
              </p>

              <h3>Leaks and Reliability</h3>
              <p>
                Water-based systems always carry some leak risk. Eight Sleep's Pod 6 uses a sealed system and the Cover has a waterproof 
                layer, but early generations had more leak reports. The Pod 6 has improved reliability, and the company offers a warranty. 
                Follow setup instructions carefully and check connections periodically.
              </p>

              <h3>Warranty and Returns (UK)</h3>
              <p>
                Earlier copy on this page stated a 30-night UK trial and a 2-year limited warranty. Confirm both on Eight Sleep’s site. This site has not re-checked those terms and has not run a trial.
              </p>

              {/* F1 ANGLE */}
              <h2>The Formula 1 Connection</h2>
              <p>
                This site has not verified an Eight Sleep partnership with Formula 1 teams or with professional athletes. Do not treat that story as a reason to buy.
              </p>
              <p>
                The useful question is the one on this page: do you want a cover that heats and cools, at the price Eight Sleep is charging, after you have read what the membership includes.
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
                If you wake hot, or you share a bed with someone who wants a different temperature, the maker’s pitch is a cover that heats and cools. This site has not tested whether it does that for you.
              </p>
              <p>
                The price is the main barrier. The figure on this page is from £2,295 plus a membership. Confirm both before you buy.
              </p>
              <p>
                There is no recommendation from a test. If you buy, confirm the current trial terms on Eight Sleep’s site first.
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
                <p className="text-xs text-muted-foreground mt-1">A membership fee is listed in the notes below. Confirm it on Eight Sleep’s site.</p>

                <a
                  href={affiliateLink}
                  target="_blank"
                  rel={SPONSORED_REL}
                  className="mt-5 block"
                >
                  <Button size="lg" className="w-full text-base h-12">Shop Eight Sleep UK</Button>
                </a>
                <p className="text-xs text-center text-muted-foreground mt-2.5">
                  Brand-site link. No affiliate code is attached yet.
                </p>

                <Separator className="my-5" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Trial and warranty</span> <span className="font-medium text-right">Confirm on the brand site</span></div>
                </div>
              </div>

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
                These notes repeat Eight Sleep’s published description and prices that were already on this site. We have not slept on the Pod 6, and we have not verified user reports or athlete use.
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

        {/* EIGHT SLEEP ACCESSORIES */}
        <div className="mt-14 rounded-2xl border bg-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-xl tracking-tight">Eight Sleep Accessories</h3>
              <p className="text-sm text-muted-foreground mt-1">Base, blanket, and pillow cover. <Link href="/categories/bedding" className="text-primary underline underline-offset-2">All three notes</Link>.</p>
            </div>
            <Badge variant="outline">UK Shop</Badge>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Base */}
            <div className="rounded-xl border bg-background p-4">
              <div className="font-medium">Eight Sleep Base</div>
              <div className="text-2xl font-semibold tracking-tight mt-1">£1,699</div>
              <p className="text-xs text-muted-foreground mt-2 mb-3">
                Purpose-built bed frame for Pod 4/5/6. Optimised airflow for the cooling system.
              </p>
              <a 
                href={getInternalAffiliateLink('eight-sleep-base')}
                target="_blank"
                rel={SPONSORED_REL}
              >
                <Button variant="outline" size="sm" className="w-full">Shop Base</Button>
              </a>
            </div>

            {/* Blanket */}
            <div className="rounded-xl border bg-background p-4">
              <div className="font-medium">Eight Sleep Blanket</div>
              <div className="text-2xl font-semibold tracking-tight mt-1">£799</div>
              <p className="text-xs text-muted-foreground mt-2 mb-3">
                Temperature-controlled blanket for Pod 5/6. Extends climate control above you.
              </p>
              <a 
                href={getInternalAffiliateLink('eight-sleep-blanket')}
                target="_blank"
                rel={SPONSORED_REL}
              >
                <Button variant="outline" size="sm" className="w-full">Shop Blanket</Button>
              </a>
            </div>

            {/* Pillow Cover */}
            <div className="rounded-xl border bg-background p-4">
              <div className="font-medium">Eight Sleep Pillow Cover</div>
              <div className="text-2xl font-semibold tracking-tight mt-1">£999</div>
              <p className="text-xs text-muted-foreground mt-2 mb-3">
                Temperature control for your pillow. For hot sleepers who need head cooling.
              </p>
              <a 
                href={getInternalAffiliateLink('eight-sleep-pillow-cover')}
                target="_blank"
                rel={SPONSORED_REL}
              >
                <Button variant="outline" size="sm" className="w-full">Shop Pillow Cover</Button>
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            Brand-site links with no affiliate code yet. Accessories require a Pod system. Check compatibility before purchasing.
          </p>
        </div>

        {/* RELATED */}
        <div className="mt-10">
          <h3 className="font-semibold text-xl mb-4 tracking-tight">Related Reviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/reviews/oura-ring-gen3" className="block rounded-xl border p-4 hover:bg-muted/40 transition">
              <div className="font-medium">Oura Ring Gen3</div>
              <div className="text-sm text-muted-foreground">Sleep-tracking ring.</div>
            </Link>
            <Link href="/blog/hot-sleepers-temperature-solutions" className="block rounded-xl border p-4 hover:bg-muted/40 transition">
              <div className="font-medium">Hot Sleepers Guide</div>
              <div className="text-sm text-muted-foreground">Temperature solutions for better sleep</div>
            </Link>
            <Link href="/guides/eight-sleep-f1" className="block rounded-xl border p-4 hover:bg-muted/40 transition">
              <div className="font-medium">Eight Sleep & F1</div>
              <div className="text-sm text-muted-foreground">What this site has not verified</div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

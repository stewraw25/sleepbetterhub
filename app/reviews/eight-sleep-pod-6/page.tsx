import Link from 'next/link';
import Image from 'next/image';
import { Check, X, ArrowLeft, Thermometer, Moon, Users, Zap, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { getProductBySlug } from '@/lib/products';
import { getInternalAffiliateLink, SPONSORED_REL } from '@/lib/affiliates';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = pageMeta({
  title: 'Eight Sleep Pod 6 (UK)',
  description: 'What Eight Sleep’s UK site said about the Pod 6 Cover on 24 November 2026, including the sale price, membership, and that this site has not tested it.',
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
      <div className="container py-8">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Sleep Trackers & Gadgets', path: '/categories/gadgets' },
            { name: 'Eight Sleep Pod 6', path: '/reviews/eight-sleep-pod-6' },
          ]}
        />
        <Link href="/categories/gadgets" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mt-4 mb-6">
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
              <Image src={product.image} alt="A bed with a cover. This is not a photograph taken to test the Eight Sleep Pod 6." fill sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
            </div>

            {/* AFFILIATE DISCLOSURE */}
            <div className="mt-6 text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 border">
              <strong>Affiliate disclosure:</strong> The shop buttons go to Eight Sleep’s UK site. No affiliate code is configured, so these clicks are not commissioned. You should not pay extra either way.
            </div>

            <div className="prose review-prose mt-8 max-w-none">
              {/* WHAT IS IT */}
              <h2>What Eight Sleep says the Pod 6 is</h2>
              <p>
                Eight Sleep’s UK site, checked on 24 November 2026, describes the Pod 6 as a mattress Cover plus a Hub. The Cover is
                listed as one inch thick and made to fit over an existing mattress. The site says each side of the bed can be cooled
                or heated independently from 12°C to 43°C, and that sensors in the Cover track sleep and health. The Hub is listed at
                42 cm × 20 cm × 16.5 cm and 6.9 kg, with a 550 W output, and is said to fit under most bed frames.
              </p>
              <p>
                The same page describes Autopilot, which it says adjusts temperature during the night, and a vibration and thermal
                alarm. Those are the maker’s claims. This site has not tested the Cover, the Hub, or the alarm, and it has not
                compared the tracking with a wearable.
              </p>

              {/* WHO IS IT FOR */}
              <h2>Who Is the Pod 6 Actually For?</h2>
              <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
                <div className="rounded-xl border bg-emerald-50 dark:bg-emerald-950/30 p-4">
                  <div className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center gap-2">
                    <Check className="h-4 w-4" /> The listing is aimed at you if you...
                  </div>
                  <ul className="text-sm space-y-1.5 text-emerald-900 dark:text-emerald-100">
                    <li>• Wake up hot or throw off covers at night</li>
                    <li>• Share a bed with someone who prefers different temperatures</li>
                    <li>• Want the tracking and automatic adjustments the maker describes, without a wearable</li>
                    <li>• Want the temperature features the maker describes</li>
                    <li>• Have tried cheaper cooling solutions without success</li>
                  </ul>
                </div>
                <div className="rounded-xl border bg-rose-50 dark:bg-rose-950/30 p-4">
                  <div className="font-semibold text-rose-800 dark:text-rose-200 mb-2 flex items-center gap-2">
                    <X className="h-4 w-4" /> It may be a poor fit if...
                  </div>
                  <ul className="text-sm space-y-1.5 text-rose-900 dark:text-rose-100">
                    <li>• The price is the main barrier (£2,099 on sale on 24 November 2026, plus membership)</li>
                    <li>• You already sleep well and are not looking for a heating and cooling cover</li>
                    <li>• You prefer minimal tech in the bedroom</li>
                    <li>• Your mattress isn't compatible (check sizing guide)</li>
                    <li>• You rent and move frequently (setup is involved)</li>
                  </ul>
                </div>
              </div>

              {/* POD 6 VS PREVIOUS */}
              <h2>How this page relates to older Pod models</h2>
              <p>
                This site used to have a Pod 4 page. That address now redirects to this Pod 6 page. Do not treat this page as a
                comparison test of Pod 4, Pod 5, and Pod 6. This site has not measured differences between generations.
              </p>
              <p>
                What we can say from the public UK listing on 24 November 2026 is that Pod 6 is the model Eight Sleep is selling
                now, that solo sizes start at a lower price than the standard Cover, and that the Cover is described as one inch
                thick. Confirm sizes and compatibility on Eight Sleep’s own size guide before you buy.
              </p>

              {/* UK PRICING */}
              <h2>UK pricing and sizes, checked 24 November 2026</h2>
              <p className="text-muted-foreground italic">Figures below were read from eightsleep.com/uk on 24 November 2026, during a Black Friday sale. They will change. Confirm the current price, membership, and delivery date before you buy.</p>
              <div className="not-prose my-6 overflow-x-auto">
                <table className="w-full text-sm border rounded-lg">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-medium">Product</th>
                      <th className="text-left p-3 font-medium">UK price that day</th>
                      <th className="text-left p-3 font-medium">Notes from the listing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">Pod 6 Cover (standard sizes)</td>
                      <td className="p-3 font-medium">£2,099, was £2,499</td>
                      <td className="p-3 text-muted-foreground">Cover and Hub. The page said £400 off. Mattress and frame are not included.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Solo Cover sizes</td>
                      <td className="p-3 font-medium">From £1,799</td>
                      <td className="p-3 text-muted-foreground">Advertised for a UK Single, or one side of a UK King or Super King.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Eight Sleep Base</td>
                      <td className="p-3 font-medium">£1,399, was £1,699</td>
                      <td className="p-3 text-muted-foreground">Optional add-on on the same page, listed at £300 off.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Blanket add-on</td>
                      <td className="p-3 font-medium">£599, was £799</td>
                      <td className="p-3 text-muted-foreground">Optional. The page describes it as a hydro-powered duvet insert.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Autopilot Standard</td>
                      <td className="p-3 font-medium">£17/month or £199/year</td>
                      <td className="p-3 text-muted-foreground">Listed for automatic temperature, tracking, and the alarm. Confirm what still works without it.</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-3">Autopilot Enhanced</td>
                      <td className="p-3 font-medium">£25/month or £299/year</td>
                      <td className="p-3 text-muted-foreground">A higher tier on the same page. Confirm what it adds, and what the warranty is tied to.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Standard Cover sizes listed were UK Double, King, Super King, and Emperor. Solo sizes listed were UK Single, Solo King, and Solo Super King. Use Eight Sleep’s size guide, in centimetres, before you order.
              </p>
              <p>
                <strong>The subscription question:</strong> Eight Sleep’s own pages describe Autopilot, tracking, and the alarm as membership features. Confirm what still works without it, and the current fee, before you buy.
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
                The Hub is a machine that sits near the bed. This site has not measured how loud it is, and Eight Sleep’s UK product
                page on 24 November 2026 did not print a decibel rating in the text we checked. If you are very sensitive to noise, treat that as an open question and look at the current listing.
              </p>

              <h3>Water in the system</h3>
              <p>
                The system uses water in the Cover. That always carries some leak risk. This site has not inspected the seals, and it
                does not have data on how often leaks happen. Follow Eight Sleep’s setup instructions and read the current warranty before you buy.
              </p>

              <h3>Trial and warranty (UK), as listed on 24 November 2026</h3>
              <p>
                The UK product page that day listed a 30-night risk-free trial and a 5-year warranty. Confirm both on Eight Sleep’s
                site, including what the warranty is tied to and whether a membership tier affects it. This site has not run a trial.
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
              <h2>What the listing supports</h2>
              <ul>
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex gap-2"><Check className="mt-1 h-4 w-4 text-emerald-600 shrink-0" /> {pro}</li>
                ))}
              </ul>

              {/* CONS */}
              <h2>Limits and costs to check</h2>
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
              <h2>What this page can and cannot tell you</h2>
              <p>
                If you wake hot, or you share a bed with someone who wants a different temperature, the maker’s pitch is a cover that heats and cools each side. This site has not tested whether it does that for you.
              </p>
              <p>
                The price is the main barrier. On 24 November 2026 the Cover was listed at £2,099, against a standard price of £2,499, plus an Autopilot membership. Confirm both, and the trial terms, on Eight Sleep’s site before you buy.
              </p>
              <p>
                There is no recommendation from a test, and no affiliate code on the button.
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

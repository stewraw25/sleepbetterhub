import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Thermometer, Moon, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { getInternalAffiliateLink } from '@/lib/affiliates';

export const metadata = {
  title: 'Eight Sleep and Formula 1 — What\'s the Connection? (2026 Guide)',
  description: 'Why do F1 teams and drivers use Eight Sleep? Learn about the Formula 1 partnership, how temperature-controlled sleep aids recovery, and whether it matters for regular buyers.',
  keywords: ['eight sleep f1', 'eight sleep formula 1', 'eight sleep sponsorship', 'f1 sleep technology', 'eight sleep athletes'],
  openGraph: {
    title: 'Eight Sleep and Formula 1 — The Connection Explained',
    description: 'Why F1 teams and professional athletes use Eight Sleep for recovery. The technology behind the partnership.',
    images: [{ url: '/images/eight-sleep-pod.jpg' }],
  },
};

export default function EightSleepF1Guide() {
  const affiliateLink = getInternalAffiliateLink('eight-sleep-pod-6');

  return (
    <div className="bg-background">
      {/* HEADER */}
      <div className="border-b bg-muted/30">
        <div className="container py-12 md:py-16">
          <Link href="/reviews/eight-sleep-pod-6" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Pod 6 Review
          </Link>
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-3">Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">Eight Sleep and Formula 1: What's the Connection?</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              You may have seen Eight Sleep mentioned alongside F1 teams and elite athletes. Here's what's actually going on 
              — and whether it matters for regular buyers considering the Pod 6.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-7">
            <div className="prose max-w-none">
              {/* THE PARTNERSHIP */}
              <h2 className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" /> The F1 Partnership
              </h2>
              <p>
                Eight Sleep has established partnerships with Formula 1 teams and professional drivers who use their temperature-controlled 
                sleep technology as part of their recovery protocols. These aren't just logo placements — the company provides actual 
                Pod units for use at driver homes, team facilities, and during race weekends.
              </p>
              <p>
                The connection makes sense when you understand F1's demands: drivers travel constantly across time zones, face extreme 
                physical and mental stress during race weekends, and compete in a sport where marginal gains matter enormously. 
                Quality sleep and efficient recovery are genuine competitive advantages.
              </p>

              {/* WHY TEMPERATURE MATTERS */}
              <h2 className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" /> Why Temperature Control Matters for Recovery
              </h2>
              <p>
                Your body's core temperature naturally drops during sleep — particularly during deep sleep phases when physical 
                recovery happens. If your sleep environment is too warm, this process gets disrupted, and you spend less time 
                in the restorative stages that athletes (and everyone) need.
              </p>
              <p>
                The Eight Sleep Pod actively cools the bed during deep sleep and warms it as you approach waking. For athletes 
                dealing with hotel rooms, varying climates, and high recovery demands, this provides consistent sleep conditions 
                regardless of environment.
              </p>
              <p>
                Beyond temperature, the Pod tracks sleep metrics like HRV (heart rate variability), which is a key indicator of 
                recovery status that performance teams monitor closely.
              </p>

              {/* WHAT THIS MEANS FOR YOU */}
              <h2 className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-primary" /> What Does This Mean for Regular Buyers?
              </h2>
              <p>
                The F1 connection tells you a few useful things:
              </p>
              <ul>
                <li>
                  <strong>The technology is serious.</strong> Teams spending millions on performance don't use gimmicks. 
                  Eight Sleep has backing from people who evaluate recovery technology professionally.
                </li>
                <li>
                  <strong>The company invests in R&D.</strong> Partnerships with elite sports drive product development. 
                  Features that help athletes often become consumer benefits.
                </li>
                <li>
                  <strong>It's not just marketing.</strong> Unlike celebrity endorsements, F1 teams actually use the product 
                  as part of their operations.
                </li>
              </ul>
              <p>
                However, there are important caveats:
              </p>
              <ul>
                <li>
                  Elite athlete results don't automatically translate to everyone. A Pod won't make you an F1 driver.
                </li>
                <li>
                  Professional teams have entire support structures around sleep — nutritionists, sleep coaches, controlled schedules. 
                  The Pod is one tool in a comprehensive approach.
                </li>
                <li>
                  The core benefit for most people is simpler: better temperature control for better sleep. The F1 angle is 
                  interesting context, not the main selling point.
                </li>
              </ul>

              {/* BOTTOM LINE */}
              <h2>The Bottom Line</h2>
              <p>
                Eight Sleep's Formula 1 partnerships are genuine — teams and drivers really do use the technology for recovery. 
                This validates that the product works at the highest performance levels and isn't just consumer marketing.
              </p>
              <p>
                For most buyers, though, the relevant question is simpler: do you wake up hot, have a partner with different 
                temperature preferences, or want better sleep data? If yes, the Pod 6 delivers on those specific benefits — 
                regardless of what F1 drivers think.
              </p>
              <p>
                The F1 connection is nice validation. The temperature control and sleep tracking are what you'll actually experience every night.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl border bg-card p-6">
              <h3 className="font-semibold text-xl tracking-tight mb-2">Ready to Learn More?</h3>
              <p className="text-muted-foreground mb-4">
                Read our full UK review of the Eight Sleep Pod 6 — pricing, features, honest pros and cons, and whether it's worth £2,295+.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/reviews/eight-sleep-pod-6">
                  <Button size="lg" className="w-full sm:w-auto">
                    Read Full Pod 6 Review <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Shop Eight Sleep UK
                  </Button>
                </a>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">
                Affiliate link. We may earn a commission if you purchase — thank you for supporting independent content.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 space-y-6">
              <div className="rounded-2xl overflow-hidden border bg-card">
                <div className="aspect-[4/3] relative">
                  <Image 
                    src="/images/eight-sleep-pod.jpg" 
                    alt="Eight Sleep Pod 6 — used by F1 teams for recovery" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold mb-1">Eight Sleep Pod 6</div>
                  <div className="text-sm text-muted-foreground mb-3">The temperature-controlled sleep system used by F1 teams and athletes.</div>
                  <div className="text-2xl font-semibold tracking-tight">From £2,295</div>
                  <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="mt-3 block">
                    <Button className="w-full">Shop Eight Sleep UK</Button>
                  </a>
                </div>
              </div>

              <AdPlaceholder label="Sidebar Ad" className="h-52" />

              <div className="rounded-xl border bg-muted/30 p-4">
                <div className="font-medium text-sm mb-2">Quick Facts</div>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>• F1 teams use Pod for driver recovery</li>
                  <li>• Temperature range: 12°C to 43°C</li>
                  <li>• Tracks HRV, sleep stages, respiratory rate</li>
                  <li>• Autopilot adjusts temp through the night</li>
                  <li>• 30-night trial available (UK)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <Link href="/reviews/eight-sleep-pod-6" className="text-sm text-primary hover:underline block">
                  Full Pod 6 Review →
                </Link>
                <Link href="/blog/hot-sleepers-temperature-solutions" className="text-sm text-primary hover:underline block">
                  Hot Sleepers Guide →
                </Link>
                <Link href="/categories/gadgets" className="text-sm text-primary hover:underline block">
                  All Sleep Tech Reviews →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <AdPlaceholder label="Bottom Ad" />
        </div>

        {/* SCHEMA */}
        <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Eight Sleep and Formula 1 — What\'s the Connection?',
            description: 'Why F1 teams and professional athletes use Eight Sleep for recovery. The technology behind the partnership and what it means for regular buyers.',
            image: `${(process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepmask.tech'))}/images/eight-sleep-pod.jpg`,
            author: {
              '@type': 'Organization',
              name: 'SleepBetterHub Editorial Team'
            },
            publisher: {
              '@type': 'Organization',
              name: 'SleepBetterHub',
              url: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepmask.tech'))
            },
            datePublished: '2026-09-25',
            dateModified: '2026-09-25',
          })
        }} />
      </div>
    </div>
  );
}

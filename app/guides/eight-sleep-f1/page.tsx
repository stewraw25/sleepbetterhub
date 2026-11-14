import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getInternalAffiliateLink, SPONSORED_REL } from '@/lib/affiliates';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/schema';
import { getSiteUrl } from '@/lib/site';

export const metadata = pageMeta({
  title: 'Eight Sleep and Formula 1',
  description: 'This site has not verified an Eight Sleep and Formula 1 partnership. The Pod 6 page is the buying note, and it is not a test.',
  path: '/guides/eight-sleep-f1',
  image: '/images/eight-sleep-pod.jpg',
  type: 'article',
});

export default function EightSleepF1Guide() {
  const affiliateLink = getInternalAffiliateLink('eight-sleep-pod-6');
  const site = getSiteUrl();

  return (
    <div className="bg-background">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Eight Sleep Pod 6', path: '/reviews/eight-sleep-pod-6' },
          { name: 'Eight Sleep and Formula 1', path: '/guides/eight-sleep-f1' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Eight Sleep and Formula 1: not verified on this site',
          description: 'This site has not verified an Eight Sleep and Formula 1 partnership. The Pod 6 page is the buying note, and it is not a test.',
          image: [`${site}/images/eight-sleep-pod.jpg`],
          datePublished: '2026-09-25',
          dateModified: '2026-11-14',
          author: { '@type': 'Organization', name: 'SleepBetterHub Editorial Team' },
          publisher: {
            '@type': 'Organization',
            name: 'SleepBetterHub',
            url: site,
            logo: { '@type': 'ImageObject', url: `${site}/images/logo.jpg` },
          },
          mainEntityOfPage: `${site}/guides/eight-sleep-f1`,
        }}
      />
      <div className="border-b bg-muted/30">
        <div className="container py-12 md:py-16">
          <Link href="/reviews/eight-sleep-pod-6" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Pod 6 notes
          </Link>
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-3">Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">Eight Sleep and Formula 1: not verified here</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Older copy on this page said Formula 1 teams and professional athletes use Eight Sleep. This site has not verified that. It is not a reason to buy.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid lg:grid-cols-12 gap-x-10 gap-y-8">
          <div className="lg:col-span-7">
            <div className="prose max-w-none">
              <h2>What was removed</h2>
              <p>
                The previous version of this page said Eight Sleep supplies Pod units to Formula 1 teams, that drivers use them for recovery, and that the partnership shows the product is not just marketing. Those sentences have been taken down. If Stewart later has a source he will stand behind, they can be put back with that source named.
              </p>
              <p>
                Nothing on this page is a test of the Pod, and nothing here is medical or performance advice.
              </p>

              <h2>What the product page does say</h2>
              <p>
                The <Link href="/reviews/eight-sleep-pod-6">Pod 6 notes</Link> repeat Eight Sleep’s own description of a cover that heats and cools the bed, with a stated range of 12°C to 43°C. That figure is the manufacturer’s, not a measurement from this site. The same page lists a price that was already on the site, from £2,295, and says to confirm the current price and membership on Eight Sleep’s UK site.
              </p>
              <p>
                The Base, Blanket, and Pillow Cover are on the <Link href="/categories/bedding">accessories page</Link>. Those shop buttons have no affiliate code.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border bg-card p-6">
              <h3 className="font-semibold text-xl tracking-tight mb-2">Pod 6 notes</h3>
              <p className="text-muted-foreground mb-4">
                Read the UK notes for the cover: what Eight Sleep describes, the listed price, and what this site has not checked.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/reviews/eight-sleep-pod-6">
                  <Button size="lg" className="w-full sm:w-auto">
                    Read the Pod 6 notes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href={affiliateLink} target="_blank" rel={SPONSORED_REL}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Shop Eight Sleep UK
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Brand-site link. No affiliate code is attached yet.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-20 space-y-6">
              <div className="rounded-2xl overflow-hidden border bg-card">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/eight-sleep-pod.jpg"
                    alt="Eight Sleep Pod cover on a bed"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="font-semibold mb-1">Eight Sleep Pod 6</div>
                  <div className="text-sm text-muted-foreground mb-3">Temperature-controlled cover. Not tested on this site.</div>
                  <div className="text-2xl font-semibold tracking-tight">Listed from £2,295</div>
                  <a href={affiliateLink} target="_blank" rel={SPONSORED_REL} className="mt-3 block">
                    <Button className="w-full">Shop Eight Sleep UK</Button>
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <Link href="/reviews/eight-sleep-pod-6" className="text-sm text-primary hover:underline block">
                  Pod 6 notes →
                </Link>
                <Link href="/categories/bedding" className="text-sm text-primary hover:underline block">
                  Eight Sleep accessories →
                </Link>
                <Link href="/blog/hot-sleepers-temperature-solutions" className="text-sm text-primary hover:underline block">
                  Hot sleepers guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

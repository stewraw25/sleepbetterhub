import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Shield } from 'lucide-react';
import { pageMeta } from '@/lib/seo';
import { SPONSORED_REL } from '@/lib/affiliates';

export const metadata: Metadata = pageMeta({
  title: 'SleepBetterHub | Mouth Tape & Sleep Reviews',
  description: 'Independent UK and US reviews of mouth tape, nasal strips, sleep trackers and supplements, plus practical guides on snoring and night breathing.',
  path: '/',
  absoluteTitle: true,
});
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Newsletter } from '@/components/Newsletter';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { allProducts } from '@/lib/products';
import { getPublishedPosts } from '@/lib/blog';

export default function Home() {
  const trending = allProducts.filter(p => p.featured || p.rating > 4.5).slice(0, 6);
  const latestPosts = getPublishedPosts().slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="border-b bg-gradient-to-b from-muted/40 to-background">
        <div className="container pt-16 pb-20 md:pt-20 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs tracking-[1px] text-muted-foreground mb-6">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> UPDATED FOR 2026
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
                Mouth tape, nasal strips, and sleep guides<br />for <span className="text-primary">better nights</span>.
              </h1>
              <p className="max-w-xl text-xl text-muted-foreground mb-8">
                Practical UK guides on snoring, mouth breathing, and side-sleeper pillows. Prices are taken from the live listing, and safety notes sit on every mouth-tape page.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/mouth-tape">
                  <Button size="lg" className="group h-12 px-8 text-base">
                    Explore Mouth Tape Hub <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition" />
                  </Button>
                </Link>
                <Link href="/quiz">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                    Take the 2-Minute Sleep Quiz
                  </Button>
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Free • No email required • Instant personalized recommendations</p>
            </div>

            {/* Hero visual - contained, no overlap */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative aspect-[5/4] w-full">
                <Image 
                  src="/images/hero-bedroom.jpg" 
                  alt="A calm bedroom" 
                  fill
                  className="rounded-3xl object-cover shadow-2xl" 
                  priority
                  loading="eager"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR — only claims the site can stand behind */}
      <section className="border-b bg-background py-5">
        <div className="container flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Safety notes on every mouth-tape page</div>
          <div className="flex items-center gap-1.5"><Award className="h-4 w-4" /> Prices checked against the live listing</div>
          <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /> Amazon links use our Associates tag</div>
        </div>
      </section>

      {/* TRENDING PRODUCTS — MOUTH TAPE HEAVY */}
      <section className="section bg-background">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="uppercase tracking-[2px] text-xs font-medium text-primary mb-1">TRENDING IN 2026</div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">Top-rated sleep solutions right now</h2>
            </div>
            <Link href="/mouth-tape" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View full Mouth Tape Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/mouth-tape">
              <Button variant="outline">Browse the full comparison →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MOUTH TAPE SPOTLIGHT + CTA */}
      <section className="section bg-muted/30 border-y">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-7">
              <div className="uppercase tracking-[2px] text-xs text-primary mb-3 font-medium">THE #1 TREND FOR 2026</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 leading-none">
                Mouth tape for sleep.<br />Beards, sensitive skin, and CPAP.
              </h2>
              <p className="max-w-lg text-lg text-muted-foreground mb-6">
                A comparison of the strips people actually ask about, with safety notes and a clear label when a shop button is not an affiliate link.
              </p>
              <div className="flex gap-3">
                <Link href="/mouth-tape">
                  <Button size="lg">Compare Top Mouth Tapes</Button>
                </Link>
                <Link href="/quiz">
                  <Button size="lg" variant="outline">Is it right for you?</Button>
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Featured: Dream Recovery, SomniFix, Hostage Tape, MyoTape &amp; more</p>
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl bg-card border p-2 shadow-sm relative aspect-[3/2]">
                <Image 
                  src="/images/value-mouth-tape.jpg" 
                  alt="Mouth tape strips on a flat surface" 
                  fill
                  className="rounded-2xl object-cover" 
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EIGHT SLEEP FEATURE */}
      <section className="section bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="rounded-3xl bg-card border p-2 shadow-sm relative aspect-[4/3]">
                <Image 
                  src="/images/eight-sleep-pod.jpg" 
                  alt="Eight Sleep Pod 6 temperature-controlled mattress cover — UK review 2026" 
                  fill
                  className="rounded-2xl object-cover" 
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>

            <div className="md:col-span-7 order-1 md:order-2">
              <div className="uppercase tracking-[2px] text-xs text-primary mb-3 font-medium">FEATURED REVIEW</div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4 leading-none">
                Eight Sleep Pod 6<br />UK Review 2026
              </h2>
              <p className="max-w-lg text-lg text-muted-foreground mb-4">
                The temperature-controlled sleep system used by F1 teams and elite athletes. 
                Active cooling from 12°C to 43°C, dual-zone for couples, and sleep tracking without a wearable.
              </p>
              <p className="text-muted-foreground mb-6">
                <span className="font-medium text-foreground">From £2,295</span> • 30-night trial • Used by professional athletes
              </p>
              <div className="flex gap-3">
                <Link href="/reviews/eight-sleep-pod-6">
                  <Button size="lg">Read Full Review</Button>
                </Link>
                <Link href="/go/eight-sleep-pod-6" target="_blank" rel={SPONSORED_REL}>
                  <Button size="lg" variant="outline">Shop Eight Sleep UK</Button>
                </Link>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Link to Eight Sleep. No affiliate code is attached yet.{' '}
                <Link href="/guides/eight-sleep-f1" className="underline hover:text-foreground">Why F1 teams use Eight Sleep →</Link>
              </p>
            </div>
          </div>

          {/* Eight Sleep Accessories - compact row */}
          <div className="mt-10 pt-8 border-t">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium">Eight Sleep Accessories</div>
              <Link href="/reviews/eight-sleep-pod-6#accessories" className="text-xs text-primary hover:underline">View all →</Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Link href="/go/eight-sleep-base" target="_blank" rel={SPONSORED_REL} className="rounded-lg border bg-card p-3 hover:bg-muted/40 transition text-center">
                <div className="text-sm font-medium">Base</div>
                <div className="text-lg font-semibold tracking-tight">£1,699</div>
                <div className="text-[10px] text-muted-foreground">Pod bed frame</div>
              </Link>
              <Link href="/go/eight-sleep-blanket" target="_blank" rel={SPONSORED_REL} className="rounded-lg border bg-card p-3 hover:bg-muted/40 transition text-center">
                <div className="text-sm font-medium">Blanket</div>
                <div className="text-lg font-semibold tracking-tight">£799</div>
                <div className="text-[10px] text-muted-foreground">Pod 5/6 only</div>
              </Link>
              <Link href="/go/eight-sleep-pillow-cover" target="_blank" rel={SPONSORED_REL} className="rounded-lg border bg-card p-3 hover:bg-muted/40 transition text-center">
                <div className="text-sm font-medium">Pillow Cover</div>
                <div className="text-lg font-semibold tracking-tight">£999</div>
                <div className="text-[10px] text-muted-foreground">Head cooling</div>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Brand-site links with no affiliate code yet. Accessories require a Pod system.</p>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS / STATS */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">How these pages are written</h2>
            <p className="text-muted-foreground mt-2">Guides use the product listing and published sources. Older star labels are editorial shorthand, not a counted test panel.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Safety notes", desc: "Mouth-tape pages say who should not use it" },
              { label: "Live prices", desc: "A price on the page was read off the listing" },
              { label: "No fake clinic", desc: "We do not invent doctors or tester panels" },
              { label: "Affiliate labels", desc: "Amazon links carry the Associates tag" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6 flex gap-4">
                <div className="mt-1 shrink-0">
                  <Image 
                    src="/images/logo.jpg" 
                    alt="" 
                    width={22} 
                    height={22} 
                    className="h-[22px] w-[22px] rounded-full object-cover ring-1 ring-border/50" 
                  />
                </div>
                <div>
                  <div className="font-semibold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TAKE THE QUIZ CTA */}
      <section className="section border-y bg-primary text-primary-foreground">
        <div className="container text-center">
          <div className="max-w-xl mx-auto">
            <div className="uppercase text-xs tracking-[3px] opacity-75 mb-3">2 MINUTES TO BETTER SLEEP</div>
            <h2 className="text-4xl font-semibold tracking-tighter mb-4">Is mouth taping right for you?</h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Answer a few honest questions about your sleep, breathing, and lifestyle. 
              Get instant personalized product recommendations + actionable next steps.
            </p>
            <Link href="/quiz">
              <Button size="lg" variant="secondary" className="px-10 h-12 text-base">Start the Free Sleep Quiz →</Button>
            </Link>
            <p className="text-xs opacity-70 mt-4">Takes about two minutes. No email.</p>
          </div>
        </div>
      </section>

      {/* LATEST FROM THE BLOG */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-1">LEARN</div>
              <h3 className="text-3xl font-semibold tracking-tight">Latest sleep research &amp; guides (new articles 1–2× per week)</h3>
            </div>
            <Link href="/blog" className="text-sm hidden md:block text-primary hover:underline">All articles →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border bg-card overflow-hidden card-hover">
                {post.image && (
                  <div className="h-40 overflow-hidden bg-muted">
                    <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                  </div>
                )}
                <div className="p-5">
                  <div className="text-xs text-muted-foreground mb-2">{post.category} • {post.readTime}</div>
                  <h4 className="font-semibold leading-snug tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Targeted internal links for high-volume global searches */}
          <div className="mt-6 text-sm text-muted-foreground">
            Popular guides: <Link href="/blog/best-pillow-for-side-sleepers" className="text-primary hover:underline">best pillow for side sleepers</Link> · <Link href="/blog/mouth-tape-vs-nasal-strips-for-snoring" className="text-primary hover:underline">mouth tape vs nasal strips for snoring</Link> · <Link href="/mouth-tape" className="text-primary hover:underline">best mouth tape 2026</Link> · <Link href="/reviews/eight-sleep-pod-6" className="text-primary hover:underline">Eight Sleep Pod 6 review</Link> · <Link href="/blog/how-to-stop-mouth-breathing-at-night" className="text-primary hover:underline">stop mouth breathing at night</Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER + ADSENSE SPOT */}
      <section className="section border-t bg-muted/20">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Newsletter />
            </div>
            <div className="lg:col-span-5">
              <AdPlaceholder label="Display Ad / Newsletter Partner" className="h-[178px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

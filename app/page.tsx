import Link from 'next/link';
import { ArrowRight, Award, Users, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { Newsletter } from '@/components/Newsletter';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { mouthTapeProducts, allProducts } from '@/lib/products';
import { blogPosts } from '@/lib/blog';

export default function Home() {
  const featuredMouthTape = mouthTapeProducts.filter(p => p.featured).slice(0, 4);
  const trending = allProducts.filter(p => p.featured || p.rating > 4.5).slice(0, 6);
  const latestPosts = blogPosts.slice(0, 3);

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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6">
                Best mouth tape 2026 &amp; science-backed tools<br />for <span className="text-primary">deeper sleep</span>.
              </h1>
              <p className="max-w-xl text-xl text-muted-foreground mb-8">
                Honest reviews and practical guides for how to fall asleep fast, sleep anxiety remedies, 
                stopping mouth breathing at night, and the mouth tape &amp; nasal tools that actually work. Tested on real sleepers.
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
              <div className="relative">
                <img 
                  src="/images/hero-bedroom.jpg" 
                  alt="Calming modern bedroom setup for deeper sleep and insomnia relief" 
                  className="rounded-3xl object-cover w-full h-[420px] lg:h-[480px] shadow-2xl" 
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS BAR */}
      <section className="border-b bg-background py-5">
        <div className="container flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {[1,2,3].map(i => <div key={i} className="h-6 w-6 rounded-full border-2 border-background bg-muted" />)}
            </div>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">12,400+</span> readers improved their sleep</span>
          </div>
          <div className="flex items-center gap-x-8 text-muted-foreground">
            <div className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Evidence-first reviews</div>
            <div className="flex items-center gap-1.5"><Award className="h-4 w-4" /> 47 products tested in 2025-26</div>
            <div className="flex items-center gap-1.5"><Users className="h-4 w-4" /> Real human testers</div>
          </div>
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
                Best mouth tape for sleep.<br />Tested for side sleepers, beards &amp; CPAP.
              </h2>
              <p className="max-w-lg text-lg text-muted-foreground mb-6">
                Independent 2026 comparison of every major sleep strip. Real testing for insomnia relief, 
                sleep anxiety, and switching from mouth breathing to nasal breathing — with full safety info.
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
              <div className="rounded-3xl bg-card border p-2 shadow-sm">
                <img 
                  src="/images/mouth-tape-product.jpg" 
                  alt="Premium mouth tape and sleep strips for how to stop mouth breathing at night" 
                  className="rounded-2xl w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS / STATS */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight">Why thousands trust SleepBetterHub for insomnia relief &amp; better sleep</h2>
            <p className="text-muted-foreground mt-2">We test products ourselves with real side sleepers, beard owners and CPAP users. No sponsored "best of" lists. Evidence-based guides for sleep anxiety, mouth breathing &amp; more.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Star className="h-5 w-5" />, label: "4.6+ avg rating", desc: "Across every reviewed product" },
              { icon: <Shield className="h-5 w-5" />, label: "Safety first", desc: "Every review includes clear warnings" },
              { icon: <Users className="h-5 w-5" />, label: "Real-world testing", desc: "Side sleepers, beards, CPAP users" },
              { icon: <Award className="h-5 w-5" />, label: "Independent", desc: "We buy products. We tell the truth." },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6 flex gap-4">
                <div className="mt-0.5 text-primary">{stat.icon}</div>
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
            <p className="text-xs opacity-70 mt-4">Used by 8,200+ people this month • Takes ~90 seconds</p>
          </div>
        </div>
      </section>

      {/* LATEST FROM THE BLOG */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary mb-1">LEARN</div>
              <h3 className="text-3xl font-semibold tracking-tight">Latest sleep research &amp; guides for insomnia, sleep anxiety &amp; mouth taping</h3>
            </div>
            <Link href="/blog" className="text-sm hidden md:block text-primary hover:underline">All articles →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border bg-card overflow-hidden card-hover">
                {post.image && (
                  <div className="h-40 overflow-hidden bg-muted">
                    <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
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

          {/* Targeted internal links for high-volume searches */}
          <div className="mt-6 text-sm text-muted-foreground">
            Popular searches we cover: <Link href="/blog/how-to-stop-mouth-breathing-at-night" className="text-primary hover:underline">how to stop mouth breathing at night</Link> · <Link href="/mouth-tape" className="text-primary hover:underline">best mouth tape 2026</Link> · <Link href="/blog/mouth-taping-benefits-risks" className="text-primary hover:underline">mouth taping benefits and risks</Link> · <Link href="/blog/sleep-hygiene-2026" className="text-primary hover:underline">evidence-based insomnia remedies</Link>
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

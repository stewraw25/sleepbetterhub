import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = pageMeta({
  title: 'Mouth Tape Compared: Types, Beards, CPAP',
  description: 'A UK comparison of mouth-tape types, who they are listed for, beards, CPAP, snoring, and how to apply a strip. This page is not a test and does not rank a winner.',
  path: '/mouth-tape',
  image: '/images/dream-recovery-tape.jpg',
});

export default function MouthTapeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl">
            <Breadcrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Mouth Tape Comparison', path: '/mouth-tape' },
              ]}
            />
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tighter">Mouth tape compared: types, beards, CPAP, and snoring</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              This is the comparison hub. It explains the main strip designs, who the listings are tagged for, and the safety notes that apply before anyone tries a tape. It does not rank a winner, and this site has not tested the products. For a step-by-step way to choose a design, read the{' '}
              <Link href="/blog/best-mouth-tape-2026" className="text-primary underline underline-offset-2">2026 buying guide</Link>.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-3xl py-10 space-y-8 text-[15px] leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Types of mouth tape</h2>
          <p className="mt-3 text-muted-foreground">
            The products on this page fall into three shapes. The labels come from the listings and the makers’ own descriptions, not from a wear test.
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">A strip over the lips.</strong> It covers the mouth. <Link href="/reviews/hostage-tape" className="text-primary underline underline-offset-2">Hostage Tape</Link> is this shape. On 21 November 2026 the Amazon UK title said “for Women”, colour Rose, and the bullets still said beard-friendly and PAP-friendly.
            </li>
            <li>
              <strong className="text-foreground">A strip around the lips.</strong> <Link href="/reviews/mytape" className="text-primary underline underline-offset-2">MyoTape</Link> is Oxygen Advantage’s design. It is meant to surround the mouth with elastic tension rather than seal the lips. The Amazon button is the sensitive-skin, medium pack, 30 nights. That is not a children’s pack.
            </li>
            <li>
              <strong className="text-foreground">A vented strip.</strong> <Link href="/reviews/somnifix" className="text-primary underline underline-offset-2">SomniFix</Link> has a small hole in the centre of a wider strip. The brand’s UK page calls this a safety vent and says the strip is designed to work with a CPAP mask. Amazon UK’s listing was still unavailable on 21 November 2026, so the shop button goes to the brand site and is not commissioned.
            </li>
          </ul>
          <p className="mt-3 text-muted-foreground">
            <Link href="/reviews/dream-recovery" className="text-primary underline underline-offset-2">Dream Recovery</Link>, <Link href="/reviews/zzztape" className="text-primary underline underline-offset-2">ZzzTape</Link>, and <Link href="/reviews/sayless" className="text-primary underline underline-offset-2">SayLess</Link> sell from their own sites. Those buttons have no affiliate code, and the product pages say so.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Who it may suit, and who should not use it</h2>
          <p className="mt-3 text-muted-foreground">
            Mouth tape is only worth considering if you can already breathe through your nose while you are awake. It does not treat sleep apnoea, insomnia, or a blocked nose. Do not use it if you cannot breathe through your nose, or if you have untreated sleep apnoea or another breathing disorder, unless a clinician who knows your case has said otherwise. This is not medical advice. The safety notes on each product page repeat this.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Beards and stubble</h2>
          <p className="mt-3 text-muted-foreground">
            Hostage Tape and SomniFix are the listings tagged for beards on this site. That is a label, not a hold test. On 21 November 2026, Hostage Tape’s Amazon title said “for Women” while the bullets still talked about facial hair, so read both before you buy. MyoTape’s beard pack was temporarily out of stock on that date; the button here is the sensitive-skin medium pack, not the beard pack.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">CPAP</h2>
          <p className="mt-3 text-muted-foreground">
            Some listings, including Hostage Tape and SomniFix, say they are PAP-friendly or designed to work with a CPAP mask. SomniFix’s UK page says a vented strip can help reduce mouth leaks. Those are the makers’ claims. This site has not tested tape with a CPAP mask. Ask the clinician who prescribed the mask before you add a strip.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Snoring</h2>
          <p className="mt-3 text-muted-foreground">
            If the aim is quieter snoring, start with the nose, not the tape. The{' '}
            <Link href="/blog/mouth-tape-vs-nasal-strips-for-snoring" className="text-primary underline underline-offset-2">mouth tape vs nasal strips guide</Link>
            {' '}follows NHS advice: a blocked nose is a reason to look at a strip or dilator first, and a chin strap or vestibular shield is what the NHS lists if your mouth falls open. Mouth tape has limited published evidence. Snoring with pauses, choking, or daytime sleepiness belongs with a GP, not a shop button.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">How to use a strip</h2>
          <p className="mt-3 text-muted-foreground">
            Follow the instructions in the pack. The listings and brand pages usually say: clean and dry the skin, place the strip as the design intends (over the lips, around them, or with a vent centred), and press the edges. Only try it if you can nose-breathe while awake. Start with part of a night, and take it off if you feel anxious, blocked, or short of breath. Do not use a strip on a child unless the product is made for that, and this hub is about adult listings.
          </p>
          <p className="mt-3 text-muted-foreground">
            The comparison table and filters are below. The{' '}
            <Link href="/blog/best-mouth-tape-2026" className="text-primary underline underline-offset-2">buying guide</Link>
            {' '}walks through the same designs in a shorter choose-by-situation order, including which UK listings were in stock in November 2026.
          </p>
        </section>
      </div>
      <Suspense fallback={<div className="container py-8 text-sm text-muted-foreground">Loading the comparison.</div>}>{children}</Suspense>
    </>
  );
}

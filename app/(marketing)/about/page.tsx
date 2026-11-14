import type { Metadata } from 'next';
import Link from 'next/link';
import { Newsletter } from '@/components/Newsletter';
import { ContactEmail } from '@/components/ContactEmail';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'About and Affiliate Disclosure',
  description: 'Who writes SleepBetterHub, how affiliate links work, and the medical disclaimer for mouth tape and other sleep products.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">About SleepBetterHub</h1>
      <p className="mt-3 text-xl text-muted-foreground">UK-focused guides to mouth tape, nasal strips, pillows, and other sleep products, with the shop link labelled.</p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-[15px]">
        <p>
          SleepBetterHub is written by the site’s editorial team. Pages are based on the current product listing,
          the maker’s own description, and public sources such as NHS physiotherapy leaflets. We do not run a sleep
          clinic, and we do not have a tester panel. Older pages that named doctors or a 12-person trial were wrong.
          Those bylines and those test claims have been removed.
        </p>

        <h2>Our Standards</h2>
        <ul>
          <li>We disclose affiliate links. Amazon buttons use the Associates tag already in the project. Some brand sites have no code, and the button says so.</li>
          <li>A price on a page is a price we read on that listing, with the date. It will move.</li>
          <li>We do not publish star ratings or customer review counts. Older numbers have been taken off the pages and out of the structured data.</li>
          <li>Every mouth tape page includes safety notes. Nothing here is medical advice.</li>
          <li>This site has not run product tests. Sentences that said we had have been removed.</li>
        </ul>

        <h2 id="affiliate-disclosure">Affiliate Disclosure</h2>
        <p>
          SleepBetterHub participates in affiliate programs, including Amazon Associates (tag stewraw25-21) and, where a brand has provided a code, that brand’s program.
          When you click an affiliate link and make a purchase, we may earn a commission. You should not pay more because you clicked.
          Some buttons go to a brand site with no code, and the page says so.
        </p>

        <h2 id="medical-disclaimer">Medical &amp; Safety Disclaimer</h2>
        <p className="rounded bg-amber-50 dark:bg-amber-950 p-4 text-sm border border-amber-200 dark:border-amber-900">
          Nothing on this site is medical advice. Mouth taping can be dangerous for people with certain conditions 
          (untreated sleep apnea, nasal obstruction, COPD, etc.). Always consult a physician or sleep specialist 
          before making changes to your sleep routine, especially if you have or suspect a sleep disorder.
        </p>

        <h2>Who writes this</h2>
        <p>
          The byline on every guide is the SleepBetterHub editorial team. There is no doctor on staff to name.
          If a page describes a product, it should say whether that detail came from the listing or from a public leaflet.
        </p>
      </div>

      <div className="mt-12 border-t pt-10">
        <h3 className="font-semibold mb-3">Get the notes by email</h3>
        <Newsletter />
      </div>

      <div className="mt-12 text-xs text-muted-foreground">
        Questions? <ContactEmail className="underline" />.
        Privacy, cookies, and terms: <Link href="/privacy" className="underline">privacy</Link>, <Link href="/cookies" className="underline">cookies</Link>, <Link href="/terms" className="underline">terms</Link>.
      </div>
    </div>
  );
}

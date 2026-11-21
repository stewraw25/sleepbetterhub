import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactEmail } from '@/components/ContactEmail';
import { pageMeta } from '@/lib/seo';
import { DATA_CONTROLLER_NAME } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Terms',
  description: 'How SleepBetterHub works: guides and shop links, Amazon Associates tag stewraw25-21, no product tests, and no medical advice.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">Terms</h1>
      <p className="mt-3 text-xl text-muted-foreground">
        Plain terms for using the site. They describe what the pages do. They are not a solicitor’s document.
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-[15px]">
        <h2>What the site is</h2>
        <p>
          SleepBetterHub publishes guides and product notes for readers in the UK. It does not sell the products, take payment, or create customer accounts. The publisher is {DATA_CONTROLLER_NAME}.
        </p>

        <h2>Not medical advice</h2>
        <p>
          Nothing here is medical advice, a diagnosis, or a prescription. Mouth tape can be unsafe if you cannot breathe through your nose. Supplements can interact with medicines. Talk to a doctor or pharmacist about your own health. The longer disclaimer is on the <Link href="/about">about page</Link>.
        </p>

        <h2>Affiliate links</h2>
        <p>
          Some buttons are affiliate links. Amazon buttons use the Associates tag <code>stewraw25-21</code> on Amazon UK. You should not pay more because you used them. Some buttons go to a brand site with no affiliate code, and the page says so. A purchase is a contract with Amazon or that brand, not with this site.
        </p>

        <h2>What the pages do not claim</h2>
        <p>
          This site has not run product tests, a tester panel, or a clinic. Prices and stock were copied from listings on the dates the pages name, and they change. Star ratings and review counts are not published as scores from this site. If a sentence used to say otherwise, it has been removed until there is a source.
        </p>

        <h2>Other sites and these pages</h2>
        <p>
          External sites, including Amazon, are responsible for their own content, prices, and privacy notices. Pages on this site can be updated or removed. The <Link href="/privacy">privacy</Link> and <Link href="/cookies">cookie</Link> pages describe the email form and the theme setting.
        </p>
        <p>
          Questions: <ContactEmail className="underline" />.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactEmail } from '@/components/ContactEmail';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Cookies',
  description: 'SleepBetterHub does not set analytics or advertising cookies. The theme control uses local storage. Shop links leave this site.',
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">Cookies</h1>
      <p className="mt-3 text-xl text-muted-foreground">
        What the site code does with cookies, and what it does not.
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-[15px]">
        <h2>Cookies set by this site</h2>
        <p>
          The application does not set analytics cookies, advertising cookies, or a cookie banner. There is no Google Analytics, Plausible, Vercel Analytics, or similar script in the project.
        </p>
        <p>
          The light/dark button uses the theme library already in the site. That library stores the choice in the browser’s local storage (the usual key is <code>theme</code>). That is not a cookie, and it is not sent to the server with each page view.
        </p>

        <h2>When you leave via a shop button</h2>
        <p>
          A shop button redirects you to Amazon UK or to a brand website. Those sites can set their own cookies after you arrive. Those cookies are not set by SleepBetterHub, and this site does not read them. Amazon links use the Associates tag <code>stewraw25-21</code>.
        </p>

        <h2>How to clear what is stored on your device</h2>
        <p>
          Use your browser’s settings for cookies, site data, and local storage if you want the theme choice removed. Email <ContactEmail className="underline" /> if the question is about the newsletter address. That is described on the <Link href="/privacy">privacy page</Link>.
        </p>
      </div>
    </div>
  );
}

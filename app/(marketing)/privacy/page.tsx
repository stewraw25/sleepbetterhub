import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactEmail } from '@/components/ContactEmail';
import { pageMeta } from '@/lib/seo';
import { DATA_CONTROLLER_PLACEHOLDER, POSTAL_ADDRESS_PLACEHOLDER } from '@/lib/site';

export const metadata: Metadata = pageMeta({
  title: 'Privacy',
  description: 'What SleepBetterHub collects: a newsletter email via Resend, and nothing else we store. How to ask for it to be deleted.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">Privacy</h1>
      <p className="mt-3 text-xl text-muted-foreground">
        What this site actually collects, based on the code that is running, and how to ask for an email address to be removed.
      </p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-[15px]">
        <h2>Who is responsible</h2>
        <p>
          The site is published as SleepBetterHub. The legal name of the data controller has not been confirmed for this page:{' '}
          {DATA_CONTROLLER_PLACEHOLDER}. A postal address has not been published: {POSTAL_ADDRESS_PLACEHOLDER}.
          To ask a privacy question, or to ask for your email to be deleted, use <ContactEmail className="underline" />.
        </p>

        <h2>Email you type into the newsletter form</h2>
        <p>
          The newsletter form sends the address you type to this site (<code>/api/newsletter</code>). If a Resend API key and a Resend audience id are both configured, the address is added to that Resend audience and a welcome email is sent through Resend. The weekly digest job, when it is run, can email that audience through Resend as well.
        </p>
        <p>
          If Resend is not configured, the form shows an error and the address is not saved. The site does not keep a separate copy in its own database. There is no user account and no password.
        </p>
        <p>
          The address is used to send those emails. It is not sold. To be removed, email <ContactEmail className="underline" /> and say so. There is no automatic unsubscribe button in the code.
        </p>

        <h2>Sleep Assistant, quiz, and search</h2>
        <p>
          The Sleep Assistant sends the sentence you type to <code>/api/chat</code>. The server picks a reply from the words in that sentence and does not write the message to a database or send it to a third-party AI service.
        </p>
        <p>
          The quiz keeps your answers in the browser for that visit. They are not sent to a server. A search term is only in the page address. It is not stored.
        </p>

        <h2>Shop links</h2>
        <p>
          Product buttons go through <code>/go/[slug]</code>, which redirects to Amazon UK or to a brand site. Amazon links include the Associates tag <code>stewraw25-21</code>. Some brand links have no affiliate code. This site does not receive your Amazon account, your payment details, or what you bought. Amazon and the brand sites have their own privacy notices.
        </p>

        <h2>Cookies and the theme toggle</h2>
        <p>
          The application code does not set analytics cookies or advertising cookies. The light/dark control stores a theme choice in the browser’s local storage, not in a cookie. Details are on the <Link href="/cookies">cookie page</Link>.
        </p>

        <h2>What you can ask</h2>
        <p>
          You can email <ContactEmail className="underline" /> to ask what address is held, to correct it, or to have it deleted from the Resend audience. This page does not list a regulator registration number, because none is recorded in the project.
        </p>
      </div>
    </div>
  );
}

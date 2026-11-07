import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container max-w-xl py-20">
      <h1 className="text-4xl font-semibold tracking-tighter">That page does not exist</h1>
      <p className="mt-3 text-muted-foreground">
        The address may be out of date. These pages are the useful ones.
      </p>
      <ul className="mt-6 space-y-2 text-primary">
        <li><Link href="/" className="underline underline-offset-2">Home</Link></li>
        <li><Link href="/mouth-tape" className="underline underline-offset-2">Mouth tape comparison</Link></li>
        <li><Link href="/blog/best-pillow-for-side-sleepers" className="underline underline-offset-2">Best pillow for side sleepers</Link></li>
        <li><Link href="/blog/mouth-tape-vs-nasal-strips-for-snoring" className="underline underline-offset-2">Mouth tape vs nasal strips for snoring</Link></li>
        <li><Link href="/blog" className="underline underline-offset-2">All guides</Link></li>
      </ul>
    </div>
  );
}

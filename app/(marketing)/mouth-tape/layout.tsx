import { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Best Mouth Tape 2026',
  description: 'Compare mouth tapes for side sleepers, beards, CPAP users and sensitive skin, with safety notes and current UK shop links.',
  path: '/mouth-tape',
  image: '/images/dream-recovery-tape.jpg',
});

export default function MouthTapeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter">Mouth tapes listed for 2026</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              A comparison for side sleepers, beards, CPAP users, and sensitive skin. This page does not rank a winner, and it is not a test.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Choosing between tape and a nose strip for snoring? Read{' '}
              <Link href="/blog/mouth-tape-vs-nasal-strips-for-snoring" className="text-primary underline underline-offset-2">mouth tape vs nasal strips for snoring</Link>.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<div className="container py-8 text-sm text-muted-foreground">Loading the comparison.</div>}>{children}</Suspense>
    </>
  );
}

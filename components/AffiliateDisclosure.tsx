import type { ReactNode } from 'react';
import Link from 'next/link';

export function AffiliateDisclosure({ children }: { children?: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground bg-muted/50 border rounded-lg p-3">
      <strong className="font-medium text-foreground">Affiliate disclosure. </strong>
      {children ?? (
        <>
          Buttons to Amazon use our Amazon Associates tag. Buttons to a brand site are only commissioned when that site has given us an affiliate code. You should not pay extra because you clicked through.
        </>
      )}{' '}
      <Link href="/about" className="underline underline-offset-2 hover:text-foreground">
        Full disclosure
      </Link>
      .
    </p>
  );
}

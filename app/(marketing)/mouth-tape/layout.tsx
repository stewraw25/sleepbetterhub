import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Best Mouth Tape 2026',
  description: 'Compare mouth tapes for side sleepers, beards, CPAP users and sensitive skin, with safety notes and current UK shop links.',
  path: '/mouth-tape',
  image: '/images/dream-recovery-tape.jpg',
});

export default function MouthTapeLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from 'next';
import QuizClient from '@/components/QuizClient';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta({
  title: 'Mouth Tape Sleep Quiz',
  description: 'A two-minute quiz that suggests a mouth tape to consider, and warns you off taping if your nose is blocked or apnoea is a concern.',
  path: '/quiz',
});

export default function QuizPage() {
  return <QuizClient />;
}

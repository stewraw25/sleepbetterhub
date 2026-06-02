import type { Metadata } from 'next';
import QuizClient from '@/components/QuizClient';

export const metadata: Metadata = {
  title: 'Sleep Quiz: Is Mouth Taping Right for You? (Insomnia & Sleep Anxiety)',
  description: 'Take the free 2-minute sleep quiz. Get personalized mouth tape recommendations for side sleepers, beards, CPAP users, and those struggling with how to fall asleep or sleep anxiety. Includes full safety warnings.',
  openGraph: {
    title: 'Sleep Quiz — Is Mouth Taping Right for You?',
    description: 'Instant personalized recommendations for best mouth tape 2026 based on your sleep style, breathing, and sensitivity. Evidence-based with safety first.',
  },
};

export default function QuizPage() {
  return <QuizClient />;
}

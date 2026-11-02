'use client';

import dynamic from 'next/dynamic';

const AIChat = dynamic(() => import('@/components/AIChat').then((mod) => mod.AIChat), {
  ssr: false,
});

export function AIChatLoader() {
  return <AIChat />;
}

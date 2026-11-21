'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const AIChat = dynamic(() => import('@/components/AIChat').then((mod) => mod.AIChat), {
  ssr: false,
  loading: () => (
    <button
      type="button"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
      aria-label="Open Sleep Assistant"
      disabled
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  ),
});

export function AIChatLoader() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <button
        type="button"
        onClick={() => setReady(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
        aria-label="Open Sleep Assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return <AIChat initialOpen />;
}

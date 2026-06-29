'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      toast.success('Thank you! You\'re now subscribed to our weekly sleep science digest.', {
        description: 'Check your inbox for the latest research + product updates.',
      });
      setEmail('');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-8 md:p-10">
      <div className="max-w-md">
        <div className="flex items-center gap-3 mb-2">
          <Image src="/images/logo.jpg" alt="SleepBetterHub" width={24} height={24} className="h-6 w-6 rounded-full object-cover ring-1 ring-border" />
          <div className="uppercase tracking-[2px] text-xs font-medium text-primary">Stay Informed</div>
        </div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2">Weekly Sleep Insights</h3>
        <p className="text-muted-foreground mb-6">
          Evidence-based tips, new product tests, and sleep science summaries. No spam, ever. Unsubscribe anytime.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-11"
            required
          />
          <Button type="submit" disabled={loading} className="h-11 px-8">
            {loading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        <p className="text-[10px] text-muted-foreground mt-3">
          We respect your inbox. Read our <a href="/about" className="underline">privacy policy</a>.
        </p>
      </div>
    </div>
  );
}

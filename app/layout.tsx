import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';
import { AIChat } from '@/components/AIChat';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  // Uses your final domain in production, falls back gracefully on Vercel preview URLs
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepmask.tech')
  ),
  title: {
    default: 'SleepBetterHub | Best Mouth Tape 2026, Nasal Strips & Natural Sleep Aids for Insomnia & Sleep Problems',
    template: '%s | SleepBetterHub',
  },
  description: 'Science-backed mouth tape, nasal strips, sleep trackers & natural sleep aids to help with insomnia, sleep anxiety, mouth breathing & snoring. Honest 2026 reviews & guides for better sleep worldwide.',
  keywords: ['mouth tape for sleep', 'best mouth tape 2026', 'how to stop mouth breathing', 'insomnia remedies', 'natural sleep aids', 'nasal strips', 'sleep anxiety', 'how to fall asleep fast', 'sleep optimization', 'sleep problems'],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'SleepBetterHub — Best Mouth Tape, Nasal Strips & Natural Sleep Aids 2026',
    description: 'Independent reviews of the best mouth tape, sleep strips, nasal dilators & sleep tools. Evidence-based guides for insomnia, sleep anxiety, mouth breathing and deeper sleep — for sleepers worldwide.',
    images: [{ url: '/images/hero-bedroom.jpg' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-center" richColors closeButton />
        </ThemeProvider>

        {/* Global SEO / E-E-A-T structured data for sleep products and site */}
        <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SleepBetterHub',
            url: 'https://sleepmask.tech',
            description: 'Independent reviews and guides for mouth tape, nasal strips, sleep aids and insomnia remedies worldwide.',
            sameAs: ['https://twitter.com', 'https://www.youtube.com'],
          })
        }} />
        <Script id="website-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'SleepBetterHub',
            url: 'https://sleepmask.tech',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://sleepmask.tech/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }} />
        <AIChat />
      </body>
    </html>
  );
}

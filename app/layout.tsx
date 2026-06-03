import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';

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
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepbetterhub.vercel.app')
  ),
  title: {
    default: 'SleepBetterHub | Best Mouth Tape 2026, Sleep Strips & How to Fall Asleep Fast',
    template: '%s | SleepBetterHub',
  },
  description: 'Expert-tested mouth tape & sleep strips 2026 reviews. Practical guides for how to fall asleep fast naturally, sleep anxiety remedies, stop mouth breathing at night. Honest comparisons for side sleepers, beards, CPAP & sensitive skin — evidence-based & safe.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'SleepBetterHub — Best Mouth Tape 2026, Sleep Strips & How to Fall Asleep Fast',
    description: 'Independent 2026 reviews of the best mouth tape, sleep strips & nasal tools. Science-backed guides on how to fall asleep fast naturally, sleep anxiety remedies, stop mouth breathing safely.',
    images: [{ url: '/images/hero-bedroom.jpg' }],
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
      </body>
    </html>
  );
}

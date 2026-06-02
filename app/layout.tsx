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
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://sleepbetterhub.com')
  ),
  title: {
    default: 'SleepBetterHub | Best Mouth Tape 2026, Sleep Strips & Insomnia Remedies',
    template: '%s | SleepBetterHub',
  },
  description: 'Expert-tested mouth tape reviews, practical guides for how to fall asleep fast, sleep anxiety remedies, and evidence-based tools to stop mouth breathing. Honest 2026 comparisons for deeper sleep — side sleepers, CPAP, beards & sensitive skin.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'SleepBetterHub — Best Mouth Tape 2026, Sleep Anxiety Remedies & Insomnia Help',
    description: 'Independent reviews of the best mouth tape and sleep strips. Science-backed guides on how to fall asleep faster, reduce sleep anxiety, and switch to nasal breathing safely.',
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

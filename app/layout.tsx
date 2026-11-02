import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from 'sonner';
import { JsonLd } from '@/components/JsonLd';
import { AIChatLoader } from '@/components/AIChatLoader';
import { getSiteUrl, SITE_NAME } from '@/lib/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SleepBetterHub | Mouth Tape & Sleep Reviews',
    template: '%s | SleepBetterHub',
  },
  description: 'Independent UK and US reviews of mouth tape, nasal strips, sleep trackers and supplements, plus practical guides on snoring and night breathing.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'SleepBetterHub | Mouth Tape & Sleep Reviews',
    description: 'Independent UK and US reviews of mouth tape, nasal strips, sleep trackers and supplements, plus practical guides on snoring and night breathing.',
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    images: [{ url: '/images/hero-bedroom.jpg', width: 1200, height: 630, alt: 'A calm bedroom' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SleepBetterHub | Mouth Tape & Sleep Reviews',
    description: 'Independent UK and US reviews of mouth tape, nasal strips, sleep trackers and supplements.',
    images: ['/images/hero-bedroom.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster position="top-center" richColors closeButton />
        </ThemeProvider>

        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: siteUrl,
            logo: `${siteUrl}/images/logo.jpg`,
            description: 'Independent reviews and guides for mouth tape, nasal strips, and other sleep products.',
          }}
        />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: siteUrl,
          }}
        />
        <AIChatLoader />
      </body>
    </html>
  );
}

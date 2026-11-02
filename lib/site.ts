/**
 * Public site URL used for canonicals, Open Graph, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL when a custom domain replaces the Vercel alias.
 * Do not use VERCEL_URL here: that is the deployment hostname, and using it
 * makes every deploy emit a different canonical.
 */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  return 'https://sleepbetterhub.vercel.app';
}

export const SITE_NAME = 'SleepBetterHub';

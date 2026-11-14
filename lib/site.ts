/**
 * Public site URL used for canonicals, Open Graph, sitemap, robots, and JSON-LD.
 * Production is https://sleepmask.tech. Set NEXT_PUBLIC_SITE_URL to override.
 * Do not use VERCEL_URL: that hostname changes on every deployment, including previews.
 */
export const DEFAULT_SITE_URL = 'https://sleepmask.tech';

/** Production Vercel alias. Requests to this host redirect to DEFAULT_SITE_URL. Preview hosts are left alone. */
export const LEGACY_VERCEL_HOST = 'sleepbetterhub.vercel.app';

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  return DEFAULT_SITE_URL;
}

export const SITE_NAME = 'SleepBetterHub';

/** Used on the privacy and terms pages. Not a guessed legal name. */
export const DATA_CONTROLLER_PLACEHOLDER = '[DATA CONTROLLER NAME – Stewart to confirm]';

/** Used on the privacy page. Not a guessed address. */
export const POSTAL_ADDRESS_PLACEHOLDER = '[POSTAL ADDRESS – Stewart to confirm]';

/**
 * Single contact address and the From address on newsletter mail.
 * Override with NEXT_PUBLIC_CONTACT_EMAIL. NEXT_PUBLIC_FROM_EMAIL is not read.
 */
export const CONTACT_EMAIL = 'hello@sleepmask.tech';

export function getContactEmail(): string {
  const configured = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  if (configured) return configured;
  return CONTACT_EMAIL;
}

export function isRealEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

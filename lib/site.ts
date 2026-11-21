/**
 * Public site URL used for canonicals, Open Graph, sitemap, robots, and JSON-LD.
 * Always https://sleepmask.tech, on every deployment (production and previews).
 * Deliberately not read from NEXT_PUBLIC_SITE_URL or VERCEL_URL: an env value on a
 * preview deployment previously leaked *.vercel.app hosts into canonical tags.
 */
export const DEFAULT_SITE_URL = 'https://sleepmask.tech';

/** Production Vercel alias. Requests to this host redirect to DEFAULT_SITE_URL. Preview hosts are left alone. */
export const LEGACY_VERCEL_HOST = 'sleepbetterhub.vercel.app';

export const SITE_URL = DEFAULT_SITE_URL;

export function getSiteUrl(): string {
  return SITE_URL;
}

/** True only for the Vercel production deployment (or a non-Vercel build). */
export function isProductionDeployment(): boolean {
  const env = process.env.VERCEL_ENV;
  return !env || env === 'production';
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

/**
 * Affiliate link management for SleepBetterHub.
 *
 * Optimized for Amazon Associates (UK) + direct brand programs.
 *
 * Key features:
 * - One global Amazon Associate Tag via NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG
 * - Products can declare `amazonAsin` for automatic Amazon link generation
 * - Per-product env overrides still work (NEXT_PUBLIC_AFF_XXX)
 * - Clean /go/[slug] redirects everywhere
 *
 * Setup steps (see full guide in README):
 * 1. Sign up at https://affiliate-program.amazon.co.uk/
 * 2. Get your Associate Tag (e.g. stewraw25-21)
 * 3. Set NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG in .env.local (or it defaults to stewraw25-21 for this site)
 * 4. For each product, find the real ASIN on Amazon.co.uk and add `amazonAsin: 'B08P7Z5Q2T'` (example) in products.ts
 */

import { getProductBySlug } from './products';

const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'stewraw25-21';

function getAmazonUrl(asin: string): string {
  if (!AMAZON_TAG) {
    return `https://www.amazon.co.uk/dp/${asin}`; // fallback without tag
  }
  // Standard Amazon Associates link format for UK
  return `https://www.amazon.co.uk/dp/${asin}?tag=${AMAZON_TAG}&linkCode=ogi&th=1`;
}

const AFFILIATE_OVERRIDES: Record<string, string> = {
  // Per-product full URL overrides (highest priority)
  // Mouth Tape
  'dream-recovery': process.env.NEXT_PUBLIC_AFF_DREAM_RECOVERY || '',
  'somnifix': process.env.NEXT_PUBLIC_AFF_SOMNIFIX || '',
  'hostage-tape': process.env.NEXT_PUBLIC_AFF_HOSTAGE_TAPE || '',
  'zzztape': process.env.NEXT_PUBLIC_AFF_ZZZTAPE || '',
  'mytape': process.env.NEXT_PUBLIC_AFF_MYOTAPE || '',
  'sayless': process.env.NEXT_PUBLIC_AFF_SAYLESS || '',

  // Nasal
  'breathe-right-clear': process.env.NEXT_PUBLIC_AFF_BREATHE_RIGHT || '',
  'nasal-dilator-pro': process.env.NEXT_PUBLIC_AFF_NASAL_DILATOR || '',

  // Gadgets
  'oura-ring-gen3': process.env.NEXT_PUBLIC_AFF_OURA || '',
  'eight-sleep-pod-4': process.env.NEXT_PUBLIC_AFF_EIGHT_SLEEP || '',

  // Mattresses
  'tempur-pedic-adapt': process.env.NEXT_PUBLIC_AFF_TEMPUR_PEDIC || '',

  // Supplements
  'magnesium-glycinate-sleep': process.env.NEXT_PUBLIC_AFF_MAGNESIUM || '',
  'apigenin-50mg': process.env.NEXT_PUBLIC_AFF_APIGENIN || '',
};

/**
 * Get the final affiliate destination URL for a product slug.
 * Priority:
 * 1. Explicit per-product override in .env.local (NEXT_PUBLIC_AFF_XXX)
 * 2. Amazon Associates link if the product has an `amazonAsin`
 * 3. The affiliateLink stored in the product data
 */
export function getAffiliateUrl(slug: string): string {
  const override = AFFILIATE_OVERRIDES[slug];
  if (override) return override;

  const product = getProductBySlug(slug);

  if (product?.amazonAsin) {
    return getAmazonUrl(product.amazonAsin);
  }

  return product?.affiliateLink || '#';
}

/**
 * Get a clean internal affiliate link (recommended for UI).
 * This goes through /go/[slug] which does a server redirect.
 * Benefits:
 *   - You can change destinations in one place
 *   - Clean URLs for users
 *   - Easy to add UTM params, logging, or A/B tests later
 */
export function getInternalAffiliateLink(slug: string): string {
  return `/go/${slug}`;
}

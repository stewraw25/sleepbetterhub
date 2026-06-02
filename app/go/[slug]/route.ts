import { NextRequest, NextResponse } from 'next/server';
import { getProductBySlug } from '@/lib/products';
import { getAffiliateUrl } from '@/lib/affiliates';

/**
 * Affiliate redirect handler.
 *
 * Usage: /go/dream-recovery  → 302 to the real affiliate offer
 *
 * Why this is powerful for affiliate sites:
 * - Clean, short links you can share or put in content
 * - Change the real destination (e.g. switch Amazon tag or brand program) without editing every page
 * - Central place to add tracking (UTMs, ref params, future analytics)
 * - Users see your domain first (trust + branding)
 *
 * In production you can enhance this with:
 * - Logging the click
 * - Adding UTM parameters: ?utm_source=sleepbetterhub&utm_medium=affiliate
 * - A/B testing different offers
 * - Cookie attribution
 */

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) {
    // Fallback to homepage or a 404
    return NextResponse.redirect(new URL('/', request.url), 302);
  }

  // Get the final destination (respects env var overrides)
  let destination = getAffiliateUrl(slug);

  // Optional: append consistent tracking parameters
  // You can customize this per program if needed
  const url = new URL(destination);
  if (!url.searchParams.has('ref')) {
    url.searchParams.set('ref', 'sleepbetterhub');
  }
  // Example UTM (uncomment if you want consistent tracking)
  // url.searchParams.set('utm_source', 'sleepbetterhub');
  // url.searchParams.set('utm_medium', 'affiliate');
  // url.searchParams.set('utm_campaign', slug);

  // 302 temporary redirect is standard and fine for affiliates
  return NextResponse.redirect(url.toString(), 302);
}

import type { BlogPost } from './blog';
import { getAffiliateUrl } from './affiliates';
import type { Product } from './products';
import { getSiteUrl, SITE_NAME } from './site';

export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const site = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

function isAmazonSearch(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.hostname.includes('amazon.') && (parsed.pathname === '/s' || parsed.pathname.startsWith('/gp/search'));
  } catch {
    return false;
  }
}

export function productJsonLd(product: Product) {
  const destination = getAffiliateUrl(product.slug);
  const priceText = product.price.trim();
  const search = isAmazonSearch(destination);
  // A search is not one product, and a price string without a currency is not an offer.
  const currency = !search && priceText.includes('£') && !priceText.includes('$')
    ? 'GBP'
    : !search && priceText.includes('$') && !priceText.includes('£')
      ? 'USD'
      : null;
  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    url: destination,
  };
  if (currency && product.priceValue > 0) {
    offer.priceCurrency = currency;
    offer.price = product.priceValue;
  }
  if (!search && typeof product.inStock === 'boolean') {
    offer.availability = product.inStock
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock';
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: { '@type': 'Brand', name: product.brand },
    description: product.description,
    // imageAlt is set when the file is not a photo of this product.
    ...(product.imageAlt ? {} : { image: `${getSiteUrl()}${product.image}` }),
    offers: offer,
  };
}

export function articleJsonLd(post: BlogPost) {
  const site = getSiteUrl();
  const authorIsOrg = /editorial team/i.test(post.author);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: authorIsOrg
      ? { '@type': 'Organization', name: post.author }
      : { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: site,
      logo: {
        '@type': 'ImageObject',
        url: `${site}/images/logo.jpg`,
      },
    },
    image: post.image ? [`${site}${post.image}`] : undefined,
    mainEntityOfPage: `${site}/blog/${post.slug}`,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

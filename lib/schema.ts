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

export function productJsonLd(product: Product) {
  const currency = product.price.trim().startsWith('$') ? 'USD' : 'GBP';
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: { '@type': 'Brand', name: product.brand },
    description: product.description,
    image: `${getSiteUrl()}${product.image}`,
    offers: {
      '@type': 'Offer',
      url: getAffiliateUrl(product.slug),
      priceCurrency: currency,
      price: product.priceValue,
      availability: product.inStock === false
        ? 'https://schema.org/OutOfStock'
        : 'https://schema.org/InStock',
    },
  };
}

export function editorialReviewJsonLd(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: product.longDescription,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Organization',
      name: `${SITE_NAME} Editorial Team`,
    },
    itemReviewed: {
      '@type': 'Product',
      name: product.name,
      brand: { '@type': 'Brand', name: product.brand },
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: getSiteUrl(),
    },
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
    dateModified: post.date,
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

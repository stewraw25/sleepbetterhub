import type { BlogPost } from './blog';
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

// Listing pages are affiliate notes, not a checkout. Do not emit Product or
// Offer JSON-LD. This site does not sell or ship, and the notes do not show
// a first-party rating. Offers are read as merchant listings (return policy
// and shipping). A Product with no review, aggregateRating, or offer is an
// incomplete product snippet. PR #6 removed the old editorial star markup
// for the same reason: those numbers were not reviews collected here.

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

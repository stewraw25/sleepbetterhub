import type { BlogPost } from './blog';
import { getSiteUrl, SITE_NAME } from './site';

export type BreadcrumbItem = { name: string; path: string };

export function jsonLdScript(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * BreadcrumbList for Google. Every ListItem must have a non-empty name and an
 * item URL. The name is also repeated on the item object so parsers that only
 * read item.name still have a label (the Search Console API had been showing
 * "Unnamed item" on otherwise valid pages).
 */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const site = getSiteUrl();
  const crumbs = items.filter((item) => item.name.trim().length > 0);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((item, index) => {
      const url = `${site}${item.path === '/' ? '' : item.path}`;
      const name = item.name.trim();
      return {
        '@type': 'ListItem',
        position: index + 1,
        name,
        item: {
          '@type': 'WebPage',
          '@id': url,
          name,
        },
      };
    }),
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

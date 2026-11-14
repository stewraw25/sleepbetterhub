import { getPublishedPosts } from './blog';
import { allProducts, categoryLabels, type Product } from './products';
import type { BlogPost } from './blog';

export type ProductHit = Product;
export type GuideHit = BlogPost;

function termsOf(raw: string): string[] {
  return raw.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

function matches(haystack: string, terms: string[]): boolean {
  const hay = haystack.toLowerCase();
  return terms.every((term) => hay.includes(term));
}

export function searchProducts(raw: string): Product[] {
  const terms = termsOf(raw);
  if (terms.length === 0) return [];
  return allProducts.filter((product) =>
    matches(
      [
        product.name,
        product.brand,
        product.slug,
        product.description,
        product.longDescription,
        categoryLabels[product.category],
        product.linkNote ?? '',
        ...product.bestFor,
      ].join(' '),
      terms,
    ),
  );
}

export function searchGuides(raw: string): BlogPost[] {
  const terms = termsOf(raw);
  if (terms.length === 0) return [];
  return getPublishedPosts().filter((post) =>
    matches(
      [
        post.title,
        post.excerpt,
        post.seoTitle ?? '',
        post.seoDescription ?? '',
        post.category,
        post.slug,
        ...post.tags,
      ].join(' '),
      terms,
    ),
  );
}

import { getPublishedPosts } from '@/lib/blog';
import { allProducts, categoryLabels } from '@/lib/products';
import { getSiteUrl, SITE_NAME } from '@/lib/site';

/**
 * /llms.txt — a plain Markdown map of the site for AI assistants (llmstxt.org format).
 * Built from the same post and product data as the sitemap, so it stays in step with the site.
 */
export const dynamic = 'force-static';
export const revalidate = 86400;

function oneLine(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function GET() {
  const site = getSiteUrl();
  const posts = getPublishedPosts();
  const lines: string[] = [];

  lines.push(`# ${SITE_NAME}`);
  lines.push('');
  lines.push(
    '> UK guides to sleep products: mouth tape, nasal strips, sleep masks, pillows, duvets, sleep trackers and sleep supplements. ' +
      'Pages explain how to choose and link to shops, labelled as affiliate links. The site has not run its own product tests and does not publish star ratings. ' +
      'Nothing here is medical advice. For snoring with pauses in breathing, choking or daytime sleepiness, the pages point readers to the NHS and a GP.',
  );
  lines.push('');
  lines.push('Health claims on this site cite public sources such as the NHS, The Sleep Charity and published research reviews. Prices are dated readings from the linked shop and will change.');
  lines.push('');

  lines.push('## Key pages');
  lines.push(`- [Mouth tape: how to choose and the safety notes](${site}/mouth-tape): comparison of mouth tapes with who should not use them`);
  lines.push(`- [Sleep product quiz](${site}/quiz): short questions that point to a product type`);
  lines.push(`- [About, affiliate disclosure and medical disclaimer](${site}/about): who writes the site and how links earn`);
  lines.push('');

  lines.push('## Guides');
  for (const post of posts) {
    lines.push(`- [${oneLine(post.title)}](${site}/blog/${post.slug}): ${oneLine(post.seoDescription || post.excerpt)}`);
  }
  lines.push('');

  lines.push('## Product notes');
  for (const product of allProducts) {
    lines.push(`- [${oneLine(product.name)}](${site}/reviews/${product.slug}): ${categoryLabels[product.category]}`);
  }
  lines.push('');

  lines.push('## Optional');
  lines.push(`- [Categories](${site}/categories)`);
  lines.push(`- [Privacy](${site}/privacy)`);
  lines.push(`- [Terms](${site}/terms)`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

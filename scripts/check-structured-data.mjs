#!/usr/bin/env node
/**
 * Check JSON-LD in the Next.js production build.
 *
 *   npm run build && npm run check:structured-data
 *
 * Reads every HTML file under .next/server (override with a directory
 * argument). Each application/ld+json block must parse. A Product must
 * include a review, aggregateRating, or offers. An Offer must include
 * hasMerchantReturnPolicy and shippingDetails. Rating, review, and offer
 * price values must appear in the visible text of the same page.
 */

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const RATING_KEYS = ['ratingValue', 'reviewCount', 'ratingCount', 'bestRating', 'worstRating', 'reviewBody'];
const OFFER_VALUE_KEYS = ['price', 'priceCurrency'];

const root = path.resolve(process.argv[2] || path.join('.next', 'server'));

function nonempty(value) {
  if (value == null) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (typeof value === 'number' || typeof value === 'boolean') return true;
  if (Array.isArray(value)) return value.some((item) => nonempty(item));
  if (typeof value === 'object') return Object.keys(value).length > 0;
  return false;
}

function typeNames(node) {
  const value = node['@type'];
  const list = Array.isArray(value) ? value : [value];
  return list.filter((item) => typeof item === 'string');
}

function hasType(node, name) {
  return typeNames(node).some((item) => {
    return item === name || item === `https://schema.org/${name}` || item === `http://schema.org/${name}`;
  });
}

function walk(node, visit, seen = new Set()) {
  if (!node || typeof node !== 'object') return;
  if (seen.has(node)) return;
  seen.add(node);
  if (Array.isArray(node)) {
    for (const item of node) walk(item, visit, seen);
    return;
  }
  visit(node);
  for (const value of Object.values(node)) walk(value, visit, seen);
}

function decodeHtml(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, digits) => String.fromCodePoint(Number(digits)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&amp;/g, '&');
}

function visibleText(html) {
  const withoutHidden = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
  return decodeHtml(withoutHidden).replace(/\s+/g, ' ').trim().toLowerCase();
}

function appears(visible, raw) {
  const value = String(raw).trim().toLowerCase().replace(/\s+/g, ' ');
  if (!value) return false;
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (/^\d+(\.\d+)?$/.test(value)) {
    // A sentence period may follow the number. A decimal point may not.
    const pattern = new RegExp(`(?<![\\d.])${escaped}(?!\\d)(?!\\.\\d)`);
    if (pattern.test(visible)) return true;
    if (/^\d+$/.test(value) && value.length > 3) {
      const grouped = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      const groupedPattern = new RegExp(`(?<![\\d.])${grouped}(?!\\d)(?!\\.\\d)`);
      if (groupedPattern.test(visible)) return true;
    }
    return false;
  }
  return visible.includes(value);
}

function labelFor(node) {
  if (typeof node.name === 'string' && node.name.trim()) return node.name.trim();
  if (typeof node.headline === 'string' && node.headline.trim()) return node.headline.trim();
  return typeNames(node).join('/') || 'item';
}

function checkData(data, visible, errors, counts) {
  walk(data, (node) => {
    for (const name of typeNames(node)) counts.types.add(name);

    if (hasType(node, 'Product')) {
      counts.products += 1;
      const ok = nonempty(node.review) || nonempty(node.aggregateRating) || nonempty(node.offers);
      if (!ok) {
        errors.push(`Product "${labelFor(node)}" has no review, aggregateRating, or offers`);
      }
    }

    if (hasType(node, 'Offer')) {
      counts.offers += 1;
      if (!nonempty(node.hasMerchantReturnPolicy)) {
        errors.push(`Offer "${labelFor(node)}" is missing hasMerchantReturnPolicy`);
      }
      if (!nonempty(node.shippingDetails)) {
        errors.push(`Offer "${labelFor(node)}" is missing shippingDetails`);
      }
      for (const key of OFFER_VALUE_KEYS) {
        const value = node[key];
        if (typeof value === 'string' || typeof value === 'number') {
          counts.claims += 1;
          if (!appears(visible, value)) {
            errors.push(`Offer ${key} ${JSON.stringify(value)} is not visible on the page`);
          }
        }
      }
    }

    const ratingNode = hasType(node, 'AggregateRating') || hasType(node, 'Review') || hasType(node, 'Rating');
    for (const key of RATING_KEYS) {
      if (!ratingNode && key !== 'reviewBody') continue;
      const value = node[key];
      if (typeof value !== 'string' && typeof value !== 'number') continue;
      counts.claims += 1;
      if (!appears(visible, value)) {
        errors.push(`${key} ${JSON.stringify(value)} is not visible on the page`);
      }
    }
  });
}

function extractBlocks(html) {
  const blocks = [];
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match = pattern.exec(html);
  while (match) {
    if (/type\s*=\s*["']application\/ld\+json["']/i.test(match[1])) {
      blocks.push(match[2].trim());
    }
    match = pattern.exec(html);
  }
  return blocks;
}

function checkHtml(html) {
  const errors = [];
  const counts = { blocks: 0, products: 0, offers: 0, claims: 0, types: new Set() };
  const visible = visibleText(html);

  if (/itemtype\s*=\s*["']https?:\/\/schema\.org\/(Product|Offer)["']/i.test(html)) {
    errors.push('microdata Product or Offer is present');
  }

  for (const raw of extractBlocks(html)) {
    counts.blocks += 1;
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      try {
        data = JSON.parse(decodeHtml(raw));
      } catch (error) {
        errors.push(`JSON-LD block is not valid JSON (${error.message})`);
        continue;
      }
    }
    checkData(data, visible, errors, counts);
  }

  const unescaped = html.replace(/\\u003c/gi, '<').replace(/\\"/g, '"');
  if (/"@type"\s*:\s*"Product"/.test(unescaped) && counts.products === 0) {
    errors.push('Product markup is present outside a parsed JSON-LD block');
  }
  if (/"@type"\s*:\s*"Offer"/.test(unescaped) && counts.offers === 0) {
    errors.push('Offer markup is present outside a parsed JSON-LD block');
  }

  return { errors, counts };
}

function page(body, jsonBlocks) {
  const scripts = jsonBlocks
    .map((block) => `<script type="application/ld+json">${JSON.stringify(block)}</script>`)
    .join('');
  return `<!doctype html><html><body>${body}${scripts}</body></html>`;
}

function assertCheck(name, html, expectError) {
  const { errors } = checkHtml(html);
  const failed = expectError ? errors.length === 0 : errors.length > 0;
  if (failed) {
    throw new Error(`${name}\n${errors.join('\n') || '(no errors)'}`);
  }
}

function selfTest() {
  assertCheck(
    'bare product fails',
    page('<p>Listing notes, not a scored review. Score Not scored.</p>', [
      { '@context': 'https://schema.org', '@type': 'Product', name: 'Tape' },
    ]),
    true,
  );

  assertCheck(
    'offer without merchant fields fails',
    page('<p>Price when checked £12.90</p>', [
      {
        '@type': 'Product',
        name: 'Tape',
        offers: { '@type': 'Offer', price: 12.9, priceCurrency: 'GBP', url: 'https://example.com' },
      },
    ]),
    true,
  );

  assertCheck(
    'rating hidden from the page fails',
    page('<p>Score Not scored</p>', [
      {
        '@type': 'Product',
        name: 'Tape',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: 4.8, reviewCount: 1243 },
      },
    ]),
    true,
  );

  assertCheck(
    'visible editorial review passes',
    page('<p>Rated 4.5 out of 5, on a scale from 1 to 5. It stayed on through the night.</p>', [
      {
        '@type': 'Product',
        name: 'Tape',
        review: {
          '@type': 'Review',
          reviewBody: 'It stayed on through the night.',
          author: { '@type': 'Organization', name: 'SleepBetterHub' },
          reviewRating: { '@type': 'Rating', ratingValue: 4.5, bestRating: 5, worstRating: 1 },
        },
      },
    ]),
    false,
  );

  assertCheck(
    'organization and article stay valid',
    page('<h1>What tog duvet</h1><p>A buying note.</p>', [
      { '@context': 'https://schema.org', '@type': 'Organization', name: 'SleepBetterHub' },
      { '@context': 'https://schema.org', '@type': 'Article', headline: 'What tog duvet' },
    ]),
    false,
  );

  assertCheck(
    'broken json fails',
    '<script type="application/ld+json">{not json}</script>',
    true,
  );

  assertCheck(
    'product microdata fails',
    '<div itemtype="https://schema.org/Product"></div>',
    true,
  );

  const hiddenPrice = page('<p>See the shop for the current price.</p>', [
    {
      '@type': 'Offer',
      name: 'Tape',
      price: 2295,
      priceCurrency: 'GBP',
      hasMerchantReturnPolicy: { '@type': 'MerchantReturnPolicy' },
      shippingDetails: { '@type': 'OfferShippingDetails' },
    },
  ]);
  assertCheck('offer price must be visible', hiddenPrice, true);
}

async function collectHtml(dir) {
  const files = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return files;
    throw error;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectHtml(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  try {
    selfTest();
  } catch (error) {
    console.error(`Structured-data checker self-test failed:\n${error.message}`);
    process.exit(1);
  }

  const files = await collectHtml(root);
  if (files.length === 0) {
    console.error(`No HTML files under ${root}. Run \`npm run build\` first.`);
    process.exit(1);
  }

  let blocks = 0;
  let products = 0;
  let offers = 0;
  let claims = 0;
  const types = new Set();
  const problems = [];

  for (const file of files) {
    const html = await readFile(file, 'utf8');
    const result = checkHtml(html);
    blocks += result.counts.blocks;
    products += result.counts.products;
    offers += result.counts.offers;
    claims += result.counts.claims;
    for (const type of result.counts.types) types.add(type);
    for (const error of result.errors) {
      problems.push(`${path.relative(process.cwd(), file)}: ${error}`);
    }
  }

  if (blocks === 0) {
    problems.push('No JSON-LD blocks were found in the built HTML.');
  }

  const typeList = [...types].sort().join(', ') || '(none)';
  console.log(`Checked ${files.length} HTML files, ${blocks} JSON-LD blocks.`);
  console.log(`Types: ${typeList}`);
  console.log(`Product items: ${products}. Offer items: ${offers}. Rating or price claims: ${claims}.`);

  if (problems.length > 0) {
    console.error(`\n${problems.length} structured-data problem(s):`);
    for (const problem of problems) console.error(`- ${problem}`);
    process.exit(1);
  }

  console.log('Structured data check passed.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

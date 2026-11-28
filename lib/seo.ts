import type { Metadata } from 'next';
import { getSiteUrl, SITE_NAME } from './site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  /** Ignore the layout title template. Use on the homepage. */
  absoluteTitle?: boolean;
};

const TITLE_SUFFIX = ' | SleepBetterHub';
const TITLE_LIMIT = 60;

/** Cut a meta description on a word boundary so Google does not inherit a mid-word snippet. */
export function clipDescription(text: string, limit = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= limit) return clean;
  const cut = clean.slice(0, limit - 1);
  const space = cut.lastIndexOf(' ');
  const base = (space > 90 ? cut.slice(0, space) : cut).replace(/[.,;:–—-]+$/, '').trim();
  return `${base}…`;
}

/** Keep the rendered `<title>` (including the layout suffix) within a sensible length. */
export function fitTitle(title: string): string {
  if (title.length + TITLE_SUFFIX.length <= TITLE_LIMIT) return title;
  const max = TITLE_LIMIT - TITLE_SUFFIX.length;
  const cut = title.slice(0, max);
  const space = cut.lastIndexOf(' ');
  return (space > 18 ? cut.slice(0, space) : cut).replace(/[|:—–\-]+$/, '').trim();
}

/** Unique title, description, canonical, Open Graph, and Twitter tags for one URL. */
export function pageMeta({
  title,
  description,
  path,
  image = '/images/hero-bedroom.jpg',
  type = 'website',
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const site = getSiteUrl();
  const url = `${site}${path === '/' ? '' : path}`;
  const visibleTitle = absoluteTitle ? title : fitTitle(title);
  const imageAlt = visibleTitle;
  const visibleDescription = clipDescription(description);

  return {
    title: absoluteTitle ? { absolute: visibleTitle } : visibleTitle,
    description: visibleDescription,
    alternates: {
      canonical: url,
      languages: {
        'en-GB': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: visibleTitle,
      description: visibleDescription,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_GB',
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: visibleTitle,
      description: visibleDescription,
      images: [image],
    },
  };
}

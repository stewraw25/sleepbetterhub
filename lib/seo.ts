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
  const imageAlt = title;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
      languages: {
        'en-GB': url,
        'en-US': url,
        'x-default': url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_GB',
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

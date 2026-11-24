import { NextRequest, NextResponse } from 'next/server';
import { allProducts } from '@/lib/products';
import { getPublishedPosts } from '@/lib/blog';

type Suggestion = { slug: string; name: string; link: string };

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Message is required' }, { status: 400 });
  }

  const lower = message.toLowerCase().trim();

  let reply = '';
  let suggestions: Suggestion[] = [];

  const productLink = (slug: string, name: string): Suggestion => ({
    slug,
    name,
    link: `/reviews/${slug}`,
  });

  if (lower.includes('sleep mask') || lower.includes('eye mask')) {
    reply = 'There is a general UK sleep-mask guide, and a longer page for side sleepers if the question is light at the nose or a cup digging into the temple. Three Amazon UK masks were last checked on 21 November 2026. This site has not worn them.';
    suggestions = [
      { slug: 'best-sleep-mask-uk', name: 'Sleep mask guide (UK)', link: '/blog/best-sleep-mask-uk' },
      { slug: 'best-sleep-mask-for-side-sleepers', name: 'Side-sleeper sleep mask guide', link: '/blog/best-sleep-mask-for-side-sleepers' },
      ...allProducts
        .filter((p) => p.category === 'sleep-masks')
        .map((p) => productLink(p.slug, p.name)),
    ];
  } else if (lower.includes('mouth tape') || lower.includes('tape')) {
    const mouthTapes = allProducts.filter((p) => p.category === 'mouth-tape').slice(0, 3);
    reply = 'The mouth-tape hub compares strips listed for side sleepers, beards, CPAP users, and sensitive skin. Read the safety notes before you try one. This site has not tested the tapes, and mouth tape is not a treatment.';
    suggestions = mouthTapes.map((p) => productLink(p.slug, p.name));
  } else if (lower.includes('side sleep') || lower.includes('side sleeper') || lower.includes('pillow')) {
    reply = 'For side sleeping, start with the pillow-height guide. Mouth tapes tagged for side sleepers are on the comparison page. This site has not tested those products.';
    suggestions = [
      { slug: 'best-pillow-for-side-sleepers', name: 'Pillow guide', link: '/blog/best-pillow-for-side-sleepers' },
      ...allProducts
        .filter((p) => p.bestFor.includes('Side Sleepers'))
        .slice(0, 2)
        .map((p) => productLink(p.slug, p.name)),
    ];
  } else if (lower.includes('supplement') || lower.includes('magnesium') || lower.includes('theanine') || lower.includes('apigenin')) {
    reply = 'The supplement pages describe magnesium glycinate, L-theanine, and apigenin as they are sold. The shop buttons go to specific Amazon UK listings. Confirm the brand, dose, and price on Amazon. This is not a dose and not a test.';
    suggestions = allProducts
      .filter((p) => p.category === 'supplements')
      .slice(0, 3)
      .map((p) => productLink(p.slug, p.name));
  } else if (lower.includes('insomnia') || lower.includes("can't sleep") || lower.includes('cant sleep') || lower.includes('fall asleep')) {
    reply = 'The guides cover schedule, light, and a cool room. Mouth tape is not a treatment for insomnia. The quiz can point at listings. This is not medical advice.';
    suggestions = [{ slug: 'quiz', name: 'Sleep quiz', link: '/quiz' }];
  } else if (lower.includes('nasal') || lower.includes('strips') || lower.includes('breathing')) {
    reply = 'Nasal strips and the Mute dilator have their own pages. The snoring guide explains when a nose strip is the first thing to look at. This site has not tested them.';
    suggestions = allProducts
      .filter((p) => p.category === 'nasal')
      .map((p) => productLink(p.slug, p.name));
  } else if (lower.includes('tracker') || lower.includes('oura') || lower.includes('eight sleep') || lower.includes('pod')) {
    reply = 'Oura and the Eight Sleep Pod have their own pages. This site has not tested them and has not verified any athlete or Formula 1 use. Confirm the price and membership on the brand or Amazon page.';
    suggestions = [
      productLink('eight-sleep-pod-6', 'Eight Sleep Pod 6'),
      productLink('oura-ring-gen3', 'Oura Ring Gen3'),
      { slug: 'bedding', name: 'Eight Sleep accessories', link: '/categories/bedding' },
    ];
  } else if (lower.includes('duvet') || lower.includes('tog')) {
    reply = 'The duvet guide matches tog to the bedroom, using Which? and The Sleep Charity, plus three Silentnight prices checked on 21 November 2026. The 10.5 tog featured offer that day was Amazon Resale. This site has not slept under them.';
    suggestions = [{ slug: 'what-tog-duvet', name: 'What tog duvet', link: '/blog/what-tog-duvet' }];
  } else {
    const recentPosts = getPublishedPosts().slice(0, 2);
    reply = 'Try a product name or a guide title, or say mouth tape, pillow, duvet, sleep mask, or supplements. This assistant only points at pages on the site. It is not medical advice and it has not tested products.';
    suggestions = recentPosts.map((p) => ({ slug: p.slug, name: p.title, link: `/blog/${p.slug}` }));
  }

  return NextResponse.json({
    reply,
    suggestions,
    timestamp: new Date().toISOString(),
  });
}

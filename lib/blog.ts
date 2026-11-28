export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // simple markdown-ish or paragraphs
  category: string;
  readTime: string;
  date: string; // publish date (YYYY-MM-DD). Posts with future dates are scheduled/hidden until the date
  /** Set when the article body was meaningfully corrected after publication. */
  updated?: string;
  author: string;
  image?: string;
  /** Use when the picture is not what the headline describes. */
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  tags: string[];
  faqs?: { q: string; a: string }[];
};

/**
 * Returns only posts that are published (date <= today).
 * 
 * HOW TO SCHEDULE BLOG POSTS:
 * 1. Write the full post object here
 * 2. Set the `date` field to a future YYYY-MM-DD (e.g. '2026-07-20')
 * 3. The post will automatically appear on the site on/after that date
 *    (after you deploy or the page revalidates).
 * 
 * New posts are published 1–2 times per week by default.
 */
export function getPublishedPosts(): BlogPost[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return blogPosts
    .filter((post) => {
      const publishDate = new Date(post.date);
      publishDate.setHours(0, 0, 0, 0);
      return publishDate <= today;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** For sitemap / admin use: all posts regardless of publish date */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-earplugs-for-side-sleepers',
    title: 'Best Earplugs for Side Sleepers',
    excerpt: 'On your side, the pillow presses the ear. NHS and The Sleep Charity say when earplugs are worth trying. Three Amazon UK plugs were in stock on 28 November 2026.',
    content: `**Affiliate disclosure.** The three earplug links go to Amazon UK with our Associates tag. Prices were read off those listings on 28 November 2026 and will change. We have not worn these plugs. The star counts below are Amazon’s, not scores we gave them.

The picture at the top is a dim bedroom. It is not a photograph of these earplugs.

If you are looking for the best earplugs for side sleepers, start with the ear that is against the pillow. A foam cylinder that sticks out becomes a lever. The pillow pushes it further into the canal, and the plug is what wakes you. A plug that sits flush, or a piece of putty that only covers the opening, is the shape this page is about.

This is a buying guide, not a wear test. Noise from a partner who snores is a different problem from being the person who snores. If you are the snorer, read [mouth tape vs nasal strips for snoring](/blog/mouth-tape-vs-nasal-strips-for-snoring) and the safety notes. Earplugs do not treat that.

## What the published advice actually says

This is not a noise test we ran.

- [NHS Every Mind Matters](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/) says you may sleep more easily in a room that is quiet, dark and cool. Earplugs are the first item on that list, if noise is the problem. A silent phone, closed curtains, clocks out of view, and an eye mask come after. The same list also names background sound: rainfall, gentle music, or white noise. If the problem is still being awake for hours, the NHS insomnia pages are the next stop, not another pair of plugs.
- [The Sleep Charity](https://thesleepcharity.org.uk/adults/sleep-environment/) says most people need a quiet bedroom. Loud, sudden, or repetitive noise interrupts sleep, and noise in deep sleep does the most damage. Their practical order starts with the building: double glazing for outside noise, and rugs or carpet if the household is loud. Foam earplugs are the thing they name for noise that still gets in, especially in warmer months when a window is open. They also say some people sleep better with a steady sound, such as white noise, than with silence.

Neither page ranks a brand. A plug is what you add when the room is still noisy. It is not a treatment for insomnia. If the snoring you can hear comes with pauses, choking, or sleepiness that gets in the way of the day, that belongs with a GP, whether or not you are the person wearing the plugs.

Light is the other half of the same NHS list. The mask pages are [how to choose a sleep mask in the UK](/blog/best-sleep-mask-uk) and [best sleep mask for side sleepers](/blog/best-sleep-mask-for-side-sleepers). A stiff neck is a pillow problem: [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers).

## How the shapes differ

Listings use a few repeated design words. They are descriptions, not scores.

- **Foam** expands in the canal and usually leaves a stem outside the ear. That stem is what the pillow presses when you lie on your side. The Sleep Charity names foam plugs for noise in general. This page does not link a foam pack, because the three listings below are the shapes written for side sleeping or for covering the opening.
- **A low-profile reusable plug** is meant to sit in the canal without a long stem. Loop’s bullet says that, inserted correctly, Quiet 2 should not stick out, and that it is for side-sleepers. Alpine’s title and first bullet say the oval SleepDeep plugs are designed for side sleepers.
- **Mouldable putty** is pressed over the opening. Mack’s warning says “cover only” and “do not force plug into ear canal.” Nothing is supposed to sit inside the canal for the pillow to drive deeper.

A plug will not hold your neck up, and it will not darken the room. Do the pillow check and the curtain check as well. The longer habit list is the [sleep hygiene checklist](/blog/sleep-hygiene-2026).

## Three Amazon UK listings, checked 28 November 2026

Same job, three shapes. Shop buttons go through this site’s /go/ links and use the Associates tag stewraw25-21.

### If you want a reusable plug that claims it will not stick out: Loop Quiet 2

The [Loop Quiet 2](/reviews/loop-quiet-2) (ASIN B0D3V4V1KD, model en-qt-wht-03) opened on white. On 28 November 2026 the buy box was £15.95, in stock, against a list price of £19.95. Loop Earplugs UK sells it and Amazon dispatches it. The material field says silicone. The bullets say up to 24 dB (SNR), four tip sizes from XS to L, and comfort “even for side-sleepers.” One bullet says that, inserted correctly, the plugs should not stick out. The details table also lists the noise reduction rating as 24. Amazon showed 4.1 out of 5 from 35,393 ratings. It was number 1 in Ear Plugs, and the page said 2,000-plus bought in the past month. The safety line says small parts may be a choking hazard for children under 3. [Shop the Loop Quiet 2](/go/loop-quiet-2).

Buy this if you want a washable plug and the listing’s point is that it sits flush. Do not buy it for a toddler. Do not buy it because it is number 1. That rank moves.

### If the listing itself is written for side sleeping: Alpine SleepDeep

The [Alpine SleepDeep](/reviews/alpine-sleepdeep) (ASIN B0GMQV4K1C, model 111.21.168) is a pack of three sizes, small, medium and large. The title includes “Side Sleeping.” On 28 November 2026 the buy box was £12.99, in stock, against a list price of £16.95. Alpine Hearing Protection sells it and Amazon dispatches it. The colour field says White/Blue. The material field says thermoplastic polyurethane. The bullets say silicone-free, an oval shape, and that body heat moulds the plug. The noise bullet says up to 27 dB (SNR), and that you should still hear an alarm or a baby monitor. That hearing claim is Alpine’s. We have not checked it. The details table lists both the single number rating and the noise reduction rating as 27, and a later paragraph says 27 dB NRR. Those are different names for a rating. Read the label you care about rather than treating 27 as one universal number. A line on the page also says “While promotional stock lasts.” Amazon showed 3.8 out of 5 from 27,257 ratings, number 11 in Ear Plugs, and 1,000-plus bought in the past month. The bullets we read did not give an age limit. [Shop the Alpine SleepDeep](/go/alpine-sleepdeep).

Buy this if you want the pack that says side sleeper in the title and gives you three sizes. Skip it if you need the listing to use one rating system and mean it.

### If you do not want anything in the canal: Mack’s Pillow Soft

[Mack’s Pillow Soft](/reviews/macks-pillow-soft) (ASIN B003LZQGN6, model 7) is silicone putty. On 28 November 2026 the buy box was £7.95 and the page said in stock. Ana Wiz Ltd sells it and Amazon dispatches it. The title says 6 pairs, 12 count. The package size field says 6 pairs. The net content field says 12 pair. Those are not the same count. Check the menu before you pay. One bullet is still in German: “Ungiftiger, hypoallergener Schutz.” The description says the putty moulds to the ear and reduces noise by 22 decibels. The details table lists the single number rating and the noise reduction rating as 22. Amazon showed 4.3 out of 5 from 42,466 ratings, and it was number 26 in Ear Plugs. The page said 700-plus bought in the past month.

The safety text is the reason this shape is on the page, and it is also the warning. It says use the whole earplug, cover only, and do not force it into the ear canal. It says not to cut or stretch it. It says a misused plug may lodge and should be removed by an ear, nose and throat doctor only. It says adult supervision is required under 15, and to keep the plugs away from infants, because a swallowed piece can block the airway. In the UK, a plug that will not come out is NHS 111 or a GP, not a cotton bud and not the US phone number printed on the listing. [Shop Mack’s Pillow Soft](/go/macks-pillow-soft).

Buy this if canal plugs hurt and you will follow the cover-only line. Do not buy it for a child who might put it in their mouth.

## A simple way to choose

1. Close what you can close first. The Sleep Charity starts with glazing and soft floors. The NHS list starts with earplugs only once noise is the remaining problem, and it also offers steady sound instead of silence.
2. Lie on your usual side with the plug in for a minute. Pain at the canal means that shape is wrong, whatever the title says.
3. If you want a reusable plug that claims it will not stick out, that is the Loop Quiet 2. It was £15.95, and it was number 1 in Ear Plugs that day.
4. If you want the title that says side sleeping, and three sizes in the box, that is the Alpine SleepDeep. It was £12.99. The page calls 27 both SNR and NRR.
5. If you want nothing inside the canal, that is Mack’s putty, at £7.95, with the cover-only warning. Read the pair count. The page disagrees with itself.
6. Check that you can still hear a smoke alarm. Alpine says you should. The other two listings do not make that promise. We have not measured any of them.
7. Do not use these for a baby. Loop warns about choking under 3. Mack’s wants supervision under 15. Alpine’s bullets did not state an age.

The notes on these three are on the [earplugs page](/categories/earplugs). This page is not medical advice.`,
    category: 'Guides',
    readTime: '10 min',
    date: '2026-11-28',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/hero-bedroom.jpg',
    imageAlt: 'A dim bedroom. This is not a photograph of earplugs.',
    seoTitle: 'Best Earplugs for Side Sleepers (UK)',
    seoDescription: 'How to choose earplugs for side sleeping in the UK, using NHS and Sleep Charity advice, with three Amazon prices from 28 November 2026.',
    tags: ['earplugs', 'side sleepers', 'noise', 'snoring', 'buying guide'],
    faqs: [
      {
        q: 'What are the best earplugs for side sleepers in the UK?',
        a: 'The ones that block enough noise without the pillow driving a stem into the ear canal. On 28 November 2026 three Amazon UK listings were in stock: Loop Quiet 2 at £15.95, which says the plugs should not stick out and names side-sleepers; Alpine SleepDeep at £12.99, whose title says side sleeping; and Mack’s Pillow Soft putty at £7.95, whose warning says cover the opening and do not push it into the canal. We have not worn them. NHS Every Mind Matters lists earplugs when noise is still a problem after the room is quiet.',
      },
      {
        q: 'Are foam earplugs a bad idea for side sleepers?',
        a: 'Foam often leaves a stem outside the ear, and that stem is what the pillow presses. The Sleep Charity still names foam plugs for noise in general, especially with a window open. This page links the shapes written for side sleeping or for covering the ear, not a foam pack. Lie on your side for a minute before you decide a foam plug is comfortable.',
      },
      {
        q: 'Will sleep earplugs block a smoke alarm?',
        a: 'They can reduce it. Alpine’s listing says SleepDeep should still let you hear an alarm or a baby monitor. That is Alpine’s claim, and this site has not tested it. Loop and Mack’s pages checked on 28 November 2026 do not make that promise. Confirm you can hear the alarm in your own room.',
      },
      {
        q: 'Can children use these earplugs?',
        a: 'Do not use these listings for a baby. Loop says the plugs may be a choking hazard under 3. Mack’s says adult supervision is required under 15 and to keep the putty away from infants, because a swallowed piece can block the airway. Alpine’s bullets did not state an age. A plug that will not come out needs NHS 111 or a GP, not a cotton bud.',
      },
      {
        q: 'Do earplugs help if my partner snores?',
        a: 'They can make the noise quieter for the person who is listening. They do not treat the person who snores. If that snoring comes with pauses, choking, or daytime sleepiness, the NHS route is a GP. Mouth tape and nasal strips are a different choice, with their own safety notes, and only for the person who snores.',
      },
    ],
  },
  {
    slug: 'best-sleep-mask-uk',
    title: 'How to Choose a Sleep Mask in the UK',
    excerpt: 'A general UK guide to sleep masks: when an eye mask is worth having, how shapes differ, and three Amazon listings last checked on 21 November 2026. This site has not worn them.',
    content: `**Affiliate disclosure.** The three mask links go to Amazon UK with our Associates tag. Prices were read off those listings on 21 November 2026 and will change. A further check of those pages was blocked on 24 November 2026, so the figures have not been updated. Confirm the buy box before you pay. We have not worn these masks. The star counts below are Amazon’s, not scores we gave them.

If you want a sleep mask in the UK, start with the room and the way you lie, not with a silk claim. A mask is what you add when curtains, a blind, and a covered clock still leave the room too bright. It is not a treatment for insomnia, snoring, or a stiff neck.

Side sleepers have a separate, longer page: [best sleep mask for side sleepers](/blog/best-sleep-mask-for-side-sleepers). Use that if the question is a cup digging into the temple, or light leaking in beside the nose when one eye is on the pillow. This page is the general chooser.

## What the published advice actually says

This is not a light test we ran.

- [NHS Every Mind Matters](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/) says you may sleep more easily in a room that is quiet, dark and cool. The list starts with [earplugs](/blog/best-earplugs-for-side-sleepers) if noise is the problem, the phone on silent, curtains fully closed, clocks out of view, and the phone face down. An eye mask is the next line: wear one if light is still a problem.
- [The Sleep Charity](https://thesleepcharity.org.uk/adults/sleep-environment/) says light and dark tell the body when to wake and when to sleep. Even while you are asleep, light can be detected through the eyelids, so the room needs to be dark to stay asleep. They say you ideally should not be able to see the other side of the bedroom. Curtains that are well lined, and a blackout blind, come first. An eye mask is the extra step, and they name shift workers who are trying to sleep in daylight. A TV standby light or an alarm-clock glow is enough to matter, so cover those or turn them off.

Neither page ranks a brand. If the problem is snoring with pauses, choking, or sleepiness that gets in the way of the day, that belongs with a GP, not a strap.

## How the shapes differ

Listings use a few repeated design words. They are descriptions, not scores.

- **A flat mask** sits close to the eyelids. It can work if you sleep on your back and do not mind pressure on the eyes. On your side, that same flat panel is pressed into the eye that is on the pillow.
- **A 3D or contoured cup** leaves a space over the eye, which the listing usually describes as room for eyelashes or “no pressure on the eyes”. A deeper cup can still press the temple when you lie on your side.
- **A side-sleeper design** is written for that temple problem. The [Manta Pro](/reviews/manta-pro-sleep-mask) listing describes C-shaped cups that sit flat against the temple so nothing sits between your head and the pillow. That is Manta’s claim. This site has not worn it.

A mask will also make your face a little warmer. If you already throw the covers off, the [what tog duvet](/blog/what-tog-duvet) guide is the other half of that. A stiff neck is a pillow-height problem: [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers).

## Three Amazon UK listings, last checked 21 November 2026

The same three masks appear in the side-sleeper guide. They are used here because those ASINs were in stock on that date, with a published price. This is not a ranking, and it is not a wear test. Shop buttons go through this site's /go/ links and use the Associates tag stewraw25-21.

### Manta Pro

The [Manta Pro](/reviews/manta-pro-sleep-mask) (ASIN B0C36K8SJJ, model PRO) is titled as a sleep mask for side sleepers. On 21 November 2026 the buy box was £55.20 and the page said in stock. MantaSleep sells it and Amazon dispatches it. The bullets say a slim angled strap and C-shaped eye cups. The description says those cups sit flat against the temple. The material field says polyester. Care says machine wash. The age field says Adult. Amazon showed 4.1 out of 5 from 1,801 ratings; those ratings are Amazon’s. The safety line says not to use it if you have difficulty breathing or removing the mask yourself, and that it is not suitable for children without supervision. [Shop the Manta Pro](/go/manta-pro-sleep-mask).

### MyHalos 3D

The [MyHalos 3D mask](/reviews/myhalos-3d-sleep-mask) (ASIN B0F7HJ428M, model HM-SL3P-MASK) opened on grey. On 21 November 2026 the buy box was £9.99, in stock, against a list price of £13.99. First Option Products sells it and Amazon dispatches it. The short title says cotton. The material field says memory foam. The bullets describe 3D cups, a flexible nose piece, and no pressure on the eyes. “Side sleeper” appears in the longer title, not in those bullets. Care is hand wash only. The safety line says keep it away from fire, and not to use it if you cannot remove it yourself. Amazon showed 4.6 out of 5 from 27,193 ratings; those ratings are Amazon’s. [Shop the MyHalos 3D mask](/go/myhalos-3d-sleep-mask).

### Umisleep

The [Umisleep mask](/reviews/umisleep-side-sleeper-mask) (ASIN B09DXYX7BQ, model YZ01) is titled “Sleep Mask for Side Sleepers”, colour black. On 21 November 2026 the buy box was £5.12, in stock, against a list price of £7.99. PRDE sells it and Amazon dispatches it. The first bullet says a curved structure, designed for side sleepers, to avoid pressure on the face. Later bullets mention a nose seal and 3D space for eyelashes. The material field lists two compositions on the same line. Care is hand wash only. The safety line is about checking the material if you react to fabrics. Amazon showed 4.5 out of 5 from 3,481 ratings; those ratings are Amazon’s. [Shop the Umisleep mask](/go/umisleep-side-sleeper-mask).

## A simple way to choose

1. Make the room as dark as you reasonably can first: curtains, a blind, phones face down, clock glow covered. The NHS and Sleep Charity lists above start there.
2. If you sleep on your side, or you already know a flat mask presses your eye, read the [side-sleeper guide](/blog/best-sleep-mask-for-side-sleepers) and try the on-your-side check described there before you pay.
3. If you sleep on your back and want a low price while you find out whether a mask helps at all, the Umisleep or MyHalos listings were the cheaper two on 21 November 2026. That is a price fact from that day, not a quality score.
4. If the listing’s point is cups that sit flat against the temple, that is the Manta Pro page. It was also the expensive one of the three.
5. Do not use a mask if you cannot take it off yourself. Read the safety line on the listing, and do not buy an adult mask for a child unless the page says it is suitable.

The product notes, and the same three shop buttons, are also on the [sleep masks category page](/categories/sleep-masks). This page is not medical advice.`,
    category: 'Guides',
    readTime: '8 min',
    date: '2026-11-24',
    updated: '2026-11-28',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/hero-bedroom.jpg',
    imageAlt: 'A dim bedroom. This is not a photograph of a sleep mask.',
    seoTitle: 'Best Sleep Mask UK: How to Choose',
    seoDescription: 'How to choose a sleep mask in the UK, from NHS and Sleep Charity advice, plus three Amazon listings last checked on 21 November 2026. Not a wear test.',
    tags: ['sleep masks', 'blackout', 'side sleepers', 'UK buying guide'],
  },
  {
    slug: 'best-sleep-mask-for-side-sleepers',
    title: 'Best Sleep Mask for Side Sleepers',
    excerpt: 'On your side, one eye is against the pillow. NHS and The Sleep Charity say when an eye mask is worth having. Three Amazon UK masks were in stock on 21 November 2026.',
    content: `**Affiliate disclosure.** The three mask links go to Amazon UK with our Associates tag. Prices were read off those listings on 21 November 2026 and will change. We have not worn these masks. The star counts below are Amazon’s, not scores we gave them.

This page is for side sleepers. The general chooser, including back sleepers, is [how to choose a sleep mask in the UK](/blog/best-sleep-mask-uk). If you are looking for the best sleep mask for side sleepers, start with the eye that is on the pillow, not with a silk claim. A flat mask presses that eye. A deep cup can press the temple instead, and then the mask is the thing keeping you awake. Light also leaks in beside the nose when the mask does not meet the bridge.

## What the published advice actually says

This is not a light test we ran.

- [NHS Every Mind Matters](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-fall-asleep-faster-and-sleep-better/) says you may sleep more easily in a room that is quiet, dark and cool. The list starts with [earplugs](/blog/best-earplugs-for-side-sleepers) if noise is the problem, the phone on silent, curtains fully closed, clocks out of view, and the phone face down. An eye mask is the next line: wear one if light is still a problem. Temperature and a window, if it is safe to open, are on the same list.
- [The Sleep Charity](https://thesleepcharity.org.uk/adults/sleep-environment/) says light and dark tell the body when to wake and when to sleep. In the dark, the body releases melatonin. Light, including small amounts, is read as a signal to be awake. Their line on eyelids is the useful one for a mask: even while you are asleep, light can be detected through the eyelids, so the room needs to be dark to stay asleep. They say you ideally should not be able to see the other side of the bedroom. Curtains that are well lined, and a blackout blind, come first. An eye mask is the extra step, and they name shift workers who are trying to sleep in daylight. They also say an alarm-clock glow or a TV standby light is enough to matter, so cover those or turn them off.

Neither page ranks a brand. A mask is what you add when the room is still bright. It is not a treatment for insomnia. If the problem is snoring with pauses, choking, or sleepiness that gets in the way of the day, that belongs with a GP, not a strap.

## How to tell if a mask will work on your side

Do this with the mask you already own, or in the shop, before you care about the price.

1. Put it on and lie on your usual side for a minute. The eye against the pillow should not hurt. If a cup digs into the temple, that mask is too bulky for the way you lie, whatever the title says.
2. In a dark room, look toward a lamp or a phone. A glow at the nose means the seal is the problem. A thicker fabric will not fix a gap.
3. A mask does not hold your neck up. If you wake with a stiff neck, do the photo check in the [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers) guide. The adjustable Silentnight on that page was unavailable on 21 November 2026. The height check still comes before a new mask.
4. A mask sits on your face and can make you warmer. If you throw the covers off, the duvet tog is the other half of that. [What tog duvet do I need](/blog/what-tog-duvet) is the page for the room. The [hot sleepers guide](/blog/hot-sleepers-temperature-solutions) covers the window and the sheets.

## Three masks that were in stock

Same job, three shapes. The notes are the listing’s own words.

### If the mask itself is what hurts: Manta Pro

The [Manta Pro](/reviews/manta-pro-sleep-mask) (ASIN B0C36K8SJJ, model PRO) is titled as a sleep mask for side sleepers. On 21 November 2026 the buy box was £55.20 and the page said in stock. MantaSleep sells it and Amazon dispatches it. The bullets say a slim angled strap and C-shaped eye cups. The description says those cups sit flat against the temple, so there is nothing between your head and the pillow. That is the reason to pay this much, if it is true on your face. We have not checked it. The material field says polyester. Care says machine wash. The age field says Adult. The colour field says “Blackone”. Amazon showed 4.1 out of 5 from 1,801 ratings, and it was number 70 in Sleep Masks. The safety line says not to use it if you have difficulty breathing or removing the mask yourself, and that it is not suitable for children without supervision. [Shop the Manta Pro](/go/manta-pro-sleep-mask).

Buy this if a normal cup leaves a lump under your temple. Do not buy it for a child, and do not buy it if you cannot get a mask off on your own.

### If you want cups off the eyes, at the price people are actually paying: MyHalos

The [MyHalos 3D mask](/reviews/myhalos-3d-sleep-mask) (ASIN B0F7HJ428M, model HM-SL3P-MASK) opened on grey. On 21 November 2026 the buy box was £9.99, in stock, against a list price of £13.99. The page said 200+ bought in the past month. It was number 1 in Sleep Masks. Amazon showed 4.6 out of 5 from 27,193 ratings. First Option Products sells it and Amazon dispatches it.

Read the title twice. The short title says cotton. The material field says memory foam. The longer title says soft cotton and “side sleeper friendly”. The five bullets talk about blackout, a flexible nose piece, no pressure on the eyes, memory foam, a pouch, and a 1-year warranty. They do not describe a strap that sits flat on a pillow. “Side sleeper” is in the longer title, not in the instructions. Dimensions on the page: 27.38 × 13.16 × 1.88 cm, 60 g. Care is hand wash only. The safety line says hand wash only, keep it away from fire, and do not use it if you cannot breathe or take the mask off yourself. The age field says Adult. [Shop the MyHalos mask](/go/myhalos-3d-sleep-mask).

Buy this if you want the cups off your eyelids and you will return it if the cup hurts your temple. Do not buy it because it is number 1. That rank moves.

### If the budget is about £5: Umisleep

The [Umisleep mask](/reviews/umisleep-side-sleeper-mask) (ASIN B09DXYX7BQ, model YZ01) is titled for side sleepers, and the colour on the page was black. On 21 November 2026 the buy box was £5.12, in stock, against a list price of £7.99. The page showed Amazon’s Choice and said 100+ bought in the past week. It was number 16 in Sleep Masks. Amazon showed 4.5 out of 5 from 3,481 ratings. PRDE sells it and Amazon dispatches it.

The first bullet says a curved structure, designed for side sleepers, to avoid pressure on the face. Later bullets say it meets the nose, the strap adjusts, and a 3D socket leaves room for eyelashes. The material field says “100% Memory Foam, 83% Nylon and 17% Spandex”. That is two fabrics on one line. Care is hand wash only. The age field says Women, Men. The only safety line is to check the material if you react to fabrics. Dimensions: 22 × 1.2 × 10 cm, 38 g. [Shop the Umisleep mask](/go/umisleep-side-sleeper-mask).

Buy this if you want to find out whether any contoured mask helps, without spending £55. Skip it if you need the listing to say one material and mean it.

## Silk, children, and what a mask will not do

A silk cover is a fabric question. It does not stop a flat mask pressing the eye that is on the pillow. These three were chosen because the listing talks about side sleeping or about cups, not because of a cloth claim. We did not add a fourth.

Manta and MyHalos both say not to use the mask if you cannot remove it yourself. Manta adds that it is not for children without supervision. Umisleep’s age field says women and men. Do not put an adult mask on a baby, and do not use one for a child who cannot pull it off.

A dark room is also not a cure. The NHS page above is sleep hygiene. If you are awake for hours, anxious in bed, or exhausted in the day, the eye mask is the small step after the curtains. It is not the whole plan. The [sleep hygiene checklist](/blog/sleep-hygiene-2026) is the longer list.

## A sensible order

1. Close the curtains and cover standby lights. Both sources above start there.
2. If the room is still bright, try a mask on your side for a minute before you pay.
3. If a cup digs into the temple, look at the Manta, which is the one that claims the cups sit flat. It was £55.20.
4. If you mainly want the fabric off your eyelids, the MyHalos was the number 1 sleep mask that day, at £9.99. Read the cotton and foam lines before you trust the title.
5. If £5 is the ceiling, the Umisleep title and first bullet say side sleepers. The materials line does not agree with itself.
6. Shift work in daylight is the case The Sleep Charity names for an eye mask. Keep using it only if you can take it off, and only after the room is as dark as the curtains allow.

The notes on these three are on the [sleep masks page](/categories/sleep-masks). This page is not medical advice.`,
    category: 'Guides',
    readTime: '11 min',
    date: '2026-11-21',
    updated: '2026-11-28',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/hero-bedroom.jpg',
    imageAlt: 'A dim bedroom with a made bed. Not a photo of a sleep mask.',
    seoTitle: 'Best Sleep Mask for Side Sleepers (UK)',
    seoDescription: 'How to choose a sleep mask for side sleeping in the UK, using NHS and Sleep Charity advice, with three Amazon prices from 21 November 2026.',
    tags: ['sleep mask', 'side sleepers', 'eye mask', 'blackout', 'buying guide'],
    faqs: [
      {
        q: 'What is the best sleep mask for side sleepers in the UK?',
        a: 'The one that blocks light at the nose and does not press the eye or the temple that is against the pillow. On 21 November 2026 three Amazon UK masks were in stock: Manta Pro at £55.20, which claims flat cups for side sleeping; MyHalos at £9.99, the number 1 sleep mask that day, whose longer title says side-sleeper friendly; and Umisleep at £5.12, whose title and first bullet say side sleepers. We have not worn them. NHS Every Mind Matters says to wear an eye mask only if the room is still bright after the curtains are closed.',
      },
      {
        q: 'Do side sleepers need a contoured sleep mask?',
        a: 'Often, because a flat mask presses the eye that is on the pillow. A deep cup can press the temple instead. Lie on your side for a minute before you decide. Manta’s listing says its cups sit flat against the temple. MyHalos and Umisleep describe 3D cups and say they are for side sleepers. Those are the makers’ claims.',
      },
      {
        q: 'Is a silk sleep mask better for side sleeping?',
        a: 'Silk is the fabric against the skin. It does not decide whether the mask digs into your temple. The three masks linked here were chosen because the listings talk about side sleeping or about cups. A silk mask can still be the wrong shape.',
      },
      {
        q: 'Will a sleep mask help me sleep?',
        a: 'It can block light that is still getting in after the curtains are closed. The Sleep Charity says light can be detected through the eyelids, and that an eye mask is useful for shift workers sleeping in daylight. NHS Every Mind Matters lists an eye mask after curtains, a silent phone, and clocks kept out of view. A mask is not a treatment for insomnia.',
      },
      {
        q: 'Are these sleep masks safe for children?',
        a: 'Do not use these listings for a child. Manta says its mask is not suitable for children without supervision, and both Manta and MyHalos say not to use a mask if the person cannot remove it themselves. Umisleep’s age field says women and men. Baby sleep is a different subject.',
      },
    ],
  },
  {
    slug: 'what-tog-duvet',
    title: 'What Tog Duvet Do I Need?',
    excerpt: 'For a UK winter, match the tog to the bedroom after the heating goes off. Which? and The Sleep Charity set the ranges. Three Silentnight doubles were last checked on Amazon UK on 21 November 2026.',
    content: `**Affiliate disclosure.** The three duvet links go to Amazon UK with our Associates tag. Prices were read off those listings on 21 November 2026 and will change. We have not slept under these duvets. The star counts below are Amazon’s, not scores we gave them.

Late November into winter is when this question usually comes up in the UK: the heating goes off overnight, and a duvet that felt fine in September no longer does. Start with the room after the heating goes off, and with whether you wake hot or cold, not with the season printed on the packet.

The prices and stock notes below were read on Amazon UK on 21 November 2026 and will change. A further check of those same listings was blocked on 24 November 2026, so the figures have not been updated. Confirm the buy box before you pay. We have not slept under these duvets.

Tog is a measure of how thermally insulating a duvet is. Which? says the scale runs from about 1 to about 15, and that a higher number is warmer. It is not the weight, and it is not the thickness, though a warmer duvet is often thicker. For most British winters, Which? says 13.5 tog is warm enough. A 10.5 tog sits at the bottom of that winter band, so a room that falls well below 16°C can leave it feeling thin. A 4.5 tog is the light end, for a room that stays warm or for someone who already overheats.

## The two sources worth using

This is not a temperature test we ran.

- [Which?](https://www.which.co.uk/reviews/duvets/article/choosing-the-best-type-of-duvet-aXUX91B9AImk) says a summer duvet is a low tog between 1 and 4, a winter duvet is 10.5 to 15, and most people find 13.5 tog warm enough for a British winter. An all-season set is usually a light duvet of about 4.5 tog plus a heavier one of about 9 tog. Use the light one in summer, the heavier one in spring and autumn, and both together in winter.
- [The Sleep Charity](https://thesleepcharity.org.uk/adults/sleep-environment/) says an ideal bedroom is around 16 to 18°C. A room over 24°C is likely to make you restless. A room of about 12°C makes it harder to fall asleep. When the weather is hot, they say to use a lower tog, or just a cotton sheet. Young children and older people may need the room a little warmer. A room thermometer is more useful than guessing.

Those two pages do not publish one shared chart that says “18°C means 10.5 tog”. The practical reading is below. It is a way to use their ranges, not a lab result.

## Which tog to start with

Put a thermometer in the bedroom for two or three nights. Read it an hour after the heating has gone off, not at 6pm when the room is still warm.

- **You throw the duvet off, or the room stays above about 18°C.** Start at the light end. Which?’s summer band is 1 to 4 tog. The light duvet shops actually sell is usually 4.5 tog, which is also the light half of the all-season set Which? describes. 4.5 is a shade warmer than Which?’s summer band. It is still the right first buy if a 13.5 leaves you sweaty.
- **The room stays around 16 to 18°C and you are not a cold sleeper.** 10.5 tog is the middle of the UK range. Which? puts 10.5 at the bottom of the winter band, so a room that falls well below 16°C can leave a 10.5 feeling thin.
- **The heating goes off and you wake cold, or the room is draughty.** 13.5 tog. Which? says that is warm enough for most British winters. 15 tog exists. Which? calls 15 the top of the scale, not the default.
- **The room swings, or two people disagree.** An all-season pair, used separately or clipped together. Which? says that pair is usually about 4.5 plus about 9. We did not find a buy-box price for a combined set on 14 November 2026, so this guide does not link one. Two different single duvets, one each, is the other way couples stop arguing. That is ordinary advice, not a trial.

A duvet does not set the height of your neck. If you wake with a stiff neck, do the photo check in the [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers) guide before you change tog. If the whole room is hot, the [hot sleepers guide](/blog/hot-sleepers-temperature-solutions) covers the window, the sheets, and a cooling cover. The duvet is one layer in that, not the whole fix.

## Three Silentnight doubles that were in stock

Same brand, three togs, double size, so the tog is the thing that changes. The notes are the listing’s own words. UK double is the size that was selected. King and super king are different pages. Open the size menu before you pay.

### Warm room or you overheat: Silentnight 4.5 tog

The [Summer Breeze](/reviews/silentnight-45-tog-duvet) (ASIN B00TQWMVV4, model 609722GE) is 4.5 tog. On 21 November 2026 the title still said Double, and the buy box was £20.99, in stock, against a list price of £24.99. Silentnight says the filling is lightweight, the cover lets moisture out, and 4.5 tog is for summer and for people who overheat. The material fields say microfibre and hollowfibre. Care says machine wash, with no temperature. The bullets say it does not include contents likely to cause allergies. That is not an Allergy UK certificate. Amazon showed 4.6 out of 5 from 12,204 ratings. [Shop the 4.5 tog double](/go/silentnight-45-tog-duvet).

Buy this if you already know a winter duvet is too much. Do not buy it in a cold, unheated room and then add a second heavy duvet on top without thinking: Which? is talking about a designed pair, not a random stack. The age field on this listing includes “Kid”. This page is about adult duvets.

### Room stays comfortable: Silentnight 10.5 tog

The [Deep Sleep 10.5 tog](/reviews/silentnight-105-tog-duvet) (ASIN B075X1QXK6, model 444736GE) is titled as a 200 × 200 cm double. On 21 November 2026 the featured offer was Amazon Resale at £26.59, with one left. The page also showed £20.87 from other sellers and did not say whether that offer was new. Open the other-sellers list before you pay a resale price for a second-hand duvet. The bullets say 10.5 tog is for all year, it is made in the UK, and there is a 5-year guarantee. The details table on the same page says a two-year warranty. The product description says machine washable at 40°C. The seasons field says Spring. The warmth field says Heavyweight. Those fields do not match the bullet. Amazon showed 4.7 out of 5 from 9,169 ratings. [Shop the 10.5 tog double](/go/silentnight-105-tog-duvet).

Buy this if the thermometer sits around 16 to 18°C and you are not the cold one in the bed. If you wake cold in January, the 13.5 is the closer match to Which?’s “most people” winter line. If you wake hot, go to the 4.5.

### Heating goes off, or you feel the cold: Silentnight 13.5 tog

The [Deep Sleep 13.5 tog](/reviews/silentnight-135-tog-duvet) (ASIN B01N12TK0A, model 444767GE) was in stock at £22.05 on 21 November 2026, and the title still said Double. The bullet says 13.5 tog is for winter. The seasons field also says Winter, which is more consistent than the 10.5 page. The warmth field says Heavyweight. The bullets again say a 5-year guarantee, and the details table again says two years. The product description says machine washable at 40°C. Made in the UK, hollowfibre, on the listing. Amazon showed 4.7 out of 5 from 2,690 ratings. [Shop the 13.5 tog double](/go/silentnight-135-tog-duvet).

Buy this for a British winter in a room that cools down, or if you are the person who steals the duvet. Skip it if your bedroom stays at the top of The Sleep Charity’s range and you already overheat. A 13.5 in an 18°C room is a lot of insulation.

## Allergies, washing, and what “hypoallergenic” means here

Which? separates two words. Hypoallergenic means the filling is not itself a known allergen such as feathers. Dust mites can still live in it. Anti-allergy means the filling has been treated against mites. None of the three Silentnight pages above says Allergy UK. They say the duvet does not include contents likely to cause allergies. That is the first meaning.

Which? also says dust mites are killed by washing at 60°C or above, and that you should only do that if the care label allows it. On 21 November 2026 the 10.5 and 13.5 product descriptions said machine washable at 40°C. That is below the temperature Which? gives for mites. The 4.5 bullets say machine wash and still do not give a temperature. Read the label in the parcel. A duvet that cannot take a hot wash is a weak choice if you sneeze and itch in bed. Get that checked if you are not sure it is mites.

## Babies are a different tog

Adult 4.5, 10.5 and 13.5 are not baby sleep-bag togs. Do not put one of these duvets over a baby.

The [Lullaby Trust](https://www.lullabytrust.org.uk/baby-safety/baby-product-information/dress-your-baby-for-sleep/) says a baby’s room should be about 16 to 20°C, and that you should follow the sleep-bag maker’s tog guide for that room. They also say not to use two sleep bags together: air trapped between layers makes the baby warmer than adding the two tog numbers would suggest. Overheating raises the risk of sudden infant death. [NHS Start for Life](https://www.nhs.uk/best-start-in-life/baby/baby-basics/newborn-and-baby-sleeping-advice-for-parents/safe-sleep-advice-for-babies/) publishes a separate scale for baby sleeping bags: 2.5 tog for about 16 to 20°C, 1.0 tog for about 20 to 24°C, and 0.5 tog for about 24 to 27°C, with no other bedding. Use those pages, not this one.

## A sensible order

1. Read the thermometer an hour after the heating goes off, for a few nights.
2. If you wake hot, buy the 4.5 tog double and return it if you then wake cold.
3. If the room holds 16 to 18°C, buy the 10.5.
4. If you wake cold, or the room falls away overnight, buy the 13.5.
5. Keep the old duvet until the new one has lasted a week. A lot of “best duvet” disappointment is the wrong tog for that room.

The mattress underneath is a separate purchase. Notes on that, and on these three duvets, are on the [mattresses and bedding page](/categories/mattresses). This page is not medical advice.`,
    category: 'Guides',
    readTime: '12 min',
    date: '2026-11-14',
    updated: '2026-11-24',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/hero-bedroom.jpg',
    imageAlt: 'A dim bedroom with a made bed. Not a photo of a specific duvet.',
    seoTitle: 'What Tog Duvet Do I Need? (UK)',
    seoDescription: 'What tog duvet to buy for a UK winter bedroom: 4.5, 10.5 or 13.5, from Which? and The Sleep Charity, plus three Silentnight prices checked on 21 November 2026.',
    tags: ['duvets', 'tog', 'hot sleepers', 'bedding', 'winter'],
    faqs: [
      {
        q: 'What tog duvet do I need in the UK?',
        a: 'It depends on the room after the heating goes off. Which? puts summer at 1 to 4 tog, winter at 10.5 to 15, and says most people find 13.5 enough for a British winter. The Sleep Charity puts a good bedroom at about 16 to 18°C and says to use a lower tog when it is hot. On 21 November 2026 a Silentnight 4.5 tog double was £20.99 and in stock, a 13.5 was £22.05 and in stock, and the 10.5 featured offer was Amazon Resale at £26.59 with one left. We have not slept under them.',
      },
      {
        q: 'What tog duvet is best for winter?',
        a: 'Which? says 10.5 to 15 tog, and that 13.5 is warm enough for most British winters. Use 10.5 if the bedroom stays heated and you sleep hot. Use 13.5 if the room cools after the heating goes off or you feel the cold. 15 is the top of the scale Which? describes, not the automatic choice.',
      },
      {
        q: 'Is a 10.5 tog duvet warm enough?',
        a: 'Warm enough in a room that stays around 16 to 18°C if you are not a cold sleeper. Which? places 10.5 at the bottom of the winter range, so a cold or draughty room usually wants 13.5. Silentnight’s 10.5 listing says “all year”. The same page’s seasons field says Spring. Read both.',
      },
      {
        q: 'What tog duvet should a hot sleeper buy?',
        a: 'A light one. Which?’s summer band is 1 to 4 tog. The Silentnight double linked here is 4.5 tog, which is the light weight shops usually sell, and slightly above that band. Fix the room as well. A thick duvet in a hot room will still wake you.',
      },
      {
        q: 'What tog is a baby duvet?',
        a: 'Do not use an adult 4.5, 10.5 or 13.5 tog duvet for a baby. NHS Start for Life gives baby sleep bags as 2.5 tog at about 16 to 20°C, 1.0 tog at about 20 to 24°C, and 0.5 tog at about 24 to 27°C, with no other bedding. The Lullaby Trust says to follow the bag maker’s guide and not to stack two bags.',
      },
    ],
  },
  {
    slug: 'best-pillow-for-side-sleepers',
    title: 'Best Pillow for Side Sleepers: A UK Buying Guide',
    excerpt: 'Side sleepers need enough height to keep the head level with the spine. Here is how to check that tonight, and three Amazon UK pillows rechecked on 21 November 2026. The adjustable pillow is now the 2-pack, which was in stock.',
    content: `**Affiliate disclosure.** The pillow links below go to Amazon UK with our Associates tag. Prices were read off those listings on 7 November 2026 and will change. We have not slept on these pillows. This site does not publish star ratings for them.

If you are looking for the best pillow for side sleepers, start with height, not the brand. On your side, your shoulder holds your head away from the mattress. The pillow has to fill that gap so your nose stays roughly in line with the centre of your chest. Too thick, and the neck bends upward. Too thin, and the head drops toward the bed.

## What NHS physiotherapy leaflets actually say

This is not a measurement we made. It is the advice already published for people with neck pain:

- Gloucestershire Hospitals says that on your side the head and neck should be straight, in line with the rest of the spine. A pillow that is too thick pushes the head up. A pillow that is too thin lets it drop. The arm you are lying on should rest in front of the chest, not under the body. Their leaflet tells you to contact NHS 111 for severe neck pain, altered vision, headaches, or weakness in the arms or hands. [Neck pain leaflet](https://www.gloshospitals.nhs.uk/your-visit/patient-information-leaflets/neck-pain/).
- East Lancashire Hospitals says a pillow should fill the hollow between the head and the shoulders, and that on your side the head should be level with the body. A rolled towel inside the pillowcase can fill that hollow if the pillow itself is flat. [Neck pain leaflet (PDF)](https://elht.nhs.uk/application/files/4517/0058/6852/Neck_pain_leaflet_V2_-_2022_2.pdf).
- Leeds Teaching Hospitals says some side sleepers need two pillows, and that stomach sleeping is the position to avoid. [Acute neck sprains](https://www.leedsth.nhs.uk/patients/resources/acute-neck-sprains/).
- Cambridge University Hospitals says to keep the head in the middle, in line with the spine, and to mould the filling so the neck is supported where it dips. [Neck exercises and advice](https://www.cuh.nhs.uk/patient-information/neck-exercises-and-advice/).

A Telegraph round-up quoted a sleep physician suggesting a pillow of about 10 to 15 cm for side sleepers. Treat that as someone else’s rule of thumb. A narrow shoulder needs less. A broad shoulder needs more. None of the three listings below print a loft in centimetres, so the photo test matters more than the number.

## The two-minute check before you buy

Lie on your usual side, on the pillow you already own. Take a photo from behind, or ask someone to look.

1. Your ear, shoulder, and hip should sit on one roughly level line. The nose should not point at the ceiling or into the mattress.
2. If the head is dropped, you need more height. If the neck is bent up, you need less.
3. If your bottom arm is trapped under the pillow, the pillow is doing the job of your arm, and the shoulder is paying for it. Gloucestershire’s leaflet wants that arm in front of the chest.
4. Press the middle of the pillow. If it stays crushed, the fill has collapsed and a new cover will not fix it.

Change the height you already have before you change brand. Two thinner pillows, or a towel inside the case, will tell you whether height was the problem. Then buy one pillow that holds that height.

## Which of these three to buy

These are Amazon UK listings. The notes are the maker’s claims and what the page itself says. They are not a sleep test. On 21 November 2026 the single adjustable pillow was still unavailable, so the button now opens the 2-pack of the same pillow, which was in stock. The other two pillows were also in stock.

### If you do not know your height yet: Silentnight adjustable

The [Silentnight Adjustable Memory Foam Pillow](/reviews/silentnight-adjustable-pillow) 2-pack (ASIN B0DK78ZGZS, model 589963GE) is shredded memory foam in a zip. You add or remove fill. Silentnight also puts hollowfibre and mesh sides around that foam, and says the cover comes off and can go in the washing machine. The page does not give a height in centimetres. Shopper comments on the listing disagree about whether the fill stays high enough, which is the useful warning: start with more fill, then take some out, rather than the other way round.

The single-pillow listing (B0DJW5XZSR) was still currently unavailable on 21 November 2026. The 2-pack of the same pillow was £38.24, against a list price of £44.99, and the page said in stock. Branded_Bedding sells and dispatches it. Amazon showed 4.4 out of 5 from 211 ratings. Those are Amazon’s shopper ratings, not a score from us. [Shop the adjustable pillow 2-pack](/go/silentnight-adjustable-pillow).

Buy this one if you are between sizes, you share a bed with someone who sleeps differently, or your current pillow is almost right but a bit low or a bit high. It is a 2-pack, so there is a spare in the box.

### If fibre pillows go flat by morning: Silentnight Ultragel

The [Ultragel Premier](/reviews/silentnight-ultragel-pillow) (ASIN B00U8WJM8Q, model 430388GE) is a gel-foam core with hollowfibre around it and mesh sides. Silentnight says the core is five times more breathable than standard memory foam and that it does not go flat overnight. That “five times” line is theirs. The title says firm support. The same page’s firmness field says Medium. Amazon lists it for side and back sleepers and quotes a 2-year guarantee. It does not say you can unzip it and change the height.

On 21 November 2026 the price was £25.50 and the page said in stock. It also showed 12% savings. Amazon showed 4.2 out of 5 from 1,202 ratings. [Shop the Ultragel pillow](/go/silentnight-ultragel-pillow).

Buy this one if your complaint is a fibre pillow that collapses, or you sleep hot and want the cooling claim. If the photo test says you need a very high pillow, the adjustable Silentnight 2-pack is the better shape, because you can add or remove fill. A fixed core that is too tall will bend your neck up, and you cannot remove fill.

### If you want two pillows and will check the size: Slumberdown

The [Slumberdown Memory Foam Plus 2-pack](/reviews/slumberdown-memory-foam-pillow) (ASIN B01N46GW3H) is a memory-foam wrap around hollowfibre. The title says the pillows are UK-made, for back and side sleepers, with a soft knit cover. The bullets mention a 2-year guarantee. Care is wipe clean only, so use a protector. On 21 November 2026 the 2-pack was £27.11 and in stock. The page priced that at £13.56 a pillow. Amazon showed 4.1 out of 5 from 936 ratings.

Read the size before you order. The title says 38 × 64 cm. The description on the same listing says L74 × W48 cm. Those are not the same pillow. [Shop the Slumberdown 2-pack](/go/slumberdown-memory-foam-pillow).

Buy this pair if you want a spare, or a pillow on each side of the bed, and you are happy to confirm the size in the menu. Do not buy it for adjustable height. There is no zip for the fill.

## Neck pain, shoulder pain, and an arm under the pillow

A new pillow is reasonable when the photo test shows your head is tipped, or when the old pillow stays crushed. It is not a treatment. Gloucestershire’s leaflet is clear about the symptoms that should go to NHS 111 rather than a checkout: severe pain, weakness in the arms or hands, altered vision, or headaches.

Shoulder pain on your side is often a height problem or an arm trapped under the head. Fill the gap so the arm can come forward. A thicker pillow can also press the shoulder if it is so wide that you are lying on the edge of it. Standard UK pillows are often about 48 × 74 cm, which is why the Slumberdown size clash matters: a short pillow can leave the shoulder on the mattress and the neck on the foam.

Stomach sleeping will not be rescued by a side-sleeper pillow. The NHS leaflets above tell you to avoid face-down, because the neck is twisted for hours.

## What we would not buy for this job

The [Eight Sleep pillow cover](/reviews/eight-sleep-pillow-cover) is about £999 and only works with an Eight Sleep Pod. It changes temperature. It does not set the height of your neck. Skip it unless you already own the Pod.

Light is a different problem from pillow height. If the room is still bright after the curtains are closed, the buying notes are in [best sleep mask for side sleepers](/blog/best-sleep-mask-for-side-sleepers). A mask will not hold your neck up. Noise is a third problem. If a plug hurts the ear that is on the pillow, the buying notes are in [best earplugs for side sleepers](/blog/best-earplugs-for-side-sleepers).

A stack of soft hotel pillows feels fine for a night and then collapses. If you wake with a stiff neck, check height first, then whether the fill has gone flat. The mattress underneath changes the gap too. A thick soft mattress lets the shoulder sink, so you need less pillow. That is covered on the [mattresses page](/categories/mattresses), including the Tempur notes. Heat is a different problem: the [hot sleepers guide](/blog/hot-sleepers-temperature-solutions) is the place for room temperature, and [what tog duvet do I need](/blog/what-tog-duvet) is the place for the duvet. The Ultragel pillow is only one small piece of that.

## A sensible order

1. Do the photo test on the pillow you have.
2. If the height is close, add or remove a towel for three nights before you spend anything.
3. If you still cannot get the line level, buy the adjustable Silentnight and set the zip to match the test.
4. If you already know you need a firmer shape that will not collapse, buy the Ultragel and return it if the photo test fails. Amazon’s page was offering free returns when we looked.
5. Keep the old pillow until the new one has survived a week. A lot of “best pillow” disappointment is a height miss, and you can often send it back.

This page is not medical advice.`,
    category: 'Guides',
    readTime: '12 min',
    date: '2026-11-07',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-28',
    image: '/images/hero-bedroom.jpg',
    imageAlt: 'A dim bedroom with a made bed. Not a photo of a specific pillow.',
    seoTitle: 'Best Pillow for Side Sleepers (UK)',
    seoDescription: 'How to choose a pillow for side sleeping in the UK: the height check NHS leaflets describe, plus three Amazon pillows with prices checked in November 2026.',
    tags: ['pillows', 'side sleepers', 'neck pain', 'buying guide'],
    faqs: [
      {
        q: 'What is the best pillow for side sleepers in the UK?',
        a: 'The one that keeps your head level with your spine. If you do not know that height yet, the Silentnight adjustable pillow is the practical shape, but on 21 November 2026 that listing was unavailable. The last price we could read was £32.98 on 7 November. The Silentnight Ultragel was £25.50 and in stock that day. It is a fixed gel-foam core. We have not sleep-tested either of them.',
      },
      {
        q: 'How high should a pillow be for side sleepers?',
        a: 'High enough that your head does not drop toward the mattress or bend upward. NHS physiotherapy leaflets describe that line, and they say a broader shoulder usually needs more fill. A published rule of thumb of about 10 to 15 cm will be wrong for some people. Check with a photo rather than a tape measure from a stranger.',
      },
      {
        q: 'What pillow helps side sleepers with neck or shoulder pain?',
        a: 'Start by correcting height, and stop sleeping with the lower arm trapped under the pillow. Gloucestershire Hospitals tells people with severe neck pain, arm weakness, altered vision, or headaches to contact NHS 111. A pillow is not the treatment for those symptoms.',
      },
      {
        q: 'Are memory foam pillows too hot for side sleepers?',
        a: 'Solid memory foam can sleep warm. The Ultragel listing claims a more open gel-foam core and mesh sides. The adjustable Silentnight uses shredded foam plus mesh, which moves air more than a solid block. Both claims come from Silentnight. If you overheat all night, fix the room as well. The hot sleepers guide covers that.',
      },
      {
        q: 'I sleep with my arm under the pillow. Which pillow fixes that?',
        a: 'No pillow “fixes” the habit, but a higher, stable pillow can make the arm unnecessary. Gloucestershire’s neck-pain leaflet says the arm you lie on should rest in front of the chest, not underneath you. Use the adjustable fill until your head is level without the arm as a prop.',
      },
    ],
  },
  {
    slug: 'mouth-tape-vs-nasal-strips-for-snoring',
    title: 'Mouth Tape vs Nasal Strips for Snoring: Which Should You Buy?',
    excerpt: 'If your mouth falls open at night, the NHS lists a chin strap or a vestibular shield, not mouth tape. Nasal strips are for a blocked or narrow nose. Here is how those options compare, including the cautions from Which? and a 2025 review of mouth tape.',
    content: `**Affiliate disclosure.** Some links below go to Amazon with our Associates tag. Brand-site links are marked on the product page when they are not commissioned. Prices were checked in November 2026 and will move. This page is not medical advice.

If your mouth falls open while you sleep, the [NHS snoring page](https://www.nhs.uk/symptoms/snoring/) lists a chin strap to hold your mouth closed, or a vestibular shield, which is a device you wear in your mouth to encourage you to breathe through your nose. If the problem is a blocked or narrow airway in the nose, it lists nasal strips or dilators, or a decongestant or nasal spray. Mouth tape is not on that table.

A 2025 systematic review of mouth taping (Rhee and colleagues, 10 studies and 213 people) found limited evidence of benefit and raised a risk of harm if the nose is blocked. [Which?](https://www.which.co.uk/reviews/anti-snoring-devices/article/best-anti-snoring-devices-aFe7y5S0IyKU) did not test mouth tape, because of those safety concerns. If you still want to try tape, treat it as a secondary option only after the NHS matches, and only if your nose is already clear.

The NHS page was last reviewed on 4 August 2023.

## Match the product to the cause

Snoring is tissue vibrating in a narrowed airway. The narrow point might be the nostrils, the soft palate, the tongue, or several of those at once. That is why two people with the same complaint can need different products. The NHS puts it in a simple table:

- **Mouth falling open when you are asleep:** a chin strap, or a vestibular shield.
- **Blocked or narrow airways in your nose:** nasal strips or dilators that hold the nose open, or decongestants or nasal sprays to reduce swelling.
- **Tongue partially blocking the back of your throat:** a mandibular advancement device, fitted with advice from a dentist or a doctor. Neither tape nor a strip holds the throat open.

The NHS also suggests starting with ordinary changes: sleep on your side, lose weight if you are overweight, do not smoke, drink less alcohol, and avoid sleeping pills. See a GP if those changes do not help, if snoring is having a big impact, or if you feel sleepy in the day, your breathing stops and starts, or you gasp or choke in your sleep. Those last signs can be sleep apnoea, which can be serious if it is not treated.

## When a nasal strip or dilator is the closer match

External nasal strips, such as Breathe Right, stick across the bridge of the nose. Flexible bands try to lift the nostrils slightly. Breathe Right says the strips are clinically shown to reduce snoring by improving nasal airflow. Take that as a claim about the nose, not a claim that a strip treats sleep apnoea. People with a collapsing nasal valve, a cold, or a night of allergy congestion are the ones most likely to feel a difference.

Internal dilators do the same job from inside the nostril. Mute, made by Rhinomed, is the one widely stocked on Amazon UK. Rhinomed says its trials found about 38 percent more nasal airflow. That number is the manufacturer's, not a test we ran. Dilators suit people whose skin reacts to adhesive.

A strip or a dilator is a reasonable thing to try if:

- Your nose feels blocked, whistly, or one-sided when you lie down.
- You wake with a dry mouth because air will not come through your nose.
- You want something you can use on a bad-allergy night without covering your mouth.

Skip strips if your nose is already clear and the snore is a throat snore: very loud, with gasping or pauses. A strip will not fix that. In that case the useful next step is a GP or a sleep clinic, not a bigger pack of strips.

## If your mouth falls open

This is the case where older versions of this page pointed people to mouth tape. The NHS does not. For a mouth that falls open, it lists a chin strap or a vestibular shield.

A chin strap is a soft band that holds the jaw up so the mouth is less likely to drop open. A vestibular shield sits in the mouth and is meant to make you breathe through your nose. Both still need a nose you can already breathe through. Talk to a pharmacist or a GP before you buy a device you wear in your mouth, and do not use either as a treatment for suspected sleep apnoea without clinical advice.

## What the evidence says about mouth tape

Mouth tape is a small adhesive strip that keeps the lips together so you are more likely to breathe through your nose. It does not open a blocked nose. If you cannot breathe through your nose, covering the mouth can make the night worse.

The research is thinner than the marketing. Rhee and colleagues (2025) reviewed 10 studies with 213 people in total. Two studies reported an improvement in sleep apnoea measures; others found no difference. The authors warned of a risk of asphyxiation or low oxygen if the nose is blocked, and many of the studies excluded anyone with nasal problems. That is a small, mixed evidence base, not a reason to treat tape as the default fix for an open mouth.

Which? reached a similar caution in its anti-snoring device guide (updated 10 November 2026). It did not test mouth tape, for the safety of its testers. Professor Chatrath, quoted there, says you should not use mouth tape if there is a specific reason you cannot breathe through your nose, such as a deviated septum or sinusitis, and that it is better to avoid tape after a lot to eat or drink because of the risk of vomiting and then choking. If someone still chooses to try it, he suggests starting with a small tape in the day, when you can take it off easily, and only considering a night-time trial after you can manage around 20 minutes in those daytime tests.

## Who should not use mouth tape

Do not buy it, and do not try it, if any of these apply:

- You cannot breathe comfortably through your nose while you are awake, including with a cold, hay fever, sinusitis or a deviated septum.
- You have, or might have, sleep apnoea: loud snoring, pauses, gasping or choking, or sleepiness that gets in the way of the day.
- You have been drinking, or you have taken sleeping pills or other sedating medicines.
- You feel sick, or you might vomit in the night.
- It would be used on a child.

If you use CPAP, ask your sleep clinic before you add anything over your mouth. Clinicians often look at a chin strap, a humidifier or a decongestant for mouth leaks, rather than tape.

## If you still want to try tape

Only consider it if you can already breathe comfortably through your nose for several minutes while you are awake, and you have read the NHS options above. Test the feeling while you are awake before you ever use it in bed. Avoid tapes that cover the whole mouth. Our [mouth tape comparison](/mouth-tape) has the safety notes next to each product.

A vented strip such as SomniFix leaves a small hole in the centre. Some people find that less alarming. It still does not open the nose. SomniFix's own UK shop is the live place to buy it right now; the long-standing Amazon UK listing is unavailable.

## Listings we checked in the UK this month

These are live listings we checked, not a ranking from a private lab test, and not a suggestion that tape comes before the NHS options.

- **Nasal strip, for a blocked or narrow nose:** [Breathe Right Clear](/reviews/breathe-right-clear). £8.98 for 20 clear small/medium strips (two packs of 10) on Amazon UK when checked on 7 November 2026. [Shop Breathe Right](/go/breathe-right-clear).
- **Reusable dilator, for the same cause:** [Mute](/reviews/nasal-dilator-pro), small 3-pack, about £19.99. Rinse it. [Shop Mute](/go/nasal-dilator-pro).
- **Mouth tape, firmer hold, only if the cautions above do not apply:** [Hostage Tape](/reviews/hostage-tape). On 21 November 2026 the old ASIN opened a 30-pack titled “for Women”, colour Rose, at £10.32, with £17.75 crossed out. The bullets still say beard-friendly and PAP-friendly. [Shop Hostage Tape](/go/hostage-tape).
- **Mouth tape that surrounds the lips instead of sealing them:** [MyoTape](/reviews/mytape). The button is the sensitive-skin, medium pack, 30 nights (B0G54CZM1F). On 21 November 2026 that page showed £14.99 and said it was in stock. The beard pack was still temporarily out of stock. It is not the kids product. [Shop MyoTape](/go/mytape).

Dream Recovery and SayLess are real brands, but they sell from their own sites rather than Amazon UK, and we do not have affiliate codes for them. ZzzTape is in the same position. If you follow those reviews, read the note under the button so you know the click is not commissioned.

## A sensible order if you want to try a shop-bought option

1. Use the NHS lifestyle steps first, and see a GP if the warning signs above are present.
2. If the nose is blocked or narrow, try a saline rinse, then a strip or a dilator, for a few nights.
3. If the mouth falls open and the nose is clear, look at a chin strap or ask a clinician about a vestibular shield before you look at tape.
4. Only add tape if you can breathe through your nose comfortably while awake, you have tried it in the day, and none of the “do not use” points apply.
5. If the tape comes off, or you wake anxious, stop. A stronger adhesive is not the fix for a blocked nose.

The longer version of the breathing work is our [30-day plan to stop mouth breathing at night](/blog/how-to-stop-mouth-breathing-at-night). The product grid is on the [mouth tape hub](/mouth-tape) and the [nasal strips page](/categories/nasal). If you are the person trying to sleep next to the snoring, that is a different question: [best earplugs for side sleepers](/blog/best-earplugs-for-side-sleepers). Plugs do not treat the snorer. If you are unsure tape is even appropriate, use the [two-minute quiz](/quiz) before you buy.

## When to skip these products and see a GP

See a doctor before you buy a strip, a dilator, a chin strap or tape if snoring comes with pauses, choking, morning headaches, or sleepiness that gets in the way of the day. These products do not hold the throat open, and they are not a sleep study.

This page is not medical advice.`,
    category: 'Guides',
    readTime: '12 min',
    date: '2026-11-02',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-28',
    image: '/images/nasal-product.jpg',
    seoTitle: 'Mouth Tape vs Nasal Strips for Snoring',
    seoDescription: 'If your mouth falls open, the NHS lists a chin strap or a vestibular shield. Nasal strips are for a blocked nose. Mouth tape has limited evidence and safety cautions.',
    tags: ['snoring', 'mouth tape', 'nasal strips', 'buyer guide'],
    faqs: [
      {
        q: 'Which is better for snoring, mouth tape or nasal strips?',
        a: 'They are for different causes, and they are not the only options. If your nose feels blocked, the NHS lists nasal strips or dilators. If your mouth falls open, it lists a chin strap or a vestibular shield. Mouth tape is not on that NHS table, and the evidence for it is limited.',
      },
      {
        q: 'Does the NHS recommend mouth tape if my mouth falls open?',
        a: 'No. For a mouth that falls open while you sleep, the NHS snoring page lists a chin strap to hold your mouth closed, or a vestibular shield to encourage nose breathing. Mouth tape is not listed there.',
      },
      {
        q: 'Can I use mouth tape and nasal strips on the same night?',
        a: 'Only if your nose is already clear enough to breathe through comfortably while you are awake, and none of the safety cautions apply. Open the nose first with a strip or dilator if it is blocked. Do not tape if you still feel blocked, and do not treat that combination as a treatment for sleep apnoea.',
      },
      {
        q: 'Will mouth tape or nasal strips treat sleep apnoea?',
        a: 'No. Loud snoring with pauses, choking, or strong daytime sleepiness needs a clinician. These products do not hold the throat open. A 2025 review of mouth tape found only limited evidence of benefit and warned about breathing risks if the nose is blocked.',
      },
      {
        q: 'What is actually in stock to buy in the UK?',
        a: 'On 21 November 2026, Breathe Right Clear was £8.98 for 20 strips and in stock. Mute’s small 3-pack was £19.99 and in stock. Hostage Tape’s old ASIN opened a 30-pack titled for women, colour Rose, at £10.32. MyoTape’s sensitive-skin, medium 30-night pack was £14.99 and in stock; the beard pack was still temporarily out of stock. SomniFix’s Amazon UK listing was still unavailable. Chin straps and vestibular shields are the NHS-listed options if your mouth falls open; check with a pharmacist or GP before you buy a device you wear in your mouth.',
      },
    ],
  },
  {
    slug: 'best-mouth-tape-2026',
    title: 'Best Mouth Tape 2026: How to Choose for Beards, Skin, and Hold',
    excerpt: 'There is no lab panel behind this page. Choose by the shape of the strip, whether you have a beard, and which UK listing is actually in stock.',
    content: `**Affiliate disclosure.** Some links go to Amazon with our Associates tag. Brand-site links are marked on the product page when they are not commissioned.

This is the buying guide: how the designs differ, and which UK listings were in stock. The comparison table, plus longer notes on types, beards, CPAP, snoring, and how to apply a strip, are on the [mouth tape hub](/mouth-tape).

An earlier version of this page described an eight-week test with 12 people. This site did not run that test. What follows is how the strips are designed, and which shops were actually selling them in November 2026.

## Start with the nose

Mouth tape is only worth buying if you can already breathe through your nose while you are awake. It does not treat sleep apnoea. Safety notes sit on the [mouth tape hub](/mouth-tape). If the aim is quieter snoring, read [mouth tape vs nasal strips for snoring](/blog/mouth-tape-vs-nasal-strips-for-snoring) before you pick a brand.

## How the designs differ

- **Strip over the lips.** [Hostage Tape](/reviews/hostage-tape) covers the mouth. On 21 November 2026 the listing that opened was a 30-pack titled “for Women”, colour Rose, at £10.32. The bullets still call it beard-friendly and PAP-friendly. [Shop Hostage Tape](/go/hostage-tape).
- **Strip around the lips.** [MyoTape](/reviews/mytape) is Oxygen Advantage’s design, meant to surround the mouth with elastic tension rather than seal it. The Amazon button is the sensitive-skin, medium pack, 30 nights (B0G54CZM1F). On 21 November 2026 it showed £14.99 and was in stock. The beard pack was still temporarily out of stock. This is not a kids pack. [Shop MyoTape](/go/mytape).
- **Vented strip.** [SomniFix](/reviews/somnifix) has a small hole in the centre. Amazon UK’s listing was still unavailable. The button goes to SomniFix’s own UK shop and is not commissioned.
- **Brand sites without a code.** Dream Recovery, ZzzTape, and SayLess sell from their own sites. We do not have affiliate codes, and we are not going to invent a winner from a test we did not run. Read the note under each button.

## A simple way to choose

1. Blocked nose, a cold, or you cannot nose-breathe while awake: do not tape. Use a [nasal strip or dilator](/categories/nasal), or see a GP if snoring comes with pauses.
2. Beard or stubble, and the nose is clear: Hostage Tape’s bullets still say facial hair, but on 21 November 2026 the title said “for Women” and the colour was Rose. Read both.
3. You want to be able to open your mouth, or you want a gentler adhesive: MyoTape’s around-the-lips shape is the closer match. The Amazon button is the sensitive-skin, medium pack, which was in stock on 21 November 2026. Kids packs are a different product; do not buy this one for a child.
4. You want a vent and will buy from the brand: SomniFix, knowing that click is not commissioned.

The longer breathing plan is [how to stop mouth breathing at night](/blog/how-to-stop-mouth-breathing-at-night). If the problem is falling asleep rather than an open mouth, start with [how to fall asleep fast](/blog/how-to-fall-asleep-fast-naturally) and the [sleep hygiene checklist](/blog/sleep-hygiene-2026). This page is not medical advice.` ,
    category: 'Mouth Taping',
    readTime: '7 min',
    date: '2026-01-12',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-24',
    image: '/images/dream-recovery-tape.jpg',
    seoTitle: 'Best Mouth Tape 2026: Beard, Skin, and Hold',
    seoDescription: 'How to choose mouth tape in the UK without a fake lab score. Beard hold, a lip-surround strip, a vent, and which listings were in stock in November 2026.',
    tags: ['mouth tape', 'sleep strips', 'best of', '2026'],
  },
  {
    slug: 'mouth-taping-benefits-risks',
    title: 'Mouth Taping: Benefits People Claim, and the Risks',
    excerpt: 'What mouth taping is used for, who should skip it, and what this site has not checked. Not a treatment and not a lab result.',
    content: `People use mouth tape to keep the lips together so they breathe through the nose. This page has not reviewed the trials, and it does not list benefits as results this site measured.

A separate buyer’s note cites one small 2022 study and the Sleep Foundation’s public summary. That note is not a reason to treat tape as safe for everyone.

## Claims you will see elsewhere
These are claims, not findings from this site:

- Less snoring
- Changes in sleep stages
- Less dry mouth in the morning
- Changes in blood pressure or heart-rate variability
- An effect on mild positional apnoea

This site has not checked any of those.

## Important Risks & Contraindications
**Do NOT mouth tape if:**
- You have untreated moderate/severe obstructive sleep apnea
- You have significant nasal obstruction (deviated septum, severe allergies, polyps)
- You are sick, congested, or have a cold
- You have respiratory conditions like COPD or severe asthma
- You are under the influence of alcohol or heavy sedatives

**Possible side effects:**
- Skin irritation or allergic reaction to adhesive
- Anxiety or panic (especially first nights)
- Waking with tape partially off (frustrating)
- In rare cases, people have reported feeling short of breath upon waking

## The limit of this page
Mouth tape is not a treatment, and this site does not call it low-risk. The safety list above is the part to read first.

Start slow. Test during a low-stakes nap first. Have a plan B (nasal strips, dilators, or just removing the tape).

If you have any diagnosed sleep disorder, talk to your doctor or sleep specialist first.` ,
    category: 'Science & Safety',
    readTime: '11 min',
    date: '2026-01-08',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-07',
    image: '/images/somnifix-tape.jpg',
    seoTitle: 'Mouth Taping: Benefits and Risks',
    seoDescription: 'What mouth taping is used for, who should avoid it, and the limits of what this site has checked. Not a lab test and not medical advice.',
    tags: ['safety', 'science', 'mouth breathing', 'risks'],
  },
  {
    slug: 'how-to-stop-mouth-breathing-at-night',
    title: 'How to Stop Mouth Breathing at Night: A Practical 30-Day Plan',
    excerpt: 'Steps people try when they want to breathe through the nose at night. This site has not followed a reader group through them.',
    content: `Most chronic mouth breathers during sleep have underlying reasons: nasal congestion, weak oral posture, allergies, or simply habit from years of mouth breathing.

Taping is a "forced practice" tool. Real lasting change comes from addressing the root and building the habit.

## Week 1-2: Nasal Hygiene Foundation (Do This First)
- Saline rinse (NeilMed or neti pot) twice daily
- Nasal strips or internal dilators at night
- Allergen-proof your bedroom (wash bedding hot, HEPA filter, no pets in bed)
- Consider seeing an ENT if congestion is chronic

## Week 2-3: Daytime Nasal Breathing Training
- Practice 5-10 minutes of conscious nasal breathing while walking
- Try "nose only" during light exercise
- Tongue posture: rest tongue on roof of mouth, teeth slightly apart (Mewing basics)
- Consider myofunctional therapy exercises (YouTube: "nasal breathing exercises")

## Week 3-4: Introduce Mouth Taping
- Start with short periods (first half of night or during a 90-min nap)
- Use a gentle tape. The MyoTape button on this site is the sensitive-skin, medium pack, 30 nights, which was in stock on Amazon UK on 21 November 2026. Dream Recovery also sells a sensitive-skin tape on its own site, and that click is not commissioned.
- Pair with nasal dilation
- Keep a journal: How did you sleep? Any panic? Tape still on in morning?

## Ongoing: Lifestyle Factors
- No heavy meals or alcohol within 3 hours of bed
- Elevate head slightly if reflux is an issue
- Strength train (especially neck and upper airway muscles over time)
- Manage weight if relevant

Many people report that after 3-6 weeks of consistent work, they naturally wake with their mouth closed even without tape.

If snoring is the reason you started looking, compare the two products people actually buy in [mouth tape vs nasal strips for snoring](/blog/mouth-tape-vs-nasal-strips-for-snoring).

Mouth taping is training wheels. The goal is to not need them forever.` ,
    category: 'Guides',
    readTime: '12 min',
    date: '2026-01-05',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-21',
    image: '/images/nasal-dilator.jpg',
    seoTitle: 'Stop Mouth Breathing at Night',
    seoDescription: 'Steps people try when they want to breathe through the nose at night, including nasal hygiene and when not to use tape. Not a reader trial.',
    tags: ['mouth breathing', 'nasal breathing', 'guide', 'habit change'],
  },
  {
    slug: 'sleep-hygiene-2026',
    title: 'A 2026 Sleep Hygiene Checklist',
    excerpt: 'Habits that often appear in sleep-hygiene lists. This site has not ranked them, and it has not measured an improvement.',
    content: `Sleep optimization has become a multi-billion pound industry filled with gadgets and supplements of varying value.

Here is what actually moves the needle, ranked roughly by impact:

## Tier 1: Non-Negotiable Foundations (Biggest ROI)
1. Consistent sleep/wake times (±30 min) — even weekends
2. Morning sunlight within 30-60 min of waking (10-30 mins)
3. Cool bedroom (60-67°F / 15-19°C is ideal for most)
4. Complete darkness. Close the curtains first. If light is still a problem, an [eye mask](/blog/best-sleep-mask-for-side-sleepers) is the extra step NHS Every Mind Matters names. If noise is the problem, the same NHS list puts [earplugs](/blog/best-earplugs-for-side-sleepers) first.
5. No caffeine after ~2pm (or 8-10 hours before bed for slow metabolizers)

## Tier 2: High-Impact Practices
- Wind-down routine 60+ minutes before bed (no screens or very dim)
- No alcohol (even one drink fragments sleep architecture)
- A magnesium product, if a clinician says it is appropriate. This checklist does not set a dose. See the [magnesium notes](/reviews/magnesium-glycinate-sleep).
- Exercise most days, preferably morning or afternoon
- Address sleep apnea if suspected (get tested!)

## Tier 3: Tools Worth Considering
- Mouth taping (if appropriate candidate)
- Nasal strips/dilators
- White noise or pink noise machine
- A mattress and pillow that keep the spine level. Side sleepers: [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers). The duvet tog is separate: [what tog duvet do I need](/blog/what-tog-duvet)
- Oura/Whoop/Apple Watch for data and accountability
- Apigenin and L-theanine are discussed online. This site has not called the combination low-risk. See the [supplement notes](/blog/sleep-supplements-stack-2026).

## What Usually Doesn't Move the Needle Much
- Most "sleep teas"
- Expensive sleep trackers without behavior change
- Weighted blankets for most people (some love them)
- Fancy pillow sprays

Start with the first group for two weeks before adding gadgets. This site has not measured which change helps more.` ,
    category: 'Sleep Optimization',
    readTime: '9 min',
    date: '2026-01-02',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-28',
    image: '/images/mattress.jpg',
    seoTitle: 'Sleep Hygiene Checklist',
    seoDescription: 'A checklist of sleep habits often discussed for insomnia, and when to speak to a GP. This site has not ranked them in a lab.',
    tags: ['sleep hygiene', 'evidence-based', 'checklist'],
  },
  {
    slug: 'how-to-fall-asleep-fast-naturally',
    title: 'How to Fall Asleep Faster Without Pills',
    excerpt: 'Habits people try when they want to fall asleep faster, including when mouth tape is the wrong next step. Not a timed result from this site.',
    content: `People search for ways to fall asleep faster. The notes below are habits that come up often. This site has not tested them and does not promise a time to sleep.

## The 10-Minute Wind-Down That Works
1. Dim lights 60 minutes before bed (or use warm red/orange bulbs).
2. No screens or use strong blue blockers + night mode.
3. 4-7-8 breathing or box breathing: inhale 4, hold 7, exhale 8. Repeat 4–6 cycles.
4. Progressive muscle relaxation from toes to head.

## Temperature & Environment Hacks
- Cool room (15–19°C / 60–67°F) is the single biggest environmental lever.
- Hot shower or bath 1–2 hours before bed (then cool room = natural temperature drop).
- Blackout + quiet (or consistent pink/white noise). If you sleep on your side and the noise is the problem, see [best earplugs for side sleepers](/blog/best-earplugs-for-side-sleepers).

## Mouth Taping & Nasal Breathing for Faster Sleep Onset
Many chronic mouth breathers wake more often and take longer to fall back asleep. Once nasal breathing is trained, some people add a gentle mouth tape. The MyoTape button on this site is the sensitive-skin, medium pack, 30 nights, which was in stock on Amazon UK on 21 November 2026. Dream Recovery also sells a sensitive-skin tape on its own site, and that click is not commissioned. This site has not measured whether mouth tape helps people fall asleep faster, or wake less often. Treat any such claim as unverified here. Only consider a strip if you can already breathe through your nose while awake, and read the safety notes on the mouth tape hub first.

See our full guide: [How to Stop Mouth Breathing at Night](/blog/how-to-stop-mouth-breathing-at-night) and the [Mouth Tape Hub](/mouth-tape).

**Important:** Only attempt mouth taping if you can comfortably breathe through your nose. Test during the day first.

## When Racing Thoughts or Sleep Anxiety Keep You Awake
- Journal "brain dump" 30 min before bed (get worries on paper).
- Schedule a "worry time" earlier in evening.
- Body scan meditation or non-sleep deep rest (NSDR) protocols (free on YouTube from Huberman Lab style resources).
- Consistent wake time even after bad nights (protects circadian rhythm).

## What the Data Shows
For persistent insomnia, speak to a GP. CBT-I is a common talking treatment. This page does not quote a success rate.

Mouth taping is a supportive tool for the breathing piece — not a standalone insomnia cure.

Start with the first group in the [sleep hygiene checklist](/blog/sleep-hygiene-2026). This site has not timed how long any of this takes.

This is not medical advice. If you have chronic insomnia or anxiety affecting sleep, speak with a doctor or CBT-I provider.` ,
    category: 'Insomnia & Anxiety',
    readTime: '13 min',
    date: '2026-02-10',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-28',
    image: '/images/eight-sleep-pod.jpg',
    imageAlt: 'A bed with a white cover. Not a photo of a sleep technique.',
    seoTitle: 'How to Fall Asleep Faster',
    seoDescription: 'Ways people try to fall asleep faster without pills: schedule, light, temperature, and when to speak to a GP. Not a lab test.',
    tags: ['insomnia', 'how to fall asleep fast', 'sleep anxiety', 'natural remedies'],
  },
  {
    slug: 'sleep-anxiety-remedies',
    title: 'Sleep Anxiety: Routines People Try',
    excerpt: 'Notes on sleep anxiety and orthosomnia. These are routines people discuss. They are not a treatment, and this site has not tested them.',
    content: `Sleep anxiety — lying awake worrying about not sleeping — is incredibly common and self-reinforcing. The more you "try" to sleep, the more alert your nervous system becomes.

## First Principle: Reduce the Pressure to Sleep
- Get out of bed after 20–25 minutes if not asleep. Do a calm activity in dim light (reading physical book, light stretching). Return when sleepy.
- Getting out of bed when you are not sleepy is one part of CBT for insomnia. This page is not that treatment. Ask a GP if you want a referral.

## Daytime Levers That Reduce Night Anxiety
- Morning sunlight within 30–60 min of waking (10+ minutes outdoors or bright window).
- Consistent exercise (not within 2–3 hours of bed for most).
- Cut caffeine after noon (or earlier if slow metabolizer).
- Limit alcohol — it fragments sleep and increases anxiety in the second half of the night.

## Evening De-Arousal Protocol
- 60-minute wind-down: no work email, no doomscrolling.
- Light journaling or "done list" to close the day mentally.
- Warm bath/shower + cool bedroom.
- A magnesium product only if a clinician agrees. This page does not set a dose.

## Mouth Breathing as a Hidden Anxiety Amplifier
Some people connect a dry mouth and mouth breathing with waking up worried. This site has not tested whether switching to nasal breathing changes that.

Start here: [How to Stop Mouth Breathing at Night: 30-Day Plan](/blog/how-to-stop-mouth-breathing-at-night). Use our [Sleep Quiz](/quiz) to see if mouth taping is a sensible next step for you.

## For Clinical-Level Sleep Anxiety
If sleep anxiety is ongoing, ask a GP about CBT for insomnia. This site has not compared it with sleeping pills, and it has not reviewed any app. Mouth tape and supplements are not a treatment for anxiety.

Track patterns for 1–2 weeks (bed/wake times, caffeine, alcohol, exercise, screen cutoff) before adding tools.

Always consult a healthcare professional for persistent insomnia or anxiety disorders. This content is for informational purposes.` ,
    category: 'Insomnia & Anxiety',
    readTime: '11 min',
    date: '2026-02-12',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-07',
    image: '/images/apigenin-supplement.jpg',
    seoTitle: 'Sleep Anxiety Remedies',
    seoDescription: 'Notes on sleep anxiety and orthosomnia: routines, when to ask about CBT-I, and tools that are not a treatment.',
    tags: ['sleep anxiety', 'insomnia', 'orthosomnia', 'CBT-I', 'anxiety remedies'],
  },
  {
    slug: 'sleep-supplements-stack-2026',
    title: 'The 2026 Sleep Supplements Stack: Magnesium, L-Theanine & Apigenin Explained',
    excerpt: 'What people repeat about magnesium glycinate, L-theanine, and apigenin. This site has not tested the combination and does not set a dose.',
    content: `People often mention magnesium glycinate, L-theanine, and apigenin together. This page is not a test of that combination, and it is not a dose you should follow without your own clinician.

The shop buttons on the product pages go to specific Amazon UK listings: EVO Nutrition magnesium glycinate, Nature’s Best L-theanine 200mg, and Time Health apigenin 50mg. This site has not tested those products.

## What is often repeated
These lines are claims you will see elsewhere. This site has not checked them:

- **Magnesium glycinate**: often described as a gentler magnesium salt. Doses you see online vary. Read the bottle.
- **L-theanine**: an amino acid in tea, often described as calming. This page does not review those studies.
- **Apigenin**: a flavonoid in chamomile. This page does not review trials of it for sleep.

Do not treat a timing you read online as a prescription.

## What this page will not claim
This site has not reviewed the trials, and it does not say the three ingredients have been shown to work together. A step-by-step dose that used to sit here has been removed. Ask a doctor or pharmacist before you start a supplement, especially if you take other medicines.

The notes on this site are [Magnesium Glycinate](/reviews/magnesium-glycinate-sleep), [L-Theanine 200mg](/reviews/l-theanine-200mg), and [Apigenin 50mg](/reviews/apigenin-50mg). Each shop button goes to a specific Amazon UK listing. Confirm the brand, dose, and price on that page. This site has not tested the products.`, 
    category: 'Supplements',
    readTime: '10 min',
    date: '2026-07-02',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-24',
    image: '/images/magnesium-supplement.jpg',
    seoTitle: 'Magnesium, Theanine, Apigenin',
    seoDescription: 'Notes on magnesium, L-theanine, and apigenin as they are sold. Not a dose chart from this site, and not a lab test.',
    tags: ['supplements', 'magnesium', 'l-theanine', 'apigenin', 'natural sleep aids'],
  },
  {
    slug: 'mouth-tape-side-sleepers',
    title: 'Mouth Tape for Side Sleepers: What the Designs Are Built to Do',
    excerpt: 'Side sleeping rubs the strip against the pillow. Here is how the shapes differ, without a test panel this site did not run.',
    content: `Side sleeping is the position many snoring leaflets prefer, and it is also the position that rubs a strip of tape against the pillow. An earlier version of this page named winners from a tester panel. There is no such panel.

## What actually changes on your side

The strip has to move with your face, and the pillow will press one cheek. A strip that only sticks to the middle of the lips has less pillow contact than a wide one. A strip that surrounds the mouth, such as [MyoTape](/reviews/mytape), is a different shape again. None of that is a promise it will still be on at 6am.

If the pillow is so low that your cheek is crushed into the mattress, the tape is the wrong thing to fix first. The height check is in the [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers) guide.

## Which listing matches which problem

**Beard or stubble.** [Hostage Tape](/reviews/hostage-tape) is the Amazon UK listing whose bullets still say beard-friendly. On 21 November 2026 the title said “for Women”, the colour was Rose, and the buy box was £10.32 for 30 strips. [Shop Hostage Tape](/go/hostage-tape).

**You want a vent.** [SomniFix](/reviews/somnifix) has a hole in the centre of a wider strip. Its Amazon UK listing was unavailable. The button goes to the brand’s UK shop and is not commissioned.

**You do not want the lips sealed.** MyoTape sits around the mouth. On 21 November 2026 the button opened the sensitive-skin, medium pack, 30 nights, which was in stock. The beard pack was still temporarily out of stock. Do not buy this pack for a child.

**Dream Recovery and ZzzTape** sell from their own sites. We do not have affiliate codes, and we are not going to rank them from a test we did not run.

## Practical notes that do not need a lab

- Only tape if you can breathe through your nose while awake. A [nasal strip](/categories/nasal) comes first if you cannot.
- A smoother pillowcase reduces friction on the strip. That is ordinary fabric advice, not a trial result.
- Start with part of the night. If you wake anxious, take it off.
- CPAP users should ask the clinician who prescribed the mask before adding tape.

Safety notes and the product grid are on the [mouth tape hub](/mouth-tape). The breathing plan is [how to stop mouth breathing at night](/blog/how-to-stop-mouth-breathing-at-night). This page is not medical advice.`, 
    category: 'Mouth Taping',
    readTime: '9 min',
    date: '2026-07-06',
    updated: '2026-11-21',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/mytape.jpg',
    seoTitle: 'Mouth Tape for Side Sleepers',
    seoDescription: 'How side sleeping affects mouth tape, which designs suit a beard or a vent, and which UK listings were in stock in November 2026.',
    tags: ['mouth tape', 'side sleepers', 'CPAP', 'best of 2026'],
  },
  {
    slug: 'sleep-trackers-what-they-mean',
    title: 'What Your Sleep Tracker Is Actually Telling You (and What to Ignore)',
    excerpt: 'What the numbers on a sleep tracker are called, and what this site will not tell you to change because of them.',
    content: `Sleep trackers are incredibly popular in 2026, but many people obsess over the wrong metrics and miss the real signals.

## The Metrics That Matter Most
1. **Sleep Efficiency** (time asleep ÷ time in bed) — Aim for 85%+. Below 80% consistently is worth addressing.
2. **HRV (Heart Rate Variability)** — Higher is generally better. Big drops often mean stress, alcohol, or overtraining.
3. **Resting Heart Rate** — Lower is usually better during sleep. Spikes can indicate illness or poor recovery.
4. **Deep + REM minutes** — More important than total “sleep score” for most people.
5. **Readiness / Recovery Score** (Oura, Whoop, etc.) — Treat as a suggestion, not gospel.

## What to Mostly Ignore
- Exact “sleep score” out of 100 (too many black-box algorithms)
- Single-night data (look at 7–14 day trends)
- “Awake” time if you feel rested (some devices are bad at detecting quiet wakefulness)

## How to Use Data to Actually Get Better Sleep
- If HRV is chronically low → prioritize stress management, alcohol reduction, and consistent bedtimes.
- If deep sleep is low → focus on temperature (cool room or cooling mattress cover like Eight Sleep) and magnesium.
- If you’re waking a lot → check for mouth breathing, nasal obstruction, or sleep apnea (get tested if needed).

See our reviews of the [Oura Ring Gen3](/reviews/oura-ring-gen3) and [Eight Sleep Pod 6](/reviews/eight-sleep-pod-6).

## Pro Move: Combine Data With Behavior
Trackers are most useful when paired with simple experiments:
- “What happens to my HRV and deep sleep when I stop mouth breathing?”
- “Does cutting caffeine after 1pm improve my readiness score?”

The best users treat the device as a feedback tool, not an authority.

If your tracker is causing anxiety (orthosomnia), consider taking a break from the numbers for 2 weeks and focusing only on basics: consistent schedule, morning light, cool dark room, and nasal breathing.

Data is powerful — when you use it the right way.`, 
    category: 'Sleep Optimization',
    readTime: '11 min',
    date: '2026-07-10',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-07',
    image: '/images/gadget-tracker.jpg',
    seoTitle: 'How to Read a Sleep Tracker',
    seoDescription: 'What sleep-tracker numbers are called, including readiness, stages, and HRV. This site does not say which number to chase.',
    tags: ['sleep tracking', 'oura', 'HRV', 'sleep data', 'recovery'],
  },
  {
    slug: 'mouth-taping-mistakes-2026',
    title: '5 Common Mouth Taping Mistakes (and How to Avoid Them in 2026)',
    excerpt: 'Problems people run into with mouth tape, such as a blocked nose or a strip that is too wide. Not a count of how often people stop.',
    content: `Mouth tape is easy to use badly. These are common mistakes described in mouth-taping guides, not a count of readers this site has watched.

Here are the mistakes that come up most often (and the fixes).

## 1. Starting With the Wrong Tape
Using cheap medical tape or the first thing on Amazon often leads to skin irritation, poor hold, or panic.

**Fix**: Start with a sleep-specific product designed for the purpose (Dream Recovery for sensitive skin, SomniFix or Hostage for beards and strong hold). See our full comparison in the [Mouth Tape Hub](/mouth-tape).

## 2. Taping When You Can’t Breathe Through Your Nose
This is the #1 safety issue and the reason many people wake up in panic.

**Fix**: Fix your nasal breathing first. Use saline rinses, nasal strips or dilators, and address allergies. Only tape when you can comfortably breathe nasally for 30+ minutes while awake.

Full protocol: [How to Stop Mouth Breathing at Night](/blog/how-to-stop-mouth-breathing-at-night).

## 3. Applying to Wet or Dirty Skin
Oil, moisturizer, or saliva prevents good adhesion.

**Fix**: Wash your face and lips with a gentle cleanser and pat completely dry before applying. Many people do this as the last step of their wind-down routine.

## 4. Going All-In on Night One
Jumping straight to full-night taping when you’re not used to it often causes anxiety or the tape coming off.

**Fix**: Start with 1–2 hours or the first half of the night. Build the habit gradually over 1–2 weeks.

## 5. Ignoring Other Sleep Fundamentals
Tape does not change alcohol use or an inconsistent schedule. This site has not measured what it does to breathing.

**Fix**: The [sleep hygiene checklist](/blog/sleep-hygiene-2026) covers schedule, light, and the room. This site has not compared tape on its own with tape plus those habits.

This site has not timed how long people take to get used to tape.

Always follow the safety guidelines on every product page and consult a doctor if you have or suspect sleep apnea.`, 
    category: 'Mouth Taping',
    readTime: '8 min',
    date: '2026-07-14',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/hostage-tape.jpg',
    seoTitle: 'Mouth Taping Mistakes',
    seoDescription: 'Problems people run into with mouth tape, including a blocked nose and a strip that feels too wide. Not a failure-rate study.',
    tags: ['mouth tape', 'common mistakes', 'how to use mouth tape', 'sleep tips'],
  },
  {
    slug: 'nasal-breathing-global-benefits',
    title: 'Nasal Breathing for Better Sleep: Why It Matters No Matter Where You Live',
    excerpt: 'Why people talk about nasal breathing at night, and the tools listed on this site. Not a review of the research, and not a result we measured.',
    content: `People in many countries talk about mouth breathing at night. This page does not review the physiology papers, and it has not measured a result.

## Claims you will see elsewhere
These lines are repeated online. This site has not checked them:

- A change in oxygen or carbon dioxide
- Less snoring
- Less dry mouth in the morning
- Nitric oxide and circulation
- Fewer brief awakenings

This site has not measured any of those.

## Why Mouth Breathing Happens (It’s Not Just Habit)
- Nasal congestion / allergies (very common globally)
- Weak tongue posture
- Enlarged tonsils or adenoids (especially in children)
- Deviated septum or nasal valve collapse
- Simply learned behavior over years

## Tools listed on this site
1. **Saline rinse or spray** — sold widely. This site has not tested one.
2. **External nasal strips** — Breathe Right and similar strips are widely available.
3. **Internal nasal dilators** — reusable, no adhesive.
4. **Mouth tape** — only if you can already breathe through your nose. See the listings.
5. **Myofunctional exercises** — videos exist online. This site has not tested them.

If you are choosing between a strip and tape because of snoring, use [mouth tape vs nasal strips for snoring](/blog/mouth-tape-vs-nasal-strips-for-snoring).

See our dedicated guides:
- [How to Stop Mouth Breathing at Night: 30-Day Plan](/blog/how-to-stop-mouth-breathing-at-night)
- [Mouth Tape Hub](/mouth-tape)
- Nasal category reviews

## A Note for International Readers
The core principles are the same everywhere. Product availability varies by country, which is why we focus on mechanisms and categories rather than single brands. Use our [Sleep Quiz](/quiz) for personalized starting recommendations that work regardless of location.

Start with nasal hygiene tonight. Many people notice the difference in morning dryness and energy within a few days, even before adding tape.

Nasal breathing is one of the highest-ROI, lowest-cost upgrades you can make to your sleep — and it’s available to almost everyone on the planet.`, 
    category: 'Guides',
    readTime: '10 min',
    date: '2026-07-18',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-07',
    image: '/images/nasal-product.jpg',
    seoTitle: 'Nasal Breathing for Sleep',
    seoDescription: 'Notes on nasal breathing at night and the strips and tape listed on this site. Not a research review and not a measured result.',
    tags: ['nasal breathing', 'mouth breathing', 'global sleep', 'sleep quality'],
  },
  {
    slug: 'hot-sleepers-temperature-solutions',
    title: 'Hot Sleepers: Why You Wake Up Overheated and How to Fix It in 2026',
    excerpt: 'Notes for people who wake up hot: room habits, bedding, and the Eight Sleep Pod page. Not a ranking of what works best.',
    content: `Hot sleeping is one of the most common complaints worldwide and a major disruptor of deep sleep.

When core body temperature doesn't drop properly at night, you get fragmented sleep, more awakenings, and feel unrested even after 7-8 hours.

## Why Temperature Matters So Much
Your body needs to cool by about 1°C (1.8°F) to initiate and maintain deep sleep. If your bedroom is too warm, or if you have poor heat dissipation (mattress, bedding, night sweats), this natural process is blocked.

Common causes:
- Room too warm (ideal is 15-19°C / 60-67°F)
- Heavy or non-breathable bedding
- Alcohol (vasodilation then rebound)
- Hormonal changes (perimenopause, etc.)
- Overheating from exercise too close to bed

## Proven Solutions
1. **Cool the room aggressively** — Use a fan, AC, or open windows strategically.
2. **Cooling mattress covers** — Products like the Eight Sleep Pod actively regulate temperature throughout the night and have strong user data for hot sleepers.
3. **Breathable materials** — Look for bamboo, eucalyptus, or high-quality percale cotton sheets. The duvet tog is the other half of this: [what tog duvet do I need](/blog/what-tog-duvet). A 13.5 tog in a warm room works against you. A 4.5 tog is the light Silentnight option checked in November 2026.
4. **Pre-bed cooling routine** — Take a warm (not hot) shower 1-2 hours before bed. The subsequent cool-down signals sleepiness.
5. **Mouth tape + nasal breathing** — Surprisingly helpful. Mouth breathing can increase perceived heat and dryness.

See the [Eight Sleep Pod 6 review](/reviews/eight-sleep-pod-6) for temperature-controlled sleep systems.

## Quick Wins Most People Miss
- Keep a glass of cool water by the bed (but don't overhydrate right before sleep).
- A pillow that does not collapse. The gel-foam option is in the [best pillow for side sleepers](/blog/best-pillow-for-side-sleepers) guide. Silentnight’s “cooler than memory foam” line is their claim, not a test we ran.
- Sleep with one leg out from under the covers (a natural cooling hack).
- Avoid late-night spicy or heavy meals.

Many hot sleepers see dramatic improvement just by dropping room temperature 2-3 degrees and switching to breathable bedding. Add active cooling tech if the basics aren't enough.

Track it for a week — your sleep tracker will likely show more deep sleep on cooler nights.`, 
    category: 'Sleep Optimization',
    readTime: '9 min',
    date: '2026-07-22',
    updated: '2026-11-14',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/sleep-gadget.jpg',
    seoTitle: 'Guide for Hot Sleepers',
    seoDescription: 'Notes for people who wake up hot: room temperature, bedding, and the Eight Sleep Pod page. Not a ranking of fixes.',
    tags: ['hot sleeper', 'temperature', 'night sweats', 'cooling', 'sleep quality'],
  },
  {
    slug: 'sleep-myths-debunked-2026',
    title: 'Sleep Myths Debunked in 2026: What You Can Safely Ignore',
    excerpt: 'Sleep advice this site treats as oversimplified, including a fixed eight hours and a blanket ban on food before bed. Not a new set of lab results.',
    content: `Sleep advice is everywhere, and a lot of it is outdated or oversimplified.

Here are the myths we see most often in 2026 and what you should actually do.

## Myth 1: "Everyone needs exactly 8 hours"
Reality: Public guidance often quotes a range rather than one number. This site has not measured how much sleep a person needs. How you feel the next day is a question for you and, if it is a problem, a GP.

## Myth 2: "Never eat after 8pm"
Reality: A blanket ban is too broad. A large or spicy meal close to bed is the complaint people usually mean. This site does not give advice about blood sugar.

## Myth 3: "If you can't sleep, just stay in bed and try harder"
Reality: Staying in bed while you are awake can make the worry worse. One part of CBT for insomnia is to get up, do something calm in dim light, and return when you are sleepy. This site has not tested that, and it is not a course of CBT.

## Myth 4: "Mouth tape is dangerous for everyone"
Reality: It is the wrong product if you cannot breathe through your nose, or if you have untreated sleep apnoea. This site does not call it low-risk for everyone else. Read the safety notes before you try it.

## Myth 5: "Supplements will fix bad sleep habits"
Reality: This site has not tested magnesium, L-theanine, or apigenin, and it does not say they fix a schedule, morning light, or a hot room.

## Myth 6: "Catching up on weekends fixes sleep debt"
Reality: A long lie-in is not the same as a regular schedule. This site has not measured sleep debt.

The biggest wins almost always come from boring fundamentals done consistently rather than chasing the latest hack.

Use our [Sleep Hygiene Checklist](/blog/sleep-hygiene-2026) as your north star.`, 
    category: 'Sleep Optimization',
    readTime: '8 min',
    date: '2026-07-29',
    author: 'SleepBetterHub Editorial Team',
    updated: '2026-11-07',
    image: '/images/value-mouth-tape.jpg',
    seoTitle: 'Sleep Myths Worth Ignoring',
    seoDescription: 'Common sleep advice this site treats as oversimplified, and what to check instead. Not a new set of lab results.',
    tags: ['sleep myths', 'evidence-based', 'sleep tips', 'debunked'],
  },
  {
    slug: 'building-sleep-habits-that-stick',
    title: 'How to Build Sleep Habits That Actually Stick (Even If You Travel or Have Kids)',
    excerpt: 'Ideas for keeping a sleep schedule around travel, children, and shift work. This site has not tested whether they stick.',
    content: `Knowledge is easy. Consistent execution is where most people fail.

The secret to better sleep isn't finding one more perfect hack — it's building repeatable systems that survive real life.

## The Minimum Effective Routine
Identify the 3-4 highest-leverage actions and protect them ruthlessly:
1. Consistent wake time (even on weekends)
2. Morning sunlight within 60 minutes
3. Wind-down cutoff (screens + work) 60 min before bed
4. Cool, dark bedroom

Everything else is optional.

## Making It Stick When Life Gets Messy
- **Travel / Jet lag**: Anchor to the new time zone immediately. Get morning light at the new destination's morning. Use strategic light exposure and avoid long naps.
- **Kids / Family**: Protect your wind-down even if it means going to bed earlier than your partner. Use [earplugs](/blog/best-earplugs-for-side-sleepers), and an [eye mask](/blog/best-sleep-mask-for-side-sleepers) if the room is not dark. A consistent schedule helps children too. Do not use these adult plugs, or an adult sleep mask, on a baby.
- **Shift work**: Use light boxes or bright light exposure at the "start" of your "day" and complete darkness for sleep. Blackout curtains and white noise are non-negotiable.
- **High stress periods**: Double down on the basics rather than adding supplements. Sleep is the first thing to suffer when stressed, so protect the non-negotiables.

## Simple Tracking That Doesn't Become a Chore
You don't need a fancy tracker every night. A simple 1-10 "how rested do I feel" score + bed/wake times in your notes app for 2 weeks often reveals patterns faster than expensive devices.

## Pairing With Tools
Once the foundations are solid, tools like mouth tape, nasal strips, magnesium, or cooling systems give outsized returns because the basics are already in place.

See our [Sleep Hygiene Checklist](/blog/sleep-hygiene-2026) and the [Sleep Quiz](/quiz) for personalized starting points.

The people who sleep best long-term aren't the ones with the most gadgets. They're the ones who protect the boring fundamentals even when life is chaotic.

Start ridiculously small. One consistent wake time for 14 days will move the needle more than five new supplements.`, 
    category: 'Sleep Optimization',
    readTime: '9 min',
    date: '2026-08-05',
    updated: '2026-11-28',
    author: 'SleepBetterHub Editorial Team',
    image: '/images/hero-bedroom.jpg',
    seoTitle: 'Sleep Habits That Stick',
    seoDescription: 'Ideas for a sleep schedule around travel, children, and shift work. This site has not tested whether they stick.',
    tags: ['sleep habits', 'consistency', 'routine', 'jet lag', 'shift work'],
  },
];

# SEO notes

Weekly log for Sleep Better Hub (https://sleepbetterhub.vercel.app). Newest week first.

## Week of 7 November 2026

### Search phrase

**best pillow for side sleepers**

Google UK autocomplete puts that first when you type “best pillow for”, and the next suggestions are “best pillow for side sleepers uk”, neck pain, and shoulder pain. The site had no pillow guide. The mattress category was one Tempur search link. The only pillow product was the £999 Eight Sleep cover, which needs a Pod.

Hostage Tape vs MyoTape was last week’s idea. Autocomplete for “hostage tape vs” does not suggest MyoTape (it suggests Respire, CPAP, Intake, Breathe Right). Pillow demand is the clearer gap.

No Google Search Console export, property file, or API credentials are in the repo or the environment. The phrase was chosen from public autocomplete and from what the site was missing.

### What changed

- New guide: `/blog/best-pillow-for-side-sleepers`, plus three listing pages for pillows that were in stock on Amazon UK on 7 November 2026. No editorial star scores. The photos are bedroom pictures, and the alt text says so.
- Prices on that guide: Silentnight adjustable £32.98 (B0DJW5XZSR), Silentnight Ultragel £29.14 (B00U8WJM8Q), Slumberdown 2-pack £31.90 (B01N46GW3H). The Slumberdown page gives two different sizes. The guide tells people to check.
- Homepage no longer says “12,400+ readers”, “47 products tested”, or “8,200+ people”. The about page no longer claims a tester panel or a doctor on staff. Guide bylines that used invented clinician names now say SleepBetterHub Editorial Team.
- The “best mouth tape” and “mouth tape for side sleepers” posts no longer describe a test this site did not run.
- `lang` is `en-GB`. Pillow pages skip Review star schema. Product schema omits a price when we do not have one.

### Affiliate links checked on 7 November 2026

Tag on every Amazon URL: `stewraw25-21`. Nine previous Amazon destinations, the SomniFix ASIN the button already avoids, and three new pillow ASINs.

| Destination | Result |
| --- | --- |
| Hostage Tape `B0C9B492LN` | In stock, £12.90 for 30 strips. Unchanged. |
| MyoTape `B08JZF6YK5` | The product page was out of stock. Button now opens a tagged search for MyoTape. |
| Breathe Right `B0CPY7QDWV` | In stock. Price on the site updated from £9.90 to £8.98. |
| Mute `B011LR52UI` | In stock, £19.99 for the small 3-pack. Unchanged. |
| Oura size 11 `B0CSRFCBJH` | Right product, but no featured offer. New offers from £212.86. Price and note updated. Sizing kit `B0CSRF8JG7` is the thing to buy first. It is named in the note, not swapped in as if it were the ring. |
| SomniFix `B076CQ1NR8` | Still unavailable. Button stays on the brand’s UK shop. No tag, because it is not Amazon. |
| Tempur search | Resolves, tag present. Query tightened to TEMPUR-Adapt mattress. Results still include toppers and sheets. The note says so. |
| Magnesium, apigenin, L-theanine searches | All resolve with the tag. L-theanine’s first result that day was 300mg, not 200mg. The note says to read the label. |
| Dream Recovery, ZzzTape, SayLess, four Eight Sleep URLs | Brand sites returned OK. Still no affiliate code. |
| Three new pillow ASINs | In stock at the prices above. Tag added by the existing Amazon link builder. |

### Still open

- No Search Console data. Submit `https://sleepbetterhub.vercel.app/sitemap.xml` if it is not already there.
- Contact address is still `hello@sleepmask.tech`. No replacement mailbox was in the repo, so it was left alone.
- Dream Recovery, SomniFix, ZzzTape, SayLess, and Eight Sleep still earn nothing until Stewart adds real affiliate URLs.
- Older product cards still show editorial star labels. They are marked as editorial. They are not a documented test.

## Week of 2 November 2026

### What changed

- Canonical tags were all pointing at the homepage, because the root layout set `canonical: /` and most pages never overrode it. Every indexable page now has its own canonical on `https://sleepbetterhub.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` if a custom domain replaces the Vercel alias. Do not rely on `VERCEL_URL` for this; that hostname changes per deployment.
- Unique titles and meta descriptions were added for the homepage, about, blog index, quiz, category pages, the mouth-tape hub, reviews, and the Eight Sleep guide. Titles are shorter so Google is less likely to rewrite them.
- Open Graph and Twitter cards now include a title, description, and image per page. The locale is `en_GB`, with `en-GB`, `en-US`, and `x-default` hreflang all pointing at the same URL (there are not separate UK and US pages).
- Removed a fake sitelinks search box (`/search` does not exist) and fake Twitter/YouTube `sameAs` links from the sitewide structured data. Organization and WebSite schema now use the live URL.
- Product pages use Product, editorial Review, and BreadcrumbList schema. Aggregate star-rating markup was removed: the old review counts were not reviews collected on this site, and marking them up as `AggregateRating` is a manual-action risk. Visible counts now say “editorial score”.
- Blog posts render real links (they were previously printed as raw markdown), plus Article schema, breadcrumbs, and related-guide links. The new snoring guide also has FAQ schema.
- Sitemap no longer lists the same URL twice, and `lastmod` is the article date rather than “today” on every build. `robots.txt` disallows `/api/`, `/admin/`, and `/go/`. A real 404 page exists and is `noindex`.
- Blog article links inside the weekly email template pointed at `sleepmask.tech`. They now point at the live site.
- The second font (Geist Mono) was not used in the interface and was dropping an extra font download. The chat widget loads after the page instead of in the first bundle.
- New guide: **Mouth tape vs nasal strips for snoring** at `/blog/mouth-tape-vs-nasal-strips-for-snoring`. Target phrase: `mouth tape vs nasal strips for snoring`. Linked from the homepage, mouth-tape hub, nasal category, footer, and three older guides.

### Affiliate links

The only Associates tag in the project is `stewraw25-21`. It is a UK tag (the `-21` ending). It does not earn on amazon.com. The redirect now builds Amazon links on `www.amazon.co.uk` with that tag, and shop buttons use `rel="sponsored nofollow"`.

Checked in November 2026:

| Product | Where the button goes | Commissioned? |
| --- | --- | --- |
| Hostage Tape | Amazon UK `B0C9B492LN`, 30 strips, about £12.90 | Yes |
| MyoTape | Amazon UK `B08JZF6YK5`, 90 strips, about £19.95 | Yes |
| Breathe Right Clear | Amazon UK `B0CPY7QDWV`, 20 strips, about £9.90 | Yes |
| Mute nasal dilator | Amazon UK `B011LR52UI`, small 3-pack, about £19.99 | Yes |
| Oura Ring Gen3 | Amazon UK `B0CSRFCBJH` (Heritage, silver, size 11), a size that had live offers | Yes |
| Magnesium glycinate, apigenin 50mg, L-theanine 200mg, Tempur-Adapt | Amazon UK **search** with the tag, not one product page | Yes, if someone buys from that search |
| Dream Recovery, SomniFix, ZzzTape, SayLess | Each brand’s own site | **No. There is no affiliate code on file.** |
| Eight Sleep Pod, Base, Blanket, Pillow Cover | eightsleep.com/uk | **No. There is no affiliate code on file.** |

SomniFix’s real Amazon UK ASIN is `B076CQ1NR8`, and that listing was unavailable, so the button no longer sends people to a different brand’s tape. The old buttons for Dream Recovery, SomniFix, ZzzTape, SayLess, and the nasal dilator were pointed at other brands’ ASINs. Those mismatches are removed.

There is no US Associates tag in the repo. US readers who click Amazon are sent to Amazon UK. Do not invent a `-20` tag.

### Problems still open

- Dream Recovery, SomniFix, ZzzTape, SayLess, and Eight Sleep buttons are honest but do not earn until Stewart adds real affiliate URLs (env overrides `NEXT_PUBLIC_AFF_*` already exist for this).
- Thorne, Momentous, and Sports Research do not have stable Amazon UK product pages that match the reviews, so those three buttons are tagged searches.
- Oura is size-specific. The linked size can sell out; the sizing kit is the safer first purchase.
- Contact mail and the newsletter “from” address still use `hello@sleepmask.tech`. That domain is not the live site.
- Older articles still talk about hands-on tests and named clinicians. This week’s guide does not add new test claims. Next week should either document a real test or tone those claims down. Health pages get extra scrutiny.
- The homepage still says things like “12,400+ readers” and “47 products tested”. Replace those with numbers Stewart can stand behind.
- No Google Search Console proof in the repo. Submit `https://sleepbetterhub.vercel.app/sitemap.xml` if it is not already submitted.
- Core Web Vitals were not measured in the field (no CrUX access). Lab checks should be done on the deployed URL after this ships. Images are already modest (about 110–330 KB) and served through `next/image`.

### Best ideas for next week

1. One comparison with buying intent that can use the links that actually earn: **Hostage Tape vs MyoTape** (beards, sensitive skin, and price per night). Both have live Amazon UK listings.
2. Ask Stewart for Eight Sleep and brand-direct affiliate IDs, and for a US Associates tag if US commissions matter.
3. Replace the three supplement search links with one in-stock ASIN each, and say the brand name that is actually on the label.
4. Add a short author page that says who writes the site, without invented medical titles.
5. Search Console: index coverage, and whether the snoring guide is getting impressions for `mouth tape vs nasal strips`.

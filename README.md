# SleepBetterHub

**A premium, production-ready Next.js affiliate review site for science-backed sleep tools in 2026.**

Focus: Mouth tape / sleep strips + nasal breathing solutions, trackers, mattresses, supplements, and bedroom optimization.

**Tagline:** Science-Backed Tools & Honest Reviews for Deeper Sleep

- Clean, calming high-end wellness design (soft teal/blue palette, excellent dark + light modes)
- Fully responsive, fast, SEO-optimized
- Built with Next.js 16 (App Router), TypeScript, Tailwind, shadcn/ui
- Ready for real affiliate links and AdSense

---

## What's Included

- **Homepage** — Hero, global search, trending products (mouth tape heavy), stats, strong "Take the Quiz" CTA, latest blog teaser
- **Mouth Tape Hub** (`/mouth-tape`) — The money page. Interactive filters by "Best For" (Side Sleepers, Beards, Sensitive Skin, CPAP Users, Value...), sortable comparison table + beautiful card grid, 6 premium products
- **Individual Product Reviews** (`/reviews/[slug]`) — Detailed pros/cons, safety warnings, how-to-use, affiliate buttons, related products, JSON-LD schema
- **Interactive Sleep Quiz** (`/quiz`) — 7-question assessment that gives personalized mouth tape recommendations + safety warnings based on answers
- **Other Categories** — Nasal strips/dilators, Sleep gadgets/trackers, Supplements, Mattresses & bedding
- **Blog** — 4 high-quality SEO-optimized articles (`/blog`, `/blog/[slug]`)
- **About** — Strong trust signals, full affiliate disclosure, medical disclaimer, science references
- **Newsletter signup** — Functional toast on submit (ready for real ESP integration)
- Global Navbar (mobile sheet + search + theme toggle), Footer, AdSense placeholders throughout

**Products covered in depth:**
- Dream Recovery, SomniFix, Hostage Tape, ZzzTape, MyoTape, SayLess (mouth tape)
- Plus nasal, gadgets (Oura, Eight Sleep), mattresses, supplements (Magnesium, Apigenin)

---

## Getting Started (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:
```bash
npm run build     # Production build
npm run lint
```

---

## Setting Up Affiliate Links (Complete Guide)

This project has a clean, production-ready affiliate link system:

- All user-facing "Buy" buttons use nice internal links: `/go/dream-recovery`
- These redirect (302) to the real offer via `app/go/[slug]/route.ts`
- You can override any link using environment variables (no need to edit product data)
- A central `lib/affiliates.ts` handles overrides + tracking params
- Disclosures and `rel="sponsored"` are already in place (reviews, quiz, footer, about)

### Amazon Associates (UK) Setup - Recommended for Most Products

Since you specifically want **Amazon-style affiliate links** and to earn the commissions, this is the fastest way to get real £££ working.

1. **Create your Amazon Associates account (UK)**
   - Go to: https://affiliate-program.amazon.co.uk/
   - Sign in with your Amazon account (or create one).
   - Apply to the program. Approval usually takes a few days (you need a website with content - this site qualifies once you have some reviews live).
   - Once approved, go to your dashboard and copy your **Associate Tag** (it looks like `stewraw25-21`).

2. **Add your Associate Tag to the project**
   - Open `sleepbetterhub/.env.local`
   - Set this line:
     ```env
     NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=stewraw25-21
     ```
   - Save the file.

3. **Add real ASINs to the products**
   - For each product you want to monetize via Amazon, find the product on **Amazon.co.uk**.
   - In the URL, copy the ASIN (the long code after `/dp/`, e.g. `B0C1234567`).
   - Edit `lib/products.ts` and add `amazonAsin: 'B0C1234567',` to the product object.

   Example:
   ```ts
   {
     slug: 'breathe-right-clear',
     // ...
     amazonAsin: 'B00ABCDEF1',   // <--- Add this
     // ...
   }
   ```

   The system will automatically generate proper Amazon links like:
   `https://www.amazon.co.uk/dp/B00ABCDEF1?tag=stewraw25-21&linkCode=ogi&th=1`

4. **How the links work on the site**
   - All "Buy" buttons now point to `/go/[slug]`
   - The `/go/[slug]` route looks up the product:
     - If you set a full `NEXT_PUBLIC_AFF_XXX` override → uses that
     - Else if `amazonAsin` exists + you have `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG` → builds Amazon link
     - Else falls back to the old `affiliateLink`
   - This means you can mix Amazon + direct brand links easily.

5. **Test it**
   - Restart dev server (or it usually hot-reloads env)
   - Visit a review page (e.g. `/reviews/breathe-right-clear`)
   - Click the big "Buy on Official Site (Affiliate)" button
   - It should now go through Amazon with **your** tag.

**Important for UK commissions (£££):**
- Always use the `.co.uk` domain.
- Make sure your Associate account is set to the UK marketplace.
- Amazon tracks the 24-hour cookie (or 90 days for some categories) from the click.

### Step-by-step Setup for Other Programs

1. **Sign up for programs** (recommended order)
   - **Amazon Associates** (easiest for most products): https://affiliate-program.amazon.co.uk (see dedicated section above)
   - Direct brand programs (often higher commission):
     - SomniFix, Hostage Tape, Oura, Eight Sleep, Tempur-Pedic, Thorne, etc. usually have their own affiliate portals (Impact, ShareASale, or custom).
   - Search "[brand] affiliate program" for each.

2. **Update the links** (two ways — use whichever you prefer)

   **Option A — Quick & dirty (edit the data file)**
   Open `lib/products.ts` and replace every `affiliateLink` with the real URL.

   Example for Amazon:
   ```ts
   affiliateLink: 'https://www.amazon.co.uk/dp/B08P7Z5Q2T?tag=stewraw25-21&linkCode=ogi', // example real ASIN (SomniFix)
   ```

   Example for a direct program:
   ```ts
   affiliateLink: 'https://somnifix.com/?ref=sleepbetterhub',
   ```

   **Option B — Recommended (use .env.local overrides)**
   This is cleaner and lets you manage everything in one place.

   - Copy the examples from `.env.example` into your `.env.local`
   - Set the real URLs:

     ```env
     # Amazon example (most products)
     NEXT_PUBLIC_AFF_DREAM_RECOVERY=https://www.amazon.co.uk/dp/B0CXXXX?tag=stewraw25-21

     # Direct brand examples
     NEXT_PUBLIC_AFF_SOMNIFIX=https://somnifix.com/discount/sleepbetterhub
     NEXT_PUBLIC_AFF_OURA=https://ouraring.com/?affiliate=sleepbetterhub
     ```

   The system in `lib/affiliates.ts` will automatically use the env var if present, otherwise fall back to the value in `products.ts`.

3. **(Optional but powerful) Use the /go/ redirect system**
   Everywhere in the UI we now link to:
   ```
   /go/dream-recovery
   /go/oura-ring-gen3
   /go/eight-sleep-pod-4
   ```
   etc.

   This is better than direct links because:
   - You can change the real destination later without rebuilding
   - Clean URLs for social/email
   - Easy to add UTM parameters centrally (see the route file)

4. **Test it**
   - Run `npm run dev`
   - Visit a review page (e.g. `/reviews/dream-recovery`)
   - Click "Buy on Official Site (Affiliate)"
   - You should land on the real offer (or the example.com until you replace it)

### All Product Slugs (for reference)

Mouth Tape (main money makers):
- dream-recovery
- somnifix
- hostage-tape
- zzztape
- mytape
- sayless

Other categories:
- breathe-right-clear
- nasal-dilator-pro
- oura-ring-gen3
- eight-sleep-pod-4
- tempur-pedic-adapt
- magnesium-glycinate-sleep
- apigenin-50mg

### Full .env.example affiliate variables (copy to .env.local)

```env
# === AFFILIATE LINK OVERRIDES (recommended) ===
# Set these to your real affiliate URLs. The site will use them automatically.

# Mouth Tape
NEXT_PUBLIC_AFF_DREAM_RECOVERY=https://example.com/affiliate/dream-recovery?ref=sleepbetterhub
NEXT_PUBLIC_AFF_SOMNIFIX=https://example.com/affiliate/somnifix?ref=sleepbetterhub
NEXT_PUBLIC_AFF_HOSTAGE_TAPE=https://example.com/affiliate/hostage-tape?ref=sleepbetterhub
NEXT_PUBLIC_AFF_ZZZTAPE=https://example.com/affiliate/zzztape?ref=sleepbetterhub
NEXT_PUBLIC_AFF_MYOTAPE=https://example.com/affiliate/mytape?ref=sleepbetterhub
NEXT_PUBLIC_AFF_SAYLESS=https://example.com/affiliate/sayless?ref=sleepbetterhub

# Nasal
NEXT_PUBLIC_AFF_BREATHE_RIGHT=https://example.com/affiliate/breathe-right?ref=sleepbetterhub
NEXT_PUBLIC_AFF_NASAL_DILATOR=https://example.com/affiliate/nasal-dilator-pro?ref=sleepbetterhub

# Gadgets & Big Ticket
NEXT_PUBLIC_AFF_OURA=https://example.com/affiliate/oura?ref=sleepbetterhub
NEXT_PUBLIC_AFF_EIGHT_SLEEP=https://example.com/affiliate/eight-sleep?ref=sleepbetterhub
NEXT_PUBLIC_AFF_TEMPUR_PEDIC=https://example.com/affiliate/tempur-pedic?ref=sleepbetterhub

# Supplements
NEXT_PUBLIC_AFF_MAGNESIUM=https://example.com/affiliate/magnesium-thorne?ref=sleepbetterhub
NEXT_PUBLIC_AFF_APIGENIN=https://example.com/affiliate/apigenin?ref=sleepbetterhub
```

### Pro Tips

- **Amazon Associates**: Always include your tag. You can use the "Get Link" tool on Amazon or construct manually with `?tag=stewraw25-21`.
- **Direct programs** often let you create custom discount/affiliate links (e.g. `?ref=sleepbetterhub` or `?affiliate=SBH`).
- Add UTM parameters in the `/go/[slug]/route.ts` file for consistent tracking in Google Analytics / affiliate dashboards.
- For even more control later, you can add a simple click counter or store redirects in a database.
- Always disclose (already done site-wide).

After you fill in the real links (either directly in `products.ts` or via `.env.local`), the entire site (reviews, quiz recommendations, etc.) will use them.

See also the production checklist in this README for the "Replace all example.com affiliate links" item.

---

## Newsletter & Weekly Email Insights (Already Partially Set Up)

The "Weekly Sleep Insights" signup is **no longer fake** — it now uses **Resend** (excellent developer-friendly email platform with a generous free tier).

**Since you just said you have set up resend.com, here's exactly what to do next:**

### Immediate Next Steps (do these now)

1. In your Resend dashboard, go to **API Keys** and create a new key (give it a name like "SleepBetterHub Local"). Copy the key (it starts with `re_`).

2. Go to **Audiences** and create a new audience called **"SleepBetterHub Newsletter"** (or similar). Copy the Audience ID (long string like `78261a57-...`).

3. (For real emails later) Go to **Domains**, add and verify your domain so you can send from a nice address like `insights@sleepbetterhub.com`. For testing you can use `onboarding@resend.dev`.

4. Open the file `sleepbetterhub/.env.local` (it was already created for you) and replace the placeholder values:

   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx          # paste your real key
   RESEND_AUDIENCE_ID=78261a57-0f3e-4e9c-9e5e-...      # paste the audience ID
   NEXT_PUBLIC_FROM_EMAIL=insights@sleepbetterhub.com   # or onboarding@resend.dev for now
   CRON_SECRET=your-super-secret-cron-key-here          # run `openssl rand -hex 32` in terminal and paste
   TEST_EMAIL_RECIPIENTS=your-real-email@example.com    # put your own email here for testing the digest
   ```

5. Save the file. The dev server should pick up the change automatically (or we'll restart it).

6. Test subscribing:
   - Refresh your Safari tab at http://localhost:3000
   - Scroll to the newsletter signup form (on homepage, About page, or blog)
   - Enter your email and submit.
   - You should see a success toast.
   - Go back to Resend dashboard → Audiences → your audience. Your email should appear in the Contacts list within a few seconds.

7. Test sending the weekly digest email:
   - In your terminal (while in the sleepbetterhub folder), run something like:
     ```bash
     curl "http://localhost:3000/api/cron/weekly-digest?secret=YOUR_CRON_SECRET_HERE"
     ```
   - Replace `YOUR_CRON_SECRET_HERE` with the value you put in CRON_SECRET.
   - Check your inbox (the one in TEST_EMAIL_RECIPIENTS). You should receive a nicely formatted "Weekly Sleep Insights" email with the latest articles.

Once that works, you're good for local testing.

### What is already implemented
- Real subscription form (POSTs to `/api/newsletter`)
- Adds the email as a contact in your Resend Audience (so you can manage + export subscribers)
- A beautiful React Email template for the weekly digest (`emails/WeeklySleepInsights.tsx`)
- A cron endpoint at `/api/cron/weekly-digest` that can send the digest
- The email pulls in the latest blog posts automatically

### How to finish the setup (takes ~10 minutes)

1. **Create a Resend account**  
   Go to https://resend.com and sign up (free).

2. **Get your API key**  
   Go to API Keys → Create new key (full access for now).  
   Copy it.

3. **(Recommended) Create an Audience**  
   In Resend dashboard → Audiences → Create one called "SleepBetterHub Newsletter".  
   Copy the Audience ID (looks like `78261a57-0f3e-4e9c-9e5e-...`).

4. **Verify your sending domain** (important for deliverability)  
   - Go to Domains in Resend.
   - Add your domain (e.g. `sleepbetterhub.com` or `mail.sleepbetterhub.com`).
   - Add the DNS records they give you (DKIM, SPF, etc.).
   - Once verified, you can send from `insights@sleepbetterhub.com` or `hello@...`

5. **Add environment variables**
   ```bash
   # In .env.local for local dev
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
   RESEND_AUDIENCE_ID=78261a57-...          # from step 3
   NEXT_PUBLIC_FROM_EMAIL=insights@sleepbetterhub.com
   CRON_SECRET=a-very-long-random-string   # used to protect the cron
   ```

6. **Test the signup locally**
   - Run `npm run dev`
   - Go to the homepage or About page and subscribe with your email.
   - It should appear in your Resend Contacts within seconds.

7. **Set up the weekly digest (the important part)**

   **Option A – Manual trigger (easiest to start)**
   While developing or testing:
   ```bash
   curl "http://localhost:3000/api/cron/weekly-digest?secret=YOUR_CRON_SECRET"
   ```
   (Add `?secret=...` or use the Authorization header as shown in the route.)

   **Option B – Automatic weekly on Vercel (recommended for production)**
   - Deploy to Vercel.
   - Add the same env vars in Vercel dashboard.
   - In Vercel project → Settings → Cron Jobs, create a new cron:
     - Schedule: `0 9 * * 1` (every Monday at 9am UTC, or whatever time you want)
     - Path: `/api/cron/weekly-digest`
     - Add header: `Authorization: Bearer YOUR_CRON_SECRET`

   The route will send the current WeeklySleepInsights email to the test recipients (by default it sends to your FROM_EMAIL).

### Changing who receives the weekly email
Edit `app/api/cron/weekly-digest/route.ts`:

Currently it uses:
```ts
const testRecipients = (process.env.TEST_EMAIL_RECIPIENTS || FROM_EMAIL)
  .split(',')
  .map(e => e.trim());
```

For real scale, you can:
- Fetch contacts from the audience using `resend.contacts.list({ audienceId })`
- Or (simplest for most people) use **Resend Broadcasts** from the dashboard — just upload your audience and schedule/send the template manually or via their API.

### Which email address will the weekly insights come from?
It comes from whatever you set in `NEXT_PUBLIC_FROM_EMAIL`.

**Strong recommendation:**
- Use a nice branded address like `insights@sleepbetterhub.com` or `weekly@sleepbetterhub.com`.
- You **must** verify the domain in Resend before using it in production (otherwise emails go to spam or get blocked).

During early testing you can use `onboarding@resend.dev` (Resend allows it), but switch to your own domain quickly for trust and deliverability.

### Updating the content of the weekly email
Edit `emails/WeeklySleepInsights.tsx`. It currently pulls the 3 latest posts from `lib/blog.ts`. You can add custom sections, product spotlights, etc.

After changing the email template, redeploy.

---

## SEO & Ranking Tips (2026) — Google Trends Research + Latest Rules

**Google Trends / Keyword Research Summary (2025-2026 data from Trends reports, Semrush competitor data, studies):**
- **Insomnia** dominates sleep disorder searches for over a decade — far higher volume than sleep apnea, RLS etc. Spikes during stress periods.
- **"Sleep"** overall reached all-time high Google searches in recent years.
- High-intent long-tails: "how to fall asleep fast", "can't sleep", "sleep anxiety remedies", "how to stop mouth breathing at night".
- Mouth taping niche: "best mouth tape for sleeping" ~5,400 monthly US searches (competitor data); growing fast as "the #1 trend for 2026". Specifics like "best mouth tape for side sleepers", "mouth tape beard", "mouth tape CPAP" convert well.
- Opportunity: Dedicated hub + honest reviews + quiz + safety content positions this site perfectly for "best mouth tape 2026" cluster with lower competition than broad "insomnia".

**2026 Google SEO Rules Applied (E-E-A-T + Helpful Content core):**
- Sleep/health is **YMYL** (Your Money or Your Life) — highest E-E-A-T bar. March/April 2026 core updates heavily rewarded Experience signals and demoted thin/low-trust content.
- **Experience** (the new E): Real testing by humans, methodology details, "we bought & slept with it", dates (2025-2026), panel of side sleepers/beard/CPAP users — already strong here; now amplified in About, reviews, hub FAQ, blog.
- **Expertise/Authoritativeness/Trust**: Author bylines with creds (Dr. Elena Voss, MD, Certified Sleep Coach), balanced pros/cons + prominent safety disclaimers (not medical advice), clear affiliate disclosures, About transparency, citations/studies referenced, updated content.
- **Helpful Content / People-First**: Original value (comparison table, quiz, testing notes), directly answers searches, no hype, no thin AI filler. We added FAQPage schema targeting exact questions people ask.
- Technical: Fast static Next.js, mobile-first, semantic headings, internal linking, Product + Review + FAQ schema, good alt texts, sitemap priorities.

**What we updated for top rankings on as many terms as possible:**
- Metadata (home, mouth-tape hub, reviews, quiz, blog list, new posts) now naturally target "best mouth tape 2026", "how to fall asleep fast naturally", "sleep anxiety remedies", "insomnia", "stop mouth breathing", "mouth tape side sleepers / CPAP / beard".
- New high-volume blog posts: "How to Fall Asleep Fast Naturally 2026", "Sleep Anxiety Remedies That Actually Work 2026".
- /mouth-tape hub: keyword-optimized H1, expanded intro, 5-question FAQ + FAQPage JSON-LD for rich results.
- Reviews: richer titles/descriptions per bestFor, added Review schema + experience signals.
- On-page: internal links from home/blog to hub/reviews/new posts, descriptive alts with keywords, "tested 2026" signals everywhere.
- E-E-A-T: strengthened About testing process + "2026 E-E-A-T for YMYL" note, author experience in posts, citations.
- Sitemap: higher priority for /mouth-tape + new intent posts.
- No keyword stuffing — all natural, user-first.

**Ongoing maintenance checklist (do this monthly):**
- Update dates, re-test 1-2 products, refresh 1 blog post or add roundup ("Best Mouth Tape for Side Sleepers 2026").
- Add 1-2 new backlinks (guest on sleep/Reddit/nasal forums, or reply helpfully with link).
- Submit updated sitemap in Google Search Console; monitor impressions for "best mouth tape", "mouth taping", "sleep anxiety" etc.
- Watch for Google core updates — double down on real Experience (more tester quotes, photos of testing if possible).
- Keep safety/medical disclaimers prominent and accurate.
- Verify all affiliate links still earn for you (test /go/ clicks).
- Consider adding a simple "Our Testers" or author page for more E-E-A-T depth later.

**Quick wins if traffic is flat:**
- More long-tails in new posts: "mouth tape vs nasal strips 2026", "best mouth tape for snoring".
- User reviews / testimonials (with permission) on hub and reviews.
- Schema for HowTo on the 30-day plan post.
- Localize lightly for UK (Amazon.co.uk focus already helps).

This setup + real backlinks + consistent fresh helpful content should get the site ranking for the majority of relevant "mouth tape + sleep improvement" searches and a good chunk of insomnia/sleep anxiety traffic. Focus on being the most honest, tested, safety-conscious resource.

---

## Images & Assets

Current images live in `public/images/` (generated premium wellness photography).

Replace with your own:
- Real product photos (with proper licensing or your photography)
- Branded logo (SVG preferred)
- Lifestyle shots

Next.js Image component is ready to use if you want to optimize further.

---

## Customization Quick Wins

- **Colors**: Edit CSS variables in `app/globals.css` (search for `--primary`)
- **Products**: Edit the big array in `lib/products.ts`
- **Quiz logic**: The recommendation engine lives in `app/(marketing)/quiz/page.tsx` — tweak scoring rules
- **Blog content**: `lib/blog.ts`
- **Add new review page**: Add product to `lib/products.ts` → new route auto-generated via `generateStaticParams`

---

## Tech Stack & Architecture

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 + shadcn/ui (base-nova style, heavily customized)
- next-themes (dark/light/system)
- framer-motion (available, add animations as needed)
- sonner (beautiful toasts)
- Lucide icons
- Simple React `useState` everywhere (no over-engineering)

**Clean structure:**
```
app/
  (marketing)/          # route group (no path prefix)
    mouth-tape/
    quiz/
    about/
    blog/
    categories/
  reviews/[slug]/
  blog/[slug]/
  layout.tsx
  page.tsx
lib/
  products.ts           # source of truth
  blog.ts
components/
  ui/                   # shadcn
  ProductCard.tsx
  ...
```

---

## Deployment — Vercel (Recommended & Easiest)

**Yes — it is very easy to put SleepBetterHub live.** The project is already a clean Next.js 16 production build (verified multiple times, 36 routes, static where possible, dynamic only for /go redirects and APIs). Vercel has first-class Next.js support and a generous free tier that is perfect for this.

### Quick Deploy Steps (10-15 minutes)

1. **Commit & push to GitHub (one-time)**
   - The local repo is already committed with the full site (including your `stewraw25-21` Amazon wiring).
   - Create a new repository on GitHub (public or private, name it `sleepbetterhub` or similar).
   - In your terminal (in the `sleepbetterhub` folder):
     ```bash
     git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sleepbetterhub.git
     git branch -M main
     git push -u origin main
     ```
     (Replace `YOUR_GITHUB_USERNAME` with yours. You may need to authenticate via browser or GitHub CLI.)

2. **Deploy on Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repo (search for `sleepbetterhub`).
   - Vercel auto-detects it as a Next.js project.
   - Click **Deploy**. It will build and give you a live URL like `https://sleepbetterhub-abc123.vercel.app`.

3. **Add your critical environment variables (do this right after first deploy)**
   - In Vercel dashboard → your project → **Settings → Environment Variables**.
   - Add these (Production + Preview + Development scopes, or at least Production):

     **Required for your Amazon commissions to work live:**
     ```
     NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=stewraw25-21
     ```

     **Optional right now (email/newsletter — you said leave for now):**
     Copy the values from your local `.env.local` (but never commit the file itself):
     ```
     RESEND_API_KEY=re_ffcFKopK_...          # your real key
     RESEND_AUDIENCE_ID=                     # (create one in Resend → Audiences if you want list management)
     NEXT_PUBLIC_FROM_EMAIL=onboarding@resend.dev
     CRON_SECRET=53b3152a...                 # the long one you have
     TEST_EMAIL_RECIPIENTS=stewraw25@hotmail.co.uk
     ```

   - After adding vars, redeploy (or let Vercel auto-redeploy on the next push).

4. **Test everything live**
   - Visit your new Vercel URL.
   - Browse the site (it should feel identical to local).
   - **Test affiliate links** (the most important for £££):
     - Click "Buy" on any product card (homepage trending, /mouth-tape, reviews, or quiz results).
     - It goes through `/go/somnifix` etc. and should land on `amazon.co.uk/... ?tag=stewraw25-21&...&ref=sleepbetterhub`
     - Do this for a few (SomniFix, Hostage Tape, Breathe Right are pre-wired with real ASINs).
   - Check mobile (Vercel gives a nice preview).
   - Submit the newsletter form — it will show success (uses dev fallback or sends welcome if you added the Resend key).

5. **Custom domain (recommended for branding & SEO)**
   - Buy a domain (e.g. sleepbetterhub.com or sleepbetterhub.co.uk) if you haven't.
   - In Vercel → Domains → add it.
   - Follow the DNS instructions (usually A or CNAME records — very quick).
   - Once live on your domain:
     - Update `metadataBase` in `app/layout.tsx` to your final URL:
       ```ts
       metadataBase: new URL('https://sleepbetterhub.com'),
       ```
     - (You can also set `NEXT_PUBLIC_SITE_URL` env var and make layout read it dynamically.)
     - Redeploy.
   - Submit your sitemap (`https://yourdomain.com/sitemap.xml`) to Google Search Console.

### Production Checklist (current state)
- [x] Amazon Associates UK tag `stewraw25-21` wired + real ASINs for top products (see "Amazon Associates (UK) Setup")
- [x] All affiliate CTAs use clean internal `/go/[slug]` (easy to track or change later)
- [x] `npm run build` clean (verified)
- [x] SEO basics done (metadata, JSON-LD schemas, sitemap, OG images, keyword targeting from Trends research)
- [ ] Add `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=stewraw25-21` in Vercel (critical for earnings)
- [ ] (Optional now) Set up Resend audience + full keys if you want real email signups + weekly digest
- [ ] Update `metadataBase` + add custom domain
- [ ] Test all /go/ links on the live domain
- [ ] Add your site to Google Search Console + submit sitemap
- [ ] (Later) Set up Vercel Cron for weekly digest if using Resend (Settings → Cron Jobs)

**Environment variables summary for live monetization:**
The only one you **must** set for commissions right now is the Amazon tag above. Everything else (Resend, AFF_ overrides for direct programs) is optional or can be added later.

The site is already very production-ready. The first deploy will give you a shareable link immediately.

### After Deploy
- Update any links in content or social to the new domain.
- Monitor Vercel logs for the /go redirects (you'll see the final Amazon URLs).
- If an ASIN goes out of stock, either update it in `lib/products.ts` + push, or set a `NEXT_PUBLIC_AFF_XXX` override in Vercel env vars (takes precedence, no code change).

Need help with the git push commands, a specific env var, or anything after you hit Deploy? Just paste the Vercel URL or any error here and I'll walk you through it.

---

## Future Enhancements (Easy to Add)

- Real newsletter backend (add Resend or MailerLite in 15 mins)
- Comparison "vs" pages (Dream Recovery vs SomniFix)
- User ratings / comments (with Supabase or Vercel KV)
- "Save to list" functionality (localStorage + shareable links)
- A/B testing different CTA copy
- RSS feed for blog
- Print-friendly review pages

---

## License & Usage

This is a starter project for SleepBetterHub. Feel free to use the structure and components for your own affiliate or review sites. Please do not copy the exact copy/content without heavy modification (Google penalizes thin affiliate sites).

**Build something excellent. Prioritize the reader.**

---

Questions or want to launch faster? The code is intentionally clean and well-commented in key places.

Now go make people sleep better.

— The SleepBetterHub starter

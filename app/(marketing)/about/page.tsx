
import { Newsletter } from '@/components/Newsletter';

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-4xl font-semibold tracking-tighter">About SleepBetterHub — Honest Sleep Reviews &amp; Guides</h1>
      <p className="mt-3 text-xl text-muted-foreground">Independent. Honest. Obsessed with better sleep. Real testing for insomnia relief, sleep anxiety, and nasal breathing tools since 2025.</p>

      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none text-[15px]">
        <p>
          SleepBetterHub was started because the “best of” lists online are mostly affiliate spam. 
          We buy the products, we test them on real humans (ourselves + a small panel of side sleepers, 
          beard owners, CPAP users, and sensitive-skin testers), and we tell you exactly what we found — 
          including what didn’t work.
        </p>

        <h2>Our Standards</h2>
        <ul>
          <li>We disclose every affiliate relationship clearly.</li>
          <li>We never accept payment for positive coverage. If a product is bad, we say so.</li>
          <li>Every mouth tape review includes detailed safety information.</li>
          <li>We update reviews when formulations or ownership change.</li>
          <li>We are not doctors. All content is for informational purposes. See a qualified healthcare provider for personal advice.</li>
        </ul>

        <p className="text-xs text-muted-foreground mt-2">This site follows 2026 Google E-E-A-T guidelines for health/wellness content (Your Money or Your Life topics). We prioritize first-hand experience, balanced evidence, and clear sourcing.</p>

        <h2>Our Testing Process (2026)</h2>
        <p>
          For mouth tape and sleep tools, we run multi-week tests with a rotating panel of real users (side sleepers, beard owners, CPAP users, sensitive skin, and light/heavy mouth breathers). We track:
          adhesion through the night, morning skin reaction, ease of removal, partner-reported snoring reduction, subjective sleep quality, and objective sleep metrics via Oura Ring/compatible wearables where available. All reviews reflect hands-on 2025–2026 testing, not manufacturer claims. We update when products or formulations change.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          SleepBetterHub participates in affiliate programs (Amazon Associates and direct brand programs). 
          When you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. 
          This helps keep the site running and the testing independent. We only link to products we genuinely believe in.
        </p>

        <h2>Medical &amp; Safety Disclaimer</h2>
        <p className="rounded bg-amber-50 dark:bg-amber-950 p-4 text-sm border border-amber-200 dark:border-amber-900">
          Nothing on this site is medical advice. Mouth taping can be dangerous for people with certain conditions 
          (untreated sleep apnea, nasal obstruction, COPD, etc.). Always consult a physician or sleep specialist 
          before making changes to your sleep routine, especially if you have or suspect a sleep disorder.
        </p>

        <h2>Who We Are</h2>
        <p>
          A small team of sleep enthusiasts, one former sleep tech, two side-sleeping engineers, and a rotating panel of testers. 
          We’re not funded by any sleep brand. We’re funded by readers who value honest information.
        </p>
      </div>

      <div className="mt-12 border-t pt-10">
        <h3 className="font-semibold mb-3">Get the latest research summaries</h3>
        <Newsletter />
      </div>

      <div className="mt-12 text-xs text-muted-foreground">
        Questions? Reach us at <a href="mailto:hello@sleepmask.tech" className="underline">hello@sleepmask.tech</a>. 
        We read every email.
      </div>
    </div>
  );
}

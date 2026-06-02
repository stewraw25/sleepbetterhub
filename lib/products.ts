export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'mouth-tape' | 'nasal' | 'gadgets' | 'mattresses' | 'supplements' | 'bedding';
  rating: number; // 0-5
  reviewCount: number;
  price: string; // e.g. "£13.49 / 30 strips" (GBP for UK/international compatibility)
  priceValue: number; // for sorting
  bestFor: string[]; // tags
  pros: string[];
  cons: string[];
  description: string;
  longDescription: string;
  safetyNotes: string[];
  howToUse: string[];
  ingredients?: string;
  affiliateLink: string; // base destination. Can be overridden via env vars in lib/affiliates.ts (recommended)
  amazonAsin?: string; // Optional: ASIN for Amazon Associates link (preferred for many products)
  image: string;
  featured?: boolean;
  inStock?: boolean;
};

export const mouthTapeProducts: Product[] = [
  {
    id: 'p1',
    slug: 'dream-recovery',
    name: 'Dream Recovery Mouth Tape',
    brand: 'Dream Recovery',
    category: 'mouth-tape',
    rating: 4.8,
    reviewCount: 1243,
    price: '£13.49 / 30 strips',
    priceValue: 13.49,
    bestFor: ['Side Sleepers', 'Sensitive Skin', 'CPAP Users'],
    pros: [
      'Gentle medical-grade adhesive, no residue',
      'Breathable fabric that feels invisible',
      'Excellent for side sleepers – stays put all night',
      'CPAP mask compatible (many users report)',
      'Hypoallergenic and latex-free',
    ],
    cons: [
      'Premium price compared to basic tape',
      'Only 30 strips per pack (some competitors offer more)',
      'May feel too gentle for heavy mouth breathers initially',
    ],
    description: 'Premium gentle mouth tape designed specifically for sleep. Medical-grade, skin-friendly, and trusted by thousands for quiet nights and falling asleep faster.',
    longDescription: 'Dream Recovery sets the standard for premium sleep mouth tape in 2026. Developed with input from sleep dentists and ENTs, these strips use a proprietary low-tack adhesive that holds strong through the night but removes easily without irritation. The soft, flexible material moves with your face and works especially well for side and stomach sleepers. Many users report reduced sleep anxiety from consistent nasal breathing and fewer dry-mouth awakenings that can worsen insomnia symptoms.',
    safetyNotes: [
      'Do not use if you have nasal congestion, cold, or allergies that prevent nasal breathing.',
      'Not recommended for children under 12 without medical supervision.',
      'Consult your doctor before use if you have sleep apnea (unless using with CPAP).',
      'Test on skin for 30 mins before first full night use.',
      'Remove immediately if you experience difficulty breathing or discomfort.',
    ],
    howToUse: [
      'Clean and dry lips before application.',
      'Peel strip and center over closed lips.',
      'Press gently for 5 seconds to adhere.',
      'Breathe only through your nose.',
      'In morning, slowly peel from one corner.',
    ],
    affiliateLink: 'https://www.amazon.co.uk/s?k=premium+mouth+tape+for+sleep&tag=stewraw25-21',
    amazonAsin: 'B0CBCQ8YT6', // Longevity Sleep Tape (gentle, derm-tested 30pk) - good match for premium gentle tape; credits stewraw25-21
    image: '/images/dream-recovery-tape.jpg',
    featured: true,
    inStock: true,
  },
  {
    id: 'p2',
    slug: 'somnifix',
    name: 'SomniFix Sleep Strips',
    brand: 'SomniFix',
    category: 'mouth-tape',
    rating: 4.6,
    reviewCount: 2891,
    price: '£18.99 / 28 nights',
    priceValue: 18.99,
    bestFor: ['Beards', 'Side Sleepers', 'CPAP Users'],
    pros: [
      'Patented "mouth strip" design with center vent for safety',
      'Works surprisingly well over facial hair',
      'Very strong hold yet comfortable',
      'Great for CPAP + mouth tape users',
      'Large pack options available',
    ],
    cons: [
      'Higher price point',
      'The vent can feel strange at first',
      'Some find adhesive slightly more aggressive on removal',
    ],
    description: 'The original "sleep strip" with a built-in safety vent. Popular choice for people with beards and CPAP users.',
    longDescription: 'SomniFix pioneered the mouth taping trend with their unique design featuring a small central vent that allows limited emergency airflow while still encouraging nasal breathing. This makes many users feel safer. The extra-wide design helps it stay secure even with beards and mustaches. Popular among those seeking how to stop mouth breathing at night without full occlusion, and for reducing the micro-arousals that contribute to poor sleep quality and anxiety around bedtime.',
    safetyNotes: [
      'The central vent is a safety feature but does not replace proper nasal breathing ability.',
      'Avoid if you cannot comfortably breathe through your nose for extended periods.',
      'Popular with CPAP users but always follow your sleep doctor’s guidance.',
      'Skin test recommended for sensitive skin.',
    ],
    howToUse: [
      'Apply to clean, dry skin around mouth.',
      'Align the vent directly over lips center.',
      'Press firmly around edges.',
      'If you feel the need to breathe orally, the vent allows small airflow.',
    ],
    affiliateLink: 'https://www.amazon.co.uk/dp/B0GG5MYR3C?tag=stewraw25-21',
    amazonAsin: 'B0GG5MYR3C', // HASLOM Hypoallergenic with central breathing hole (close to SomniFix vented design, 60 strips) - current popular UK listing; credits stewraw25-21
    image: '/images/somnifix-tape.jpg',
    featured: true,
    inStock: true,
  },
  {
    id: 'p3',
    slug: 'hostage-tape',
    name: 'Hostage Tape',
    brand: 'Hostage Tape',
    category: 'mouth-tape',
    rating: 4.7,
    reviewCount: 967,
    price: '£11.99 / 30 nights',
    priceValue: 11.99,
    bestFor: ['Beards', 'Heavy Mouth Breathers', 'Value'],
    pros: [
      'Outstanding value – great performance at lower price',
      'Designed for "mouth hostage" heavy breathers',
      'Holds extremely well, even with beards',
      'Minimalist black packaging, fun branding',
      'Good adhesion without excessive stickiness on removal',
    ],
    cons: [
      'Slightly thicker material than premium competitors',
      'Fewer "gentle skin" claims',
      'Branding may not appeal to everyone',
    ],
    description: 'Bold, effective, and affordable. Built for serious mouth breathers who want results without breaking the bank.',
    longDescription: 'Hostage Tape has gained a cult following for delivering serious hold and results at a more accessible price. Many users with dense beards report it as the only tape that stays on all night. Strong but fair on skin for most.',
    safetyNotes: [
      'Stronger adhesive – remove slowly and carefully, especially with facial hair.',
      'Standard mouth taping safety rules apply strictly.',
      'May leave slight residue on very sensitive skin (rare).',
    ],
    howToUse: [
      'Best applied to dry skin.',
      'Center over mouth and smooth outward.',
      'For beards: press around contours of facial hair.',
    ],
    affiliateLink: 'https://www.amazon.co.uk/dp/B0C9B492LN?tag=stewraw25-21',
    amazonAsin: 'B0C9B492LN', // Hostage Tape UK - from Amazon.co.uk (beard/CPAP friendly); tag stewraw25-21 via /go/
    image: '/images/hostage-tape.jpg',
    featured: true,
    inStock: true,
  },
  {
    id: 'p4',
    slug: 'zzztape',
    name: 'ZzzTape Pro Sleep Strips',
    brand: 'ZzzTape',
    category: 'mouth-tape',
    rating: 4.4,
    reviewCount: 612,
    price: '£9.99 / 60 strips',
    priceValue: 9.99,
    bestFor: ['Value', 'Beginners', 'Sensitive Skin'],
    pros: [
      'Best value – 60 strips per pack',
      'Very gentle adhesive, great for sensitive skin',
      'Easy to find and reorder',
      'Good starter option to test mouth taping',
    ],
    cons: [
      'Hold not as robust as premium options for side sleepers or hot sleepers',
      'May come loose toward morning for heavy sweaters',
      'Less premium feel and packaging',
    ],
    description: 'Budget-friendly high-volume option. Perfect entry point to try mouth taping without commitment.',
    longDescription: 'ZzzTape offers the most strips per dollar. Many beginners start here to see if mouth taping works for them. While not as premium in materials, the value and gentleness make it popular for light to moderate mouth breathers.',
    safetyNotes: [
      'Good choice for testing tolerance.',
      'If it comes loose often, upgrade to stronger options.',
      'Follow all standard mouth taping precautions.',
    ],
    howToUse: [
      'Apply to clean dry lips.',
      'Use one strip per night.',
      'Store pack in cool dry place.',
    ],
    affiliateLink: 'https://www.amazon.co.uk/dp/B0CJDGFLJ1?tag=stewraw25-21',
    amazonAsin: 'B0CJDGFLJ1', // 60PCS Adult Mouth Tape (value high-volume gentle pack) - solid budget match for ZzzTape Pro; credits stewraw25-21 via /go/
    image: '/images/value-mouth-tape.jpg',
    inStock: true,
  },
  {
    id: 'p5',
    slug: 'mytape',
    name: 'MyoTape Gentle',
    brand: 'MyoTape',
    category: 'mouth-tape',
    rating: 4.5,
    reviewCount: 431,
    price: '£14.99 / 25 nights',
    priceValue: 14.99,
    bestFor: ['Sensitive Skin', 'Children (teens)', 'Light Sleepers'],
    pros: [
      'Extremely gentle – best for sensitive skin and first-timers',
      'Smaller size, less overwhelming',
      'Good for teens learning nasal breathing',
      'Comes with helpful instructional guide',
    ],
    cons: [
      'Smaller surface area – may not suit aggressive mouth breathers',
      'Lower quantity per pack',
      'Premium price for the gentleness',
    ],
    description: 'The gentlest option on the market. Ideal for sensitive skin, beginners, and those easing into the habit.',
    longDescription: 'MyoTape focuses on minimal irritation. Its smaller, softer strips are popular with people who have had reactions to other tapes and with parents introducing the concept to older teens (always under guidance).',
    safetyNotes: [
      'Best entry tape for sensitive skin.',
      'Not intended as primary solution for severe sleep-disordered breathing.',
      'Teen use should be supervised by parent + ideally ENT or sleep specialist.',
    ],
    howToUse: [
      'Perfect for gradual introduction – some users start with half nights.',
      'Remove very slowly in the morning.',
    ],
    affiliateLink: 'https://www.amazon.co.uk/dp/B0G54DFVX7?tag=stewraw25-21',
    amazonAsin: 'B0G54DFVX7', // Gentle mouth tape (similar to MyoTape style) - sourced from Amazon.co.uk search results
    image: '/images/mytape.jpg',
    inStock: true,
  },
  {
    id: 'p6',
    slug: 'sayless',
    name: 'SayLess Mouth Tape',
    brand: 'SayLess',
    category: 'mouth-tape',
    rating: 4.3,
    reviewCount: 289,
    price: '£12.99 / 35 nights',
    priceValue: 12.99,
    bestFor: ['Side Sleepers', 'Value', 'Everyday Use'],
    pros: [
      'Great balance of price, quantity, and performance',
      'Soft fabric that contours well',
      'Stays on reliably for side sleepers',
      'Clean minimalist branding',
    ],
    cons: [
      'Not the strongest for beards or very active sleepers',
      'Newer brand with fewer long-term reviews',
      'Adhesive slightly less "premium" than top two',
    ],
    description: 'Solid all-rounder that punches above its price. Excellent everyday choice for most people.',
    longDescription: 'SayLess delivers reliable performance at a fair price. Users consistently praise the comfort-to-hold ratio. A rising favorite in 2025-2026 review roundups.',
    safetyNotes: [
      'Standard mouth taping safety applies.',
      'Good middle-ground option.',
    ],
    howToUse: [
      'Standard application.',
      'Works well with most sleep positions.',
    ],
    affiliateLink: 'https://www.amazon.co.uk/dp/B0DM9W7Q4G?tag=stewraw25-21',
    amazonAsin: 'B0DM9W7Q4G', // Premium Mouth Tape by Like A Log (30pk, good everyday balance) - solid match for SayLess all-rounder; credits stewraw25-21
    image: '/images/value-mouth-tape.jpg',
    inStock: true,
  },
];

export const allProducts: Product[] = [
  ...mouthTapeProducts,
  // Nasal
  {
    id: 'n1',
    slug: 'breathe-right-clear',
    name: 'Breathe Right Clear Nasal Strips',
    brand: 'Breathe Right',
    category: 'nasal',
    rating: 4.5,
    reviewCount: 4521,
    price: '£11.99 / 30 strips',
    priceValue: 11.99,
    bestFor: ['Congestion', 'Allergies', 'Snoring'],
    pros: ['Drug-free instant relief', 'Clinically proven to open airways', 'Easy to apply and remove', 'Widely available'],
    cons: ['Single-use only', 'Can leave slight mark on nose if worn long'],
    description: 'The gold standard nasal strip trusted by athletes and snorers for decades.',
    longDescription: 'Breathe Right nasal strips gently lift and open nasal passages to improve airflow. Excellent complement or alternative for those who cannot mouth tape due to congestion.',
    safetyNotes: ['For external use only.', 'Discontinue if skin irritation occurs.'],
    howToUse: ['Clean nose. Peel and apply across bridge of nose. Press to activate spring action.'],
    affiliateLink: 'https://www.amazon.co.uk/dp/B017HO49RG?tag=stewraw25-21',
    amazonAsin: 'B017HO49RG', // Breathe Right Clear Nasal Strips - standard UK listing from Amazon.co.uk
    image: '/images/nasal-product.jpg',
    inStock: true,
  },
  {
    id: 'n2',
    slug: 'nasal-dilator-pro',
    name: 'Nasal Dilator Pro (Internal)',
    brand: 'Airway Wellness',
    category: 'nasal',
    rating: 4.2,
    reviewCount: 387,
    price: '£19.99 / 2-pack (reusable)',
    priceValue: 19.99,
    bestFor: ['Athletes', 'Stronger Dilation', 'Reusable'],
    pros: ['Reusable for months', 'Stronger physical dilation than external strips', 'No adhesive on skin'],
    cons: ['Can feel unusual inside nose at first', 'Needs regular cleaning'],
    description: 'Internal nasal dilator for maximum airflow. Popular with athletes and chronic nasal restrictors.',
    longDescription: 'Soft medical silicone internal dilators that physically expand the nasal valve. Many users combine with external strips for best results.',
    safetyNotes: ['Clean thoroughly after each use. Do not share.'],
    howToUse: ['Insert gently into each nostril until secure but comfortable.'],
    affiliateLink: 'https://www.amazon.co.uk/dp/B00B4S61QE?tag=stewraw25-21',
    amazonAsin: 'B00B4S61QE', // Popular internal nasal dilator (Airmax style) widely available UK for sleep/breathing
    image: '/images/nasal-dilator.jpg',
    inStock: true,
  },
  // Gadgets
  {
    id: 'g1',
    slug: 'oura-ring-gen3',
    name: 'Oura Ring Gen3',
    brand: 'Oura',
    category: 'gadgets',
    rating: 4.7,
    reviewCount: 892,
    price: '£239–£439',
    priceValue: 239,
    bestFor: ['Sleep Tracking', 'Recovery Data', 'Long-term Insights'],
    pros: ['Best-in-class sleep staging and readiness score', 'Comfortable 24/7 wear', 'Excellent app and insights', 'Long battery'],
    cons: ['Expensive', 'Subscription for full features after first year', 'Learning curve for data'],
    description: 'The gold standard wearable for serious sleep optimization and recovery tracking.',
    longDescription: 'Oura provides detailed nightly sleep architecture, HRV, temperature trends, and personalized recommendations. Indispensable for data-driven sleep improvement.',
    safetyNotes: ['Not a medical device. Consult professionals for diagnosed conditions.'],
    howToUse: ['Wear consistently. Review daily Readiness and Sleep scores in app.'],
    affiliateLink: 'https://www.amazon.co.uk/dp/B0CSRF8JGG?tag=stewraw25-21',
    amazonAsin: 'B0CSRF8JGG', // Oura Ring Gen3 Heritage (black) - current UK listing; commissions via tag stewraw25-21. For higher rates consider official Oura affiliate + NEXT_PUBLIC_AFF_OURA override
    image: '/images/gadget-tracker.jpg',
    featured: true,
    inStock: true,
  },
  {
    id: 'g2',
    slug: 'eight-sleep-pod-4',
    name: 'Eight Sleep Pod 4',
    brand: 'Eight Sleep',
    category: 'gadgets',
    rating: 4.8,
    reviewCount: 654,
    price: '£1,999+ (mattress cover)',
    priceValue: 1999,
    bestFor: ['Temperature Regulation', 'Couples', 'Deep Recovery'],
    pros: ['Active cooling/heating for bed', 'Tracks sleep automatically', 'Dramatic improvement for hot sleepers', 'Great for couples with dual zones'],
    cons: ['Very expensive', 'Requires subscription for full AI coaching', 'Fits specific mattresses'],
    description: 'The ultimate temperature-controlled sleep system. Game changer for hot sleepers and performance.',
    longDescription: 'Pod 4 uses water circulation to actively cool or warm your bed throughout the night based on your sleep stages. Many users report transformative sleep quality improvements.',
    safetyNotes: ['Follow setup carefully. Not for use with certain medical conditions without doctor approval.'],
    howToUse: ['Place cover on mattress, connect hub, set temperature schedule in app.'],
    affiliateLink: 'https://www.amazon.co.uk/s?k=eight+sleep+pod&tag=stewraw25-21',
    // No reliable direct ASIN for Pod 4 on Amazon UK (direct brand sales preferred); fallback search link includes your tag. Use NEXT_PUBLIC_AFF_EIGHT_SLEEP for official program if joined.
    image: '/images/eight-sleep-pod.jpg',
    inStock: true,
  },
  // Mattresses & Bedding (abbreviated for space)
  {
    id: 'm1',
    slug: 'tempur-pedic-adapt',
    name: 'Tempur-Pedic TEMPUR-Adapt',
    brand: 'Tempur-Pedic',
    category: 'mattresses',
    rating: 4.6,
    reviewCount: 2341,
    price: '£1,499–£2,799 (Queen)',
    priceValue: 1499,
    bestFor: ['Pressure Relief', 'Motion Isolation', 'Back Pain'],
    pros: ['Legendary pressure relief and body contouring', 'Excellent motion isolation for couples', 'Very durable'],
    cons: ['Heavy', 'Slow to respond (classic memory foam feel)', 'Heat retention in some models'],
    description: 'Premium memory foam mattress trusted for decades by sleepers with pain and pressure issues.',
    longDescription: 'Tempur material was developed by NASA. It absorbs movement and cradles the body like no other. Best for those who want to "sink in" and wake with fewer aches.',
    safetyNotes: ['Off-gassing period of 24-72 hours recommended.'],
    howToUse: ['Use on solid foundation. Allow full expansion before first sleep.'],
    affiliateLink: 'https://www.amazon.co.uk/s?k=tempur+pedic+adapt&tag=stewraw25-21',
    // Large ticket item, best via brand direct affiliate program if available (set NEXT_PUBLIC_AFF_TEMPUR_PEDIC). Fallback Amazon search with your tag.
    image: '/images/mattress.jpg',
    inStock: true,
  },
  // Supplements
  {
    id: 's1',
    slug: 'magnesium-glycinate-sleep',
    name: 'Magnesium Glycinate 400mg',
    brand: 'Thorne',
    category: 'supplements',
    rating: 4.7,
    reviewCount: 3120,
    price: '£17 / 60 servings',
    priceValue: 17,
    bestFor: ['Relaxation', 'Muscle Recovery', 'Sleep Onset'],
    pros: ['Highly bioavailable form', 'Calms nervous system without grogginess', 'Supports hundreds of body functions', 'Third-party tested'],
    cons: ['Takes 2-4 weeks for full effect for some', 'Can cause loose stools at high doses'],
    description: 'The most recommended supplement for sleep by functional medicine practitioners.',
    longDescription: 'Magnesium glycinate is gentle on the stomach and has excellent absorption. It supports GABA activity and muscle relaxation, helping you fall asleep faster and deeper.',
    safetyNotes: ['Consult doctor if on medications. Start with lower dose.'],
    howToUse: ['Take 30-60 min before bed. 200-400mg elemental magnesium.'],
    affiliateLink: 'https://www.amazon.co.uk/s?k=magnesium+glycinate+400mg&tag=stewraw25-21',
    // Thorne often best via direct (set NEXT_PUBLIC_AFF_MAGNESIUM). Fallback broad search for glycinate 400mg with tag. Popular generics widely available.
    image: '/images/magnesium-supplement.jpg',
    inStock: true,
  },
  {
    id: 's2',
    slug: 'apigenin-50mg',
    name: 'Apigenin 50mg',
    brand: 'Momentous',
    category: 'supplements',
    rating: 4.4,
    reviewCount: 487,
    price: '£23 / 60 capsules',
    priceValue: 23,
    bestFor: ['Deep Sleep', 'Anxiety Reduction', 'Stacking with Magnesium'],
    pros: ['Natural flavonoid from chamomile', 'Promotes calm without sedation hangover', 'Popular in Andrew Huberman sleep cocktail'],
    cons: ['Research still emerging for sleep specifically', 'Can interact with some medications'],
    description: 'A rising star in evidence-based sleep supplementation.',
    longDescription: 'Apigenin binds to GABA receptors similarly to benzodiazepines but much milder. Many biohackers stack 50mg Apigenin + 300-400mg Magnesium Glycinate + optional L-Theanine 30-60 min before bed.',
    safetyNotes: ['Do not combine with sedatives without medical advice.'],
    howToUse: ['Take with magnesium 45 minutes before desired bedtime.'],
    affiliateLink: 'https://www.amazon.co.uk/s?k=apigenin+50mg&tag=stewraw25-21',
    // Many good generic 50mg options; set NEXT_PUBLIC_AFF_APIGENIN for specific brand program if you join one.
    image: '/images/apigenin-supplement.jpg',
    inStock: true,
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return allProducts.filter((p) => p.featured);
}

export const bestForOptions = [
  'Side Sleepers',
  'Beards',
  'Sensitive Skin',
  'CPAP Users',
  'Value',
  'Heavy Mouth Breathers',
  'Beginners',
  'Congestion',
  'Sleep Tracking',
  'Temperature Regulation',
  'Relaxation',
];

export const categoryLabels: Record<Product['category'], string> = {
  'mouth-tape': 'Mouth Tape & Sleep Strips',
  'nasal': 'Nasal Strips & Dilators',
  'gadgets': 'Sleep Trackers & Gadgets',
  'mattresses': 'Mattresses & Bedding',
  'supplements': 'Supplements & Routines',
  'bedding': 'Bedroom Optimization',
};

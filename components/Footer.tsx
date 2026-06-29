import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-y-10 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Image 
              src="/images/logo.jpg" 
              alt="SleepBetterHub logo" 
              width={48} 
              height={48} 
              className="h-12 w-12 rounded-full object-cover ring-1 ring-border" 
            />
            <div className="font-semibold tracking-tight text-lg">SleepBetterHub</div>
          </div>
          <p className="text-muted-foreground leading-relaxed pr-4">
            Science-backed tools and honest reviews for deeper sleep in 2026.
          </p>
        </div>

        <div>
          <div className="font-medium mb-3">Explore</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/mouth-tape" className="hover:text-foreground">Mouth Tape Hub</Link></li>
            <li><Link href="/quiz" className="hover:text-foreground">Sleep Assessment Quiz</Link></li>
            <li><Link href="/blog" className="hover:text-foreground">Sleep Guides &amp; Research</Link></li>
            <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-medium mb-3">Categories</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/mouth-tape" className="hover:text-foreground">Mouth Tape &amp; Strips</Link></li>
            <li><Link href="/categories/nasal" className="hover:text-foreground">Nasal Strips &amp; Dilators</Link></li>
            <li><Link href="/categories/gadgets" className="hover:text-foreground">Sleep Trackers &amp; Tech</Link></li>
            <li><Link href="/categories/supplements" className="hover:text-foreground">Supplements</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-medium mb-3">Trust &amp; Legal</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">Affiliate Disclosure</Link></li>
            <li><Link href="/about" className="hover:text-foreground">Medical Disclaimer</Link></li>
            <li><Link href="/about" className="hover:text-foreground">Privacy &amp; Data</Link></li>
            <li><a href="mailto:hello@sleepmask.tech" className="hover:text-foreground">Contact</a></li>
          </ul>
          <div className="mt-6 text-[10px] text-muted-foreground leading-snug">
            © {year} SleepBetterHub. Not medical advice.<br />Always consult a healthcare professional.
          </div>
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container text-[10px] text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.jpg" alt="" width={16} height={16} className="h-4 w-4 rounded-full object-cover opacity-60" />
            This site contains affiliate links. We may earn a commission at no extra cost to you. 
            We only recommend products we would (and do) personally use.
          </div>
          <div className="hidden md:block">Made for better sleepers, everywhere.</div>
        </div>
      </div>
    </footer>
  );
}

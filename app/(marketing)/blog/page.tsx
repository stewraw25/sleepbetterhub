import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/blog';

export default function BlogIndex() {
  const publishedPosts = getPublishedPosts();

  return (
    <div className="container py-12">
      <div className="max-w-2xl">
        <div className="uppercase tracking-[2px] text-xs text-primary mb-1">RESEARCH &amp; GUIDES</div>
        <h1 className="text-4xl font-semibold tracking-tighter">Sleep Science &amp; Practical Guides for Insomnia, Anxiety &amp; Mouth Taping</h1>
        <p className="mt-2 text-muted-foreground">Evidence-based articles on how to fall asleep fast, sleep anxiety remedies, stopping mouth breathing, and what actually works in 2026 — no hype, no fluff. New guides published 1–2× per week.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {publishedPosts.length === 0 ? (
          <p className="text-muted-foreground">More articles coming soon. Check back weekly!</p>
        ) : (
          publishedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border overflow-hidden bg-card hover:border-primary/40 transition">
              {post.image && (
                <div className="h-48 bg-muted overflow-hidden relative">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight group-hover:text-primary transition line-clamp-2">{post.title}</h2>
                <p className="mt-3 text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-sm text-primary font-medium">Read full article →</div>
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">New evidence-based guides published 1–2 times per week. Subscribe to never miss one.</p>
      </div>
    </div>
  );
}

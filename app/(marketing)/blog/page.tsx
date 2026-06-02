import Link from 'next/link';
import { blogPosts } from '@/lib/blog';

export default function BlogIndex() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl">
        <div className="uppercase tracking-[2px] text-xs text-primary mb-1">RESEARCH &amp; GUIDES</div>
        <h1 className="text-4xl font-semibold tracking-tighter">Sleep Science &amp; Practical Guides for Insomnia, Anxiety &amp; Mouth Taping</h1>
        <p className="mt-2 text-muted-foreground">Evidence-based articles on how to fall asleep fast, sleep anxiety remedies, stopping mouth breathing, and what actually works in 2026 — no hype, no fluff.</p>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border overflow-hidden bg-card hover:border-primary/40 transition">
            {post.image && (
              <div className="h-48 bg-muted overflow-hidden">
                <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
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
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-muted-foreground">More deep-dive guides coming every month. Subscribe to never miss one.</p>
      </div>
    </div>
  );
}

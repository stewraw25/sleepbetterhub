import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts, getPostBySlug } from '@/lib/blog';
import { Newsletter } from '@/components/Newsletter';
import { BlogBody } from '@/components/BlogBody';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta } from '@/lib/seo';
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from '@/lib/schema';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const description = post.seoDescription || post.excerpt;
  return pageMeta({
    title: post.seoTitle || post.title,
    description: description.length > 160 ? `${description.slice(0, 157)}...` : description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const publishDate = new Date(post.date);
  publishDate.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (publishDate > today) {
    notFound();
  }

  const related = getPublishedPosts()
    .filter((candidate) => candidate.slug !== post.slug && (
      candidate.category === post.category || candidate.tags.some((tag) => post.tags.includes(tag))
    ))
    .slice(0, 3);

  return (
    <article className="container max-w-3xl py-10">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />
      {post.faqs && post.faqs.length > 0 ? <JsonLd data={faqJsonLd(post.faqs)} /> : null}

      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link href="/blog" className="hover:text-foreground">Guides</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-foreground">{post.title}</span>
      </nav>

      <header className="mt-6 mb-8">
        <div className="text-xs uppercase tracking-widest text-primary">{post.category} • {post.readTime} read</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tighter leading-none">{post.title}</h1>
        <div className="mt-4 text-muted-foreground">{post.author} • {new Date(post.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      </header>

      {post.image && (
        <div className="mb-10 rounded-2xl overflow-hidden border relative aspect-[1200/630]">
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
        </div>
      )}

      <BlogBody content={post.content} />

      {post.faqs && post.faqs.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Questions people ask</h2>
          <div className="mt-4 space-y-5">
            {post.faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold">{faq.q}</h3>
                <p className="mt-1 text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-12 border-t pt-8">
          <h2 className="text-2xl font-semibold tracking-tight">Keep reading</h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="font-medium text-primary underline underline-offset-2">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12 border-t pt-10">
        <h2 className="font-medium mb-4">Get a short note when a new guide goes up</h2>
        <Newsletter />
      </div>

      <div className="mt-10 text-xs text-muted-foreground">
        This article is for information, not medical advice. Talk to a clinician about snoring with pauses, choking, or daytime sleepiness.
      </div>
    </article>
  );
}

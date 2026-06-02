import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getPostBySlug } from '@/lib/blog';
import { Newsletter } from '@/components/Newsletter';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Very basic content rendering — split by newlines for paragraphs
  const paragraphs = post.content.split('\n\n');

  return (
    <article className="container max-w-3xl py-10">
      <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">← All Articles</Link>

      <header className="mt-6 mb-8">
        <div className="text-xs uppercase tracking-widest text-primary">{post.category} • {post.readTime} read</div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tighter leading-none">{post.title}</h1>
        <div className="mt-4 text-muted-foreground">{post.author} • {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      </header>

      {post.image && (
        <div className="mb-10 rounded-2xl overflow-hidden border">
          <Image src={post.image} alt={`${post.title} — sleep science guide`} width={1200} height={630} className="w-full h-auto" />
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none text-[15.2px] leading-relaxed">
        {paragraphs.map((para, i) => {
          if (para.startsWith('## ')) {
            return <h2 key={i} className="text-2xl tracking-tight font-semibold mt-10 mb-3">{para.replace('## ', '')}</h2>;
          }
          if (para.startsWith('1. ') || para.startsWith('- ')) {
            return <p key={i} className="pl-4 border-l-2 border-muted my-4 whitespace-pre-line">{para}</p>;
          }
          return <p key={i} className="my-4">{para}</p>;
        })}
      </div>

      <div className="mt-12 border-t pt-10">
        <h3 className="font-medium mb-4">Enjoyed this? Get more evidence-based sleep content weekly.</h3>
        <Newsletter />
      </div>

      <div className="mt-10 text-xs text-muted-foreground">
        This article is for informational purposes only and is not medical advice. Consult qualified healthcare professionals for personal sleep concerns.
      </div>
    </article>
  );
}

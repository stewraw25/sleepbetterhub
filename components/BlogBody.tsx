import type { ReactNode } from 'react';
import Link from 'next/link';
import { SPONSORED_REL } from '@/lib/affiliates';

function renderInline(text: string) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((token, index) => {
    if (!token) return null;

    const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const label = link[1];
      const href = link[2];
      if (href.startsWith('/go/')) {
        return (
          <a key={index} href={href} target="_blank" rel={SPONSORED_REL} className="font-medium text-primary underline underline-offset-2">
            {label}
          </a>
        );
      }
      if (href.startsWith('/')) {
        return (
          <Link key={index} href={href} className="font-medium text-primary underline underline-offset-2">
            {label}
          </Link>
        );
      }
      const rel = /amazon\.|[?&]tag=/.test(href) ? SPONSORED_REL : 'noopener noreferrer';
      return (
        <a key={index} href={href} target="_blank" rel={rel} className="font-medium text-primary underline underline-offset-2">
          {label}
        </a>
      );
    }

    const bold = token.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={index}>{bold[1]}</strong>;
    return <span key={index}>{token}</span>;
  });
}

type ListKind = 'ul' | 'ol';

export function BlogBody({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/);

  return (
    <div className="text-[15.5px] leading-relaxed text-foreground">
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n');
        const nodes: ReactNode[] = [];
        let list: string[] = [];
        let listKind: ListKind | null = null;

        const flushList = () => {
          if (!listKind || list.length === 0) return;
          const items = list.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>);
          nodes.push(
            listKind === 'ul' ? (
              <ul key={`list-${nodes.length}`} className="my-4 list-disc space-y-1.5 pl-5">{items}</ul>
            ) : (
              <ol key={`list-${nodes.length}`} className="my-4 list-decimal space-y-1.5 pl-5">{items}</ol>
            )
          );
          list = [];
          listKind = null;
        };

        lines.forEach((raw) => {
          const line = raw.trim();
          if (!line) return;

          if (line.startsWith('### ')) {
            flushList();
            nodes.push(
              <h3 key={`h-${nodes.length}`} className="text-xl font-semibold tracking-tight mt-8 mb-2">
                {line.slice(4)}
              </h3>
            );
            return;
          }
          if (line.startsWith('## ')) {
            flushList();
            nodes.push(
              <h2 key={`h-${nodes.length}`} className="text-2xl font-semibold tracking-tight mt-10 mb-3">
                {line.slice(3)}
              </h2>
            );
            return;
          }
          if (line.startsWith('- ')) {
            if (listKind && listKind !== 'ul') flushList();
            listKind = 'ul';
            list.push(line.slice(2));
            return;
          }
          const numbered = line.match(/^\d+\.\s+(.*)/);
          if (numbered) {
            if (listKind && listKind !== 'ol') flushList();
            listKind = 'ol';
            list.push(numbered[1]);
            return;
          }

          flushList();
          nodes.push(
            <p key={`p-${nodes.length}`} className="my-4">
              {renderInline(line)}
            </p>
          );
        });

        flushList();
        return <div key={blockIndex}>{nodes}</div>;
      })}
    </div>
  );
}

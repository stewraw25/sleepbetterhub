import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbJsonLd, type BreadcrumbItem } from '@/lib/schema';

export type { BreadcrumbItem };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const crumbs = items.filter((item) => item.name.trim().length > 0);

  if (crumbs.length === 0) return null;

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
          {crumbs.map((item, index) => {
            const last = index === crumbs.length - 1;
            return (
              <li key={`${item.path}-${index}`} className="flex items-center gap-x-1.5">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span className="text-foreground">{item.name}</span>
                ) : (
                  <Link href={item.path} className="hover:text-foreground">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

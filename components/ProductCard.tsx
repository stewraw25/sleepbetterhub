import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  showBestFor?: boolean;
}

export function ProductCard({ product, showBestFor = true }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative h-44 bg-muted flex items-center justify-center overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-3 right-3 flex gap-1.5">
          {product.featured && (
            <Badge className="bg-black/70 text-white backdrop-blur border border-white/20">Featured</Badge>
          )}
          <Badge className="bg-primary/90 text-primary-foreground backdrop-blur">{product.brand}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-lg leading-tight tracking-tight">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{product.price}</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-medium tabular-nums shrink-0">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> 
              {product.rating}
            </div>
          </div>

          {showBestFor && product.bestFor.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {product.bestFor.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] font-normal px-2 py-0.5 border-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground flex-1">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between pt-4 border-t">
          <div className="text-xs text-muted-foreground">
            {product.reviewCount.toLocaleString()} reviews
          </div>
          <Link 
            href={`/reviews/${product.slug}`}
            className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-foreground hover:bg-muted transition-all group-hover:gap-1.5"
          >
            Read review <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

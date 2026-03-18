import Link from "next/link";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="group rounded-lg border border-border bg-card overflow-hidden transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
      <div className="aspect-[3/2] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5 space-y-3">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex h-9 items-center rounded-md border border-primary bg-transparent px-4 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

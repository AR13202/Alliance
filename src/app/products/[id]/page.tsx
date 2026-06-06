import { notFound } from "next/navigation";
import { getProductById, getRelatedProducts, products } from "@/data/products";
import ProductDetailScreen from "@/screens/ProductDetailScreen";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = product.seo?.metaTitle || `${product.name} | Alliance Engineering`;
  const description = product.seo?.metaDescription || product.shortDescription;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      title,
      description,
      url: `https://www.allianceengineeringco.com/products/${id}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.id, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.shortDescription || product.description,
    "brand": {
      "@type": "Brand",
      "name": product.brand || "Alliance Engineering Company",
    },
    "manufacturer": {
      "@id": "https://www.allianceengineeringco.com/#organization"
    },
    "url": `https://www.allianceengineeringco.com/products/${id}`,
    "image": product.image.startsWith("http") ? product.image : `https://www.allianceengineeringco.com${product.image}`,
    "additionalProperty": product.highlights.map((h) => ({
      "@type": "PropertyValue",
      "name": h.label,
      "value": h.value
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://www.allianceengineeringco.com/#organization" }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailScreen product={product} relatedProducts={related} />
    </>
  );
}

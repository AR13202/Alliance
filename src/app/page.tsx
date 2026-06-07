import HomeScreen from "@/screens/HomeScreen";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alliance Engineering Company | Current Transformer Manufacturer in India",
  description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
  openGraph: {
    type: "website",
    title: "Current Transformer Manufacturer in India | Alliance Engineering Company",
    description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
    url: "https://www.allianceengineeringco.com/",
    images: [
      {
        url: "/alliance_factory_og.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Current Transformer Manufacturer in India | Alliance Engineering Company",
    description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
    images: ["/alliance_factory_og.png"],
  },
};

export default function HomePage() {
  const featuredProducts = products.filter(p => p.isFeaturedProduct).slice(0, 8);

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.allianceengineeringco.com/#localbusiness",
        "name": "Alliance Engineering Company",
        "image": "https://www.allianceengineeringco.com/alliance_factory_og.png",
        "priceRange": "$$",
        "telephone": "+91-9417374546",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 417, Industrial Area Phase 2",
          "addressLocality": "Chandigarh",
          "postalCode": "160002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.7056,
          "longitude": 76.7997
        },
        "url": "https://www.allianceengineeringco.com",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "Product",
        "@id": "https://www.allianceengineeringco.com/#product-ct",
        "name": "Low Voltage Current Transformers",
        "description": "High-accuracy low-voltage (LV) current transformers for industrial metering and switchgear protection panels. Conforming to IS 2705 and IEC 61869-2, with Class 0.2S and 0.5S accuracy classes.",
        "image": "https://www.allianceengineeringco.com/alliance_factory_og.png",
        "brand": {
          "@type": "Brand",
          "name": "Alliance Engineering Company"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "500",
          "highPrice": "25000",
          "offerCount": "100",
          "url": "https://www.allianceengineeringco.com/products",
          "seller": {
            "@type": "Organization",
            "name": "Alliance Engineering Company"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <HomeScreen featuredProducts={featuredProducts} />
    </>
  );
}

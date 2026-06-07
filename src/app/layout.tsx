import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.allianceengineeringco.com"),
  title: {
    template: "%s | Alliance Engineering Company",
    default: "Current Transformer Manufacturer in India | Alliance Engineering Company",
  },
  description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
  openGraph: {
    type: "website",
    siteName: "Alliance Engineering Company",
    title: "Current Transformer Manufacturer in India | Alliance Engineering Company",
    description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
    url: "https://www.allianceengineeringco.com/",
    images: [
      {
        url: "/alliance_factory_og.png",
        width: 1200,
        height: 630,
        alt: "Alliance Engineering Company Logo",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "ManufacturingBusiness"],
        "@id": "https://www.allianceengineeringco.com/#organization",
        "name": "Alliance Engineering Company",
        "url": "https://www.allianceengineeringco.com",
        "logo": "https://www.allianceengineeringco.com/logo.png",
        "description": "ISO 9001:2015 certified manufacturer of current transformers, control transformers and industrial battery chargers. Established 1992. GeM registered. Chandigarh, India.",
        "foundingDate": "1992",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No. 417, Industrial Area Phase 2",
          "addressLocality": "Chandigarh",
          "postalCode": "160002",
          "addressCountry": "IN"
        },
        "telephone": "+91-9417374546",
        "email": "info@allianceengineeringco.com",
        "hasMap": "https://maps.google.com/?q=Plot+417+Industrial+Area+Phase+2+Chandigarh",
        "sameAs": [
          "https://www.indiamart.com/alliance-engg-co/",
          "https://www.linkedin.com/company/alliance-engg-co/",
          "https://www.exportersindia.com/allianceenggco/"
        ],
        "knowsAbout": [
          "Current Transformers",
          "Control Transformers",
          "Industrial Battery Chargers",
          "Voltage Stabilizers",
          "IS 2705",
          "IEC 61869-2"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.allianceengineeringco.com/#website",
        "url": "https://www.allianceengineeringco.com",
        "name": "Alliance Engineering Company",
        "alternateName": ["Alliance Engineering", "Alliance Engineering Co", "Alliance Engineering Company Chandigarh"],
        "publisher": { "@id": "https://www.allianceengineeringco.com/#organization" }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/lt-current-transformer-panel.webp" as="image" type="image/webp" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Manrope:wght@200..800&family=Inter:wght@300..700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <meta name="apple-mobile-web-app-title" content="Alliance" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <title>Alliance Engineering Company</title>
      </head>
      <body className="bg-background text-foreground antialiased font-outline" suppressHydrationWarning>
        <Providers>
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
        {/* cloudflare script */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "7dcc8ea8dc4644c88c90b32e4f5abfa2"}'></script>
      </body>
    </html>
  );
}

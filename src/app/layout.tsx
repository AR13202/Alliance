import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Alliance Engineering Company",
    default: "Current Transformer Manufacturer in India | Alliance Engineering Company",
  },
  description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM & IREPS registered. 30+ years of precision manufacturing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization", "ManufacturingBusiness"],
    "name": "Alliance Engineering Company",
    "description": "ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No.: 417, Industrial Area Phase -2",
      "addressLocality": "Chandigarh",
      "postalCode": "134113",
      "addressCountry": "IN"
    },
    "telephone": "+91 172 400 1234",
    "email": "sales@allianceengineering.in",
    "url": "https://www.allianceengineering.in/"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Inter:wght@300..700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased font-outline" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

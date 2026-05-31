import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    template: "%s | Alliance Engineering Company",
    default: "Current Transformer Manufacturer in India | Alliance Engineering Company",
  },
  description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
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
      "postalCode": "160002",
      "addressCountry": "IN"
    },
    "telephone": "+91-9417374546",
    "email": "alliancemeters@gmail.com",
    "url": "https://www.alliancenggco.com/"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Manrope:wght@200..800&family=Inter:wght@300..700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <meta name="apple-mobile-web-app-title" content="Alliance" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased font-outline" suppressHydrationWarning>
        <Providers>
          {children}
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}

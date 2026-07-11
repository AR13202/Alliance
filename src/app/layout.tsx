import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next";
import { Inter, Manrope, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import Clarity from "@/components/Clarity";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.allianceengineeringco.com"),
  title: {
    template: "%s | Alliance Engineering Company",
    default: "Current Transformer Manufacturer in India | Alliance Engineering Company",
  },
  description: "Alliance Engineering Company — ISO 9001:2015 certified manufacturer of current transformers, control transformers & industrial battery chargers in Chandigarh. GeM registered. 30+ years of precision manufacturing.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.allianceengineeringco.com",
  },
  keywords: [
    "Current Transformer Manufacturer",
    "Control Transformer Manufacturer",
    "Industrial Battery Charger",
    "Current Transformer India",
  ],
  appleWebApp: {
    title: "Alliance",
  },
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
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preload" href="/lt-current-transformer-panel.webp" as="image" type="image/webp" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased font-outline" suppressHydrationWarning>
        <Providers>
          <Clarity />
          {children}
          <SpeedInsights />
          <Analytics />
        </Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2PJ5KCGC98"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2PJ5KCGC98');
          `}
        </Script>
        {/* cloudflare script */}
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "7dcc8ea8dc4644c88c90b32e4f5abfa2"}'></script>
      </body>
    </html>
  );
}

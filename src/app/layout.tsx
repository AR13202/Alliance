import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";

export const metadata: Metadata = {
  title: "PowerGrid Solutions",
  description: "Industrial electrical components catalog built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Providers from "./providers";
import "../index.css";

export const metadata: Metadata = {
  title: "Alliance Engineering Company",
  description: "Industrial electrical components catalog built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0d1118] text-slate-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

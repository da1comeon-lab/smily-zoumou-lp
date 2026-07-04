import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const siteTitle = "大阪の増毛・増毛エクステ専門店｜女性・男性相談可｜smily";
const siteDescription =
  "大阪で自然な増毛エクステならsmily。女性・男性どちらも相談可。つむじ・前髪・分け目のお悩みを自然にカバー。初めての方も安心のカウンセリング。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "増毛エクステサロンsmily",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: "/smily-main-hero.webp",
        width: 1536,
        height: 1024,
        alt: "大阪の増毛エクステ専門店smily"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

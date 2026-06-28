import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const siteTitle = "大阪・関目高殿の増毛エクステ専門店｜増毛エクステサロンsmily";
const siteDescription =
  "大阪市旭区・関目高殿駅徒歩1分の増毛エクステ専門サロン。分け目・つむじ・前髪・トップのボリュームが気になる方へ、完全予約制のプライベート空間で自然な仕上がりをご提案します。";

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
    locale: "ja_JP"
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

import type { Metadata } from "next";
import { blogLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "大阪の増毛エクステ関連記事｜smily",
  description:
    "大阪で増毛エクステを検討している方へ。増毛エクステとは、リペア、よくある質問を分かりやすくまとめました。"
};

export default function BlogIndex() {
  return (
    <main className="bg-cream px-4 py-12 text-walnut md:px-6 md:py-16">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm font-bold text-sage underline underline-offset-4">
          smilyトップへ戻る
        </a>
        <h1 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
          大阪の増毛エクステ関連記事
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-cocoa md:text-base">
          大阪で増毛エクステを検討している方に向けて、初めての相談前に知っておきたい内容をまとめています。
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {blogLinks.map((post) => (
            <a key={post.href} href={post.href} className="rounded-2xl border border-almond bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-cocoa">{post.excerpt}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

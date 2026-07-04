import type { Metadata } from "next";
import { notFound } from "next/navigation";

const posts = {
  "about-zoumou-extension": {
    title: "増毛エクステとは",
    description: "大阪で増毛エクステを検討している方へ、仕組みやウィッグとの違いを解説します。",
    body: [
      "増毛エクステは、自毛1本に人工毛を結び、分け目・つむじ・前髪など気になる部分に自然なボリューム感をプラスする美容メニューです。",
      "大阪のsmilyでは、必要な部分に必要な本数だけ装着できるよう、カウンセリングで状態を確認しながら本数を決めます。ウィッグのように広い範囲をまとめてカバーする方法とは違い、今ある髪を活かして髪の印象を整えやすい点が特徴です。",
      "初めての方は、相談だけでも大丈夫です。大阪市旭区・関目高殿駅徒歩1分の完全予約制サロンで、人目を気にせずご相談いただけます。"
    ]
  },
  repair: {
    title: "増毛エクステのリペアについて",
    description: "増毛エクステを自然に保つためのリペア頻度や通い方の目安を紹介します。",
    body: [
      "増毛エクステは、髪の伸び方や生活習慣によって見え方が変わります。自然な印象を保ちやすくするため、1〜2ヶ月ごとのリペアをおすすめしています。",
      "リペアでは、伸びた部分の状態を確認し、必要に応じて本数を追加しながら整えます。前髪・分け目・つむじなど、気になる場所によって必要な本数は異なります。",
      "大阪で定期的に通いやすい増毛エクステサロンを探している方は、関目高殿駅徒歩1分のsmilyへご相談ください。"
    ]
  },
  faq: {
    title: "増毛エクステのよくある質問",
    description: "シャンプー、カラー、パーマ、本数、男性・女性の相談についてまとめました。",
    body: [
      "増毛エクステは施術後も通常通りシャンプーできます。強くこすりすぎず、優しく洗うことをおすすめしています。",
      "カラーやパーマは状態によって異なるため、事前にご相談ください。本数の目安は、前髪や分け目で400本、つむじや広めの範囲で800本以上を目安にすることがあります。",
      "掲載メニューは女性限定が中心ですが、男性のご相談もLINEで事前にお問い合わせいただけます。大阪で自然に髪の印象を整えたい方へ、状態を確認しながらご案内します。"
    ]
  }
} as const;

type Slug = keyof typeof posts;

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts[params.slug as Slug];
  if (!post) {
    return {};
  }
  return {
    title: `${post.title}｜大阪の増毛エクステ専門店smily`,
    description: post.description
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as Slug];
  if (!post) {
    notFound();
  }

  return (
    <main className="bg-cream px-4 py-12 text-walnut md:px-6 md:py-16">
      <article className="mx-auto max-w-3xl rounded-[1.75rem] border border-almond bg-white p-6 shadow-soft md:p-10">
        <a href="/blog" className="text-sm font-bold text-sage underline underline-offset-4">
          記事一覧へ戻る
        </a>
        <h1 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>
        <div className="mt-6 space-y-5 text-sm leading-8 text-cocoa md:text-base">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-cream p-5">
          <p className="text-sm font-bold text-walnut">大阪で増毛エクステを相談する</p>
          <p className="mt-2 text-sm leading-7 text-cocoa">
            関目高殿駅徒歩1分の増毛エクステサロンsmilyで、気になる部分を相談しながら本数を決められます。
          </p>
          <a href="/" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-walnut px-6 text-sm font-bold text-white">
            トップページへ
          </a>
        </div>
      </article>
    </main>
  );
}

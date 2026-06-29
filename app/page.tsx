import { CTAButtons } from "@/components/CTAButtons";
import { SectionHeading } from "@/components/SectionHeading";
import {
  beforeAfterItems,
  bookingUrl,
  concerns,
  faqs,
  lineUrl,
  menuGroups,
  reasons,
  reviews,
  searchNeeds,
  shopInfo,
  staffFeatures,
  steps,
  trustHighlights
} from "@/lib/site-data";
import { siteUrl } from "@/lib/site-url";

const googleMapEmbedUrl =
  "https://www.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E6%97%AD%E5%8C%BA%E9%AB%98%E6%AE%BF4%E4%B8%81%E7%9B%AE22-22%20%E3%82%B8%E3%83%A7%E3%82%A4%E3%83%86%E3%83%AB%E9%AB%98%E6%AE%BF311&output=embed";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "増毛エクステサロンsmily",
  alternateName: "ゾウモウエクステサロン スマイリー",
  url: siteUrl,
  sameAs: [bookingUrl],
  image: `${siteUrl}/smily-main-hero.png`,
  description:
    "大阪市旭区・関目高殿駅徒歩1分の増毛エクステ専門サロン。分け目・つむじ・前髪・トップの自然なボリューム感をご提案します。",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "大阪府",
    addressLocality: "大阪市旭区",
    streetAddress: "高殿4丁目22-22 ジョイテル高殿311"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00"
    }
  ],
  priceRange: "¥0-¥17,000",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.93",
    reviewCount: "36"
  },
  paymentAccepted:
    "Visa, Mastercard, JCB, American Express, Diners Club, Discover, 交通系電子マネー, iD, QUICPay, PayPay, 現金",
  areaServed: ["大阪市旭区", "関目高殿", "関目成育", "関目"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "増毛エクステ",
        serviceType: "増毛エクステ"
      },
      areaServed: "大阪市旭区・関目高殿"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a
    }
  }))
};

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="relative overflow-hidden px-4 pb-16 pt-5 md:px-6 md:pb-24">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-3">
          <a href="#" className="text-sm font-bold text-walnut md:text-base">
            増毛エクステサロンsmily
          </a>
          <a href={bookingUrl} className="text-sm font-semibold text-cocoa underline underline-offset-4">
            予約ページへ
          </a>
        </div>

        <div className="mx-auto max-w-6xl pt-7 md:pt-12">
          <h1 className="sr-only">分け目・つむじ・前髪に自然なボリュームを</h1>
          <div className="relative overflow-hidden rounded-[1.5rem] bg-linen shadow-soft md:rounded-[2rem]">
            <img
              src="/smily-main-hero.png"
              alt="分け目・つむじ・前髪に自然なボリュームを。大阪・関目高殿駅すぐの増毛エクステ専門プライベートサロン。"
              className="block h-auto w-full"
            />
            <a
              href={bookingUrl}
              aria-label="空席確認・予約する"
              className="absolute left-[4.6%] top-[66%] h-[8.8%] w-[23.8%] rounded-full focus:outline-none focus:ring-4 focus:ring-blush/50"
            />
            <a
              href={lineUrl}
              aria-label="LINEで相談する"
              className="absolute left-[29.3%] top-[66%] h-[8.8%] w-[22.6%] rounded-full focus:outline-none focus:ring-4 focus:ring-blush/50"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {trustHighlights.map((item) => (
              <div key={item.label} className="rounded-2xl border border-almond bg-white/90 p-4 shadow-sm">
                <p className="text-[11px] font-bold tracking-[0.12em] text-sage">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-walnut">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-cocoa">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <CTAButtons />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/65">
        <SectionHeading
          eyebrow="Concerns"
          title="こんなお悩みに寄り添います"
          lead="気になる部分だけを自然にカバーしたい方へ。完全予約制の落ち着いた空間で、相談しながら本数を決められます。"
        />
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern) => (
            <div key={concern} className="rounded-2xl border border-almond/70 bg-white px-5 py-5 text-base font-semibold text-walnut shadow-sm">
              {concern}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-cream/70">
        <SectionHeading
          eyebrow="Search Needs"
          title="大阪で髪のボリュームが気になる方へ"
          lead="「増毛エクステ」という言葉を知らない方でも大丈夫です。分け目・つむじ・前髪・トップの見え方や、地肌の透け感が気になる方に向けた美容メニューです。"
        />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {searchNeeds.map((item) => (
            <article key={item.title} className="rounded-2xl border border-almond bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-walnut">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-cocoa">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <SectionHeading
            eyebrow="About"
            title="増毛エクステとは"
            lead="自毛1本に対して人工毛を結び、気になる部分に自然なボリューム感をプラスする技術です。今ある髪を活かして、髪の印象を整える美容メニューです。"
          />
          <div className="rounded-[1.75rem] border border-almond bg-white p-6 shadow-soft md:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {["必要な部分だけ", "自然な印象", "リペア対応"].map((item) => (
                <div key={item} className="rounded-2xl bg-cream p-5 text-center text-sm font-bold text-cocoa">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-cocoa">
              分け目、つむじ、前髪、トップなど、気になる範囲に合わせて本数を調整できます。
              1〜2ヶ月ごとのリペアにも対応しているため、無理なく続けやすいのが特徴です。
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-linen/65">
        <SectionHeading eyebrow="Reasons" title="smilyが選ばれる理由" />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-almond bg-cream text-xs font-bold text-cocoa">
                {reason.icon}
              </span>
              <h3 className="text-lg font-bold text-walnut">{reason.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white/65">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="overflow-hidden rounded-[1.75rem] border border-almond bg-white shadow-soft">
            <img
              src="/staff-placeholder.svg"
              alt="担当スタッフ写真の差し替え用プレースホルダー"
              className="block aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Staff"
              title="担当スタッフ紹介"
              lead="増毛エクステが初めての方にも安心してご相談いただけるよう、カウンセリングから仕上がり確認までマンツーマンで対応します。分け目・つむじ・前髪など、気になる部分に合わせて自然な仕上がりをご提案します。"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {staffFeatures.map((feature) => (
                <div key={feature} className="rounded-2xl border border-almond bg-cream px-5 py-4 text-sm font-bold text-cocoa">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Before / After"
          title="仕上がりイメージ"
          lead="施術写真や比較画像に置き換えて利用できます。前髪・分け目・つむじの3枠を用意しています。"
        />
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {beforeAfterItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <div className="bg-cream p-2 md:p-3">
                <div className="overflow-hidden rounded-xl">
                  <img src={item.imageSrc} alt={item.imageAlt} className="block h-auto w-full" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-bold text-walnut">{item.title}</h3>
                  <span className="rounded-full bg-linen px-3 py-1 text-xs font-bold text-cocoa">
                    {item.estimate}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-cocoa">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-3xl text-center text-xs leading-6 text-cocoa/75">
          本数は状態により異なります。髪質や状態によって本数・仕上がりは変わります。
        </p>
      </section>

      <section id="price" className="section-pad bg-white/70">
        <SectionHeading
          eyebrow="Price"
          title="料金表"
          lead="400本8,000円から。初回・他店乗り換え・再来リペアに分けて、分かりやすく掲載しています。"
        />
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {menuGroups.map((group) => (
            <section key={group.title} className="rounded-[1.75rem] border border-almond bg-white p-5 shadow-soft">
              <h3 className="text-xl font-bold text-walnut">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-cocoa">{group.description}</p>
              <div className="mt-5 space-y-3">
                {group.menus.map((menu) => (
                  <article key={menu.name} className="rounded-2xl bg-cream p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold leading-6 text-walnut">{menu.name}</h4>
                      <p className="shrink-0 text-lg font-bold text-cocoa">{menu.price}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-cocoa">{menu.detail}</p>
                    {menu.condition ? (
                      <p className="mt-3 rounded-full bg-white px-3 py-2 text-xs font-semibold text-sage">{menu.condition}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-pad bg-linen/50">
        <SectionHeading
          eyebrow="Reviews"
          title="お客様の声"
          lead="初めての方や、他店からの乗り換えを検討している方にも相談しやすいように、丁寧なカウンセリングを大切にしています。"
        />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.text} className="rounded-2xl border border-almond bg-white p-6 shadow-sm">
              <p className="text-sm font-bold tracking-[0.18em] text-blush">★★★★★</p>
              <p className="mt-4 text-sm leading-7 text-cocoa">{review.text}</p>
              <p className="mt-5 text-sm font-bold text-walnut">{review.person}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading eyebrow="Flow" title="施術の流れ" />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {steps.map(([label, title]) => (
            <div key={label} className="rounded-2xl border border-almond bg-white p-6 shadow-sm">
              <p className="text-xs font-bold tracking-[0.18em] text-sage">{label}</p>
              <h3 className="mt-3 text-lg font-bold text-walnut">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-linen/60">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index < 2} className="group rounded-2xl bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-walnut">
                <span>
                  <span className="mr-2 text-sage">Q.</span>
                  {faq.q}
                </span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cream text-cocoa transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-almond/70 pt-4 text-sm leading-7 text-cocoa">
                <span className="mr-2 font-bold text-blush">A.</span>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Salon"
          title="店舗情報"
          lead="関目高殿駅4番出口から徒歩1分。完全予約制のプライベートサロンです。"
        />
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.9fr]">
          <dl className="overflow-hidden rounded-[1.75rem] border border-almond bg-white shadow-soft">
            {shopInfo.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-almond/70 px-5 py-4 last:border-b-0 md:grid-cols-[10rem_1fr] md:px-7">
                <dt className="text-sm font-bold text-walnut">{label}</dt>
                <dd className="text-sm leading-7 text-cocoa">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="overflow-hidden rounded-[1.75rem] border border-almond bg-white shadow-soft">
            {googleMapEmbedUrl ? (
              <iframe
                src={googleMapEmbedUrl}
                title="増毛エクステサロンsmilyのGoogleマップ"
                className="h-full min-h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center bg-cream p-6 text-center">
                <p className="text-sm font-bold text-walnut">Googleマップ埋め込み枠</p>
                <p className="mt-3 text-sm leading-7 text-cocoa">
                  実際のiframe URLを取得後、app/page.tsx の googleMapEmbedUrl に設定して差し替えできます。
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-walnut p-7 text-white shadow-soft md:p-10">
          <p className="text-sm font-semibold text-almond">Reserve / Contact</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">まずは相談だけでもOK</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-linen">
            本数や仕上がりが分からない方も、気になる部分を相談しながら選べます。
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={bookingUrl}
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-walnut transition hover:bg-linen"
            >
              空席確認・予約する
            </a>
            <a
              href={lineUrl}
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-almond bg-white/94 p-3 shadow-[0_-12px_30px_rgba(63,48,40,0.10)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a href={bookingUrl} className="inline-flex min-h-12 items-center justify-center rounded-full bg-walnut px-3 text-sm font-bold text-white">
            予約する
          </a>
          <a href={lineUrl} className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/25 bg-cream px-3 text-sm font-bold text-cocoa">
            LINE相談
          </a>
        </div>
      </div>
    </main>
  );
}

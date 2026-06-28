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
  shopInfo,
  steps
} from "@/lib/site-data";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "増毛エクステサロンsmily",
  alternateName: "ゾウモウエクステサロン スマイリー",
  url: bookingUrl,
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
  areaServed: "大阪市旭区・関目高殿"
};

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
          {reasons.map((reason, index) => (
            <div key={reason} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blush/20 text-sm font-bold text-cocoa">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-walnut">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <SectionHeading
          eyebrow="Before / After"
          title="仕上がりイメージ"
          lead="写真は後から差し替えできるよう、4つの枠を用意しています。施術写真や比較画像に置き換えてご利用ください。"
        />
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {beforeAfterItems.map((item) => (
            <article
              key={item.title}
              className={`overflow-hidden rounded-2xl bg-white shadow-sm ${
                item.imageSrc ? "sm:col-span-2 lg:col-span-4" : ""
              }`}
            >
              <div
                className={
                  item.imageSrc
                    ? "bg-cream p-2 md:p-4"
                    : "aspect-[4/3] bg-[linear-gradient(135deg,#f3eadf,#ffffff_48%,#e8d9c9)] p-4"
                }
              >
                <div
                  className={
                    item.imageSrc
                      ? "overflow-hidden rounded-xl"
                      : "flex h-full items-center justify-center rounded-xl border border-dashed border-cocoa/25 text-sm font-bold text-cocoa"
                  }
                >
                  {item.imageSrc ? (
                    <img src={item.imageSrc} alt={item.imageAlt} className="block h-auto w-full" />
                  ) : (
                    `${item.title} 画像`
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-walnut">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cocoa">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
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
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-base font-bold text-walnut">
                <span className="mr-2 text-sage">Q.</span>
                {faq.q}
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
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-almond bg-white shadow-soft">
          {shopInfo.map(([label, value]) => (
            <div key={label} className="grid gap-2 border-b border-almond/70 px-5 py-4 last:border-b-0 md:grid-cols-[12rem_1fr] md:px-7">
              <dt className="text-sm font-bold text-walnut">{label}</dt>
              <dd className="text-sm leading-7 text-cocoa">{value}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-walnut p-7 text-white shadow-soft md:p-10">
          <p className="text-sm font-semibold text-almond">Reserve / Contact</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
            まずは空席確認、またはLINEで気軽にご相談ください。
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-linen">
            初めての方も、他店からの乗り換えを検討中の方も、気になる部分や本数を相談しながら選べます。
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href={bookingUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-walnut transition hover:bg-linen"
            >
              ホットペッパーで予約する
            </a>
            <a
              href={lineUrl}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
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

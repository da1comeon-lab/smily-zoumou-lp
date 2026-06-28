import { bookingUrl, lineUrl } from "@/lib/site-data";

type CTAButtonsProps = {
  stacked?: boolean;
};

export function CTAButtons({ stacked = false }: CTAButtonsProps) {
  return (
    <div className={`flex ${stacked ? "flex-col" : "flex-col sm:flex-row"} gap-3`}>
      <a
        href={bookingUrl}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-walnut px-6 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-cocoa focus:outline-none focus:ring-4 focus:ring-blush/30"
      >
        空席確認・予約する
      </a>
      <a
        href={lineUrl}
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-cocoa/25 bg-white px-6 py-3 text-center text-sm font-semibold text-cocoa shadow-sm transition hover:border-cocoa/45 hover:bg-linen focus:outline-none focus:ring-4 focus:ring-blush/25"
      >
        LINEで相談する
      </a>
    </div>
  );
}

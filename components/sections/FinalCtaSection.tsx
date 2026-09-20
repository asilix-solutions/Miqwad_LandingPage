import Image from "next/image";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-title"
      style={{
        background: "linear-gradient(180deg, #044088 0%, #01142E 100%)",
      }}
    >
      {/* ── Desktop: CSS Grid guarantees button LEFT / text RIGHT regardless of RTL ── */}
      {/* ── Mobile: stacked column (text → button) ── */}
      <div
        className="mx-auto grid max-w-[var(--container-site)] px-5 pt-[41px] pb-[38px] lg:min-h-[351px] lg:px-10"
        style={{
          /* Mobile: single centered column */
          gridTemplateColumns: "1fr",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        {/* ── Inner composition wrapper — compact centered group ── */}
        {/* direction:ltr on desktop flex row guarantees button=LEFT regardless of page RTL */}
        <div
          className="flex w-full flex-col items-center gap-8 lg:w-[570px] lg:flex-row lg:items-center lg:justify-between lg:gap-6"
          style={{ direction: "ltr" }}
        >

          {/* ── CTA button (LEFT on desktop, BELOW on mobile) ── */}
          <div className="order-2 lg:order-1 lg:shrink-0">
            {/* TODO: Wire real application download destination (App Store / Google Play) when available. */}
            <button
              type="button"
              className="inline-flex h-[45px] w-[223px] cursor-pointer items-center justify-center gap-3 rounded-[20px] bg-accent font-bold text-white shadow-[0_0_24px_rgba(232,74,39,0.31)] transition-[transform,box-shadow,filter] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(232,74,39,0.42)] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45E2B]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#01142E] active:translate-y-px active:shadow-[0_0_16px_rgba(232,74,39,0.22)] lg:h-[73px] motion-reduce:transform-none"
              style={{ paddingInline: "36px" }}
            >
              {/* Icon: visually LEFT of text — use explicit LTR flex order */}
              <span className="order-1 shrink-0" style={{ direction: "ltr" }}>
                <Image
                  src="/icons/miqwad-mark.svg"
                  alt=""
                  width={30}
                  height={29}
                  aria-hidden="true"
                  className="h-[29px] w-[30px]"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </span>
              <span
                className="order-2 whitespace-nowrap text-[20px] leading-[24.8px]"
                dir="rtl"
              >
                حمّل التطبيق الآن
              </span>
            </button>
          </div>

          {/* ── Text block (RIGHT on desktop, ABOVE on mobile) ── */}
          <div
            className="order-1 text-center lg:order-2"
            dir="rtl"
            style={{ maxWidth: "309px" }}
          >
            <h2
              id="final-cta-title"
              className="text-[22px] font-semibold leading-tight text-white lg:text-[40px] lg:leading-[1.2]"
            >
              سيارتك تحتاج مقود
            </h2>
            <p
              className="mt-2 text-[14px] font-normal leading-[20px] lg:mt-3 lg:text-[17px] lg:leading-[27.14px]"
              style={{ color: "rgba(255, 255, 255, 0.72)" }}
            >
              حمّل التطبيق وخلك جاهز لكل احتياجات سيارتك
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

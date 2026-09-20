import Image from "next/image";

const steps = [
  {
    icon: "/icons/how-it-works/steering.svg",
    title: "اختر الخدمة",
    description: "اختر ما تحتاجه لسيارتك.",
  },
  {
    icon: "/icons/how-it-works/search.svg",
    title: "اطلب أو ابحث",
    description: "أكمل طلبك أو ابحث عن الخدمة المناسبة.",
  },
  {
    icon: "/icons/how-it-works/miqwad-complete.svg",
    title: "خل الباقي على مقود",
    description: "تابع طلبك حتى تحصل على الخدمة.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="border-b border-border bg-app"
    >
      <div className="mx-auto max-w-[var(--container-site)] px-5 py-[54px] md:px-10 md:py-[60px] md:pb-[70px]">
        {/* ── Heading ──────────────────────────────────────────── */}
        <div className="text-center">
          <h2
            id="how-it-works-title"
            className="inline-flex items-center justify-center gap-2 text-[22px] font-semibold leading-tight md:text-[32px] md:leading-[46.5px]"
          >
            <Image
              src="/icons/miqwad-mark.svg"
              alt=""
              width={29.03}
              height={29}
              aria-hidden="true"
              className="w-[29.03px] h-[29px]"
            />
            <span>
              <span className="text-[#043168]">آلية عمل </span>
              <span className="text-accent">مقود</span>
            </span>
          </h2>
          <p className="mt-2.5 text-center text-[24px] font-semibold leading-[26px] text-[#0B2340]">
            خليها أسهل مع مقود
          </p>
        </div>

        {/* ── Desktop steps (horizontal, RTL) ──────────────────── */}
        <div className="mt-12 hidden md:block">
          <div className="relative flex items-start justify-between">
            {/* Connector line — sits behind icons */}
            <div
              aria-hidden="true"
              className="absolute top-[23px] right-[calc(100%/6)] left-[calc(100%/6)] h-px bg-muted/30"
            />

            {steps.map((step) => (
              <div
                key={step.title}
                className="relative flex w-1/3 flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-app">
                  <Image
                    src={step.icon}
                    alt=""
                    width={46}
                    height={46}
                    aria-hidden="true"
                    className="h-[46px] w-[46px]"
                  />
                </div>
                <h3 className="mt-4 text-right text-[20px] font-medium leading-[24.8px] text-[#0B2340]">
                  {step.title}
                </h3>
                <p className="mt-1.5 max-w-[200px] text-[14px] font-normal leading-[20px] text-[#5B6B84]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile steps (vertical) ─────────────────────────── */}
        <div className="mt-[50px] flex flex-col items-center md:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              {/* Vertical connector before step (except first) */}
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className="mb-6 h-10 w-px bg-muted/30"
                />
              )}
              <div className="flex h-[46px] w-[46px] items-center justify-center">
                <Image
                  src={step.icon}
                  alt=""
                  width={46}
                  height={46}
                  aria-hidden="true"
                  className="h-[46px] w-[46px]"
                />
              </div>
              <h3 className="mt-3.5 text-right text-[20px] font-medium leading-[24.8px] text-[#0B2340]">
                {step.title}
              </h3>
              <p className="mt-1 max-w-[240px] text-[14px] font-normal leading-[20px] text-[#5B6B84]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

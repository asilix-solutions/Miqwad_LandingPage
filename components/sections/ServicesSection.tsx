"use client";

import Image from "next/image";
import { useCallback, useSyncExternalStore, useState } from "react";
import * as m from "motion/react-m";
import { LazyMotion, MotionConfig, AnimatePresence } from "motion/react";
import type { Transition } from "motion/react";

const loadMotionFeatures = () =>
  import("@/lib/motion-features").then((module) => module.default);

// ─── Touch detection via useSyncExternalStore ──────────────────────────────────

const touchQuery = "(hover: none) and (pointer: coarse)";

function subscribeTouchChange(callback: () => void) {
  const mq = window.matchMedia(touchQuery);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getTouchSnapshot(): boolean {
  return window.matchMedia(touchQuery).matches;
}

function getTouchServerSnapshot(): boolean {
  return false;
}

function useTouchDetection(): boolean {
  return useSyncExternalStore(
    subscribeTouchChange,
    getTouchSnapshot,
    getTouchServerSnapshot,
  );
}

// ─── Data model ────────────────────────────────────────────────────────────────

type ServiceId =
  | "mojaz"
  | "insurance"
  | "towing"
  | "parts"
  | "workshops"
  | "scrapyards";

interface ServiceItem {
  id: ServiceId;
  title: string;
  description: string;
  image: string;
  /** Optional object-position override for the background image. */
  imagePosition?: string;
}

const services: ServiceItem[] = [
  {
    id: "mojaz",
    title: "تقرير موجز",
    description:
      "الاطلاع على تقرير تاريخ المركبة لفهم حالتها وسجلها قبل الشراء أو التقييم.",
    image: "/images/services/موجز.png",
  },
  {
    id: "insurance",
    title: "التأمين",
    description:
      "مقارنة عروض وأسعار تأمين السيارات من شركات التأمين المتاحة، واختيار التغطية والعرض الأنسب، ثم إكمال عملية الشراء إلكترونياً.",
    image: "/images/services/التأمين.png",
  },
  {
    id: "towing",
    title: "سطحة نقل",
    description:
      "طلب سطحة نقل لسيارتك عند الحاجة، مع تتبع حالة الطلب والوصول بسهولة.",
    image: "/images/services/السطحة.png",
  },
  {
    id: "parts",
    title: "سوق قطع الغيار",
    description:
      "شراء قطع غيار جديدة لسيارتك من المتاجر المتاحة، مع البحث عن القطعة المناسبة ومقارنة الخيارات والأسعار.",
    image: "/images/services/سوق قطع الغيار.png",
  },
  {
    id: "workshops",
    title: "دليل الورش",
    description:
      "استكشاف الورش ومراكز الصيانة المناسبة، ومعرفة الخدمات المتوفرة ومعلومات التواصل.",
    image: "/images/services/ورش.png",
  },
  {
    id: "scrapyards",
    title: "دليل التشاليح",
    description:
      "البحث عن التشاليح وقطع الغيار المستعملة المتوفرة، مع معرفة المعلومات المرتبطة بها ومواقعها.",
    image: "/images/services/تشليح.png",
  },
];

// Desktop layout: top row = first 4 (portrait), bottom row = last 2 (landscape)
const topRow: ServiceId[] = ["mojaz", "insurance", "towing", "parts"];
const bottomRow: ServiceId[] = ["workshops", "scrapyards"];

// Mobile layout: re-ordered into dedicated composition
const mobileTopRow: ServiceId[] = ["towing", "parts"];
const mobileSecondRow: ServiceId[] = ["mojaz", "insurance"];
const mobileFullWidth: ServiceId[] = ["workshops", "scrapyards"];

function getService(id: ServiceId): ServiceItem {
  return services.find((s) => s.id === id)!;
}

// ─── Grid column templates for desktop expansion ───────────────────────────────

function getTopRowColumns(activeId: ServiceId | null): string {
  if (!activeId || !topRow.includes(activeId)) return "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)";
  return topRow.map((id) => (id === activeId ? "minmax(0, 2.4fr)" : "minmax(0, 0.72fr)")).join(" ");
}

function getBottomRowColumns(activeId: ServiceId | null): string {
  if (!activeId || !bottomRow.includes(activeId)) return "minmax(0, 1fr) minmax(0, 1fr)";
  return bottomRow.map((id) => (id === activeId ? "minmax(0, 2fr)" : "minmax(0, 0.8fr)")).join(" ");
}

// ─── Component ─────────────────────────────────────────────────────────────────

export function ServicesSection() {
  const [activeId, setActiveId] = useState<ServiceId | null>(null);
  const isTouch = useTouchDetection();

  const handleInteraction = useCallback(
    (id: ServiceId) => {
      if (isTouch) {
        setActiveId((prev) => (prev === id ? null : id));
      }
    },
    [isTouch],
  );

  const handleMouseEnter = useCallback(
    (id: ServiceId) => {
      if (!isTouch) setActiveId(id);
    },
    [isTouch],
  );

  const handleContainerLeave = useCallback(() => {
    if (!isTouch) setActiveId(null);
  }, [isTouch]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, id: ServiceId) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveId((prev) => (prev === id ? null : id));
      }
    },
    [],
  );

  // Derived: whether a sibling is active (another card is expanded)
  const hasSiblingActive = activeId !== null;

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <section
          id="services"
          aria-labelledby="services-title"
          className="relative isolate overflow-hidden bg-surface py-section"
          style={{
            backgroundImage: "url('/icons/services/services-rings.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "104% auto",
          }}
        >

      {/* Heading */}
      <div className="relative mx-auto max-w-site px-5 text-center flex flex-col items-center">
        {/* Title row */}
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/icons/miqwad-mark.svg"
            alt="مقود"
            width={30}
            height={29}
            className="h-[29px] w-[30px]"
          />
          <h2
            id="services-title"
            className="text-2xl font-semibold md:text-[26px] md:leading-[32px]"
          >
            <span className="text-[#043168]">خدمات</span>{" "}
            <span className="text-accent">مقود</span>
          </h2>
        </div>
        {/* Subtitle */}
        <p className="mt-[12px] text-sm font-semibold text-[#0B2340] md:text-[20px] md:leading-[26px]">
          كل ما تحتاجه لسيارتك
        </p>
      </div>

      {/* ── Desktop card grid ── */}
        <div
          className="relative mx-auto mt-10 hidden max-w-site px-5 md:mt-14 md:block"
          onMouseLeave={handleContainerLeave}
        >
          {/* Top row: 4 portrait cards */}
        <m.div
          className="services-grid-row grid gap-4"
          initial={false}
          animate={{ gridTemplateColumns: getTopRowColumns(activeId) }}
          transition={GEOMETRY_TWEEN}
        >
          {topRow.map((id) => (
            <ServiceCard
              key={id}
              service={getService(id)}
              variant="portrait"
              isActive={activeId === id}
              siblingActive={hasSiblingActive && activeId !== id}
              onMouseEnter={() => handleMouseEnter(id)}
              onClick={() => handleInteraction(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
            />
          ))}
        </m.div>

        {/* Bottom row: 2 landscape cards */}
        <m.div
          className="services-grid-row mt-4 grid gap-4"
          initial={false}
          animate={{ gridTemplateColumns: getBottomRowColumns(activeId) }}
          transition={GEOMETRY_TWEEN}
        >
          {bottomRow.map((id) => (
            <ServiceCard
              key={id}
              service={getService(id)}
              variant="landscape"
              isActive={activeId === id}
              siblingActive={hasSiblingActive && activeId !== id}
              onMouseEnter={() => handleMouseEnter(id)}
              onClick={() => handleInteraction(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
            />
          ))}
        </m.div>
      </div>

      {/* ── Mobile card grid ── */}
        <div className="relative mx-auto mt-8 max-w-[440px] px-5 md:hidden">
        {/* Row 1: towing | parts (2-col) */}
        <div className="grid grid-cols-2 gap-3">
          {mobileTopRow.map((id) => (
            <ServiceCard
              key={id}
              service={getService(id)}
              variant="portrait"
              isActive={activeId === id}
              siblingActive={hasSiblingActive && activeId !== id}
              onClick={() => handleInteraction(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
              mobile
            />
          ))}
        </div>

        {/* Row 2: mojaz | insurance (2-col) */}
        <div className="mt-3 grid grid-cols-2 gap-3">
          {mobileSecondRow.map((id) => (
            <ServiceCard
              key={id}
              service={getService(id)}
              variant="portrait"
              isActive={activeId === id}
              siblingActive={hasSiblingActive && activeId !== id}
              onClick={() => handleInteraction(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
              mobile
            />
          ))}
        </div>

        {/* Rows 3-4: full-width landscape */}
        {mobileFullWidth.map((id) => (
          <div key={id} className="mt-3">
            <ServiceCard
              service={getService(id)}
              variant="landscape"
              isActive={activeId === id}
              siblingActive={hasSiblingActive && activeId !== id}
              onClick={() => handleInteraction(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
              mobile
            />
          </div>
          ))}
        </div>
        </section>
      </MotionConfig>
    </LazyMotion>
  );
}

// ─── Service Card ──────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: ServiceItem;
  variant: "portrait" | "landscape";
  isActive: boolean;
  /** True when another card (not this one) is currently active */
  siblingActive: boolean;
  onMouseEnter?: () => void;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  mobile?: boolean;
}



const GEOMETRY_TWEEN = {
  type: "tween",
  duration: 0.58,
  ease: [0.22, 1, 0.36, 1],
} satisfies Transition;

/** Staged reveal for description after card expansion */
const DESC_ENTER_TWEEN = {
  opacity: { duration: 0.35, delay: 0.32, ease: [0.42, 0, 1, 1] },
  y: { type: "spring", stiffness: 110, damping: 14, mass: 1, delay: 0.32 },
} satisfies Transition;

const DESC_EXIT_TWEEN = {
  type: "tween",
  duration: 0.16,
  delay: 0,
  ease: [0, 0, 0.2, 1],
} satisfies Transition;

/** Smooth tween for title show/hide in inactive siblings */
const TITLE_VISIBILITY_TWEEN = {
  duration: 0.22,
  ease: [0.22, 1, 0.36, 1] as const,
};

function ServiceCard({
  service,
  variant,
  isActive,
  siblingActive,
  onMouseEnter,
  onClick,
  onKeyDown,
  mobile,
}: ServiceCardProps) {
  const heightClass = mobile
    ? ""
    : variant === "portrait"
      ? "h-[380px]"
      : "h-[240px]";

  const mobileHeight = mobile
    ? variant === "portrait"
      ? isActive ? 260 : 200
      : isActive ? 220 : 160
    : undefined;

  // Title visibility: show if no card is active OR if this card is the active one
  const showTitle = !siblingActive || isActive;
  const isPortrait = variant === "portrait";

  const portraitInactiveY = mobile ? 14 : 18;
  const targetGroupY = isActive
    ? (isPortrait ? (mobile ? -45 : -65) : -25)
    : (!showTitle && isPortrait ? portraitInactiveY : 0);

  const baseFontSize = mobile ? "1.25rem" : "1.5rem";
  const titleScale = isActive ? 1 : (mobile ? 0.8 : 0.75);

  return (
    <m.div
      initial={false}
      animate={mobileHeight !== undefined ? { height: mobileHeight } : undefined}
      transition={GEOMETRY_TWEEN}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={service.title}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`service-card group relative isolate cursor-pointer overflow-hidden rounded-card outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${heightClass} ${
        variant === "portrait" ? "is-portrait" : "is-landscape"
      } ${mobile ? "is-mobile" : ""}`}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt=""
          fill
          quality={90}
          sizes={
            mobile
              ? "(max-width: 768px) 100vw, 440px"
              : variant === "portrait"
                ? "(max-width: 1074px) 50vw, 700px"
                : "(max-width: 1074px) 100vw, 1000px"
          }
          className="object-cover"
          style={{
            objectPosition: service.imagePosition ?? "center",
          }}
        />
      </div>

      {/* Overlay: CSS gradient layer, compact state */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/65 via-black/25 to-black/5" />

      {/* Expanded Overlay Layer crossfade */}
      <m.div
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="service-card-overlay absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/45 to-black/15"
      />

      {/* Content: stable layout area */}
      <div className="service-card-content">
        {/* Center anchor */}
        <div
          className={`absolute inset-x-0 ${
            variant === "landscape" ? "top-[50%]" : "top-[60%]"
          } -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none`}
        >
          {/* Primary Content Group (Icon + Title) */}
          <m.div
            animate={{ y: targetGroupY }}
            transition={GEOMETRY_TWEEN}
            className={`service-card-primary-content flex items-center justify-center w-full ${
              variant === "landscape"
                ? "flex-row-reverse gap-4 px-4 md:px-6"
                : "flex-col gap-2 md:gap-3 px-2"
            }`}
          >
            <div className="service-card-icon-box" aria-hidden="true">
              <ServiceIcon id={service.id} isActive={isActive} siblingActive={siblingActive} mobile={mobile} variant={variant} />
            </div>

            {/* Title: animated opacity and typography for inactive-sibling hide */}
            <m.h3
              animate={{
                opacity: showTitle ? 1 : 0,
                y: showTitle ? 0 : 3,
                scale: titleScale
              }}
              transition={{
                opacity: TITLE_VISIBILITY_TWEEN,
                y: TITLE_VISIBILITY_TWEEN,
                scale: GEOMETRY_TWEEN,
              }}
              style={{
                fontSize: baseFontSize,
                lineHeight: 1.3,
                transformOrigin: isPortrait ? "top center" : "right center",
                willChange: "transform, opacity"
              }}
              className={`service-card-title m-0 whitespace-nowrap ${variant === "landscape" ? "text-right" : "text-center"} ${
                !showTitle && !isPortrait ? "absolute right-[50%] mr-8 pointer-events-none" : "relative"
              }`}
            >
              {service.title}
            </m.h3>
          </m.div>
        </div>

        {/* Description: revealed on expand in a separate stable area */}
        <div className="absolute inset-x-0 bottom-4 px-4 md:bottom-6 md:px-6 flex flex-col justify-end pointer-events-none">
          <AnimatePresence initial={false}>
            {isActive && (
              <m.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6, transition: DESC_EXIT_TWEEN }}
                transition={DESC_ENTER_TWEEN}
                className="service-card-desc-wrapper pointer-events-auto"
              >
                <p className={`service-card-desc ${variant === "landscape" ? "text-right" : "text-center"}`}>
                  {service.description}
                </p>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.div>
  );
}

// ─── Real Service Icons ────────────────────────────────────────────────────────

function ServiceIcon({ id, isActive, siblingActive, mobile, variant }: { id: ServiceId, isActive: boolean, siblingActive: boolean, mobile?: boolean, variant: "portrait" | "landscape" }) {
  const iconMap: Record<ServiceId, { src: string; w: number; h: number }> = {
    mojaz: { src: "/icons/services/service-mojaz.svg", w: 42, h: 50 },
    insurance: { src: "/icons/services/service-insurance.svg", w: 42, h: 50 },
    towing: { src: "/icons/services/service-towing.svg", w: 78, h: 50 },
    parts: { src: "/icons/services/service-parts-market.svg", w: 50, h: 58 },
    workshops: { src: "/icons/services/service-workshops.svg", w: 50, h: 50 },
    scrapyards: { src: "/icons/services/service-scrapyards.svg", w: 50, h: 48 },
  };

  const icon = iconMap[id];

  let scaleFactor = 1;
  if (isActive) {
    scaleFactor = mobile ? 0.85 : 1;
  } else if (siblingActive) {
    // 15% larger than default inactive state to compensate for hidden title
    scaleFactor = mobile ? 0.75 : 0.86;
  } else {
    // default inactive
    scaleFactor = mobile ? 0.65 : 0.75;
  }

  return (
    <div
      className="service-icon-wrapper"
      style={{
        width: icon.w,
        height: icon.h,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <m.img
        transition={GEOMETRY_TWEEN}
        animate={{
          scale: scaleFactor,
        }}
        style={{
          transformOrigin: variant === "portrait" ? "bottom center" : "center center",
          willChange: "transform"
        }}
        src={icon.src}
        alt=""
        className="service-icon-img max-w-none"
      />
    </div>
  );
}

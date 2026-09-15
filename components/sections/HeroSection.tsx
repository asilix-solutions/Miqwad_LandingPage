import Image from "next/image";
import { siteConfig } from "@/config/site";

const badges = [
  { name: "Google Play", src: "/store-badges/google-play.svg", url: siteConfig.googlePlayUrl },
  { name: "App Store", src: "/store-badges/app-store.svg", url: siteConfig.appStoreUrl },
];

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-linear-to-b from-brand to-hero-deep to-60% text-center text-white">
      {/* Background effects never composite over the content or device artwork. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image src="/images/hero/car-interior.png" alt="" fill sizes="100vw" loading="eager" fetchPriority="high" className="object-cover object-center opacity-20" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="hero-glow absolute inset-x-0 bottom-0 h-[517px] md:h-[291px]" />
        <div className="hero-fade absolute inset-x-0 bottom-0 h-[348px] md:h-[90px]" />
      </div>
      <div className="relative px-5 pt-[213px] md:pt-[194px]">
        <h1 id="hero-title" className="pb-[12.5px] text-[32px] leading-[46.5px] font-bold">{siteConfig.title}</h1>
        <p className="mx-auto max-w-[400px] font-supporting text-xl leading-[20.15px]">{siteConfig.description}</p>
        <div id="download" dir="ltr" tabIndex={-1} aria-label="تحميل التطبيق" className="mx-auto mt-[69px] flex w-fit max-w-full scroll-mt-28 gap-[14px] md:mt-[53px]">
          {badges.map(({ name, src, url }) => {
            const artwork = <Image src={src} alt={`تحميل من ${name}`} width={160} height={48} className="h-12 w-40 max-w-none md:-translate-x-[10px] md:-translate-y-1" />;
            const className = "relative block h-12 w-40 shrink overflow-hidden rounded-[6px] bg-white md:h-10 md:w-[120px]";
            return url ? <a key={name} href={url} dir="ltr" className={className}>{artwork}</a> : <span key={name} dir="ltr" className={className} aria-disabled="true" title={`رابط ${name} غير متاح حاليًا`}>{artwork}<span className="sr-only"> — رابط التحميل غير متاح حاليًا</span></span>;
          })}
        </div>
      </div>
      {/* Reserve the complete transformed artwork bounds in normal flow. */}
      <div aria-hidden="true" className="relative mx-auto mt-[93px] aspect-[440/454] w-full max-w-[440px] md:mt-[45px] md:aspect-[426/466] md:max-w-[426px]">
        <div className="absolute inset-0 origin-top translate-y-2 scale-[1.04]">
          <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="444px" className="hidden h-auto w-full md:block" />
          {/* These polygons separate the two devices through transparent pixels,
              retaining their complete silhouettes and intrinsic perspective. */}
          <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="(max-width: 440px) 90vw, 396px" className="absolute top-0 left-[8.636%] h-auto w-[86.34%] max-w-none [clip-path:polygon(0_0,49%_0,49%_70%,44%_100%,0_100%)] md:hidden" />
          <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="(max-width: 440px) 81vw, 356px" className="absolute top-[12.335%] left-[11.4%] h-auto w-[77.72%] max-w-none [clip-path:polygon(49%_0,100%_0,100%_100%,44%_100%,49%_70%)] md:hidden" />
        </div>
      </div>
    </section>
  );
}

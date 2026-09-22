import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HeroPhones } from "./HeroPhones";

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
        <div className="hero-fade absolute inset-x-0 bottom-0 h-[clamp(18rem,79.1vw,21.75rem)] md:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-[54%] bg-[radial-gradient(ellipse_85%_89%_at_50%_65%,rgb(255_255_255_/_0.15),transparent_68%)] md:h-[42%] md:bg-[radial-gradient(ellipse_28%_100%_at_50%_100%,rgb(255_255_255_/_0.12),transparent_80%)]" />
      </div>
      <div className="relative px-5 pt-[213px] md:z-20 md:pt-[194px]">
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
      {/* Mobile reserves complete devices; desktop reserves the reference bottom region.
          Only the outer Hero boundary crops the desktop artwork. */}
      <div aria-hidden="true" className="relative mx-auto mt-[93px] aspect-[440/454] w-full max-w-[440px] md:mt-[45px] md:aspect-[426/281] md:max-w-[426px] md:z-0">
        <HeroPhones />
      </div>
      {/* Rectangle 1169: reverse the gradient instead of flipping its geometry.
          Foreground on desktop only; content remains above this decorative layer. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[78.6%] bg-[linear-gradient(to_top,#011C3E_-0.84%,rgba(0,26,59,0)_22.53%)] md:z-10 md:block" />
    </section>
  );
}

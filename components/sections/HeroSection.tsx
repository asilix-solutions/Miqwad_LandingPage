import Image from "next/image";
import { siteConfig } from "@/config/site";

const badges = [
  { name: "Google Play", src: "/store-badges/google-play.svg", url: siteConfig.googlePlayUrl },
  { name: "App Store", src: "/store-badges/app-store.svg", url: siteConfig.appStoreUrl },
];

export function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-linear-to-b from-brand to-hero-deep to-60% text-center text-white">
      <Image src="/images/hero/car-interior.png" alt="" fill sizes="100vw" loading="eager" fetchPriority="high" className="-z-20 object-cover object-center opacity-20" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/20" />
      <div className="relative px-5 pt-[213px] md:pt-[194px]">
        <h1 id="hero-title" className="pb-[12.5px] text-[32px] leading-[46.5px] font-bold">{siteConfig.title}</h1>
        <p className="font-supporting text-xl leading-[20.15px]">{siteConfig.description}</p>
        <div id="download" tabIndex={-1} aria-label="تحميل التطبيق" className="mx-auto mt-[69px] flex w-fit max-w-full scroll-mt-28 gap-[14px] md:mt-[53px]">
          {badges.map(({ name, src, url }) => {
            const artwork = <Image src={src} alt={`تحميل من ${name}`} width={160} height={48} className="h-12 w-40 max-w-none md:-translate-x-[10px] md:-translate-y-1" />;
            const className = "relative block h-12 w-40 shrink overflow-hidden rounded-[6px] bg-white md:h-10 md:w-[120px]";
            return url ? <a key={name} href={url} dir="ltr" className={className}>{artwork}</a> : <span key={name} dir="ltr" className={className} aria-disabled="true" title={`رابط ${name} غير متاح حاليًا`}>{artwork}<span className="sr-only"> — رابط التحميل غير متاح حاليًا</span></span>;
          })}
        </div>
      </div>
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[517px] md:h-[291px]" />
      <div aria-hidden="true" className="relative mx-auto mt-[93px] aspect-[440/454] w-full max-w-[440px] md:mt-[45px] md:aspect-[426/281] md:max-w-[426px]">
        <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="426px" className="hidden h-auto w-full md:block" />
        <div className="absolute top-0 left-[8.636%] aspect-[185/304] w-[42.045%] overflow-hidden md:hidden">
          <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="380px" className="absolute top-0 left-0 h-auto w-[205.35%] max-w-none" />
        </div>
        <div className="absolute top-[12.335%] left-[50.858%] aspect-[166.388/344.533] w-[37.815%] rotate-[7.14deg] overflow-hidden md:hidden">
          <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="342px" className="absolute top-[2.37%] left-[-118.06%] h-auto w-[205.53%] max-w-none" />
        </div>
      </div>
      <div aria-hidden="true" className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-[348px] md:h-[90px]" />
    </section>
  );
}

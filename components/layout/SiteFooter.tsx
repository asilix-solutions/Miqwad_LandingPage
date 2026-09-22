import Image from "next/image";
import Link from "next/link";
import { policyHref } from "@/components/policies/content";

export function SiteFooter() {
  return (
    <footer id="contact" dir="rtl" className="bg-[linear-gradient(180deg,#1A2A5E_0%,#0E1A45_100%)] text-white overflow-hidden border-t border-white/[0.12]">
      <div className="mx-auto max-w-[1136px] px-5 pt-[72px] md:px-8">
        <div className="pb-[56px] border-b border-white/[0.12]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(205px,255fr)_minmax(0,257fr)_minmax(0,258fr)_149px] gap-y-[36px] lg:gap-y-0 lg:gap-x-8 xl:gap-x-[51px]">
            {/* Column 4: Contact / Social / Provider CTA (First in DOM for mobile order & RTL grid) */}
            <div className="flex flex-col max-w-[255px] w-full text-right h-auto lg:min-h-[184px] justify-between items-start gap-[20px] lg:gap-0 order-4 lg:order-none">
              <p className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 text-right w-full">
                كل خدمات سيارتك، في مكان واحد.
              </p>

              <div className="flex items-center gap-[10px] flex-row" dir="ltr">
                {/* Social row should be Left-to-Right: LinkedIn, Instagram, X */}
                {/* No real URLs exist, rendering as non-navigating visual controls */}
                <div
                  aria-label="LinkedIn"
                  className="w-[36px] h-[36px] border border-white/[0.18] rounded-full bg-transparent flex items-center justify-center select-none"
                >
                  <Image src="/icons/footer/linkedin.svg" alt="LinkedIn" width={15} height={15} unoptimized />
                </div>
                <div
                  aria-label="Instagram"
                  className="w-[36px] h-[36px] border border-white/[0.18] rounded-full bg-transparent flex items-center justify-center select-none"
                >
                  <Image src="/icons/footer/instagram.svg" alt="Instagram" width={15} height={15} unoptimized />
                </div>
                <div
                  aria-label="X"
                  className="w-[36px] h-[36px] border border-white/[0.18] rounded-full bg-transparent flex items-center justify-center select-none"
                >
                  <Image src="/icons/footer/x.svg" alt="X" width={15} height={15} unoptimized />
                </div>
              </div>

              <div className="flex items-center gap-[10px] flex-row" dir="ltr">
                <span className="font-sans font-normal text-[14px] leading-[25px] tracking-[0px] text-white/[0.55]">
                  +966 50 248 6502
                </span>
                <Image
                  src="/icons/footer/phone.svg"
                  alt="Phone"
                  width={15}
                  height={15}
                  className="shrink-0"
                  unoptimized
                />
              </div>

              {/* TODO: Wire the real provider flow destination when available */}
              <button
                type="button"
                className="w-[205px] h-[40px] bg-[#F45E2B] rounded-[8px] font-sans font-normal text-[16px] leading-[20px] tracking-[0px] text-white transition-all duration-[180ms] ease-out hover:brightness-110 hover:-translate-y-[1px] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                قدّم كمزود خدمة في مقود
              </button>
            </div>

            {/* Column 3: Miqwad Navigation */}
            <div className="flex flex-col min-w-0 max-w-[257px] w-full text-right order-2 lg:order-none">
              <h2 className="font-sans font-semibold text-[14.7px] leading-[23.55px] text-white mb-[20px]">
                مقود
              </h2>
              <nav aria-label="روابط مقود" className="flex flex-col gap-[20px] lg:gap-4 items-start">
                <Link
                  href="/#hero"
                  className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 transition-colors duration-[180ms] ease-out hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
                >
                  الرئيسية
                </Link>
                <Link href="/#services" className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 w-fit hover:text-white/90">
                  خدمات مقود
                </Link>
                <Link href="/#how-it-works" className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 w-fit hover:text-white/90">
                  آلية عمل مقود
                </Link>
                <a
                  href="#contact"
                  className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 transition-colors duration-[180ms] ease-out hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
                >
                  تواصل معنا
                </a>
              </nav>
            </div>

            {/* Column 2: Policy Links */}
            <div className="flex flex-col min-w-0 max-w-[258px] w-full text-right order-3 lg:order-none">
              <nav aria-label="السياسات" className="flex flex-col justify-start items-start gap-[13px] w-full">
                <a href={policyHref("privacy")} className="w-fit min-h-[25.59px] pb-[1.59px] font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 tracking-[0px] hover:text-white/90">
                  سياسة الخصوصية
                </a>
                <a href={policyHref("terms")} className="w-fit min-h-[25.59px] pb-[1.59px] font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 tracking-[0px] hover:text-white/90">
                  سياسة الاستخدام
                </a>
                <a href={policyHref("returns")} className="w-fit min-h-[25.59px] pb-[1.59px] font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 tracking-[0px] hover:text-white/90">
                  سياسة الاسترجاع
                </a>
              </nav>
            </div>

            {/* Column 1: Download Application */}
            <div className="flex flex-col w-full max-w-[255px] lg:w-[149px] order-1 lg:order-none">
              <h2 className="font-sans font-semibold text-[15px] leading-[24px] text-white text-right mb-[20px]">
                تحميل التطبيق
              </h2>
              <div className="flex flex-col gap-[14px] items-start">
                <Image
                  src="/store-badges/google-play.svg"
                  alt="Google Play"
                  width={149}
                  height={40}
                  className="w-[149px] h-[40px] rounded-[6px]"
                  unoptimized
                />
                <Image
                  src="/store-badges/app-store.svg"
                  alt="App Store"
                  width={149}
                  height={40}
                  className="w-[149px] h-[40px] rounded-[6px]"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        {/* RTL places copyright on the right and legal links on the left. */}
        <div className="flex min-h-[70px] flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-[13.6px] leading-[22px] text-white/45">
          <p>© 2026 مقود. جميع الحقوق محفوظة.</p>
          <nav aria-label="الروابط القانونية" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={policyHref("privacy")} className="hover:text-white/90">الخصوصية</a>
            <a href={policyHref("terms")} className="hover:text-white/90">الشروط والأحكام</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

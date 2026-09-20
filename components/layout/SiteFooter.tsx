import Image from "next/image";

export function SiteFooter() {
  return (
    <footer id="contact" dir="rtl" className="bg-[#01142E] text-white overflow-hidden border-t border-white/[0.12]">
      <div className="pt-[72px]">
        <div className="w-full max-w-[1072px] mx-auto px-5 md:px-8 lg:px-0 pb-[56px] border-b border-white/[0.12]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[255px_257px_258px_149px] gap-y-[36px] lg:gap-y-0 lg:gap-x-[51px]">
            {/* Column 4: Contact / Social / Provider CTA (First in DOM for mobile order & RTL grid) */}
            <div className="flex flex-col max-w-[255px] w-full text-right h-auto lg:h-[184px] justify-between items-start gap-[20px] lg:gap-0 order-4 lg:order-none">
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
            <div className="flex flex-col max-w-[257px] w-full text-right h-full lg:h-[186px] order-2 lg:order-none">
              <h2 className="font-sans font-semibold text-[14.7px] leading-[23.55px] text-white mb-[20px]">
                مقود
              </h2>
              <nav aria-label="روابط مقود" className="flex flex-col gap-[20px] items-start">
                <a
                  href="#hero"
                  className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 transition-colors duration-[180ms] ease-out hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
                >
                  الرئيسية
                </a>
                {/* Valid anchors for Services and HowItWorks do not exist yet, rendering without href */}
                <span className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 w-fit cursor-default">
                  خدمات مقود
                </span>
                <span className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 w-fit cursor-default">
                  آلية عمل مقود
                </span>
                <a
                  href="#contact"
                  className="font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 transition-colors duration-[180ms] ease-out hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm w-fit"
                >
                  تواصل معنا
                </a>
              </nav>
            </div>

            {/* Column 2: Policy Links */}
            <div className="flex flex-col max-w-[258px] w-full text-right h-full lg:h-[186px] order-3 lg:order-none">
              {/* TODO: Policy destinations must be wired later */}
              <nav aria-label="السياسات" className="flex flex-col justify-start items-start gap-[13px] w-full max-w-[258px] lg:w-[258px] lg:h-[102.77px]">
                <span className="w-full h-[25.59px] pb-[1.59px] box-border flex flex-col justify-start items-start font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 tracking-[0px] cursor-default">
                  سياسة الخصوصية
                </span>
                <span className="w-full h-[25.59px] pb-[1.59px] box-border flex flex-col justify-start items-start font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 tracking-[0px] cursor-default">
                  سياسة الاستخدام
                </span>
                <span className="w-full h-[25.59px] pb-[1.59px] box-border flex flex-col justify-start items-start font-sans font-normal text-[14.7px] leading-[23.55px] text-white/60 tracking-[0px] cursor-default">
                  سياسة الاسترجاع
                </span>
              </nav>
            </div>

            {/* Column 1: Download Application */}
            <div className="flex flex-col w-[255px] lg:w-[149px] order-1 lg:order-none">
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
      </div>

      {/* Copyright Row */}
      <div className="w-full max-w-[1072px] mx-auto px-5 md:px-8 lg:px-0 py-[24px] h-[70px] flex items-center justify-start">
        <p className="font-sans font-normal text-[13.6px] leading-[22px] tracking-[0px] text-white/45 text-right w-full">
          © 2026 مقود. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}

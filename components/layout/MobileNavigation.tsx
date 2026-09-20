import type { MouseEvent } from "react";

export function MobileNavigation({ onClose, onNavClick }: { onClose: () => void; onNavClick?: (e: MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <nav id="mobile-navigation" aria-label="التنقل الرئيسي" className="px-8 pb-4 pt-[58px] text-brand md:hidden">
      <ul className="flex flex-col gap-8 text-base font-medium leading-6">
        <li className="border-b border-border pb-2"><a href="#hero" onClick={onNavClick || onClose} aria-current="page" className="block">الرئيسية</a></li>
        <li className="border-b border-border pb-2"><a href="#services" onClick={onNavClick || onClose} className="block">الخدمات</a></li>
        <li className="border-b border-border pb-2"><a href="#how-it-works" onClick={onNavClick || onClose} className="block">آلية العمل</a></li>
      </ul>
      <a href="#download" onClick={onClose} className="mt-[75px] flex h-12 items-center justify-center rounded-control bg-accent text-base font-medium text-white">تحميل التطبيق</a>
    </nav>
  );
}

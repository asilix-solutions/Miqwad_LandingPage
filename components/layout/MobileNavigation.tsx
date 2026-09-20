export function MobileNavigation({ onClose }: { onClose: () => void }) {
  return (
    <nav id="mobile-navigation" aria-label="التنقل الرئيسي" className="px-8 pb-4 pt-[58px] text-brand md:hidden">
      <ul className="flex flex-col gap-8 text-base leading-6">
        <li className="border-b border-border pb-2"><a href="#hero" onClick={onClose} aria-current="page" className="block">الرئيسية</a></li>
        <li className="border-b border-border pb-2"><a href="#services" onClick={onClose} className="block">الخدمات</a></li>
        <li className="border-b border-border pb-2"><span aria-disabled="true" title="هذا القسم غير متاح بعد" className="block">آلية العمل</span></li>
      </ul>
      <a href="#download" onClick={onClose} className="mt-[75px] flex h-12 items-center justify-center rounded-control bg-accent text-base font-medium text-white">تحميل التطبيق</a>
    </nav>
  );
}

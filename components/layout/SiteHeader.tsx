"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let previous: boolean | undefined;
    const update = () => {
      const next = window.scrollY > 8;
      if (next !== previous) { previous = next; setScrolled(next); }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const media = window.matchMedia("(min-width: 768px)");
    const closeAtDesktop = () => { if (media.matches) setOpen(false); };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const outsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", outsideClick);
    media.addEventListener("change", closeAtDesktop);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", outsideClick);
      media.removeEventListener("change", closeAtDesktop);
    };
  }, [open]);

  return (
    <header ref={headerRef} onBlur={(event) => { if (open && !event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} data-scrolled={scrolled} data-menu-open={open} className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-200 motion-reduce:transition-none ${open ? "max-h-dvh overflow-y-auto border-transparent bg-surface text-brand" : scrolled ? "border-[#A6AABF]/30 bg-white/[0.03] text-white backdrop-blur-[8px]" : "border-transparent bg-transparent text-white"}`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:right-2 focus:z-10 focus:rounded-control focus:bg-white focus:p-3 focus:text-brand">تخطي إلى المحتوى</a>
      <div className="mx-auto flex h-[67px] max-w-site items-center justify-between px-8 md:h-[101px] md:px-0 min-[768px]:max-[1137px]:mx-8">
        <a href="#hero" aria-label="مقود — الرئيسية" onClick={() => setOpen(false)}>
          <Image src={open ? "/brand/miqwad-blue.svg" : "/brand/miqwad-white.svg"} alt="مقود" width={100} height={36} className="h-9 w-[100px]" />
        </a>
        <nav aria-label="التنقل الرئيسي" className="hidden md:block">
          <ul className="flex items-center gap-8 text-base leading-6">
            <li><a href="#hero" aria-current="page">الرئيسية</a></li>
            <li><span aria-disabled="true" title="هذا القسم غير متاح بعد">الخدمات</span></li>
            <li><span aria-disabled="true" title="هذا القسم غير متاح بعد">آلية العمل</span></li>
          </ul>
        </nav>
        <a href="#download" className="hidden h-[35px] w-32 items-center justify-center rounded-control bg-accent text-sm font-medium text-white md:flex">تحميل التطبيق</a>
        <button ref={triggerRef} type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setOpen(!open)} className="relative -ms-3 flex size-11 items-center justify-center rounded-control md:hidden">
          <span aria-hidden="true" className={`absolute h-[1.5px] w-5 bg-current ${open ? "rotate-45" : "-translate-y-[6px]"}`} />
          {!open && <span aria-hidden="true" className="absolute h-[1.5px] w-5 bg-current" />}
          <span aria-hidden="true" className={`absolute h-[1.5px] w-5 bg-current ${open ? "-rotate-45" : "translate-y-[6px]"}`} />
        </button>
      </div>
      {open ? <MobileNavigation onClose={() => setOpen(false)} /> : <div id="mobile-navigation" hidden />}
    </header>
  );
}

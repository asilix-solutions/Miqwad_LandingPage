"use client";

import { useCallback, useEffect, useState } from "react";
import { animate } from "motion";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      console.warn("BackToTopButton: #hero section not found for visibility boundary.");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // The hero is above the viewport when not intersecting and bottom <= 0
        const hasPassedHero = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0;
        setIsVisible(hasPassedHero);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = document.getElementById("hero");
    const targetPosition = target
      ? target.getBoundingClientRect().top + window.scrollY
      : 0;

    if (prefersReducedMotion) {
      window.scrollTo({
        top: targetPosition,
        behavior: "auto",
      });
      return;
    }

    try {
      animate(
        window.scrollY,
        targetPosition,
        {
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 1,
          onUpdate: (latest) => window.scrollTo(0, latest),
        }
      );
    } catch {
      // Fallback
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="العودة إلى الأعلى"
      title="العودة إلى الأعلى"
      tabIndex={isVisible ? undefined : -1}
      aria-hidden={!isVisible}
      className={`fixed left-[16px] bottom-[20px] z-40 flex h-[46px] w-[46px] min-h-[46px] min-w-[46px] items-center justify-center rounded-[12px] bg-[#F45E2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45E2B]/60 md:left-[24px] md:bottom-[24px] lg:left-[40px] lg:bottom-[32px] transition-all motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible
          ? "opacity-100 translate-y-0 duration-[200ms] ease-out pointer-events-auto hover:-translate-y-[1px] active:translate-y-[1px]"
          : "opacity-0 translate-y-[6px] duration-[160ms] ease-out pointer-events-none"
      }`}
      style={{
        boxShadow: "0 5px 15px rgba(232, 68, 39, 0.60)",
        border: "none"
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
        aria-hidden="true"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

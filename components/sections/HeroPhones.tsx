"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import * as m from "motion/react-m";
import { LazyMotion, MotionConfig } from "motion/react";
import type { Transition } from "motion/react";
import styles from "./HeroSection.module.css";

const loadMotionFeatures = () =>
  import("@/lib/motion-features").then((module) => module.default);

const floatTransition: Transition = {
  type: "tween",
  duration: 6.4,
  ease: [0.42, 0, 0.58, 1],
  times: [0, 0.2, 0.65, 1],
  repeat: Infinity,
  repeatType: "loop",
  repeatDelay: 0,
};

// Compensate for the retained 1.04 geometry scale: visible travel is -2px to +7px.
const floatY = [0, -2 / 1.04, 7 / 1.04, 0];

function FloatingComposition({ className, children }: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <m.div
      initial={{ y: 0 }}
      animate={{ y: floatY }}
      transition={floatTransition}
      className={`${styles.composition} ${className ?? ""}`}
    >
      {children}
    </m.div>
  );
}

export function HeroPhones() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <div className="absolute inset-x-0 bottom-0 hidden aspect-[426/281] origin-top translate-y-2 scale-[1.04] md:top-0 md:bottom-auto md:aspect-auto md:-translate-y-2.5 md:block">
          {/* Restore the original single desktop image, with its intrinsic height intact. */}
          <FloatingComposition>
            <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="444px" className="h-auto w-full" />
          </FloatingComposition>
        </div>
        <div className="absolute inset-0 origin-top translate-y-2 scale-[1.04] md:hidden">
          <FloatingComposition className="absolute inset-0">
            <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="(max-width: 440px) 90vw, 396px" className="absolute top-0 left-[8.636%] h-auto w-[86.34%] max-w-none [clip-path:polygon(0_0,49%_0,49%_70%,44%_100%,0_100%)] md:hidden" />
            <Image src="/images/hero/phones.png" alt="" width={2017} height={2048} sizes="(max-width: 440px) 81vw, 356px" className="absolute top-[12.335%] left-[11.4%] h-auto w-[77.72%] max-w-none [clip-path:polygon(49%_0,100%_0,100%_100%,44%_100%,49%_70%)] md:hidden" />
          </FloatingComposition>
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

import {
  policiesDescription,
  policiesScope,
  policiesTitle,
  policiesUpdatedAt,
} from "./content";

export function PoliciesHero() {
  return (
    <div className="border-b border-border py-10 lg:py-12">
      <div className="mx-auto max-w-site px-8 text-center lg:px-0 lg:text-start min-[1024px]:max-[1137px]:mx-8">
        <h1 id="policies-title" className="text-[32px] leading-[1.6] font-bold text-ink lg:text-[40px]">
          {policiesTitle}
        </h1>
        <p className="mt-3 text-sm leading-7 text-[#5B6B84] lg:text-base">
          {policiesDescription}
        </p>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs leading-6 text-[#8294B0] lg:hidden">
          <span>{policiesUpdatedAt}</span>
          <span aria-hidden="true">•</span>
          <span>{policiesScope}</span>
        </p>
      </div>
    </div>
  );
}

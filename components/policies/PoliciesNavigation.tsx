import Link from "next/link";
import { policies, policyHref, type Policy } from "./content";

export function PoliciesNavigation({ selectedPolicy }: { selectedPolicy: Policy }) {
  return (
    <>
      <nav
        aria-label="السياسات"
        tabIndex={0}
        className="min-w-0 overflow-x-auto overscroll-x-contain border-b border-border px-1 pt-1 pb-4 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex w-max min-w-full flex-nowrap gap-2 text-xs leading-5">
          {policies.map((policy) => (
            <li key={policy.label} className="shrink-0">
              {/* Native document navigation starts the next policy at the top, including without JS. */}
              <a
                href={policyHref(policy.id)}
                aria-current={policy.id === selectedPolicy.id ? "page" : undefined}
                className={`block rounded-full border px-4 py-1.5 whitespace-nowrap focus-visible:outline-offset-[-3px] ${policy.id === selectedPolicy.id ? "border-accent/35 bg-[#FFF4EE] font-medium text-accent" : "border-border bg-white text-[#5B6B84] hover:text-brand"}`}
              >
                {policy.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="hidden min-w-0 lg:sticky lg:top-[125px] lg:block lg:max-h-[calc(100dvh-149px)] lg:self-start lg:overflow-y-auto">
        <nav aria-label="مسار الصفحة" className="border-b border-border pb-6 text-sm leading-6">
          <ol className="flex flex-wrap items-center gap-3">
            <li><Link href="/" className="text-[#5B6B84] hover:text-brand">الرئيسية</Link></li>
            <li aria-hidden="true" className="text-[#8294B0]">‹</li>
            <li><span aria-current="page" className="font-sans font-[600] text-[14.7px] leading-[23.55px] tracking-[0px] text-[#0B2340]">{selectedPolicy.title}</span></li>
          </ol>
        </nav>
        <nav aria-labelledby="policies-navigation-title" className="pt-7">
          <h2 id="policies-navigation-title" className="mb-3 text-sm leading-6 font-medium text-brand">السياسات</h2>
          <ul className="text-sm leading-6 text-[#5B6B84]">
            {policies.map((policy) => (
              <li key={policy.label}>
                <a
                  href={policyHref(policy.id)}
                  aria-current={policy.id === selectedPolicy.id ? "page" : undefined}
                  className={`block border-s py-2 ps-4 focus-visible:outline-offset-[-3px] ${policy.id === selectedPolicy.id ? "border-accent font-medium text-accent" : "border-transparent hover:text-accent"}`}
                >
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-labelledby="policy-contents-title" className="mt-7">
          <h2 id="policy-contents-title" className="mb-3 text-sm leading-6 font-medium text-brand">في هذه الصفحة</h2>
          <ul className="border-s border-border text-sm leading-6 text-[#5B6B84]">
            {selectedPolicy.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="block py-1.5 ps-4 hover:text-accent">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

import { policiesScope, policiesUpdatedAt, type Policy } from "./content";

export function PolicyArticle({ policy }: { policy: Policy }) {
  return (
    <article aria-label={policy.title} className="min-w-0 text-sm leading-7 text-[#5B6B84] lg:text-base lg:leading-[30px]">
      <p className="hidden flex-wrap items-center gap-x-2 gap-y-1 border-b border-border pb-6 text-sm leading-6 text-[#8294B0] lg:flex">
        <span>{policiesUpdatedAt}</span>
        <span aria-hidden="true">•</span>
        <span>{policiesScope}</span>
        {policy.demo && <span className="basis-full text-xs">محتوى تجريبي للعرض</span>}
      </p>
      {policy.demo && <p className="mb-6 text-xs text-[#8294B0] lg:hidden">محتوى تجريبي للعرض</p>}
      <div className="space-y-10 lg:space-y-12 lg:pt-9">
        {policy.sections.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-[91px] md:scroll-mt-[125px]">
            <h2 id={`${section.id}-title`} className="text-xl leading-8 font-bold text-ink">
              {section.title}
            </h2>
            <p className="mt-4">
              {section.body}
              {section.supportPlaceholder && (
                <>{" "}<span className="font-medium text-accent">[بريد الدعم الإلكتروني]</span>.</>
              )}
            </p>
            {section.items && (
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="shrink-0 text-accent">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PoliciesHero } from "@/components/policies/PoliciesHero";
import { PoliciesNavigation } from "@/components/policies/PoliciesNavigation";
import { PolicyArticle } from "@/components/policies/PolicyArticle";
import { policiesDescription, policiesTitle, resolvePolicy } from "@/components/policies/content";

export const metadata: Metadata = {
  title: { absolute: policiesTitle },
  description: policiesDescription,
};

export default async function PoliciesPage({ searchParams }: {
  searchParams: Promise<{ policy?: string | string[] }>;
}) {
  const policy = resolvePolicy((await searchParams).policy);
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content" tabIndex={-1} aria-labelledby="policies-title" className="bg-white pt-[67px] md:pt-[101px]">
        <PoliciesHero />
        <div className="mx-auto grid max-w-site grid-cols-1 gap-10 px-8 pt-10 pb-16 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:px-0 lg:pt-8 lg:pb-20 min-[1024px]:max-[1137px]:mx-8">
          <PoliciesNavigation selectedPolicy={policy} />
          <PolicyArticle policy={policy} />
        </div>
      </main>
      <SiteFooter />
      <BackToTopButton />
    </>
  );
}

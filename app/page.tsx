import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { BackToTopButton } from "@/components/layout/BackToTopButton";

export default function Home() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1}><HeroSection /><ServicesSection /><HowItWorksSection /><FinalCtaSection /></main><SiteFooter /><BackToTopButton /></>;
}

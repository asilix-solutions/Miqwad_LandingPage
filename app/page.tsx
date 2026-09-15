import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return <><SiteHeader /><main id="main-content" tabIndex={-1}><HeroSection /></main></>;
}

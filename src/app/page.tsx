import { HeroSection } from "@/components/home/HeroSection";
import { TrustCards } from "@/components/home/TrustCards";
import { KategoriGrid } from "@/components/home/KategoriGrid";
import { KjopeguideSection } from "@/components/home/KjopeguideSection";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustCards />
      <KategoriGrid />
      <KjopeguideSection />
      <CTABanner />
    </>
  );
}

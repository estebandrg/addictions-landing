import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/pages/home/hero-section";
import { QuickAccessSection } from "@/components/pages/home/quick-access-section";
import { CTASection } from "@/components/pages/home/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickAccessSection />
      <CTASection />
      <Footer />
    </div>
  );
}
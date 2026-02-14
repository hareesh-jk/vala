import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import MemorySection from "@/components/MemorySection";
import PromiseSection from "@/components/PromiseSection";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <MusicToggle />
      <HeroSection />
      <LoveLetterSection />
      <MemorySection />
      <PromiseSection />
      <FinalSection />
      <Footer />
    </div>
  );
};

export default Index;

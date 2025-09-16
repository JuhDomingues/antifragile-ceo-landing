import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatYoullLearnSection from "@/components/WhatYoullLearnSection";
import HostBioSection from "@/components/HostBioSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <WhatYoullLearnSection />
      <HostBioSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
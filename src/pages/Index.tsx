import { Hero } from "@/components/Hero";
import { CoreDivisions } from "@/components/CoreDivisions";
import { MissionSection } from "@/components/MissionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CoreDivisions />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default Index;

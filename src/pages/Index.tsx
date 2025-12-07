import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OpenPositions from "@/components/OpenPositions";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <OpenPositions />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

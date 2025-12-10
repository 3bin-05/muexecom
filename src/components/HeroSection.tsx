import { ChevronDown } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  const scrollToPositions = () => {
    const element = document.querySelector("#positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={isMobile ? { background: 'var(--gradient-hero)' } : {}}
    >
      {!isMobile && (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
        >
          <source src="/vidbg.mp4" type="video/mp4" />
        </video>
      )}
      {/* Background Elements */}

      {/* Floating Orbs */}
      <div className="orb w-96 h-96 -top-48 -left-48" />
      <div className="orb orb-accent w-80 h-80 top-1/4 -right-40" />
      <div className="orb w-64 h-64 bottom-20 left-1/4 opacity-20" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">
                We're hiring Execom 2026
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl font-bold text-black leading-tight animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join the <span className="gradient-text">μlearn SBC</span>
              <br />
              Execom
            </h1>

            {/* Subheading */}
            <p
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              Lead transformative initiatives, organize flagship events, and
              shape the future of our community. Your journey to impactful
              leadership starts here.
            </p>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={scrollToPositions}
                className="btn-primary text-lg px-8 py-4"
              >
                Apply for Execom
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <CountdownTimer />
            </div>
          </div>

          {/* Right Column - Carousel */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToPositions}
        className="hidden md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:flex md:flex-col md:items-center md:gap-2 md:text-muted-foreground md:hover:text-primary md:transition-colors md:animate-bounce-subtle"
      >
        <span className="text-sm font-medium">Scroll down</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default HeroSection;

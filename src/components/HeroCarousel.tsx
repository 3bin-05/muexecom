import { useState, useEffect } from "react";
import { Calendar, Users, Rocket } from "lucide-react";

const slides = [
  {
    icon: Calendar,
    title: "Lead Events",
    description: "Plan and execute flagship events that inspire and engage the community.",
  },
  {
    icon: Users,
    title: "Grow Your Network",
    description: "Collaborate with peers and professionals from diverse backgrounds.",
  },
  {
    icon: Rocket,
    title: "Build Real Impact",
    description: "Shape initiatives that create lasting change and meaningful experiences.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Carousel Container */}
      <div className="glass-card p-8 glow-border relative overflow-hidden min-h-[280px]">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 pointer-events-none" />
        
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 glow-border">
              <slide.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{slide.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8 shadow-lg shadow-primary/50"
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

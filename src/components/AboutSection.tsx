import { Trophy, Users, Lightbulb, Calendar } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Leadership Experience",
    description: "Develop real-world leadership skills that set you apart.",
  },
  {
    icon: Users,
    title: "Networking",
    description: "Connect with industry professionals and like-minded peers.",
  },
  {
    icon: Lightbulb,
    title: "Skill Building",
    description: "Gain hands-on experience in your area of interest.",
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Plan and execute events that impact the community.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 lg:py-25 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Why Join Our Execom?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6 shadow-lg shadow-primary/50" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Being part of the executive committee is more than a title—it's a
            transformative experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card bg-white p-6 text-center group hover:glow-border transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

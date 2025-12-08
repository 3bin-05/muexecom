import { useEffect } from "react";
import { X, Check, Sparkles } from "lucide-react";

interface Role {
  title: string;
  description: string;
  tags: string[];
  fullDescription: string;
  responsibilities: string[];
  benefits: string[];
}

interface RoleModalProps {
  role: Role | null;
  isOpen: boolean;
  onClose: () => void;
}

const RoleModal = ({ role, isOpen, onClose }: RoleModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  if (!isOpen || !role) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card glow-border p-6 sm:p-8 animate-slide-in scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-foreground transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {role.title}
          </h2>
          <div className="flex flex-wrap gap-2">
            {role.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-8">
          {role.fullDescription}
        </p>

        {/* Responsibilities */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </span>
            Responsibilities
          </h3>
          <ul className="space-y-3">
            {role.responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-accent" />
            </span>
            What You'll Gain
          </h3>
          <ul className="space-y-3">
            {role.benefits.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="btn-primary w-full text-lg py-4"
        >
          Join Us
        </button>
      </div>
    </div>
  );
};

export default RoleModal;

import { useState } from "react";
import JoinCard from "./JoinCard.tsx";
import {
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const roles = [
  "Chairperson",
  "Technical Lead",
  "Design Head",
  "Events Coordinator",
  "Content Lead",
  "PR & Outreach",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mock submission
    setIsSubmitted(true);
    toast({
      title: "Application Submitted!",
      description: "We'll get back to you soon. Thank you for your interest!",
    });

    // Reset after delay
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", role: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative pt-20 lg:pt-15 pb-5 bg-blue-50">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions or ready to apply? Reach out to us through any of
                these channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:execom@organization.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card bg-white hover:glow-border transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-black font-medium">mulearnsbc@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card bg-white hover:glow-border transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Phone / WhatsApp
                  </p>
                  <p className="text-black font-medium">+91 9562321151</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Follow us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjXsITz0KuRAxXkR2wGHWYnKC0QFnoECBoQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fmulearn.sbc%2F&usg=AOvVaw3xQVYtiHC5OnW810IhHd08&opi=89978449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/mulearnsbc/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <JoinCard />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Mulearn SBC. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

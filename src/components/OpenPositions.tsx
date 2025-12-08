import { useState } from "react";
import RoleCard from "./RoleCard";
import RoleModal from "./RoleModal";

const roles = [
  {
    title: "Chairperson",
    description: "Lead the executive committee and drive vision forward.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop",
    tags: ["Leadership", "Strategy", "Management"],
    fullDescription:
      "As Chairperson, you'll be the primary leader of our executive committee, responsible for setting the strategic direction and ensuring all departments work cohesively towards our shared goals. You'll represent the organization externally and inspire the team internally.",
    responsibilities: [
      "Oversee all executive committee operations and initiatives",
      "Develop and communicate the organization's strategic vision",
      "Chair executive meetings and ensure effective decision-making",
      "Build and maintain relationships with stakeholders and partners",
      "Mentor and support other committee members",
      "Represent the organization at official events and functions",
    ],
    benefits: [
      "Develop exceptional leadership and management skills",
      "Build a powerful professional network",
      "Shape the future direction of the organization",
    ],
  },
  {
    title: "Technical Lead",
    description: "Spearhead technical projects and drive innovation.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop",
    tags: ["Tech", "Development", "Innovation"],
    fullDescription:
      "As Technical Lead, you'll oversee all technology-related initiatives, from website development to digital tools. You'll lead a team of talented developers and ensure our technical infrastructure supports the organization's goals.",
    responsibilities: [
      "Lead the development and maintenance of digital platforms",
      "Manage and mentor the technical team members",
      "Evaluate and implement new technologies and tools",
      "Ensure security and reliability of all technical systems",
      "Collaborate with other departments on tech requirements",
      "Create technical documentation and guidelines",
    ],
    benefits: [
      "Gain hands-on experience leading technical projects",
      "Work with cutting-edge technologies",
      "Build a portfolio of impactful projects",
    ],
  },
  {
    title: "Design Head",
    description: "Shape our visual identity and creative direction.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop",
    tags: ["Design", "Creative", "Branding"],
    fullDescription:
      "As Design Head, you'll be the creative visionary behind our visual identity. From event materials to digital presence, you'll ensure consistency and excellence in all design outputs while leading a talented creative team.",
    responsibilities: [
      "Develop and maintain the organization's visual brand identity",
      "Lead the design team in creating compelling visual content",
      "Oversee design for events, social media, and marketing materials",
      "Establish design standards and guidelines",
      "Collaborate with other teams to understand design needs",
      "Stay updated on design trends and best practices",
    ],
    benefits: [
      "Build an impressive design portfolio",
      "Lead creative projects from concept to execution",
      "Develop your leadership and team management skills",
    ],
  },
  {
    title: "Events Coordinator",
    description: "Plan memorable events that unite the community.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop",
    tags: ["Events", "Planning", "Community"],
    fullDescription:
      "As Events Coordinator, you'll be responsible for bringing our community together through engaging and memorable events. From ideation to execution, you'll manage every aspect of event planning while working with various teams.",
    responsibilities: [
      "Plan and execute a diverse calendar of events",
      "Manage event budgets and logistics",
      "Coordinate with venues, vendors, and speakers",
      "Lead the events team and delegate responsibilities",
      "Ensure smooth execution on event days",
      "Gather feedback and continuously improve event quality",
    ],
    benefits: [
      "Master event management and logistics",
      "Build strong organizational skills",
      "Create memorable experiences for hundreds of participants",
    ],
  },
  {
    title: "Content Lead",
    description: "Craft compelling narratives across platforms.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=600&fit=crop",
    tags: ["Content", "Writing", "Strategy"],
    fullDescription:
      "As Content Lead, you'll be the voice of our organization across all platforms. You'll develop content strategies, create engaging narratives, and ensure consistent messaging that resonates with our audience.",
    responsibilities: [
      "Develop and execute comprehensive content strategies",
      "Create and edit content for all platforms and channels",
      "Manage the content calendar and ensure timely delivery",
      "Lead and mentor content team members",
      "Analyze content performance and optimize strategies",
      "Maintain brand voice consistency across all content",
    ],
    benefits: [
      "Sharpen your writing and storytelling skills",
      "Learn content strategy and analytics",
      "See your work reach and impact thousands",
    ],
  },
  {
    title: "PR & Outreach",
    description: "Build partnerships and expand our influence.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop",
    tags: ["PR", "Networking", "Partnerships"],
    fullDescription:
      "As PR & Outreach lead, you'll be the bridge between our organization and the external world. You'll build strategic partnerships, manage media relations, and expand our influence within the industry.",
    responsibilities: [
      "Develop and maintain relationships with partners and sponsors",
      "Manage media relations and press communications",
      "Identify and pursue new partnership opportunities",
      "Coordinate outreach campaigns and initiatives",
      "Represent the organization at networking events",
      "Track and report on partnership outcomes",
    ],
    benefits: [
      "Build an extensive professional network",
      "Develop negotiation and communication skills",
      "Open doors to future career opportunities",
    ],
  },
];

const OpenPositions = () => {
  const [selectedRole, setSelectedRole] = useState<(typeof roles)[0] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (role: (typeof roles)[0]) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <section id="positions" className="relative py-20 lg:py-20 bg-blue-50">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
            Open Positions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6 shadow-lg shadow-primary/50" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick a role that matches your skills and passion. Each position
            offers unique growth opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RoleCard role={role} onClick={() => handleCardClick(role)} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <RoleModal
        role={selectedRole}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default OpenPositions;

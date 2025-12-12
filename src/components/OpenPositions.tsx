import { useState } from "react";
import RoleCard from "./RoleCard";
import RoleModal from "./RoleModal";

const coleadImg = "/Campus Co-Lead.png";
const contentImg = "/Content Team.png";
const creativeImg = "/Creative Team.png";
const designImg = "/Design Lead.png";
const hrImg = "/HR Manager.png";
const techImg = "/tech.png";
const opImg = "/Operation.png";
const marketImg = "/Market.png";
const muvImg = "/Muv.png";
const igImg = "/IG.png";
const roles = [
  {
    title: "CO-Lead",
    description:
      "Supports the Lead by ensuring strategic alignment and cross-team coordination. ",
    image: coleadImg,
    tags: [
      "Leadership",
      "Strategic Thinking ",
      " Decision-Making Team Coordination ",
      "Problem-Solving ",
      "Responsibility ",
    ],
    fullDescription: (
      <p>
        The Co-Lead supports the Lead in guiding µLearn SBC’s direction and
        ensuring smooth coordination across all teams. You help with planning,
        decision-making, and monitoring progress so that all initiatives move
        forward effectively. Your role ensures stability, clarity, and strategic
        alignment within the community. <br />
        <br />
        <strong>Key Responsibilities</strong> <br />
        Assist in planning strategies, events, and major initiatives. <br />
        Coordinate between teams to maintain alignment. <br />
        Monitor workflow progress and support timely execution. <br />
        Identify challenges early and help implement solutions. <br />
        Provide structured guidance and support to team leads. <br />
      </p>
    ),

    responsibilities: [
      "Strategic Planning Support",
      "Team Coordination",
      "Progress Monitoring",
      "Problem Identification & Resolution",
      "Support to Team Leads",
      "Facilitation of Communication",
      "Event Oversight",
    ],
    benefits: [
      "Leadership Experience",
      "Networking Opportunities",
      "Strategic Thinking Skills",
    ],
  },
  {
    title: "IG-Group",
    description:
      "Supports the Lead by ensuring strategic alignment and cross-team coordination. ",
    image: igImg,
    tags: [
      "Leadership",
      "Strategic Thinking ",
      " Decision-Making Team Coordination ",
      "Problem-Solving ",
      "Responsibility ",
    ],
    fullDescription: (
      <p>
        The Co-Lead supports the Lead in guiding µLearn SBC’s direction and
        ensuring smooth coordination across all teams. You help with planning,
        decision-making, and monitoring progress so that all initiatives move
        forward effectively. Your role ensures stability, clarity, and strategic
        alignment within the community. <br />
        <br />
        <strong>Key Responsibilities</strong> <br />
        Assist in planning strategies, events, and major initiatives. <br />
        Coordinate between teams to maintain alignment. <br />
        Monitor workflow progress and support timely execution. <br />
        Identify challenges early and help implement solutions. <br />
        Provide structured guidance and support to team leads. <br />
      </p>
    ),

    responsibilities: [
      "Strategic Planning Support",
      "Team Coordination",
      "Progress Monitoring",
      "Problem Identification & Resolution",
      "Support to Team Leads",
      "Facilitation of Communication",
      "Event Oversight",
    ],
    benefits: [
      "Leadership Experience",
      "Networking Opportunities",
      "Strategic Thinking Skills",
    ],
  },
  {
    title: "Operations Lead & Operations Team",
    description: "Ensures smooth execution and efficient coordination.",
    image: opImg,
    tags: [
      "Management Skills",
      "Event Coordination",
      "Teamwork",
      "Reliability",
      "Discipline",
      "Communication",
    ],
    fullDescription: (
      <p>
        <strong>Operations Lead</strong> <br /> The Operations Lead is the
        backbone of µLearn SBC. You’re the one who makes sure ideas don’t just
        stay as ideas - they turn into reality. From planning timelines to
        coordinating people and making events run without chaos, you ensure
        everything moves like a well-oiled machine. Smooth execution is your
        signature.
        <br />
        <br />
        <strong>Operations Team</strong> <br />
        The Operations Team ensures that every plan is executed efficiently and
        every event runs smoothly. This team focuses on coordination, on-ground
        management, and maintaining order during activities and initiatives.
      </p>
    ),

    responsibilities: [
      "Strategic Planning",
      "Event Execution",
      "Quality Assurance",
      "Team Coordination",
      "Resource Management",
      "Problem Solving",
    ],
    benefits: [
      "Operational Experience",
      "Leadership Development",
      "Networking Opportunities",
    ],
  },
  {
    title: "Design Lead & Design Team",
    description: "Shaping the community's visual identity.",
    image: designImg,
    tags: [
      "Basic Design Knowledge (poster/Graphic)",
      " Layout & Spacing Color Sense ",
      " Visual Storytelling ",
      " Creativity ",
      " Attention to Detail ",
    ],
    fullDescription: (
      <p>
        <strong>Design Lead</strong> <br /> The Design Lead shapes the entire
        visual identity of µLearn SBC. You define how the community looks,
        feels, and communicates visually - from posters to branding to event
        themes. Your direction makes µLearn instantly recognizable. <br />
        <br />
        <strong>Design Team</strong> <br />
        The Design Team shapes the visual identity of the community. From
        posters to digital creatives, this team ensures that every visual is
        clear, attractive, and aligned with the brand.
      </p>
    ),
    responsibilities: [
      "Creative Direction",
      "Visual Content Creation",
      "Brand Consistency",
      "Collaboration with Other Teams",
      "Trend Awareness",
      "Quality Control",
    ],
    benefits: [
      "Portfolio Development",
      "Creative Leadership Experience",
      "Networking Opportunities",
    ],
  },
  {
    title: "Marketing Lead & Marketing Team",
    description: "creating movies, memories, and magic.",
    image: marketImg,
    tags: ["Communication", "Networking", "Creativity", "Social Media Basics"],
    fullDescription: (
      <p>
        <strong>Marketing Lead</strong> <br /> The Marketing Lead is the voice,
        face, and vibe of µLearn SBC. You lead branding, visibility, campaigns,
        and community growth - making sure people know, talk about, and engage
        with the community. You build a presence that pulls students in
        effortlessly. <br />
        <br />
        <strong>Marketing & Outreach Team</strong> <br />
        The Marketing Team manages the visibility and reach of the community. It
        is responsible for promoting events, engaging students, and maintaining
        an active presence across communication channels.
      </p>
    ),
    responsibilities: [
      "Campaign Planning",
      "Content Creation",
      "Social Media Management",
      "Community Engagement",
      "Brand Development",
      "Performance Analysis",
    ],
    benefits: [
      "Social Media Handling",
      "Creative Skill Development",
      "Networking Opportunities",
    ],
  },
  {
    title: "HR-Manager",
    description: "Ensuring team harmony through supportive communication.",
    image: hrImg,
    tags: ["Content", "Writing", "Strategy"],
    fullDescription: (
      <p>
        The HR Manager is responsible for maintaining a positive and
        well-structured internal environment within µLearn SBC. You ensure that
        members feel supported, communication remains smooth, and the team
        operates harmoniously. Your role includes welcoming new members,
        monitoring engagement, and addressing any concerns with professionalism
        and discretion. <br />
        <br />
        <strong>Key Responsibilities</strong>
        <br />
        Oversee member onboarding and orientation. <br />
        Maintain clear and consistent communication across teams. <br />
        Address issues or conflicts and help maintain team harmony. <br />
        Conduct check-ins and gather internal feedback. <br />
        Support leads with team coordination and member well-being. <br />
      </p>
    ),

    responsibilities: [
      "Member Onboarding & Orientation",
      "Internal Communication",
      "Conflict Resolution",
      "Engagement Monitoring",
      "Feedback Collection",
      "Support to Team Leads",
      "Team Well-being Maintenance",
      "Performance Analysis",
      "Event Oversight",
    ],
    benefits: [
      "People Management Skills",
      "Networking Opportunities",
      "Leadership Experience",
      "Event Oversight",
    ],
  },
  {
    title: "Creative Lead & Creative Team",
    description: "Shape our visual identity and creative direction.",
    image: creativeImg,
    tags: [
      "Imagination",
      "Visual Thinking",
      "Concept Creation",
      "Cross-team Collaboration",
      "Experimentation",
      "Idea Execution",
    ],
    fullDescription: (
      <p>
        <strong>Creative Lead</strong> <br />
        The Creative Lead is the spark behind every concept. You bring
        imagination into campaigns, events, and visuals - giving µLearn SBC its
        unique personality. From brainstorming wild ideas to refining creative
        strategies, you bring innovation everywhere. <br />
        <br />
        <strong>Creative Team</strong> <br />
        The hands-on innovators. You work on creative concepts, designs,
        experiences, and interactive elements that make µLearn SBC stand out on
        campus.
      </p>
    ),

    responsibilities: [
      "Concept Development",
      "Creative Strategy",
      "Collaboration with Other Teams",
      "Trend Awareness",
      "Quality Control",
      "Experimentation and Innovation",
      "Performance Analysis",
    ],
    benefits: [
      "Creative Confidence",
      "Portfolio Development",
      "Networking Opportunities",
    ],
  },
  {
    title: "Technical Lead & Technical Team",
    description: "Manages technical systems, tools, and digital platforms.",
    image: techImg,
    tags: [
      "Basic Tech Knowledge (Discord,  platforms) ",
      "Problem-solving ",
      "Quick Thinking ",
      "Adaptability ",
      "Willingness to Learn ",
    ],
    fullDescription: (
      <p>
        <strong>Technical Lead</strong> <br /> The Technical Lead is the tech
        backbone of µLearn SBC. You handle technical workflows, tools,
        automation, and platforms - ensuring everything runs smarter and more
        efficiently. From Discord setups to automation tools, you keep things
        digital and smooth.
        <br />
        <br />
        <strong>Technical Team</strong> <br />
        The Technical Team supports all technology-related needs of the
        community. It ensures that platforms, tools, and digital systems run
        smoothly and are properly maintained.
      </p>
    ),
    responsibilities: [
      "Technical Infrastructure Management",
      "Tool and Platform Setup",
      "Automation Implementation",
      "Technical Support",
      "Collaboration with Other Teams",
      "Continuous Improvement of Tech Processes",
    ],
    benefits: [
      "Tech Skill Development",
      "Hands-on Experience with Digital Tools",
      "Networking Opportunities",
    ],
  },
  {
    title: "Content Lead & Content Team",
    description: "Crafting the voice of our community.",
    image: contentImg,
    tags: [
      "Writing",
      "Editing",
      "Creativity",
      "Clarity",
      "Research",
      "Understanding Tone ",
      " Consistency ",
      " Collaboration & Team Play ",
    ],
    fullDescription: (
      <p>
        <strong>Content Lead</strong> <br />
        The Content Lead defines the voice, tone, and style of µLearn SBC. You
        make sure communication is simple, engaging, and memorable. You turn
        information into stories that people want to read. <br />
        <br />
        <strong>Content Team</strong> <br />
        The Content Team crafts the voice of the community. It focuses on
        writing clear, engaging, and relevant content for various platforms and
        initiatives.
      </p>
    ),
    responsibilities: [
      "Voice & Tone Development",
      "Content Creation & Editing",
      "Collaboration with Other Teams",
      "Audience Engagement",
      "Content Strategy Implementation",
      "Quality Assurance",
      "Performance Analysis",
    ],
    benefits: [
      "Writing Skill Enhancement",
      "Content Strategy Experience",
      "Networking Opportunities",
    ],
  },

  {
    title: "Muv Lead & Muv Team",
    description: "Build partnerships and expand our influence.",
    image: muvImg,
    tags: ["Direction", "Management Skills", "Strategic Thinking"],
    fullDescription: (
      <p>
        The Muv Team is the Movies Interest Group (IG) within µLearn, dedicated
        to the entire process of filmmaking, from ideation to final production.
        This team is where students with a passion for cinema collaborate to
        produce short films, creative videos, and media content, handling all
        aspects of filmmaking. <br />
        <br /> <strong>ROLES YOU CAN TAKE UP</strong>
        <br />
        Director: The visionary who brings the script to life, guiding every
        creative choice.
        <br />
        Scriptwriter: Creates engaging scripts, dialogue and screenplays. <br />
        Videographer: Manages camera work, framing scenes to match the
        director’s vision. <br />
        Video Editor: Edits raw footage into a polished, engaging final product.{" "}
        <br />
        Photographer: Captures photos for documentation, behind-the-scenes, and
        storytelling. <br />
        Actors: Bring characters to life, conveying emotion and narrative on
        screen or any other department you’d love to work on.
        <br />
      </p>
    ),

    responsibilities: [
      "Partnership Building",
      "Event Collaboration",
      "Networking with External Entities",
      "Brand Representation",
      "Opportunity Sourcing",
      "Relationship Management",
      "Performance Analysis",
    ],
    benefits: [
      " Skills Development",
      "Networking Opportunities",
      "Real-world Experience",
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

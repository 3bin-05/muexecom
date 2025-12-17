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
      "Leadership support",
      "Team coordination",
      "Execution tracking",
      "Strategic planning",
      "Responsibility handling",
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
      "Support the Lead in decision-making",
      "Cross-team coordination",
      "Oversee execution quality",
      "Assist in planning and strategy",
      "Step in during Lead’s absence",
    ],
    benefits: [
      "Leadership & strategic thinking",
      "Decision-making abilities",
      "Strategic thinking experience",
      "Cross-team collaboration skills",
      "Problem-solving exposure",
    ],
  },
  {
    title: "IG-Group",
    description:
      "The IG Lead oversees group activities, organizes sessions, and communicates updates to ensure effective student engagement and participation. ",
    image: igImg,
    tags: [
      "Communication",
      "Teamwork & collaboration",
      "Initiative & willingness to learn",
      "Leadership & decision-making",
      "Time management & planning",
    ],
    fullDescription: (
      <p>
        <strong>WHAT IS INTEREST GROUPS(IGs)? </strong>
        <br />
        Interest Groups (IGs) are student learning circles where members can
        explore their interests, take up tasks, and build practical skills in
        their chosen area. These groups encourage hands-on learning, peer
        collaboration, and skill development, helping students gain real-world
        experience while learning together.
        <br />
        <strong>Our IG's</strong><br />
        AI
        <br />
        Ar Vr Mr
        <br />
        Beckn
        <br />
        Blockchain
        <br />
        Civil
        <br />
        Comics
        <br />
        Creative Design
        <br />
        Cyber Security
        <br />
        Data Analytics
        <br />
        Data Science
        <br />
        Data Structures and Algorithm
        <br />
        DevOps
        <br />
        Digital Marketing
        <br />
        Entrepreneurship
        <br />
        Game Dev
        <br />
        Generative AI
        <br />
        Human Resources
        <br />
        Internet Of Things (IOT) And Robotics
        <br />
        Mobile Development
        <br />
        MuV
        <br />
        No Or Low Code
        <br />
        Product Management
        <br />
        Project Management
        <br />
        Quality Assurance
        <br />
        Quantum Computing
        <br />
        Space
        <br />
        Strategic Leadership
        <br />
        Ui Ux
        <br />
        Web Development
        <br />
        <strong>IG LEADS</strong> <br />
        The IG Lead oversees group activities, organizes sessions, and
        communicates updates to ensure effective student engagement and
        participation.
      </p>
    ),

    responsibilities: [
      "Plan and organize IG sessions and activities.",
      "Share updates and information to the group.",
      "Encourage participation and engagement in all activities.",
      "Facilitate collaboration and peer learning.",
    ],
    benefits: [
      "Hands-on experience in your area of interest.",
      "Better communication & collaboration",
      "Networking with students & professionals",
      "Project planning & execution exposure",
      "Leadership & team management",
    ],
  },
  {
    title: "Operations Lead & Operations Team",
    description: "Ensures smooth execution and efficient coordination.",
    image: opImg,
    tags: [
      "Communication",
      "Teamwork & coordination",
      "Scheduling & task management",
      "Problem-solving",
      "Leadership & decision-making",
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
      "Coordinate and support team activities",
      "Plan and manage timelines",
      "Help execute successful events",
      "Lead during events when needed",
      "Make smart team decisions",
    ],
    benefits: [
      "Teamwork experience",
      "Time management skills",
      "Project handling exposure",
      "Leadership growth",
      "Strategic thinking development",
    ],
  },
  {
    title: "Design Lead & Design Team",
    description: "Shaping the community's visual identity.",
    image: designImg,
    tags: [
      "Creative ideation",
      "Graphic design",
      "Layout & color usage",
      "Design consistency",
      "Visual storytelling",
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
      "Create engaging visual content",
      "Design event themes & assets",
      "Maintain the community’s identity",
      "Design posters, banners & creatives",
      "Support campaigns with visuals",
    ],
    benefits: [
      "Build a professional design portfolio",
      "Experience creating a visual identity",
      "Learn creative software tools",
      "Understand layouts, colors, and design",
      "Collaborate on real design projects",
    ],
  },
  {
    title: "Marketing Lead & Marketing Team",
    description: "creating movies, memories, and magic.",
    image: marketImg,
    tags: [
      "Content creation",
      "Audience engagement",
      "Social media basics",
      "Campaign planning",
      "Performance analysis",
      "Campaign execution",
    ],
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
      "Community management & visibility",
      "Campaign planning & execution",
      "Handle social media communication",
      "Share insights to improve results",
    ],
    benefits: [
      "Creative marketing skills",
      "Networking & communication",
      "Build your professional network",
      "Audience engagement strategies",
      "Digital Outreach Skills",
    ],
  },
  {
    title: "HR-Manager",
    description: "Ensuring team harmony through supportive communication.",
    image: hrImg,
    tags: [
      "Active listening",
      "Professional communication",
      "Conflict handling",
      "Team motivation",
      "Culture building",
    ],
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
      "Maintain team harmony",
      "Maintain clear communication",
      "Address issues & conflicts",
      "Ensure all members feel valued, heard, and motivated",
    ],
    benefits: [
      "Empathy & communication skills",
      "People management expertise",
      "Team culture understanding",
      "Enhanced problem-solving",
      "Leadership support skills",
    ],
  },
  {
    title: "Creative Lead & Creative Team",
    description: "Shape our visual identity and creative direction.",
    image: creativeImg,
    tags: [
      "Idea generation",
      "Campaign building",
      "Team collaboration",
      "Concept development",
      "Experimentation",
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
      "Develop creative concepts",
      "Shape the community’s identity",
      "Generate ideas for campaigns",
      "Bring innovation into projects",
      "Support content & design teams",
    ],
    benefits: [
      "Creative thinking & ideation skills",
      "Creative leadership exposure",
      "Pitch and present creative ideas.",
      "Portfolio showcasing your creative direction and concepts",
      "Concept creation skills",
    ],
  },
  {
    title: "Technical Lead & Technical Team",
    description: "Manages technical systems, tools, and digital platforms.",
    image: techImg,
    tags: [
      "Platform handling",
      "Website maintenance",
      "Server management",
      "Technical support",
      "System management",
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
      "Manage and handle website & Discord server",
      "Provide technical support to teams",
      "Ensure smooth digital operations",
      "Assist teams with tech requirements",
      "Oversee all tech systems",
    ],
    benefits: [
      "Hands-on tech experience",
      "Tool and platform management skills",
      "Adaptability to new tech",
      "Practical implementation experience",
      "Exposure to real-world tech operations",
    ],
  },
  {
    title: "Content Lead & Content Team",
    description: "Crafting the voice of our community.",
    image: contentImg,
    tags: [
      "Content writing",
      "Script creation",
      "Clear communication",
      "Tone consistency",
      "Content strategy",
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
      "Write and edit community content",
      "Maintain the community’s voice",
      "Draft posts, scripts & articles",
      "Ensure clarity and quality",
      "Support marketing with content",
    ],
    benefits: [
      "Collaborative writing experience",
      "Improve editing and proofreading",
      "Creative communication skills",
      "Content strategy exposure",
      "Strong writing skills",
    ],
  },

  {
    title: "Muv Lead & Muv Team",
    description: "Build partnerships and expand our influence.",
    image: muvImg,
    tags: [
      "Video shooting",
      "Reel creation",
      "Video editing",
      "Visual storytelling",
      "Script creation",
      "Platform optimisation",
    ],
    fullDescription: (
      <p>
        The Muv Team is the Movies Interest Group (IG) within µLearn, dedicated
        to the entire process of filmmaking, from ideation to final production.
        This team is where students with a passion for cinema collaborate to
        produce short films, creative videos, and media content, handling all
        aspects of filmmaking. <br />
        <br /> <strong>ROLES YOU CAN TAKE UP</strong>
        <br />
        <strong>Director:</strong> The visionary who brings the script to life, guiding every
        creative choice.
        <br />
        <strong>Scriptwriter:</strong> Creates engaging scripts, dialogue and screenplays. <br />
        <strong>Videographer:</strong> Manages camera work, framing scenes to match the
        director’s vision. <br />
        <strong>Video Editor:</strong> Edits raw footage into a polished, engaging final product.{" "}
        <br />
        <strong>Photographer:</strong> Captures photos for documentation, behind-the-scenes, and
        storytelling. <br />
        <strong>Actors:</strong> Bring characters to life, conveying emotion and narrative on
        screen or any other department you’d love to work on.
        <br />
      </p>
    ),

    responsibilities: [
      "Create reels for community updates",
      "Capture events and activities",
      "Shoot and edit videos for social platforms",
      "Develop film concepts and scripts",
      "Plan visual storytelling campaigns",
      "Lead end-to-end video productions",
    ],
    benefits: [
      "Create high-impact social media reels",
      "Build engaging community narratives",
      "Execute campaigns through visual media",
      "Deliver professional-grade video projects",
      "Creative media portfolio",
      "Practical hands-on film creation",
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

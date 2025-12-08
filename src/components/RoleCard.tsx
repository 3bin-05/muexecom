interface Role {
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
  responsibilities: string[];
  benefits: string[];
}

interface RoleCardProps {
  role: Role;
  onClick: () => void;
}

const RoleCard = ({ role, onClick }: RoleCardProps) => {
  return (
    <div
      className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/30 border border-primary/10 hover:border-primary/30"
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={role.image}
        alt={role.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Subtle bottom gradient (always visible) */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content (revealed on hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-2 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {role.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground text-center mb-6 max-w-[200px] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
          {role.description}
        </p>

        {/* Join In Button */}
        <button
          className="btn-primary px-6 py-2.5 text-sm font-semibold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          Join In
        </button>
      </div>
    </div>
  );
};

export default RoleCard;

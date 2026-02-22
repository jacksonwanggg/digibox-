import type { TeamMember } from "../data/team";
import AnimatedCard from "./AnimatedCard";

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export default function TeamCard({ member, delay = 0 }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <AnimatedCard className="team-card" delay={delay}>
      <div className="team-card-avatar" style={{ background: member.color }}>
        <div className="team-card-avatar-ring" />
        {initials}
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </AnimatedCard>
  );
}

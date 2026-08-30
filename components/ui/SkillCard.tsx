import Image from "next/image";
import { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      className="group flex flex-row items-center justify-center gap-4 rounded-3xl border border-border bg-bg/40 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-bg/70"
      title={skill.name}
    >
      <div className="relative h-10 w-10 shrink-0">
        <Image
          src={skill.logo}
          alt={skill.name}
          fill
          className="object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
          sizes="40px"
        />
      </div>
      <span className="text-base font-medium text-muted">{skill.name}</span>
    </div>
  );
}

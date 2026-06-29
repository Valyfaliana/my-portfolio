import { skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills bg-surface flex flex-col justify-center items-center min-h-[60vh] py-24 px-6"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center items-center">
        <p className="text-xs uppercase tracking-widest text-muted mb-2">
          Tech Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-text mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

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
        <SectionTitle className="mb-12 text-3xl font-heading font-bold tracking-tight text-text md:text-4xl">
          Skills
        </SectionTitle>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

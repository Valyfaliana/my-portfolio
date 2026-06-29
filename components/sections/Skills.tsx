import { skills } from "@/lib/data";
import SkillCard from "@/components/ui/SkillCard";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="skills bg-surface flex flex-col justify-center items-center min-h-[60vh] py-36 px-6"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col justify-center items-center">
        <p className="text-xs uppercase tracking-widest text-muted mb-4 bg-bg px-3 py-2 rounded-full">
          Tech Stack
        </p>
        <SectionTitle className="mb-4 text-3xl font-heading font-bold tracking-tight text-text md:text-4xl">
          Tools I Build With
        </SectionTitle>
        <p className="text-muted text-xl mb-12 w-full max-w-2xl lg:max-w-lg xl:max-w-md 2xl:max-w-sm mx-auto text-center">
          My go-to stack for building modern apps
        </p>

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

import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-24 px-6 text-text">
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center justify-center">
        <p className="mb-4 bg-surface px-3 py-2 rounded-full text-xs uppercase tracking-widest text-muted text-center">
          Projects
        </p>
        <SectionTitle className="mb-4 text-3xl font-heading font-bold tracking-tight md:text-4xl text-center">
          Projects I’ve Shipped
        </SectionTitle>
        <p className="text-muted text-xl mb-12 w-full max-w-2xl lg:max-w-lg xl:max-w-md 2xl:max-w-sm mx-auto text-center">
          A range of projects demonstrating how I turn ideas into functional experiences
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 w-full justify-items-center">
          {projects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
 
    </section>
  );
}

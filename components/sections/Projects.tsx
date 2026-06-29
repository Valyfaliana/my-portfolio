import { projects } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-24 px-6 text-text">
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center justify-center">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted text-center">
          Projects
        </p>
        <SectionTitle className="mb-12 text-3xl font-heading font-bold tracking-tight md:text-4xl text-center">
          Projects I’ve Shipped
        </SectionTitle>

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

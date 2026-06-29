import { projects } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects bg-bg flex flex-col justify-center py-24 px-6 text-text">
      <SectionTitle className="mb-8 text-3xl font-heading font-bold tracking-tight md:text-4xl">
        Projets
      </SectionTitle>
      <ScrollReveal>
        {projects.map((project, index) => (
          <article key={project.name + index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </ScrollReveal>
    </section>
  );
};

export default Projects;

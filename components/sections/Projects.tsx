import { projects } from "@/lib/data";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects bg-bg flex flex-col justify-center py-24 px-6 text-text">
      <h2>Projets</h2>
      <div>
        {projects.map((project, index) => (
          <article key={project.name + index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

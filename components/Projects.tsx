import React from "react";

type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Un site web pour présenter mes compétences, projets et expériences.",
    link: "#",
  },
  {
    title: "Application de gestion de tâches",
    description:
      "Une application pour organiser et suivre les tâches quotidiennes.",
    link: "#",
  },
  {
    title: "Blog personnel",
    description:
      "Un blog pour partager des articles techniques et des tutoriels.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projets</h2>
      <div>
        {projects.map((project) => (
          <article key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                Voir le projet
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

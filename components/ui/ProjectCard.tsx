import Image from "next/image";
import { Project } from "@/types";
import OutlineBtn from "./OutlineBtn";
import PrimaryBtn from "./PrimaryBtn";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border-none bg-surface p-2">
      <div className="relative mb-2 aspect-[16/10] overflow-hidden rounded-2xl bg-bg">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-bg to-surface">
            <span className="font-heading text-4xl font-bold text-muted/30">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      <div className="px-6 pt-10 pb-6 bg-bg rounded-2xl">
 
        <h3 className="mb-6 font-heading text-xl font-bold tracking-tight text-text md:text-2xl">
          {project.name}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>

        {(project.github || project.demo) && (
          <div className="flex flex-wrap gap-3">
            {project.github ? (
              <OutlineBtn
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </OutlineBtn>
            ) : null}
            {project.demo ? (
              <PrimaryBtn
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </PrimaryBtn>
            ) : null}
          </div>
        )}
      </div>
 
    </article>
  );
}

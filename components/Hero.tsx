import { profile, links } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const iconMap = { Github: FaGithub, Linkedin: FaLinkedin, Mail };

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-xs uppercase tracking-widest text-accent mb-4">
          Available for opportunities
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text mb-4">
          {profile.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-muted mb-6">
          {profile.title}
        </h2>
        <p className="text-base md:text-lg text-muted max-w-2xl mb-10 leading-relaxed">
          {profile.bio}
        </p>
        <div className="flex gap-4">
          {links.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.url}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted hover:text-text hover:border-accent transition-colors duration-200"
              >
                {Icon && <Icon size={16} />}
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
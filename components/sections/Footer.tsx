import { links } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const iconMap = { Github: FaGithub, Linkedin: FaLinkedin, Mail };

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-8 px-6 text-center">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Andrianimpanana Valy Ifaliana. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center justify-center gap-4">
          {links.map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                {Icon && <Icon size={24} />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

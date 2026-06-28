import { profile, links } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LogoMarquee from "./LogoMarquee";

const iconMap = { Github: FaGithub, Linkedin: FaLinkedin, Mail };

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <a
          href={profile.available ? "#contact" : undefined}
          className={`mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-300 ${profile.available
              ? "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30 text-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              : "bg-zinc-500/5 border-zinc-800 text-zinc-400 cursor-default pointer-events-none"
            }`}
        >
          <span className="relative flex h-2 w-2">
            {profile.available && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            )}
            <span className={`relative inline-flex rounded-full h-2 w-2 ${profile.available ? "bg-emerald-500" : "bg-zinc-500"
              }`}></span>
          </span>
          <span className="uppercase tracking-wider text-[10px]">{profile.availabilityText}</span>
        </a>
        <h1 className="text-4xl md:text-6xl font-heading tracking-tight text-text mb-4">
          {profile.title}
        </h1>
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
        <LogoMarquee />
      </div>
    </section>
  );
}
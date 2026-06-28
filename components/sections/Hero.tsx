import { profile, links } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LogoMarquee from "../ui/LogoMarquee";
import AvailabilityBadge from "../ui/AvailabilityBadge";
import HeroAvatar from "../ui/HeroAvatar";
import OutlineBtn from "../ui/OutlineBtn";

const iconMap = { Github: FaGithub, Linkedin: FaLinkedin, Mail };

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* Responsive layout: row on desktop, column on mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex-1 max-w-2xl w-full">
            <AvailabilityBadge />
            <h1 className="text-4xl md:text-6xl font-heading tracking-tight text-text mb-4">
              {profile.title}
            </h1>
            <p className="text-base md:text-lg text-muted mb-10 leading-relaxed">
              {profile.bio}
            </p>
            <div className="flex gap-4 mb-10">
              {links.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <OutlineBtn
                    key={link.label}
                    href={link.url}
                  >
                    {Icon && <Icon size={16} />} &nbsp;
                    {link.label}
                  </OutlineBtn>
                );
              })}
            </div>

            <LogoMarquee />
          </div>

          {/* Hero Avatar Frame */}
          <HeroAvatar />
        </div>
      </div>
    </section>
  );
}

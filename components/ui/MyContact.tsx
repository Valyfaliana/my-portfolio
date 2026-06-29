import { links } from "@/lib/data";
import OutlineBtn from "./OutlineBtn";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const iconMap = { Github: FaGithub, Linkedin: FaLinkedin, Mail };

export default function MyContact() {
  return (
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
  );
}
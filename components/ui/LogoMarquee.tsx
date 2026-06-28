"use client";

import { skills } from "@/lib/data";
import { IconType } from "react-icons";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiDjango,
  SiSymfony,
  SiFastapi,
  SiSolidity,
  SiPytorch,
  SiScikitlearn,
  SiN8N,
} from "react-icons/si";

/**
 * MAPPING GUIDE FOR DEVELOPER / AGENT:
 * 
 * To swap react-icons placeholders with real SVG or PNG logo images later:
 * 1. Store your logo images in the `/public/logos/` folder (e.g. `react.svg`, `nextjs.png`).
 * 2. Change the keys in `iconMap` to point to the image paths:
 *    const logoImageMap: Record<string, string> = {
 *      "React": "/logos/react.svg",
 *      "Next.js": "/logos/nextjs.svg",
 *      ...
 *    };
 * 3. Update the render loop below to return an `<img>` tag instead of the `<Icon>` component:
 *    <img src={logoImageMap[skill.name]} alt={skill.name} className="h-6 w-auto" />
 */
const iconMap: Record<string, IconType> = {
  "React": FaReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Django": SiDjango,
  "Symfony": SiSymfony,
  "FastAPI": SiFastapi,
  "Solidity": SiSolidity,
  "PyTorch": SiPytorch,
  "scikit-learn": SiScikitlearn,
  "React Native": TbBrandReactNative,
  "n8n": SiN8N,
};

export default function LogoMarquee() {
  // Filter skills to only those that have a matching icon defined
  const validSkills = skills.filter((skill) => skill.name in iconMap);

  const renderTrack = (trackId: string) => (
    <div className="flex gap-16 px-8 items-center shrink-0">
      {validSkills.map((skill, index) => {
        const Icon = iconMap[skill.name];
        return (
          <div
            key={`${trackId}-${skill.name}-${index}`}
            className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-300 group cursor-default"
          >
            {Icon && (
              <Icon 
                size={24} 
                className="transition-transform duration-300 group-hover:scale-110" 
              />
            )}
            <span className="text-sm font-semibold tracking-wide uppercase text-[11px] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full overflow-hidden marquee-mask py-6 select-none mb-10 border-y border-border/10 bg-zinc-950/20">
      <div className="flex animate-marquee">
        {/* Render twice for a seamless infinite loop */}
        {renderTrack("track1")}
        {renderTrack("track2")}
      </div>
    </div>
  );
}

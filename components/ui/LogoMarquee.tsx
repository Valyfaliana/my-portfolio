"use client";

import { skills } from "@/lib/data";

/**
 * Le problème principal ici vient du logo Next.js et Node.js:
 * - Next.js attend un fichier nommé "next-dot-js.svg" ou similaire (pas "next.js.svg")
 * - Node.js attend un nom comme "nodejs.svg" ou "node-js.svg" (pas "node.js.svg")
 * 
 * Correction : ajout d’une table de correspondance pour les logos qui dérogent à la convention par défaut ;
 * tous les autres suivent la convention "nom du skill en minuscules, espaces->-, .svg".
 */
const skillLogoMap: Record<string, string> = {
  "Next.js": "/skills/nextjs.svg",     // nom réel dans public/skills/
  "Node.js": "/skills/nodejs.svg",     // idem
  // Ajouter d'autres exceptions ici si besoin plus tard
};

function getLogoPath(skillName: string): string {
  if (skillLogoMap[skillName]) {
    return skillLogoMap[skillName];
  }
  // Default path
  return `/skills/${skillName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\./g, "")}.svg`;
}

export default function LogoMarquee() {
  // On suppose toujours que les noms listés existent, hormis exceptions ci-dessus
  const validSkills = skills;

  const renderTrack = (trackId: string) => (
    <div className="flex gap-6 px-4 items-center shrink-0">
      {validSkills.map((skill, index) => (
        <div
          key={`${trackId}-${skill.name}-${index}`}
          className="flex items-center justify-center text-muted hover:text-accent transition-colors duration-300 group cursor-default"
        >
          <div className="h-24 w-24 bg-surface rounded-lg flex items-center justify-center shadow-sm border border-border/20 transition group-hover:border-accent m-2">
            <img
              src={getLogoPath(skill.name)}
              alt={skill.name}
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              onError={e => {
                // fallback for broken images: hide
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full overflow-hidden marquee-mask py-6 select-none mb-10 border-y border-border/10">
      <div className="flex animate-marquee gap-6">
        {renderTrack("track1")}
        {renderTrack("track2")}
      </div>
    </div>
  );
}

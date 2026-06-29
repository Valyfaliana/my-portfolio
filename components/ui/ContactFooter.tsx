import { navLinks, profile } from "@/lib/data";
import RoundAvatar from "./RoundAvatar";

export default function ContactFooter() {
  return (
    <div className="mt-12 flex flex-col gap-8 border-b border-border pb-10 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <RoundAvatar
            src={profile.avatarUrl}
            alt={profile.name}
            sizeClassName="size-11"
          />
          <p className="font-heading text-lg font-bold tracking-tight text-text">
            {profile.name}
          </p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
          {profile.tagline}
        </p>
      </div>

      <nav className="flex flex-col gap-2 md:items-end">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-heading text-sm text-text transition-colors duration-200 hover:text-accent md:text-base"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

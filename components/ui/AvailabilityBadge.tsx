import { profile } from "@/lib/data";

export default function AvailabilityBadge() {
  return (
    <a
      href={profile.available ? "#contact" : undefined}
      className={`mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm transition-all duration-300 ${
        profile.available
          ? "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/30 text-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.15)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          : "bg-zinc-500/5 border-zinc-800 text-zinc-400 cursor-default pointer-events-none"
      }`}
    >
      <span className="relative flex h-2 w-2">
        {profile.available && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            profile.available ? "bg-emerald-500" : "bg-zinc-500"
          }`}
        ></span>
      </span>
      <span className="uppercase tracking-wider text-[10px]">
        {profile.availabilityText}
      </span>
    </a>
  );
}

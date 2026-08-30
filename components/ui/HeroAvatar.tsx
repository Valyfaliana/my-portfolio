"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { FiUser } from "react-icons/fi";

export default function HeroAvatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative group shrink-0">
      {/* Ambient background glow */}
      <div className="absolute -inset-1.5 rounded-2xl opacity-20 blur-xl group-hover:opacity-35 transition duration-1000 group-hover:duration-200"></div>

      {/* Frame Container */}
      <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl border border-border/60 overflow-hidden bg-surface/40 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-[1.02] shadow-2xl">
        {!imageError && profile.avatarUrl ? (
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-muted/30 transition-colors duration-300">
            <FiUser size={64} className="stroke-[1.5]" />
            <span className="text-[10px] uppercase tracking-widest font-medium">Add profile.png</span>
          </div>
        )}
      </div>
    </div>
  );
}

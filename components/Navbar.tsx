"use client";

import { useState } from "react";
import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { profile, navLinks } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import PrimaryBtn from "./ui/PrimaryBtn";
import RoundAvatar from "./ui/RoundAvatar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme, mounted } = useTheme();

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const themeToggleButton = (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={
        mounted ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode` : "Toggle theme"
      }
    >
      {!mounted ? (
        <span className="inline-block size-5" aria-hidden />
      ) : resolvedTheme === "light" ? (
        <SunIcon size={20} />
      ) : (
        <MoonIcon size={20} />
      )}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-5xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <RoundAvatar src={profile.avatarUrl} alt={profile.name} />
          <p className="font-heading font-bold text-text tracking-wide">
            {profile.name}
          </p>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label.toLowerCase() === "contact")
                return (
                  <PrimaryBtn key={link.href} href={link.href}>
                    {link.label}
                  </PrimaryBtn>
                );
              else
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted font-heading transition-colors duration-200 hover:text-accent active:text-accent"
                  >
                    {link.label}
                  </a>
                );
            })}
          </nav>
          {themeToggleButton}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {themeToggleButton}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <HiXMark size={20} /> : <HiBars3 size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg/95 px-6 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted transition-colors duration-200 hover:text-accent active:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

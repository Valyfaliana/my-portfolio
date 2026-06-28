"use client";

import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { profile, navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-5xl items-center justify-between px-6">
        <p className="text-sm font-semibold text-text tracking-wide">
          {profile.name}
        </p>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors duration-200 hover:text-accent active:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-border p-2 text-muted transition-colors duration-200 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <HiXMark size={20} /> : <HiBars3 size={20} />}
        </button>
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

<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md — AI Agent Guide for Valy's Portfolio

This file is the single source of truth for any AI agent (GitHub Copilot, Claude, Cursor, etc.) working on this portfolio. Read it entirely before touching any file.

---

## 🧠 Project Owner

- **Name:** Andrianimpanana Valy Ifaliana
- **Title:** Full Stack Developer
- **Status:** 4th-year Electronics & Computer Science student
- **Bio:** "4th-year Electronics & Computer Science student with a passion for building full-stack products — from blockchain traceability systems to AI-powered surveillance. I love turning complex problems into clean, impactful solutions."

---

## 🏗️ Stack

- **Framework:** Next.js 16.2.9 (App Router)
- **Language:** TypeScript 5
- **React:** 19.2.4
- **Styling:** Tailwind CSS 4 + `globals.css` for CSS variables
- **Icons:** lucide-react 1.21.0, react-icons 5.6.0
- **Package manager:** npm

---

## 📁 Project Structure

```
portfolio/
  app/
    globals.css       # CSS variables, base styles, font imports
    layout.tsx        # Root layout — sets metadata, fonts, global styles
    page.tsx          # Main page — composes all section components
  components/
    Hero.tsx          # Name, title, bio, CTA buttons
    Skills.tsx        # Tech stack grid
    Projects.tsx      # Featured projects cards
    Footer.tsx        # Contact links (GitHub, LinkedIn, email)
  lib/
    data.ts           # ALL content lives here — never hardcode content in components
  types/
    index.ts          # Shared TypeScript interfaces
  public/             # Static assets (images, icons, og image)
  AGENTS.md           # This file
  README.md           # Project documentation
```

---

## 🔒 Core Rules — Follow These Always

1. **Never hardcode content in components.** All text, project data, skill lists, and links come from `lib/data.ts`.
2. **Avoid inline styles.** Use Tailwind classes as default. Exception: use `style={{ color: 'var(--color-accent)' }}` only when a CSS variable cannot be mapped to a Tailwind class.
3. **Never use `any` in TypeScript.** Always use the types defined in `types/index.ts`.
4. **One component = one responsibility.** Don't merge two sections into one component.
5. **Mobile-first.** All components must be responsive. Start with mobile layout, add `md:` and `lg:` breakpoints.
6. **Respect CSS variable names.** Use `var(--color-*)`, `var(--font-*)` etc. defined in `globals.css`. Don't invent new ones — add them to `globals.css` first.
7. **No unused imports.** Clean up after yourself.

---

## 🎨 Design System

### Colors (defined in `globals.css`)
```css
--color-bg: #09090b;          /* zinc-950 — main background */
--color-surface: #18181b;     /* zinc-900 — cards, sections */
--color-border: #27272a;      /* zinc-800 — borders */
--color-text: #fafafa;        /* zinc-50 — primary text */
--color-muted: #a1a1aa;       /* zinc-400 — secondary text */
--color-accent: #6366f1;      /* indigo-500 — main accent */
--color-accent-hover: #4f46e5;/* indigo-600 — hover state */
```

### Typography
- **Display:** `font-bold tracking-tight` for headings
- **Body:** `text-zinc-400` for descriptions
- **Labels:** `text-xs uppercase tracking-widest` for section labels

### Spacing convention
- Section padding: `py-24 px-6`
- Max content width: `max-w-5xl mx-auto`
- Card gap: `gap-6`

### Extending Tailwind with CSS variables
In `tailwind.config.ts`, map CSS variables to Tailwind tokens so you can use them as classes:
```ts
theme: {
  extend: {
    colors: {
      bg: "var(--color-bg)",
      surface: "var(--color-surface)",
      accent: "var(--color-accent)",
    }
  }
}
```
This lets you write `bg-surface` or `text-accent` instead of inline styles.

---

## 📐 Naming Conventions

- **Components:** PascalCase — `Hero.tsx`, `ProjectCard.tsx`
- **Variables/functions:** camelCase — `projectData`, `handleClick`
- **CSS variables:** kebab-case with prefix — `--color-accent`, `--font-display`
- **Types/interfaces:** PascalCase — `Project`, `Skill`, `Profile`
- **Data exports in `lib/data.ts`:** camelCase — `profile`, `projects`, `skills`, `links`

---

## 📦 Data — `lib/data.ts`

This file exports:
- `profile` — name, title, bio
- `skills` — array of `Skill[]`
- `projects` — array of `Project[]`
- `links` — GitHub, LinkedIn, email (update when available)

**When updating content, only touch this file.** Components read from it automatically.

---

## 🧩 Types — `types/index.ts`

```ts
export interface Profile {
  name: string;
  title: string;
  bio: string;
}

export interface Project {
  name: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "blockchain" | "ai" | "mobile" | "devops";
}

export interface Link {
  label: string;
  url: string;
  icon: string; // lucide-react icon name
}
```

---

## 📋 Projects Data

```ts
[
  {
    name: "MatTX",
    description: "Blockchain-based platform to trace agricultural products from Madagascar.",
    techs: ["Solidity", "Hardhat", "React", "IPFS", "Pinata", "Express"],
  },
  {
    name: "Scooly",
    description: "SaaS for school management — facilitates communication between schools, parents, and teachers, and improves student performance tracking.",
    techs: ["React", "Symfony"],
  },
  {
    name: "Sentinelle Intelligente",
    description: "AI-powered surveillance system for protected areas, piloted by intelligent agents.",
    techs: ["React", "FastAPI", "scikit-learn", "PyTorch"],
  },
  {
    name: "Fanevao",
    description: "Mobile app for teachers to monetize their courses and manage their in-person class schedule.",
    techs: ["React Native", "Supabase"],
  },
]
```

---

## ✅ Skills Data

```ts
[
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "Symfony", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Solidity", category: "blockchain" },
  { name: "Hardhat", category: "blockchain" },
  { name: "PyTorch", category: "ai" },
  { name: "scikit-learn", category: "ai" },
  { name: "React Native", category: "mobile" },
  { name: "n8n", category: "devops" },
]
```

---

## 🤖 Instructions for AI Agents

### When asked to modify an existing component
1. Read the component fully before editing.
2. Check if the change is about **content** (→ edit `lib/data.ts`) or **layout/UI** (→ edit the component).
3. Never duplicate logic that already exists elsewhere.
4. Keep the component's single responsibility intact — split into sub-components if it grows too large.

### When asked to add a new project
1. Add it to the `projects` array in `lib/data.ts` only.
2. Don't touch `Projects.tsx` unless the card layout itself needs to change.

### When asked to change colors or design
1. Update CSS variables in `app/globals.css`.
2. Don't hardcode hex values in Tailwind classes — use the variable via `style={{ color: 'var(--color-accent)' }}` or extend `tailwind.config.ts`.

### When asked to add a new section
1. Create a new component in `components/`.
2. Add the data to `lib/data.ts`.
3. Add the type to `types/index.ts` if needed.
4. Import and render it in `app/page.tsx`.

### When asked to add links (GitHub, LinkedIn, email)
1. Update the `links` object in `lib/data.ts`.
2. `Footer.tsx` reads from it automatically.

### What NOT to do
- Don't install new dependencies without mentioning it.
- Don't change the folder structure without updating this file.
- Don't remove CSS variables — deprecate them with a comment instead.
- Don't modify `app/layout.tsx` metadata without updating `README.md` too.

---

## 🚧 Current Status

- [x] Project initialized (Next.js 14 + TypeScript + Tailwind)
- [x] Folder structure created
- [ ] `types/index.ts` — to create
- [ ] `lib/data.ts` — to create
- [ ] `app/globals.css` — to configure
- [ ] `components/Hero.tsx` — to create
- [ ] `components/Skills.tsx` — to create
- [ ] `components/Projects.tsx` — to create
- [ ] `components/Footer.tsx` — to create
- [ ] Deploy (Vercel recommended)

---

*Last updated: June 2026 — Update this file whenever the structure, stack, or content changes.*
<!-- END:nextjs-agent-rules -->

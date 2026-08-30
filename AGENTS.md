<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md — AI Agent Guide for Valy's Portfolio

**Source of truth for all AI agents.** Read before touching files.

---

## 👤 Owner & Stack

**Andrianimpanana Valy Ifaliana** — Full Stack Dev, 4th-year student  
*Passion: full-stack products (blockchain, AI, surveillance, education)*

**Tech:** Next.js 16.2.9 (App Router) | TypeScript 5 | React 19.2.4 | Tailwind CSS 4 | lucide-react 1.21.0

---

## 🗂️ Structure & Key Files

| File | Purpose |
|------|---------|
| `lib/data.ts` | **ALL content** (profile, projects, skills, links) |
| `types/index.ts` | TypeScript interfaces (Profile, Project, Skill, Link) |
| `app/globals.css` | CSS variables (`--color-*`, `--font-*`) |
| `components/sections/` | Page sections (Hero, Skills, Projects, Contact, Footer) |

**Rule:** Content in `lib/data.ts`, layout in components, styles in `globals.css`.

---

## 🔒 Non-Negotiable Rules

1. **No hardcoded content** — everything from `lib/data.ts`
2. **No inline styles** — use Tailwind. Only use `style={{ color: 'var(--color-*)' }}` when needed
3. **No `any` types** — use types from `types/index.ts`
4. **One responsibility per component** — split if it grows large
5. **Mobile-first** — start mobile, add `md:` and `lg:` breakpoints
6. **Respect CSS variables** — define new ones in `globals.css` before using
7. **Clean imports** — remove unused

---

## 🎨 Design System (Compact)

**Colors:** `--color-bg` (#09090b) | `--color-surface` (#18181b) | `--color-border` (#27272a) | `--color-text` (#fafafa) | `--color-muted` (#a1a1aa) | `--color-accent` (#6366f1) | `--color-accent-hover` (#4f46e5)

**Typography:** Headings `font-bold tracking-tight` | Body `text-zinc-400` | Labels `text-xs uppercase tracking-widest`

**Spacing:** Sections `py-24 px-6` | Max width `max-w-5xl mx-auto` | Gaps `gap-6`

**Naming:** Components `PascalCase` | Variables `camelCase` | CSS `--kebab-case` | Types `PascalCase`

---

## 🤖 AI Agent Playbook

| Task | Do This |
|------|---------|
| **Modify component** | Read fully → Check: content or UI? → Edit accordingly |
| **Add/update content** | Edit `lib/data.ts` only |
| **Add project** | Add to `projects` array in `lib/data.ts` |
| **Change colors** | Update `--color-*` in `globals.css` |
| **Add section** | 1. Create component 2. Add data to `lib/data.ts` 3. Add type to `types/index.ts` 4. Import in `app/page.tsx` |
| **Add links** | Update `links` object in `lib/data.ts` |

**Don't:** Install deps without mention | Change folder structure | Remove CSS vars | Edit `layout.tsx` metadata without `README.md`

---

*Last updated: August 2026*
<!-- END:nextjs-agent-rules -->

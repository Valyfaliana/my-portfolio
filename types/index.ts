export interface Profile {
  name: string;
  title: string;
  bio: string;
  tagline: string;
  available: boolean;
  availabilityText: string;
  avatarUrl: string;
}

export interface Project {
  name: string;
  description: string;
  techs: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "blockchain" | "ai" | "mobile" | "devops";
  logo: string;
}

export interface Link {
  label: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactSection {
  title: string;
  description: string;
}

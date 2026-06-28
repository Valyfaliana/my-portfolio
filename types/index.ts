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
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

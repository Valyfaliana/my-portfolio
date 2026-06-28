import { Profile, Project, Skill, Link } from "@/types";

export const profile: Profile = {
  name: "Andrianimpanana Valy Ifaliana",
  title: "Full Stack Developer",
  bio: "4th-year Electronics & Computer Science student with a passion for building full-stack products — from blockchain traceability systems to AI-powered surveillance. I love turning complex problems into clean, impactful solutions.",
};

export const skills: Skill[] = [
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
];

export const projects: Project[] = [
  {
    name: "MatTX",
    description:
      "Blockchain-based platform to trace agricultural products from Madagascar.",
    techs: ["Solidity", "Hardhat", "React", "IPFS", "Pinata", "Express"],
  },
  {
    name: "Scooly",
    description:
      "SaaS for school management — facilitates communication between schools, parents, and teachers, and improves student performance tracking.",
    techs: ["React", "Symfony"],
  },
  {
    name: "Sentinelle Intelligente",
    description:
      "AI-powered surveillance system for protected areas, piloted by intelligent agents.",
    techs: ["React", "FastAPI", "scikit-learn", "PyTorch"],
  },
  {
    name: "Fanevao",
    description:
      "Mobile app for teachers to monetize their courses and manage their in-person class schedule.",
    techs: ["React Native", "Supabase"],
  },
];

export const links: Link[] = [
  { label: "GitHub", url: "#", icon: "Github" },
  { label: "LinkedIn", url: "#", icon: "Linkedin" },
  { label: "Email", url: "mailto:#", icon: "Mail" },
];

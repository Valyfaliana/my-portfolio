import { ContactSection, Link, NavLink, Profile, Project, Skill } from "@/types";

export const profile: Profile = {
  name: "Andrianimpanana Valy Ifaliana",
  title: "Full Stack Developer",
  bio: "4th-year Electronics & Computer Science student with a passion for building full-stack products — from blockchain traceability systems to AI-powered surveillance. I love turning complex problems into clean, impactful solutions.",
  tagline:
    "I build fast, polished full-stack products that users love and businesses rely on.",
  available: true,
  availabilityText: "Available for opportunities",
  avatarUrl: "/avatar.png",
};

export const skills: Skill[] = [
  { name: "React", category: "frontend", logo: "/skills/react.svg" },
  { name: "Next.js", category: "frontend", logo: "/skills/nextjs.svg" },
  { name: "TypeScript", category: "frontend", logo: "/skills/typescript.svg" },
  { name: "Node.js", category: "backend", logo: "/skills/nodejs.svg" },
  { name: "Express", category: "backend", logo: "/skills/express.svg" },
  { name: "Django", category: "backend", logo: "/skills/django.svg" },
  { name: "Symfony", category: "backend", logo: "/skills/symfony.svg" },
  { name: "FastAPI", category: "backend", logo: "/skills/fastapi.svg" },
  { name: "Solidity", category: "blockchain", logo: "/skills/solidity.svg" },
  { name: "Hardhat", category: "blockchain", logo: "/skills/hardhat.svg" },
  { name: "PyTorch", category: "ai", logo: "/skills/pytorch.svg" },
  { name: "scikit-learn", category: "ai", logo: "/skills/scikit-learn.svg" },
  { name: "React Native", category: "mobile", logo: "/skills/react-native.svg" },
  { name: "n8n", category: "devops", logo: "/skills/n8n.svg" },
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
  { label: "GitHub", url: "https://github.com/Valyfaliana", icon: "Github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/valy-ifaliana-andrianimpanana", icon: "Linkedin" },
  { label: "Email", url: "mailto:valyandrianimpanana@gmail.com", icon: "Mail" },
];

export const navLinks: NavLink[] = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const contactSection: ContactSection = {
  title: "Let's Build Something That Matters",
  description:
    "Student, but not junior in mindset. Real products — blockchain, AI, SaaS. If you have a serious idea, let's make it happen.",
};
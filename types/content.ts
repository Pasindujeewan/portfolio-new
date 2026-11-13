import type { LucideIcon } from "lucide-react";
import type { ProjectCategory } from "@/lib/project-categories";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  icon: string;
  github: string;
  demo: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export type EducationItem = {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  type: "degree" | "certification";
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export type PortfolioData = {
  projects: Project[];
  blogs: BlogPost[];
  education: EducationItem[];
  messages: ContactMessage[];
};

export type SkillCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

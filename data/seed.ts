import type { PortfolioData } from "@/types/content";

export const seedData: PortfolioData = {
  projects: [
    {
      id: "assignment-analyzer-app",
      title: "Assignment Analyzer App",
      description:
        "A smart analyzer that reviews submissions, highlights structure issues, and gives actionable academic feedback.",
      stack: ["Next.js", "TypeScript", "AI", "Tailwind"],
      icon: "FileSearch",
      github: "https://github.com/",
      demo: "https://example.com"
    },
    {
      id: "lms-platform",
      title: "LMS Platform",
      description:
        "A learning management system with course modules, student progress tracking, and admin controls.",
      stack: ["MERN", "React", "Node.js", "MongoDB"],
      icon: "GraduationCap",
      github: "https://github.com/",
      demo: "https://example.com"
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description:
        "A polished personal portfolio focused on fast performance, responsive layouts, and clean content management.",
      stack: ["Next.js", "Tailwind", "Framer Motion"],
      icon: "MonitorSmartphone",
      github: "https://github.com/",
      demo: "https://example.com"
    },
    {
      id: "react-native-mobile-app",
      title: "React Native Mobile App",
      description:
        "A cross-platform Expo app with reusable UI, native navigation, and API-backed mobile workflows.",
      stack: ["React Native", "Expo", "TypeScript"],
      icon: "Smartphone",
      github: "https://github.com/",
      demo: "https://example.com"
    },
    {
      id: "dansal-map-app",
      title: "Dansal Map App",
      description:
        "A cloud-based map experience for discovering community locations with real-time updates and mobile-first UX.",
      stack: ["React", "Maps", "Cloud", "Firebase"],
      icon: "MapPinned",
      github: "https://github.com/",
      demo: "https://example.com"
    }
  ],
  blogs: [
    {
      id: "react-component-thinking",
      title: "Thinking in React Components",
      excerpt:
        "How I break interfaces into reusable, maintainable pieces while keeping the user flow clear.",
      category: "React",
      readTime: "4 min read",
      date: "2026-01-10"
    },
    {
      id: "nextjs-app-router",
      title: "Why Next.js App Router Feels Productive",
      excerpt:
        "A practical look at layouts, server components, and route organization for modern web projects.",
      category: "Next.js",
      readTime: "5 min read",
      date: "2026-02-18"
    },
    {
      id: "ui-ux-for-developers",
      title: "UI/UX Habits That Make Apps Feel Better",
      excerpt:
        "Small design decisions around spacing, feedback, contrast, and content hierarchy that improve software.",
      category: "UI/UX",
      readTime: "3 min read",
      date: "2026-03-04"
    },
    {
      id: "cloud-development-basics",
      title: "Cloud Development Basics for Student Projects",
      excerpt:
        "Notes on hosting, environment variables, databases, and deployment habits for reliable projects.",
      category: "Cloud",
      readTime: "6 min read",
      date: "2026-04-21"
    }
  ],
  education: [
    {
      id: "bict-degree",
      title: "BICT Undergraduate",
      institution: "University",
      period: "Current",
      description:
        "Building a strong foundation in information and communication technology, software engineering, systems, and product thinking.",
      type: "degree"
    },
    {
      id: "full-stack-course",
      title: "Full Stack Development",
      institution: "Self-guided learning and project practice",
      period: "Ongoing",
      description:
        "React, Node.js, database design, API development, testing, deployments, and clean engineering habits.",
      type: "certification"
    },
    {
      id: "devops-cloud",
      title: "DevOps and Cloud Foundations",
      institution: "Hands-on labs",
      period: "Ongoing",
      description:
        "Learning CI/CD, cloud hosting, environment configuration, monitoring basics, and production workflows.",
      type: "certification"
    }
  ],
  messages: []
};

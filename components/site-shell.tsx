"use client";

import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Home,
  Mail,
  UserRound,
} from "lucide-react";
import { PJLogo } from "@/components/pj-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#home", label: "Home", shortLabel: "Home", icon: Home },
  { href: "#about", label: "About", shortLabel: "About", icon: UserRound },
  {
    href: "#projects",
    label: "Projects",
    shortLabel: "Work",
    icon: BriefcaseBusiness,
  },
  {
    href: "#education",
    label: "Education",
    shortLabel: "Edu",
    icon: GraduationCap,
  },
  { href: "#blogs", label: "Blogs", shortLabel: "Blogs", icon: BookOpen },
  { href: "#contact", label: "Contact", shortLabel: "Chat", icon: Mail },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 hidden px-6 py-4 lg:block">
        <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 shadow-2xl shadow-black/10">
          <a
            href="#home"
            className="flex items-center gap-3 font-semibold text-slate-950 dark:text-white"
          >
            <PJLogo size="sm" />
          </a>
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition duration-200 hover:bg-aqua/10 hover:text-aqua dark:text-slate-300 dark:hover:bg-aqua/10 dark:hover:text-aqua"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </header>
      {children}
      <ThemeToggle className="fixed bottom-24 right-4 z-50 !h-12 !w-12 border-white/50 bg-white/90 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90 lg:hidden" />
      <nav className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/40 bg-white/85 px-1.5 py-2 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-[#111216]/90 lg:hidden">
        <div className="grid grid-cols-6 gap-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium text-slate-600 transition duration-200 hover:bg-aqua/10 hover:text-aqua dark:text-slate-300"
              >
                <Icon size={18} className="shrink-0" />
                <span className="max-w-full truncate">{link.shortLabel}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}

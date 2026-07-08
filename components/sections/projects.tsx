"use client";

import { ChevronDown, ExternalLink, FileSearch, Github, GraduationCap, MapPinned, MonitorSmartphone, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/types/content";

const iconMap = { FileSearch, GraduationCap, MonitorSmartphone, Smartphone, MapPinned };
const initialProjectCount = 4;
const projectStep = 4;

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [visibleCount, setVisibleCount] = useState(initialProjectCount);
  const visibleProjects = useMemo(() => projects.slice(0, visibleCount), [projects, visibleCount]);
  const hasMore = visibleCount < projects.length;

  return (
    <MotionSection id="projects" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and product experiments"
          description="A mix of academic tools, LMS ideas, mobile apps, portfolio systems, and cloud-based experiences that reflect my current engineering path."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap] ?? MonitorSmartphone;
            return (
              <MotionDiv
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="glass rounded-3xl p-5 shadow-lg sm:p-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-aqua/15 text-aqua">
                    <Icon size={27} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.github} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold transition hover:border-aqua hover:text-aqua dark:border-white/10">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.demo} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-aqua dark:bg-white dark:text-slate-950">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + projectStep, projects.length))}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
            >
              Load More Projects
              <ChevronDown size={17} />
            </button>
          </div>
        ) : null}
      </div>
    </MotionSection>
  );
}

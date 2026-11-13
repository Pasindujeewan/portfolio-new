"use client";

import {
  Brain,
  Boxes,
  Bot,
  ChevronDown,
  ChevronUp,
  Cloud,
  Code2,
  Cpu,
  ExternalLink,
  FileSearch,
  Gamepad2,
  Github,
  Globe,
  GraduationCap,
  HeartPulse,
  MapPinned,
  MonitorSmartphone,
  Music,
  Network,
  Server,
  Shield,
  ShoppingCart,
  Smartphone,
  Workflow,
  Wrench,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { normalizeProjectCategory, type ProjectCategory } from "@/lib/project-categories";
import type { Project } from "@/types/content";

const iconMap = {
  Brain,
  Boxes,
  Bot,
  Cloud,
  Code2,
  Cpu,
  FileSearch,
  Gamepad2,
  Globe,
  GraduationCap,
  HeartPulse,
  MapPinned,
  MonitorSmartphone,
  Music,
  Network,
  Server,
  Shield,
  ShoppingCart,
  Smartphone,
  Workflow,
  Wrench,
};
const initialProjectCount = 4;
const projectStep = 4;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const Icon = iconMap[project.icon as keyof typeof iconMap] ?? MonitorSmartphone;

  useEffect(() => {
    const description = descriptionRef.current;
    if (!description || isExpanded) return;

    const measureOverflow = () => {
      setHasOverflow(description.scrollHeight > description.clientHeight + 1);
    };

    measureOverflow();
    const observer = new ResizeObserver(measureOverflow);
    observer.observe(description);
    return () => observer.disconnect();
  }, [isExpanded, project.description]);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.04 }}
      className="glass flex h-[30rem] flex-col overflow-hidden rounded-3xl p-5 shadow-lg shadow-black/[0.04] transition duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-glow sm:h-[31rem] sm:p-6"
    >
      <div className="flex shrink-0 items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center text-aqua">
          <Icon size={27} />
        </div>
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-aqua">
            {normalizeProjectCategory(project.category)}
          </p>
        </div>
      </div>
      <div className="mt-4 flex min-h-0 flex-1 flex-col">
        <p
          ref={descriptionRef}
          className={`leading-7 text-slate-600 dark:text-slate-300 ${
            isExpanded
              ? "min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2 [scrollbar-width:thin]"
              : "line-clamp-4"
          }`}
        >
          {project.description}
        </p>
        {hasOverflow ? (
          <button
            type="button"
            onClick={() => setIsExpanded((expanded) => !expanded)}
            className="mt-2 inline-flex w-fit shrink-0 items-center gap-1 text-sm font-semibold text-aqua transition-colors hover:text-slate-950 dark:hover:text-white"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "See less" : "See more"}
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        ) : null}
      </div>
      <div className="mt-4 flex max-h-24 shrink-0 flex-wrap gap-2 overflow-y-auto overscroll-contain [scrollbar-width:thin]">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-5 flex shrink-0 flex-wrap gap-3">
        <a href={project.github} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold transition duration-200 hover:border-aqua hover:bg-aqua/10 hover:text-aqua dark:border-white/10">
          <Github size={16} /> GitHub
        </a>
        <a href={project.demo} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
          <ExternalLink size={16} /> Demo
        </a>
      </div>
    </MotionDiv>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const [visibleCount, setVisibleCount] = useState(initialProjectCount);
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");
  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => normalizeProjectCategory(project.category)))),
    [projects],
  );
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter(
            (project) => normalizeProjectCategory(project.category) === activeCategory,
          ),
    [activeCategory, projects],
  );
  // Keep large project lists fast and readable by revealing them in batches.
  const visibleProjects = useMemo(
    () => filteredProjects.slice(0, visibleCount),
    [filteredProjects, visibleCount],
  );
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <MotionSection id="projects" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and product experiments"
          description="A mix of academic tools, LMS ideas, mobile apps, portfolio systems, and cloud-based experiences that reflect my current engineering path."
        />
        {projects.length === 0 ? (
          <div className="glass rounded-3xl p-6 text-center text-slate-600 shadow-lg dark:text-slate-300">
            Projects will appear here soon.
          </div>
        ) : null}
        {projects.length > 0 ? (
          <div
            className="mb-6 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {(["All", ...categories] as const).map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(initialProjectCount);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
                      : "border-slate-200 bg-white/70 text-slate-600 hover:border-aqua/50 hover:text-aqua dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        ) : null}
        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + projectStep, filteredProjects.length),
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
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

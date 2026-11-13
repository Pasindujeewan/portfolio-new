"use client";

import { Award, ChevronDown, GraduationCap } from "lucide-react";
import { useMemo, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { EducationItem } from "@/types/content";

const initialEducationCount = 3;
const educationStep = 3;

function periodYears(period: string, currentYear: number) {
  const years = (period.match(/\b(?:19|20)\d{2}\b/g) ?? []).map(Number);
  return {
    startYear: years[0] ?? 0,
    latestYear: /present/i.test(period)
      ? currentYear
      : years[years.length - 1] ?? years[0] ?? 0,
  };
}

export function EducationSection({
  education,
}: {
  education: EducationItem[];
}) {
  const [visibleCount, setVisibleCount] = useState(initialEducationCount);
  const sortedEducation = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return education
      .map((item, index) => ({
        item,
        index,
        typeOrder: item.type === "degree" ? 0 : 1,
        ...periodYears(item.period, currentYear),
      }))
      .sort(
        (a, b) =>
          a.typeOrder - b.typeOrder ||
          b.latestYear - a.latestYear ||
          b.startYear - a.startYear ||
          a.index - b.index,
      )
      .map(({ item }) => item);
  }, [education]);
  const visibleEducation = useMemo(
    () => sortedEducation.slice(0, visibleCount),
    [sortedEducation, visibleCount],
  );
  const hasMore = visibleCount < sortedEducation.length;

  return (
    <MotionSection id="education" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Education"
          title="Learning through university, courses, projects and many books"
          description="I combine academic ICT knowledge with practical experience building modern applications while continuously expanding my skills in cloud, quality engineering, and DevOps."
        />
        {education.length === 0 ? (
          <div className="glass rounded-3xl p-6 text-center text-slate-600 shadow-lg dark:text-slate-300">
            Education and certifications will appear here soon.
          </div>
        ) : (
          <div className="relative space-y-5 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-slate-200 dark:before:bg-white/10">
            {visibleEducation.map((item, index) => {
              const Icon = item.type === "degree" ? GraduationCap : Award;
              return (
                <MotionDiv
                  key={item.id}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06 }}
                  className="relative pl-14 sm:pl-16"
                >
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700 ring-8 ring-slate-50 dark:bg-white/10 dark:text-white dark:ring-night">
                    <Icon size={20} />
                  </div>
                  <div className="glass rounded-3xl p-5 shadow-lg shadow-black/[0.04] transition duration-300 hover:border-aqua/30 hover:shadow-glow sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-aqua">
                      {item.institution}
                    </p>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </MotionDiv>
              );
            })}
          </div>
        )}

        {hasMore ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + educationStep, sortedEducation.length),
                )
              }
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200"
            >
              Load More Education
              <ChevronDown size={17} />
            </button>
          </div>
        ) : null}
      </div>
    </MotionSection>
  );
}

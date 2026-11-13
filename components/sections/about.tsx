import {
  Code2,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
  Database,
} from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const skills = [
  {
    title: "Software Engineering",
    description:
      "Building scalable applications with modern technologies and clean architecture.",
    icon: Layers3,
  },
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, interactive experiences with React, Next.js, and TypeScript.",
    icon: Code2,
  },
  {
    title: "Backend Systems",
    description:
      "Designing secure APIs, managing databases, and implementing business logic.",
    icon: Database,
  },
  {
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile experiences with React Native and Expo.",
    icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying applications, automating workflows, and managing cloud infrastructure.",
    icon: Rocket,
  },
  {
    title: "Quality & Testing",
    description:
      "Delivering dependable software through validation, testing, and continuous improvement.",
    icon: ShieldCheck,
  },
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Creating software that solves real problems"
          description="I build practical digital products by combining thoughtful design, modern development practices, and scalable engineering. My goal is to create software that delivers real value and exceptional user experiences."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isFeatured = index === 0;

            return (
              <MotionDiv
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className={`glass group relative flex min-h-56 flex-col overflow-hidden rounded-3xl p-5 shadow-lg shadow-black/[0.03] transition duration-300 hover:-translate-y-1 hover:border-aqua/30 hover:shadow-glow sm:p-6 ${
                  isFeatured
                    ? "min-h-80 sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-8"
                    : ""
                }`}
              >
                {isFeatured ? (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-slate-400/5 blur-3xl"
                  />
                ) : null}
                <div className="relative mb-5 flex items-center justify-between">
                  <span className="inline-flex items-center justify-center text-aqua transition duration-300 group-hover:scale-110">
                    <Icon size={isFeatured ? 30 : 25} strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs text-slate-400/80 dark:text-slate-500">
                    0{index + 1}
                  </span>
                </div>
                <div className="relative">
                  <h3
                    className={`font-bold tracking-tight text-slate-950 dark:text-white ${
                      isFeatured ? "text-2xl sm:text-3xl" : "text-lg"
                    }`}
                  >
                    {skill.title}
                  </h3>
                  <p
                    className={`mt-2 leading-7 text-slate-600 dark:text-slate-300 ${
                      isFeatured
                        ? "max-w-lg text-base sm:text-lg"
                        : "text-sm leading-6"
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>
                {isFeatured ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-8 right-4 font-mono text-[8rem] font-bold leading-none text-aqua/[0.045]"
                  >
                    01
                  </span>
                ) : null}
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

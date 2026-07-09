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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <MotionDiv
                key={skill.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-3xl p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-aqua dark:bg-white dark:text-slate-950">
                  <Icon size={23} />
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {skill.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  {skill.description}
                </p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

import { Code2, Layers3, Palette, Rocket, ShieldCheck, Smartphone } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

const skills = [
  { title: "Full Stack", description: "React, Node.js, APIs, databases, and product workflows.", icon: Layers3 },
  { title: "React & MERN", description: "Reusable components, state, routing, and backend integration.", icon: Code2 },
  { title: "Mobile Apps", description: "React Native and Expo experiences for practical app ideas.", icon: Smartphone },
  { title: "UI/UX", description: "Clean layouts, visual hierarchy, accessibility, and interaction polish.", icon: Palette },
  { title: "QA Mindset", description: "Validation, edge cases, testing habits, and reliable releases.", icon: ShieldCheck },
  { title: "DevOps", description: "Cloud hosting, CI/CD basics, environment setup, and deployment flow.", icon: Rocket }
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="A builder growing across product, code, and systems"
          description="I am a BICT undergraduate interested in the full software lifecycle: designing the experience, building reliable features, validating quality, and deploying apps people can actually use."
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
                <h3 className="text-lg font-bold text-slate-950 dark:text-white">{skill.title}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{skill.description}</p>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}

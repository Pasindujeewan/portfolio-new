import {
  ArrowRight,
  Braces,
  Code2,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import profileImage from "@/asseats/Pasindu_Image.png";
import { MotionDiv, MotionSection } from "@/components/motion";

const words = [
  "Full-Stack Engineering",
  "Cloud Applications",
  "Mobile Development",
  "System Design",
  "DevOps",
  "API Integration",
];

export function HomeSection() {
  return (
    <MotionSection
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-32 pt-20 sm:px-5 md:px-8 md:pb-20 md:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-soft-grid bg-[length:38px_38px] opacity-70 dark:opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50/60 to-transparent dark:from-[#09090b]/50" />
      </div>
      <div className="mx-auto grid w-full max-w-6xl items-center justify-items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:justify-items-stretch">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
          className="group relative order-2 mx-auto hidden w-full max-w-[19rem] sm:max-w-sm lg:order-2 lg:block lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute inset-3 rotate-6 rounded-[2.5rem] border border-slate-400/30"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-[3rem] bg-slate-400/5 blur-2xl"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1c1d22] via-[#111216] to-[#09090b] shadow-glow transition duration-500 group-hover:-translate-y-1">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_48%)]"
            />
            <Image
              src={profileImage}
              alt="Pasindu Jeewan"
              fill
              priority
              sizes="(max-width: 640px) 304px, (max-width: 1024px) 384px, 400px"
              className="object-contain object-bottom"
            />
          </div>
          <div className="absolute -left-3 top-12 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2.5 text-slate-800 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#111216]/95 dark:text-white sm:-left-6">
            <span className="flex items-center justify-center text-aqua">
              <Code2 size={19} />
            </span>
            <span className="pr-1 text-xs font-bold sm:text-sm">Full-stack developer</span>
          </div>
          <div className="absolute -bottom-4 -right-2 inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-2.5 text-slate-800 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#111216]/95 dark:text-white sm:-right-5">
            <span className="flex items-center justify-center text-aqua">
              <Braces size={19} />
            </span>
            <span className="pr-1 text-xs font-bold sm:text-sm">Beyond the Code</span>
          </div>
        </MotionDiv>
        <div className="order-1 w-full text-center lg:order-1 lg:text-left">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-6 inline-flex max-w-full items-center justify-center gap-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-aqua sm:text-xs lg:mx-0"
          >
            <span aria-hidden="true" className="h-px w-6 shrink-0 bg-aqua/60" />
            <Sparkles size={15} className="shrink-0" />
            <span>Engineering Thoughtful Digital Experiences</span>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-[-0.055em] text-slate-950 dark:text-white sm:text-5xl md:text-7xl lg:mx-0">
              Pasindu Jeewan
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg lg:mx-0">
              I design and build modern web, mobile, cloud, and enterprise
              applications with a strong focus on intuitive user experiences,
              clean architecture, and reliable engineering
            </p>
          </MotionDiv>
          <MotionDiv
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {words.map((word, index) => (
              <span
                key={word}
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:border-aqua/40 hover:bg-aqua/10 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {word}
              </span>
            ))}
          </MotionDiv>
          <MotionDiv
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg shadow-slate-950/15 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:shadow-black/10 dark:hover:bg-slate-200"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-aqua hover:text-aqua dark:border-white/15 dark:bg-white/[0.04] dark:text-white"
            >
              Contact Me
            </a>
          </MotionDiv>
          <MotionDiv
            className="mt-7 flex justify-center gap-3 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Pasindujeewan",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/pasindu-jeewan-b4934524b",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:pasindujeewan7@gmail.com",
                label: "Email",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/75 text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-aqua/40 hover:bg-aqua/10 hover:text-aqua dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}

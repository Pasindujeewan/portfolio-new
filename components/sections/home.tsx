import { ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { MotionDiv, MotionSection } from "@/components/motion";

const words = ["Full Stack Development", "React", "MERN Stack", "React Native", "UI/UX", "DevOps"];

export function HomeSection() {
  return (
    <MotionSection
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-32 pt-20 sm:px-5 md:px-8 md:pb-20 md:pt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 -z-10 bg-soft-grid bg-[length:44px_44px] opacity-40 dark:opacity-10" />
      <div className="mx-auto grid w-full max-w-6xl items-center justify-items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:justify-items-stretch">
        <div className="w-full text-center lg:text-left">
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mb-5 inline-flex max-w-[20rem] items-center justify-center gap-2 rounded-full border border-aqua/30 bg-aqua/10 px-4 py-2 text-center text-xs font-semibold text-aqua sm:max-w-none sm:text-sm lg:mx-0"
          >
            <Sparkles size={16} className="shrink-0" />
            <span>BICT undergraduate building useful digital products</span>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl md:text-7xl lg:mx-0">
              Pasindu Jeewan
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-xl lg:mx-0">
              I design and build web, mobile, LMS, analyzer, portfolio, and cloud-based apps with a strong focus on clean UX and reliable engineering.
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
                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
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
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-aqua dark:bg-white dark:text-slate-950">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-coral hover:text-coral dark:border-white/10 dark:bg-white/10 dark:text-white">
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
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pasindu@example.com", label: "Email" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} aria-label={item.label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/75 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:text-aqua dark:border-white/10 dark:bg-white/10 dark:text-slate-200">
                  <Icon size={19} />
                </a>
              );
            })}
          </MotionDiv>
        </div>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.65 }}
          className="glass relative w-full max-w-md overflow-hidden rounded-[2rem] p-3 shadow-glow sm:p-5 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-[1.5rem] bg-slate-950 p-4 text-slate-100 shadow-2xl sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-coral" />
              <span className="h-3 w-3 rounded-full bg-citrus" />
              <span className="h-3 w-3 rounded-full bg-aqua" />
            </div>
            <div className="space-y-4 overflow-x-auto text-left font-mono text-xs sm:text-sm">
              <p className="text-aqua">const developer = &#123;</p>
              <p className="pl-4">name: &quot;Pasindu Jeewan&quot;,</p>
              <p className="pl-4">focus: [&quot;React&quot;, &quot;MERN&quot;, &quot;Expo&quot;],</p>
              <p className="pl-4">mindset: &quot;learn, build, improve&quot;</p>
              <p className="text-aqua">&#125;;</p>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 p-3">
                <Terminal size={18} className="shrink-0 text-citrus" />
                <span className="min-w-0 whitespace-normal">shipping clean software experiences</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}

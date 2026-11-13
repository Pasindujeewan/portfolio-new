import { MotionDiv } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
    >
      <p className="mb-4 inline-flex rounded-full border border-aqua/25 bg-aqua/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-aqua">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 md:text-lg">{description}</p>
    </MotionDiv>
  );
}

export function PJLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const boxSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const textSize = size === "sm" ? "text-sm" : "text-base";

  return (
    <span
      aria-label="Pasindu Jeewan logo"
      className={`${boxSize} inline-flex shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-aqua/20 ring-1 ring-white/20 dark:bg-white dark:text-slate-950`}
    >
      <span className={`${textSize} font-black tracking-normal`}>
        P<span className="text-aqua">J</span>
      </span>
    </span>
  );
}

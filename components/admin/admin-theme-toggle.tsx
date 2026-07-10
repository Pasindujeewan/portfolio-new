"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function AdminThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Rehydrate theme from localStorage so admin pages match the public site.
    const stored = localStorage.getItem("theme");
    const enabled = stored ? stored === "dark" : true;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    // Store the preference globally because Tailwind dark mode uses html.dark.
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/10 dark:text-slate-100"
      aria-label="Toggle dark mode"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{dark ? "Light" : "Dark"}</span>
    </button>
  );
}

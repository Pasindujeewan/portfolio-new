import { BookOpen, ExternalLink, FolderKanban, GraduationCap, LayoutDashboard, LogOut, Mail } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { logoutAdmin } from "@/app/actions";
import { AdminThemeToggle } from "@/components/admin/admin-theme-toggle";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/blogs", label: "Blogs", icon: BookOpen },
  { href: "/admin/education", label: "Education", icon: GraduationCap },
  { href: "/admin/messages", label: "Messages", icon: Mail }
];

function AdminNav({ compact = false }: { compact?: boolean }) {
  return (
    <nav
      className={
        compact
          ? "-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          : "mt-5 grid gap-1.5"
      }
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              compact
                ? "inline-flex min-w-max items-center gap-2 rounded-2xl border border-slate-200 bg-white/75 px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua/10 hover:text-aqua dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                : "group relative flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950"
            }
          >
            <span
              className={
                compact
                  ? "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-aqua/10 text-aqua"
                  : "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950/5 text-aqua transition group-hover:bg-white/15 group-hover:text-white dark:bg-white/10 dark:group-hover:bg-slate-950/10 dark:group-hover:text-slate-950"
              }
            >
              <Icon size={compact ? 15 : 18} />
            </span>
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function AdminShell({ children, title }: { children: ReactNode; title: string }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 px-3 pb-8 pt-4 text-slate-950 transition-colors dark:bg-[#070b16] dark:text-white sm:px-5 lg:px-6">
      {/* Shared background keeps all admin routes visually consistent. */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_8%,rgba(0,184,169,0.14),transparent_28%),radial-gradient(circle_at_82%_2%,rgba(255,107,107,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_20%_8%,rgba(0,184,169,0.18),transparent_28%),radial-gradient(circle_at_82%_2%,rgba(255,107,107,0.13),transparent_24%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Mobile admin header replaces the desktop sidebar on small screens. */}
        <div className="glass mb-5 rounded-3xl p-4 shadow-lg shadow-slate-200/60 dark:shadow-black/30 lg:hidden">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">Portfolio Admin</p>
              <h1 className="mt-1 truncate text-2xl font-black">{title}</h1>
            </div>
            <div className="flex shrink-0 gap-2">
              <AdminThemeToggle />
              <Link
                href="/"
                aria-label="View site"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm transition hover:bg-aqua dark:bg-white dark:text-slate-950"
              >
                <ExternalLink size={18} />
              </Link>
            </div>
          </div>
          <div className="mt-5 border-y border-slate-200/70 py-3 dark:border-white/10">
            <AdminNav compact />
          </div>
          <form action={logoutAdmin} className="mt-3">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-coral/30 px-4 py-3 text-sm font-bold text-coral transition hover:bg-coral hover:text-white">
              <LogOut size={17} />
              Logout
            </button>
          </form>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Desktop sidebar keeps management routes one click away. */}
          <aside className="glass hidden h-fit overflow-hidden rounded-3xl p-4 shadow-lg shadow-slate-200/60 dark:shadow-black/30 lg:sticky lg:top-5 lg:block">
            <Link href="/" className="relative block overflow-hidden rounded-3xl bg-slate-950 px-5 py-5 text-white shadow-sm dark:bg-white dark:text-slate-950">
              <div className="absolute right-4 top-4 h-12 w-12 rounded-2xl bg-aqua/20" />
              <p className="relative text-sm font-bold text-aqua">Portfolio Admin</p>
              <p className="relative mt-1 text-2xl font-black leading-tight">Pasindu Jeewan</p>
              <p className="relative mt-2 text-sm text-white/65 dark:text-slate-600">Content control center</p>
            </Link>
            <div className="mt-5 flex items-center justify-between px-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Navigation</p>
              <span className="h-2 w-2 rounded-full bg-aqua" />
            </div>
            <AdminNav />
            <form action={logoutAdmin} className="mt-5 border-t border-slate-200/70 pt-4 dark:border-white/10">
              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-coral/30 px-4 py-3 text-sm font-bold text-coral transition hover:bg-coral hover:text-white">
                <LogOut size={18} />
                Logout
              </button>
            </form>
          </aside>

          <section className="min-w-0">
            <div className="mb-6 hidden items-center justify-between gap-4 lg:flex">
              <div className="min-w-0">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-aqua">Control Center</p>
                <h1 className="mt-2 text-5xl font-black">{title}</h1>
              </div>
              <div className="flex items-center gap-2">
                <AdminThemeToggle />
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                >
                  <ExternalLink size={16} />
                  View Site
                </Link>
              </div>
            </div>
            <div className="grid gap-5">{children}</div>
          </section>
        </div>
      </div>
    </main>
  );
}

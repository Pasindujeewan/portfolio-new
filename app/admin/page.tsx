import { BookOpen, FolderKanban, GraduationCap, Mail } from "lucide-react";
import { AdminCard } from "@/components/admin/form-fields";
import { AdminShell } from "@/components/admin/admin-shell";
import { readData } from "@/lib/store";

export default async function AdminDashboardPage() {
  const data = await readData();
  const stats = [
    { label: "Projects", value: data.projects.length, icon: FolderKanban },
    { label: "Blog Posts", value: data.blogs.length, icon: BookOpen },
    { label: "Education Items", value: data.education.length, icon: GraduationCap },
    { label: "Messages", value: data.messages.length, icon: Mail }
  ];

  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <AdminCard key={stat.label}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="mt-2 text-4xl font-black">{stat.value}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aqua/15 text-aqua">
                  <Icon size={24} />
                </div>
              </div>
            </AdminCard>
          );
        })}
      </div>
      <AdminCard>
        <h2 className="text-2xl font-bold">Content workflow</h2>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600 dark:text-slate-300">
          Manage portfolio content from the protected dashboard. Public sections read from the same local datastore, and middleware redirects unauthenticated requests back to the login page.
        </p>
      </AdminCard>
    </AdminShell>
  );
}

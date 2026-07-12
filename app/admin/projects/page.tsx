import { Edit3, Plus } from "lucide-react";
import Link from "next/link";
import { removeProject } from "@/app/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard, DeleteButton } from "@/components/admin/form-fields";
import { readData } from "@/lib/store";

export default async function AdminProjectsPage() {
  const { projects } = await readData();

  return (
    <AdminShell title="Projects">
      <AdminCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{projects.length} projects available</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">Current projects</h2>
          </div>
          <Link
            href="/admin/projects/new"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-aqua dark:bg-white dark:text-slate-950 sm:w-auto"
          >
            <Plus size={17} />
            Add Project
          </Link>
        </div>
      </AdminCard>

      <div className="grid gap-4">
        {projects.map((project) => (
          <AdminCard key={project.id}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-2 sm:flex sm:shrink-0">
                <Link
                  href={`/admin/projects/${project.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
                >
                  <Edit3 size={16} />
                  Edit
                </Link>
                <form action={removeProject}>
                  <input type="hidden" name="id" value={project.id} />
                  <input type="hidden" name="redirectTo" value="/admin/projects" />
                  <DeleteButton />
                </form>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </AdminShell>
  );
}

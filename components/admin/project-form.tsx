import Link from "next/link";
import { saveProject } from "@/app/actions";
import { AdminCard, Field, SaveButton, TextArea } from "@/components/admin/form-fields";
import type { Project } from "@/types/content";

export function ProjectForm({ project }: { project?: Project }) {
  return (
    <AdminCard>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">
            {project ? "Edit project" : "New project"}
          </p>
          <h2 className="mt-1 text-xl font-black sm:text-2xl">{project ? project.title : "Add project"}</h2>
        </div>
        <Link
          href="/admin/projects"
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200 sm:w-auto"
        >
          Back
        </Link>
      </div>
      <form action={saveProject} className="grid gap-4 md:grid-cols-2">
        <input type="hidden" name="id" value={project?.id ?? ""} />
        <input type="hidden" name="redirectTo" value="/admin/projects" />
        <Field label="Title" name="title" defaultValue={project?.title} />
        <Field label="Icon" name="icon" defaultValue={project?.icon ?? "MonitorSmartphone"} />
        <Field label="Tech stack, comma separated" name="stack" defaultValue={project?.stack.join(", ")} />
        <Field label="GitHub URL" name="github" type="url" defaultValue={project?.github ?? "https://github.com/"} />
        <Field label="Live demo URL" name="demo" type="url" defaultValue={project?.demo ?? "https://example.com"} />
        <div className="md:col-span-2">
          <TextArea label="Description" name="description" defaultValue={project?.description} />
        </div>
        <div className="md:col-span-2">
          <SaveButton label={project ? "Save Project" : "Add Project"} />
        </div>
      </form>
    </AdminCard>
  );
}

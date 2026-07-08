import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectForm } from "@/components/admin/project-form";
import { readData } from "@/lib/store";

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { projects } = await readData();
  const project = projects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <AdminShell title="Edit Project">
      <ProjectForm project={project} />
    </AdminShell>
  );
}

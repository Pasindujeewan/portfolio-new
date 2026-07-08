import { AdminShell } from "@/components/admin/admin-shell";
import { ProjectForm } from "@/components/admin/project-form";

export default function NewProjectPage() {
  return (
    <AdminShell title="Add Project">
      <ProjectForm />
    </AdminShell>
  );
}

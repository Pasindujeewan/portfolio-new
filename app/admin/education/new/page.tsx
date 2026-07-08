import { AdminShell } from "@/components/admin/admin-shell";
import { EducationForm } from "@/components/admin/education-form";

export default function NewEducationPage() {
  return (
    <AdminShell title="Add Education">
      <EducationForm />
    </AdminShell>
  );
}

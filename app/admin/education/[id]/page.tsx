import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { EducationForm } from "@/components/admin/education-form";
import { readData } from "@/lib/store";

export default async function EditEducationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { education } = await readData();
  const item = education.find((entry) => entry.id === id);

  if (!item) notFound();

  return (
    <AdminShell title="Edit Education">
      <EducationForm item={item} />
    </AdminShell>
  );
}

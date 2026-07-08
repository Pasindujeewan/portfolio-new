import Link from "next/link";
import { saveEducation } from "@/app/actions";
import { AdminCard, Field, SaveButton, TextArea } from "@/components/admin/form-fields";
import type { EducationItem } from "@/types/content";

export function EducationForm({ item }: { item?: EducationItem }) {
  return (
    <AdminCard>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">
            {item ? "Edit education" : "New education"}
          </p>
          <h2 className="mt-1 text-xl font-black sm:text-2xl">{item ? item.title : "Add education or certification"}</h2>
        </div>
        <Link
          href="/admin/education"
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200 sm:w-auto"
        >
          Back
        </Link>
      </div>
      <form action={saveEducation} className="grid gap-4 md:grid-cols-2">
        <input type="hidden" name="id" value={item?.id ?? ""} />
        <input type="hidden" name="redirectTo" value="/admin/education" />
        <Field label="Title" name="title" defaultValue={item?.title} />
        <Field label="Institution" name="institution" defaultValue={item?.institution} />
        <Field label="Period" name="period" defaultValue={item?.period} />
        <label className="block min-w-0 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Type
          <select
            name="type"
            defaultValue={item?.type ?? "degree"}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm outline-none focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
          >
            <option value="degree">Degree</option>
            <option value="certification">Certification</option>
          </select>
        </label>
        <div className="md:col-span-2">
          <TextArea label="Description" name="description" defaultValue={item?.description} />
        </div>
        <div className="md:col-span-2">
          <SaveButton label={item ? "Save Item" : "Add Item"} />
        </div>
      </form>
    </AdminCard>
  );
}

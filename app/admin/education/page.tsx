import { Edit3, Plus } from "lucide-react";
import Link from "next/link";
import { removeEducation } from "@/app/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard, DeleteButton } from "@/components/admin/form-fields";
import { readData } from "@/lib/store";

export default async function AdminEducationPage() {
  const { education } = await readData();

  return (
    <AdminShell title="Education">
      <AdminCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{education.length} education items available</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">Education and certifications</h2>
          </div>
          <Link
            href="/admin/education/new"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-aqua dark:bg-white dark:text-slate-950 sm:w-auto"
          >
            <Plus size={17} />
            Add Item
          </Link>
        </div>
      </AdminCard>

      <div className="grid gap-4">
        {education.map((item) => (
          <AdminCard key={item.id}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-citrus/15 px-3 py-1 text-xs font-bold text-slate-700 dark:text-citrus">
                    {item.type}
                  </span>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{item.period}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-1 font-semibold text-aqua">{item.institution}</p>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
              <div className="grid gap-2 sm:flex sm:shrink-0">
                <Link
                  href={`/admin/education/${item.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
                >
                  <Edit3 size={16} />
                  Edit
                </Link>
                <form action={removeEducation}>
                  <input type="hidden" name="id" value={item.id} />
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

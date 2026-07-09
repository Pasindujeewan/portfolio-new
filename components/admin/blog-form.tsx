import Link from "next/link";
import { saveBlog } from "@/app/actions";
import { AdminCard, Field, SaveButton, TextArea } from "@/components/admin/form-fields";
import type { BlogPost } from "@/types/content";

export function BlogForm({ blog }: { blog?: BlogPost }) {
  return (
    <AdminCard>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">{blog ? "Edit blog" : "New blog"}</p>
          <h2 className="mt-1 text-xl font-black sm:text-2xl">{blog ? blog.title : "Add blog post"}</h2>
        </div>
        <Link
          href="/admin/blogs"
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200 sm:w-auto"
        >
          Back
        </Link>
      </div>
      <form action={saveBlog} className="grid gap-4 md:grid-cols-2">
        {/* Empty id means create; existing id means update the same blog post. */}
        <input type="hidden" name="id" value={blog?.id ?? ""} />
        {/* Server action redirects back to the list after a successful save. */}
        <input type="hidden" name="redirectTo" value="/admin/blogs" />
        <Field label="Title" name="title" defaultValue={blog?.title} />
        <Field label="Category" name="category" defaultValue={blog?.category} />
        <Field label="Read time" name="readTime" defaultValue={blog?.readTime ?? "4 min read"} />
        <Field label="Date" name="date" type="date" defaultValue={blog?.date} />
        <div className="md:col-span-2">
          <TextArea label="Excerpt" name="excerpt" defaultValue={blog?.excerpt} />
        </div>
        <div className="md:col-span-2">
          <SaveButton label={blog ? "Save Blog" : "Add Blog"} />
        </div>
      </form>
    </AdminCard>
  );
}

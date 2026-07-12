import { Edit3, Plus } from "lucide-react";
import Link from "next/link";
import { removeBlog } from "@/app/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard, DeleteButton } from "@/components/admin/form-fields";
import { readData } from "@/lib/store";

export default async function AdminBlogsPage() {
  const { blogs } = await readData();

  return (
    <AdminShell title="Blogs">
      <AdminCard>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{blogs.length} blog posts available</p>
            <h2 className="mt-1 text-xl font-black sm:text-2xl">Current posts</h2>
          </div>
          <Link
            href="/admin/blogs/new"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-aqua dark:bg-white dark:text-slate-950 sm:w-auto"
          >
            <Plus size={17} />
            Add Post
          </Link>
        </div>
      </AdminCard>

      <div className="grid gap-4 md:grid-cols-2">
        {blogs.map((blog) => (
          <AdminCard key={blog.id}>
            <div className="flex h-full flex-col">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-aqua/10 px-3 py-1 text-xs font-bold text-aqua">{blog.category}</span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{blog.readTime}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{blog.title}</h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{blog.excerpt}</p>
                <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">{blog.date}</p>
              </div>
              <div className="mt-5 grid gap-2 sm:flex">
                <Link
                  href={`/admin/blogs/${blog.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
                >
                  <Edit3 size={16} />
                  Edit
                </Link>
                <form action={removeBlog}>
                  <input type="hidden" name="id" value={blog.id} />
                  <input type="hidden" name="redirectTo" value="/admin/blogs" />
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

import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { BlogForm } from "@/components/admin/blog-form";
import { readData } from "@/lib/store";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { blogs } = await readData();
  const blog = blogs.find((item) => item.id === id);

  if (!blog) notFound();

  return (
    <AdminShell title="Edit Post">
      <BlogForm blog={blog} />
    </AdminShell>
  );
}

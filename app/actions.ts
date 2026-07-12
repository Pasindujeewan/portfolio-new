"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addMessage, deleteBlog, deleteEducation, deleteMessage, deleteProject, upsertBlog, upsertEducation, upsertProject } from "@/lib/store";
import { clearSession, setSession } from "@/lib/auth";
import { blogSchema, contactSchema, educationSchema, loginSchema, projectSchema } from "@/lib/validation";
import { slugify, uid } from "@/lib/utils";

export type ActionState = {
  ok: boolean;
  message: string;
};

function field(formData: FormData, key: string) {
  return String(formData.get(key) ?? "");
}

// Only allow server actions to redirect back into the admin area.
function adminRedirectPath(formData: FormData) {
  const redirectTo = field(formData, "redirectTo");
  return redirectTo.startsWith("/admin/") ? redirectTo : "";
}

function withToast(path: string, message: string, type: "success" | "error" = "success") {
  const params = new URLSearchParams({ toast: message, type });
  return `${path}?${params.toString()}`;
}

export async function sendContactMessage(_state: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = contactSchema.safeParse({
    name: field(formData, "name"),
    email: field(formData, "email"),
    message: field(formData, "message")
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Please check the form." };
  }

  try {
    await addMessage({
      id: uid("msg"),
      ...parsed.data,
      createdAt: new Date().toISOString()
    });
    revalidatePath("/");
    revalidatePath("/admin/messages");
    return { ok: true, message: "Message sent. Thank you for reaching out." };
  } catch {
    return { ok: false, message: "Message could not be sent. Please try again." };
  }
}

export async function loginAdmin(_state: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = loginSchema.safeParse({
    email: field(formData, "email"),
    password: field(formData, "password")
  });

  if (!parsed.success) return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid login." };

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  // Admin credentials stay server-side in environment variables.
  if (!adminEmail || !adminPassword || !process.env.AUTH_SECRET) {
    return { ok: false, message: "Admin environment variables are not configured." };
  }

  if (parsed.data.email !== adminEmail || parsed.data.password !== adminPassword) {
    return { ok: false, message: "Email or password is incorrect." };
  }

  await setSession(parsed.data.email);
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearSession();
  redirect("/admin/login");
}

export async function saveProject(formData: FormData) {
  const parsed = projectSchema.parse({
    id: field(formData, "id"),
    title: field(formData, "title"),
    description: field(formData, "description"),
    stack: field(formData, "stack"),
    icon: field(formData, "icon"),
    github: field(formData, "github"),
    demo: field(formData, "demo")
  });

  await upsertProject({
    ...parsed,
    id: parsed.id || slugify(parsed.title) || uid("project"),
    // Admin form stores stack as comma-separated text; persistence uses an array.
    stack: parsed.stack.split(",").map((item) => item.trim()).filter(Boolean)
  });
  revalidatePath("/");
  revalidatePath("/admin/projects");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Project saved successfully."));
}

export async function removeProject(formData: FormData) {
  await deleteProject(field(formData, "id"));
  revalidatePath("/");
  revalidatePath("/admin/projects");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Project deleted successfully."));
}

export async function saveBlog(formData: FormData) {
  const parsed = blogSchema.parse({
    id: field(formData, "id"),
    title: field(formData, "title"),
    excerpt: field(formData, "excerpt"),
    category: field(formData, "category"),
    readTime: field(formData, "readTime"),
    date: field(formData, "date")
  });
  await upsertBlog({ ...parsed, id: parsed.id || slugify(parsed.title) || uid("blog") });
  revalidatePath("/");
  revalidatePath("/admin/blogs");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Blog post saved successfully."));
}

export async function removeBlog(formData: FormData) {
  await deleteBlog(field(formData, "id"));
  revalidatePath("/");
  revalidatePath("/admin/blogs");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Blog post deleted successfully."));
}

export async function saveEducation(formData: FormData) {
  const startYear = field(formData, "startYear");
  const endYear = field(formData, "endYear");
  const period = startYear && endYear ? `${startYear} - ${endYear}` : field(formData, "period");

  const parsed = educationSchema.parse({
    id: field(formData, "id"),
    title: field(formData, "title"),
    institution: field(formData, "institution"),
    period,
    description: field(formData, "description"),
    type: field(formData, "type")
  });
  await upsertEducation({ ...parsed, id: parsed.id || slugify(parsed.title) || uid("education") });
  revalidatePath("/");
  revalidatePath("/admin/education");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Education item saved successfully."));
}

export async function removeEducation(formData: FormData) {
  await deleteEducation(field(formData, "id"));
  revalidatePath("/");
  revalidatePath("/admin/education");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Education item deleted successfully."));
}

export async function removeMessage(formData: FormData) {
  await deleteMessage(field(formData, "id"));
  revalidatePath("/admin/messages");
  const redirectTo = adminRedirectPath(formData);
  if (redirectTo) redirect(withToast(redirectTo, "Message deleted successfully."));
}

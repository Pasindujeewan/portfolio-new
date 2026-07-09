import { promises as fs } from "fs";
import path from "path";
import { seedData } from "@/data/seed";
import { createSupabaseAdminClient, hasSupabaseConfig } from "@/lib/supabase";
import type { BlogPost, ContactMessage, EducationItem, PortfolioData, Project } from "@/types/content";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "db.json");

type SupabaseProject = Omit<Project, "stack"> & {
  stack: string[];
  created_at?: string;
};

type SupabaseBlog = Omit<BlogPost, "readTime"> & {
  read_time: string;
  created_at?: string;
};

type SupabaseEducation = EducationItem & {
  created_at?: string;
};

type SupabaseMessage = Omit<ContactMessage, "createdAt"> & {
  created_at: string;
};

async function ensureStore() {
  try {
    await fs.access(dataFile);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(dataFile, JSON.stringify(seedData, null, 2), "utf8");
  }
}

async function readFileData(): Promise<PortfolioData> {
  await ensureStore();
  const raw = await fs.readFile(dataFile, "utf8");
  return JSON.parse(raw) as PortfolioData;
}

async function writeFileData(data: PortfolioData) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf8");
}

function assertSupabaseError(error: { message: string } | null) {
  if (error) throw new Error(error.message);
}

function toBlog(row: SupabaseBlog): BlogPost {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    readTime: row.read_time,
    date: row.date
  };
}

function toMessage(row: SupabaseMessage): ContactMessage {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    message: row.message,
    createdAt: row.created_at
  };
}

export async function readData(): Promise<PortfolioData> {
  if (!hasSupabaseConfig()) return readFileData();

  const supabase = createSupabaseAdminClient();
  const [projectsResult, blogsResult, educationResult, messagesResult] = await Promise.all([
    supabase.from("projects").select("*").order("created_at", { ascending: false }),
    supabase.from("blogs").select("*").order("created_at", { ascending: false }),
    supabase.from("education").select("*").order("created_at", { ascending: false }),
    supabase.from("messages").select("*").order("created_at", { ascending: false })
  ]);

  assertSupabaseError(projectsResult.error);
  assertSupabaseError(blogsResult.error);
  assertSupabaseError(educationResult.error);
  assertSupabaseError(messagesResult.error);

  return {
    projects: (projectsResult.data ?? []) as SupabaseProject[],
    blogs: ((blogsResult.data ?? []) as SupabaseBlog[]).map(toBlog),
    education: (educationResult.data ?? []) as SupabaseEducation[],
    messages: ((messagesResult.data ?? []) as SupabaseMessage[]).map(toMessage)
  };
}

export async function upsertProject(project: Project) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient().from("projects").upsert(project);
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  const index = data.projects.findIndex((item) => item.id === project.id);
  if (index >= 0) data.projects[index] = project;
  else data.projects.unshift(project);
  await writeFileData(data);
}

export async function deleteProject(id: string) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient().from("projects").delete().eq("id", id);
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  data.projects = data.projects.filter((item) => item.id !== id);
  await writeFileData(data);
}

export async function upsertBlog(blog: BlogPost) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient()
      .from("blogs")
      .upsert({
        id: blog.id,
        title: blog.title,
        excerpt: blog.excerpt,
        category: blog.category,
        read_time: blog.readTime,
        date: blog.date
      });
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  const index = data.blogs.findIndex((item) => item.id === blog.id);
  if (index >= 0) data.blogs[index] = blog;
  else data.blogs.unshift(blog);
  await writeFileData(data);
}

export async function deleteBlog(id: string) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient().from("blogs").delete().eq("id", id);
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  data.blogs = data.blogs.filter((item) => item.id !== id);
  await writeFileData(data);
}

export async function upsertEducation(item: EducationItem) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient().from("education").upsert(item);
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  const index = data.education.findIndex((entry) => entry.id === item.id);
  if (index >= 0) data.education[index] = item;
  else data.education.unshift(item);
  await writeFileData(data);
}

export async function deleteEducation(id: string) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient().from("education").delete().eq("id", id);
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  data.education = data.education.filter((item) => item.id !== id);
  await writeFileData(data);
}

export async function addMessage(message: ContactMessage) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient()
      .from("messages")
      .insert({
        id: message.id,
        name: message.name,
        email: message.email,
        message: message.message,
        created_at: message.createdAt
      });
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  data.messages.unshift(message);
  await writeFileData(data);
}

export async function deleteMessage(id: string) {
  if (hasSupabaseConfig()) {
    const { error } = await createSupabaseAdminClient().from("messages").delete().eq("id", id);
    assertSupabaseError(error);
    return;
  }

  const data = await readFileData();
  data.messages = data.messages.filter((item) => item.id !== id);
  await writeFileData(data);
}

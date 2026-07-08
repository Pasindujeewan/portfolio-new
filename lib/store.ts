import { promises as fs } from "fs";
import path from "path";
import { seedData } from "@/data/seed";
import type { BlogPost, ContactMessage, EducationItem, PortfolioData, Project } from "@/types/content";

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "db.json");

async function ensureStore() {
  try {
    await fs.access(dataFile);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.writeFile(dataFile, JSON.stringify(seedData, null, 2), "utf8");
  }
}

export async function readData(): Promise<PortfolioData> {
  await ensureStore();
  const raw = await fs.readFile(dataFile, "utf8");
  return JSON.parse(raw) as PortfolioData;
}

async function writeData(data: PortfolioData) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2), "utf8");
}

export async function upsertProject(project: Project) {
  const data = await readData();
  const index = data.projects.findIndex((item) => item.id === project.id);
  if (index >= 0) data.projects[index] = project;
  else data.projects.unshift(project);
  await writeData(data);
}

export async function deleteProject(id: string) {
  const data = await readData();
  data.projects = data.projects.filter((item) => item.id !== id);
  await writeData(data);
}

export async function upsertBlog(blog: BlogPost) {
  const data = await readData();
  const index = data.blogs.findIndex((item) => item.id === blog.id);
  if (index >= 0) data.blogs[index] = blog;
  else data.blogs.unshift(blog);
  await writeData(data);
}

export async function deleteBlog(id: string) {
  const data = await readData();
  data.blogs = data.blogs.filter((item) => item.id !== id);
  await writeData(data);
}

export async function upsertEducation(item: EducationItem) {
  const data = await readData();
  const index = data.education.findIndex((entry) => entry.id === item.id);
  if (index >= 0) data.education[index] = item;
  else data.education.unshift(item);
  await writeData(data);
}

export async function deleteEducation(id: string) {
  const data = await readData();
  data.education = data.education.filter((item) => item.id !== id);
  await writeData(data);
}

export async function addMessage(message: ContactMessage) {
  const data = await readData();
  data.messages.unshift(message);
  await writeData(data);
}

export async function deleteMessage(id: string) {
  const data = await readData();
  data.messages = data.messages.filter((item) => item.id !== id);
  await writeData(data);
}

import { z } from "zod";
import { projectCategories } from "@/lib/project-categories";

// Shared schemas keep client-submitted form data consistent before persistence.
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.")
});

export const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email."),
  password: z.string().min(8, "Password must be at least 8 characters.")
});

export const projectSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(2),
  category: z.enum(projectCategories),
  description: z.string().trim().min(10),
  stack: z.string().trim().min(2),
  icon: z.string().trim().min(2),
  github: z.string().trim().url(),
  demo: z.string().trim().url()
});

export const blogSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(2),
  excerpt: z.string().trim().min(10),
  category: z.string().trim().min(2),
  readTime: z.string().trim().min(2),
  date: z.string().trim().min(4)
});

export const educationSchema = z.object({
  id: z.string().optional(),
  title: z.string().trim().min(2),
  institution: z.string().trim().min(2),
  period: z.string().trim().min(2),
  description: z.string().trim().min(10),
  type: z.enum(["degree", "certification"])
});

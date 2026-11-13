export const projectCategories = [
  "Web App",
  "Mobile App",
  "Desktop App",
  "AI & Machine Learning",
  "Data & Analytics",
  "Cloud & DevOps",
  "Education",
  "Tools & Utilities",
  "Other",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export function normalizeProjectCategory(
  category: string | null | undefined,
): ProjectCategory {
  return projectCategories.find((option) => option === category) ?? "Other";
}

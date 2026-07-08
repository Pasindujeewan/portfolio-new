import { AboutSection } from "@/components/sections/about";
import { BlogsSection } from "@/components/sections/blogs";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { HomeSection } from "@/components/sections/home";
import { ProjectsSection } from "@/components/sections/projects";
import { SiteShell } from "@/components/site-shell";
import { readData } from "@/lib/store";

export default async function Page() {
  const data = await readData();

  return (
    <SiteShell>
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection projects={data.projects} />
        <EducationSection education={data.education} />
        <BlogsSection blogs={data.blogs} />
        <ContactSection />
      </main>
    </SiteShell>
  );
}

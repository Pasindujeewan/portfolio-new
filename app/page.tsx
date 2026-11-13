import { AboutSection } from "@/components/sections/about";
import { BlogsSection } from "@/components/sections/blogs";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { HomeSection } from "@/components/sections/home";
import { ProjectsSection } from "@/components/sections/projects";
import { SiteShell } from "@/components/site-shell";
import { siteDescription, siteUrl } from "@/lib/seo";
import { readData } from "@/lib/store";

export default async function Page() {
  const data = await readData();
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pasindu Jeewan",
    jobTitle: "Full-Stack Developer",
    description: siteDescription,
    sameAs: [
      "https://github.com/Pasindujeewan",
      "https://www.linkedin.com/in/pasindu-jeewan-b4934524b",
    ],
    knowsAbout: [
      "Full-stack development",
      "React",
      "Next.js",
      "TypeScript",
      "Mobile development",
      "Cloud engineering",
    ],
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  return (
    <SiteShell>
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <main>
          <HomeSection />
          <AboutSection />
          <ProjectsSection projects={data.projects} />
          <EducationSection education={data.education} />
          <BlogsSection blogs={data.blogs} />
          <ContactSection />
        </main>
      </>
    </SiteShell>
  );
}

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  return (
    <MotionSection id="contact" className="px-5 pb-32 pt-20 md:px-8 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something sharp and useful"
          description="Open to internships, collaborations, freelance projects, and conversations around web, mobile, QA, cloud, and software engineering."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionDiv
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-3xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Connect with me</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Send a message about your idea, role, project, or technical problem. I enjoy the places where design decisions and engineering details meet.
            </p>
            <div className="mt-7 space-y-3">
              {[
                { icon: Mail, label: "pasindu@example.com", href: "mailto:pasindu@example.com" },
                { icon: Github, label: "GitHub", href: "https://github.com/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
                { icon: MapPin, label: "Sri Lanka", href: "#home" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/60 p-4 font-semibold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                  >
                    <Icon size={20} className="shrink-0" />
                    <span className="min-w-0 break-words">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </MotionDiv>
          <MotionDiv initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
            <ContactForm />
          </MotionDiv>
        </div>
        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:text-left">
          <p>&copy; {new Date().getFullYear()} Pasindu Jeewan. All rights reserved.</p>
          <Link href="/admin/login" className="font-semibold transition hover:text-aqua">
            Admin
          </Link>
        </footer>
      </div>
    </MotionSection>
  );
}

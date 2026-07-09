"use client";

import { ArrowUpRight, BookOpen } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import type { BlogPost } from "@/types/content";

function BlogCard({ blog }: { blog: BlogPost }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="glass group flex min-h-72 w-[18rem] shrink-0 flex-col rounded-3xl p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-glow sm:w-[21rem]"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-coral/15 text-coral">
          <BookOpen size={21} />
        </span>
        <ArrowUpRight
          size={20}
          className="text-slate-400 transition group-hover:text-aqua"
        />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">
        {blog.category}
      </p>
      <h3 className="mt-3 text-lg font-bold leading-7 text-slate-950 dark:text-white">
        {blog.title}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
        {blog.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>{blog.date}</span>
        <span>{blog.readTime}</span>
      </div>
    </MotionDiv>
  );
}

export function BlogsSection({ blogs }: { blogs: BlogPost[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  // Duplicate cards only for the carousel loop; original blog data is unchanged.
  const loopBlogs = useMemo(
    () => (blogs.length > 1 ? [...blogs, ...blogs] : blogs),
    [blogs],
  );

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || blogs.length < 2 || paused) return;

    // Slow, tiny increments create a smooth auto-scroll that pauses on interaction.
    const interval = window.setInterval(() => {
      const halfWidth = scroller.scrollWidth / 2;
      if (scroller.scrollLeft >= halfWidth) {
        scroller.scrollTo({ left: 0, behavior: "auto" });
      } else {
        scroller.scrollBy({ left: 0.5, behavior: "auto" });
      }
    }, 28);

    return () => window.clearInterval(interval);
  }, [blogs.length, paused]);

  return (
    <MotionSection id="blogs" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Blogs"
          title="Notes from the engineering journey"
          description="Writing about modern software engineering, full-stack development, React, Next.js, cloud technologies, and DevOps."
        />
        {blogs.length === 0 ? (
          <div className="glass rounded-3xl p-6 text-center text-slate-600 shadow-lg dark:text-slate-300">
            Blog posts will appear here soon.
          </div>
        ) : (
          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-10 bg-gradient-to-r from-slate-50 to-transparent dark:from-night" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-10 bg-gradient-to-l from-slate-50 to-transparent dark:from-night" />
            <div
              ref={scrollerRef}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              className="-mx-5 flex gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Auto scrolling blog posts"
            >
              {loopBlogs.map((blog, index) => (
                <BlogCard key={`${blog.id}-${index}`} blog={blog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MotionSection>
  );
}

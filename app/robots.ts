import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = siteUrl
    ? new URL("/sitemap.xml", siteUrl).toString()
    : undefined;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/"],
    },
    ...(sitemapUrl ? { sitemap: sitemapUrl } : {}),
  };
}

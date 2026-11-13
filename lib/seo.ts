export const siteDescription =
  "Pasindu Jeewan is a Sri Lankan BICT undergraduate and full-stack developer building web, mobile, and cloud applications with React, Next.js, and TypeScript.";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl)
  : undefined;

export const socialImageUrl = siteUrl
  ? new URL("/og", siteUrl).toString()
  : undefined;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pasindu Jeewan | Full Stack Developer Portfolio",
  description:
    "Modern portfolio for Pasindu Jeewan, a BICT undergraduate focused on full stack development, React, MERN, React Native, UI/UX, QA, and DevOps.",
  keywords: ["Pasindu Jeewan", "Full Stack Developer", "React", "Next.js", "MERN", "React Native", "Portfolio"],
  authors: [{ name: "Pasindu Jeewan" }],
  openGraph: {
    title: "Pasindu Jeewan | Portfolio",
    description: "BICT undergraduate building web, mobile, LMS, analyzer, portfolio, and cloud-based apps.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

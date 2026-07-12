import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pasindu Jeewan | Full Stack Developer Portfolio",
    template: "%s | Pasindu Jeewan"
  },
  description:
    "Modern portfolio for Pasindu Jeewan, a BICT undergraduate focused on full stack development, React, MERN, React Native, UI/UX, QA, and DevOps.",
  keywords: ["Pasindu Jeewan", "Full Stack Developer", "React", "Next.js", "MERN", "React Native", "Portfolio"],
  authors: [{ name: "Pasindu Jeewan" }],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Pasindu Jeewan | Portfolio",
    description: "BICT undergraduate building web, mobile, LMS, analyzer, portfolio, and cloud-based apps.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ToastProvider } from "@/components/toast";
import { siteDescription, siteUrl, socialImageUrl } from "@/lib/seo";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pasindu Jeewan | Full-Stack Developer",
    template: "%s | Pasindu Jeewan"
  },
  description: siteDescription,
  metadataBase: siteUrl,
  applicationName: "Pasindu Jeewan Portfolio",
  authors: [{ name: "Pasindu Jeewan" }],
  creator: "Pasindu Jeewan",
  publisher: "Pasindu Jeewan",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Pasindu Jeewan | Full-Stack Developer",
    description: siteDescription,
    type: "website",
    siteName: "Pasindu Jeewan Portfolio",
    locale: "en_LK",
    url: siteUrl?.toString(),
    images: socialImageUrl
      ? [
          {
            url: socialImageUrl,
            width: 1200,
            height: 630,
            alt: "Pasindu Jeewan — Full-Stack Developer"
          }
        ]
      : undefined
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasindu Jeewan | Full-Stack Developer",
    description: siteDescription,
    images: socialImageUrl ? [socialImageUrl] : undefined
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}

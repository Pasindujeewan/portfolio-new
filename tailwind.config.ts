import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111216",
        aqua: "#3b82f6",
        coral: "#f87171",
        citrus: "#9ca3af",
        night: "#09090b"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 0, 0, 0.16)"
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(100, 116, 139, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

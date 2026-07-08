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
        ink: "#101828",
        aqua: "#00b8a9",
        coral: "#ff6b6b",
        citrus: "#f7b731",
        night: "#0b1020"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(0, 184, 169, 0.22)"
      },
      backgroundImage: {
        "soft-grid":
          "linear-gradient(rgba(16, 24, 40, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 24, 40, 0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;

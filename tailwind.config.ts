import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundPrimary: "#090932",
        buttonPrimary: "#423de3",
        buttonSecondary: "#3b37cc",
        cardBgPrimary: "#17162d",
        cardBgSecondary: "#232249",
        sidebarBgColor: "#0a0a2e"
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "sans-serif"], // Roboto as default
        serif: ["var(--font-playfair)", "serif"], // Playfair Display for fancy text
      },
    },
  },
  plugins: [],
} satisfies Config;

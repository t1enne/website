/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["'IBM Plex Mono', monospace"],
      },
      colors: {
        primary: "hsl(var(--primary))",
        primaryFg: "hsl(var(--primary-fg))",
        muted: "hsl(var(--muted-text))",
        // Theme tokens
        page: "hsl(var(--bg-page))",
        ink: "hsl(var(--text))",
        line: "hsl(var(--border))",
        soft: "hsl(var(--soft-bg))",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'IBM Plex Mono', monospace"],
      },
      colors: {
        primary: "hsl(var(--primary))",
        primaryFg: "hsl(var(--primary-fg))",
        muted: "hsl(var(--muted))",
      },
    },
  },
  plugins: [],
};

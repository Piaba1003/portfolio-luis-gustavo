import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#001F3F",
        surface: "#16213e",
        primary: "#22D3EE",
        "primary-hover": "#0891B2",
        "text-primary": "#ffffff",
        "text-secondary": "#a2a2bd",
        line: "rgb(255, 255, 255, 0.08)",
        input: "#1a1a2e",
        "input-border": "#2a2a4a",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightish: "-0.01em",
      },
    },
  },
  plugins: [],
};

export default config;

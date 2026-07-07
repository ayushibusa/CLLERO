import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--accent-primary)",
          light: "#22D3EE",
          glow: "#67E8F9",
        },
        background: {
          DEFAULT: "var(--background-base)",
          alt: "var(--elevated-surface)",
        },
        surface: "var(--elevated-surface)",
        text: {
          heading: "var(--text-primary)",
          body: "var(--text-secondary)",
        },
        success: {
          bg: "#E0F7FA",
          text: "#06B6D4"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

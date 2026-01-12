import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#fafafa",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.03)",
          hover: "rgba(255, 255, 255, 0.06)",
        },
        border: "rgba(255, 255, 255, 0.1)",
        muted: {
          DEFAULT: "#71717a",
          foreground: "#a1a1aa",
        },
        accent: {
          green: "#22c55e",
          "green-glow": "rgba(34, 197, 94, 0.2)",
          blue: "#3b82f6",
          "blue-glow": "rgba(59, 130, 246, 0.2)",
          purple: "#a855f7",
          "purple-glow": "rgba(168, 85, 247, 0.2)",
          amber: "#f59e0b",
          "amber-glow": "rgba(245, 158, 11, 0.2)",
          cyan: "#06b6d4",
          "cyan-glow": "rgba(6, 182, 212, 0.2)",
          rose: "#f43f5e",
          "rose-glow": "rgba(244, 63, 94, 0.2)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

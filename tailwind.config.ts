import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ağır sanayi / metal paleti
        anthracite: {
          DEFAULT: "#0f172a", // koyu antrasit (slate-900)
          light: "#1e293b",
        },
        steel: {
          DEFAULT: "#334155", // metalik gri (slate-700)
          light: "#475569",
        },
        ember: {
          // endüstriyel turuncu vurgu
          DEFAULT: "#f97316",
          dark: "#ea580c",
          light: "#fb923c",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#1ebe57",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.92)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
        glow: "glow 4s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "spin-slow": "spin 16s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

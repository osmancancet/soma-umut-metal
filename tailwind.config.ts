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
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;

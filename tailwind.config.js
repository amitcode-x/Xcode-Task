/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8", // light blue
        secondary: "#22c55e", // green
        dark: "#050816",
      },
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "sans-serif"],
      },
       animation: {
    "pulse-slow": "pulse 4s ease-in-out infinite",
    "fade-up": "fade-up 0.6s ease-out both",
  },
  keyframes: {
    "fade-up": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
    },
  },
  plugins: [],
};

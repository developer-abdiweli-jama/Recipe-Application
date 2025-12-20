/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        premium: {
          gold: "#D4AF37",
          black: "#121212",
          card: "rgba(255, 255, 255, 0.05)",
          accent: "#FF4B2B",
        },
      },
      fontFamily: {
        elegant: ['"Playfair Display"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

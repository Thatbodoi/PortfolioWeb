/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Be Vietnam Pro", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 20px 70px rgba(2, 12, 27, 0.18)",
        glow: "0 0 34px rgba(91, 192, 235, 0.24)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "slow-spin": "slowSpin 22s linear infinite",
        reveal: "reveal 0.7s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" },
        },
        slowSpin: {
          to: { transform: "rotate(360deg)" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        schibsted: ["Schibsted Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#4D36AB",
        footerBg: "#211F28"
      },
    },
  },
  plugins: [],
};

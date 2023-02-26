/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#2b2b2b",
        light: "#f8f9fa",
      },
    },
  },
  plugins: [],
};

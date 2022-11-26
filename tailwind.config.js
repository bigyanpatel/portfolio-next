/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // purge: [
  //   "./app/**/*.js",
  //   "./pages/**/*.js",
  //   "./components/**/*.js"
  // ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}
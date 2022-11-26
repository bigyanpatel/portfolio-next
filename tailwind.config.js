/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
    purge: [
      "./pages/*.tsx",
     "./components/*.tsx"
  ],
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}
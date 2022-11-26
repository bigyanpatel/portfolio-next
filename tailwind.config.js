/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
    purge: [
      "./pages/*.{js,ts,jsx,tsx}",
     "./components/*.{js,ts,jsx,tsx}"
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
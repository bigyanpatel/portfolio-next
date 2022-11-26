/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: {
      enabled: true,
      content: ["./pages/*.tsx","./Components/*.tsx"],
    },
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
}
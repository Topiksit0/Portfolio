/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '99': '0.99',
        '97': '0.97',
        '98': '0.98'
      }
    },
  },
  plugins: [],
}
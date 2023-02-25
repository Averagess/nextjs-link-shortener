/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts.jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "bounce-twice": "bounce 1s infinite 2s"
      }
    },
  },
  plugins: [],
}

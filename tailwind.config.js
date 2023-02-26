const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts.jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "bounce-twice": "bounce 1s infinite 2s"
      },
      fontFamily: {
        sans : ["var(--font-inter)", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}

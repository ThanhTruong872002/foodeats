/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        medium: 600,
      },
      fontFamily: {
        sans: ["Roboto Serif,serif"],
      },
      colors: {
        grey: "#575363",
      },
      fontSize: {
        base: "1.8rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "light"],

  },
  plugins: [require("daisyui")],
}

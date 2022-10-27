/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "stocks-bg": "url('./assets/stocks-photo.jpg')",
        "comp-bg": "url('./assets/comp-screen.jpg')",
      },
    },
  },
  plugins: [],
};

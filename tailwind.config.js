/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "stocks-bg": "url('./assets/stocks-photo.jpg')",
        "phone-bg": "url('./assets/phone.jpg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#4a4a4a",
        bg2: "#424242",
      },
    },
  },
  plugins: [],
};

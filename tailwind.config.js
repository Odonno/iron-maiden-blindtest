/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ".625rem",
      },
      colors: {
        primary: "#0A0A0A",
      },
      fontFamily: {
        "iron-maiden": ["Iron Maiden"],
      },
    },
  },
  plugins: [],
};

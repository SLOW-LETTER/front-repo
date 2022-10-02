/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color: {
      'checkedColor': '#3B9904',
      'warningColor': 'rgb(238,96,91,0.8)',

    }
  },
  plugins: [],
};

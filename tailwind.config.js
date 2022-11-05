/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode: 'class',

  theme: {
    extend: {

      borderWidth: {
        '1px': '1px',
      },

      transitionDelay: {
        '600': '600ms',
      }
        
    },
  },
  plugins: [],
}

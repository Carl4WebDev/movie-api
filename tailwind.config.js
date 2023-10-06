
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'}, 

      },
      colors: {
        darkbg: '#20283E',
        blue: {
          850: '#0E7490',
        }
        
      }
    },
  },
  plugins: [],
}
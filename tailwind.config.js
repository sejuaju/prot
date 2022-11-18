/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : "#14151A",
        'secondary' : "#07A9B3"
        
      }
    },
  },
  plugins: [],
}
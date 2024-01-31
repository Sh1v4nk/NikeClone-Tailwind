/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "rgb(245 246 255)",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "palanquin": ["Palanquin", "sans-serif"],
      },
      backgroundImage: {
        "collection": "url('../Assets/images/collection-background.svg')",
        "thumbnail": "url('../Assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
};

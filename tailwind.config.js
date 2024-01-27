/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'palanquin' : ['Palanquin', 'sans-serif'],
      },
      backgroundImage: {
        'collection': "url('../Assets/images/collection-background.svg')",
        'thumbnail': "url('../Assets/images/thumbnail-background.svg')",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '790px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

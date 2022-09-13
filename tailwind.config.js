/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      screens: {
        xl: '1210px',
        '2xl': '1210px',
      },
      fontFamily: {
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        heroBg: "url('../images/hero-bg.svg')",
        'landing-bg': "url('../images/landing-page.jpg')"
      },
      backgroundPosition: {
        introBgPosition: 'calc(50% + 314px) calc(50% - 181px)',
      }
    },
  },
  plugins: [],
}

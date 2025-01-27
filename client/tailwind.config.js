module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        redditDark: {
          DEFAULT: '#030303',
          brighter: '#272728',
        },
        redditBorder: {
          DEFAULT: '#343536',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens:{
      'xsm' : '320px',
    }
  },
  variants : {
    extend: {},
  },
  plugins: [],
}

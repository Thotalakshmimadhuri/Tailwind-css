// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        madhuri: 
{
  50: '#fdfce0',
  100: '#f5f3b9',
  200: '#eeeb90',
  300: '#e7e265',
  400: '#e0da3b',
  500: '#c6c122',
  600: '#9a9618',
  700: '#6e6b0f',
  800: '#424005',
  900: '#171500',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

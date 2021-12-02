module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#d1b0ff"
      },
      backgroundImage: {
        'grid': "url('/images/grid.png')",
      },
      animation: {
        'ltr-linear-infinite': 'move-bg 100s linear infinite',
      },
      // Define keyframes
      keyframes: {
        'move-bg': {
          '0%':   { 'background-position': '0 0' },
          '100%': { 'background-position': '-100vh -100vw'}
        }
      }
    },
    fontFamily: {
      'kroc': ['Londrina Solid', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
}

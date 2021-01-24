module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "neomorphic-light": "20px 20px 60px #cacdd1, -20px -20px 60px #ffffff"
      },
      backgroundColor: {
        "neomorphic-light": 'linear-gradient\(145deg, #ffffff, #d6d9dd\)'
      },
      colors: {
        "neogray": "#d6d9dd"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

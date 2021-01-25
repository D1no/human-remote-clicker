module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "neomorphic-light": "20px 20px 60px #cacdd1, -20px -20px 60px #ffffff",
      },
      backgroundColor: {
        "neomorphic-light": "linear-gradient(145deg, #ffffff, #d6d9dd)",
      },
      colors: {
        neogray: "#d6d9dd",
      },
    },
    maxWidth: {
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

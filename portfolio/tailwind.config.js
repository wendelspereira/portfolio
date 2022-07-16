/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          600: "#607B96",
          900: "#1E2D3D",
        },

        orange: {
          900: "#FEA55F",
        },

        purple: {
          900: "#4D5BCE",
        },
        green: {
          900: "#43D9AD",
        },
      },

      // backgroundImage: {
      //  blurs: "url('/src/public/backgroundBlurs.svg')"
      // },

      fontFamily: {
        fira: ["Fira Code", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
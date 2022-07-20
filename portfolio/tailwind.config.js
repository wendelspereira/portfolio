/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          600: "#607B96",
          900: "#011627",
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
        white: {
          100: "#ffffff",
        },
      },

      gridTemplateAreas: {
        'layout': [
          'primaryBar activityBar tabs',
          'primaryBar activityBar codeBody',
        ],
      },

      
      gridTemplateColumns: {
        'layout': '4.25rem 15rem 2rem',
      },
      gridTemplateRows: {
        'layout': '2.5rem 1fr',
      },

      fontFamily: {
        fira: ["Fira Code", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    import ('@savvywombat/tailwindcss-grid-areas')
  ]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'project_image': "url('/image/project_image.png')",
        'index_blur': "url('/backgroundBlurs.svg')"
      },
      colors: {
        brand: {
          500: "#1C2B3A",
          600: "#607B96",
          800: "#1E2D3D",
          900: "#011627",
          1000: "#011221"
        },

        text: {
          "main": "#607b96",
          "secondary": "#465E77",
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
        purple: {
          900: "#5565E8",
        },
      },

      fontFamily: {
        fira: ["Fira Code", "Roboto", "sans-serif"],
      },
    },
  },
};

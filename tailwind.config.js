/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DEFAULT: "#19161A",
      black: "#19161A",
      white: "#F8F5F0",
      realWhite: "#FFFFFF",
      background: "#F0E4D4",
      lazz: "#E3E3EE",
      holidaze: "#C0D1B9",
      bazaar: "#FFEAE6",
      cta: {
        ctaPrimary: "#5163EF",
        ctaSecondary: "#E0AB7F",
      },
      contrast: {
        contrastPrimary: "#83876A",
        contrastSecondary: "#D5D3C4",
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = "") {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars = typeof value === "string" ? { [`--color${colorGroup}-${colorKey}`]: value } : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ":root": extractColorVars(theme("colors")),
      });
    },
  ],
};

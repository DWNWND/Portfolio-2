/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DEFAULT: "#19161A",
      black: "#19161A",
      beige: "#F8F5F0",
      white: "#FFFFFF",
      background: "#F0E4D4",
      lightPurple: "#E3E3EE",
      lightVibrantPurple: "#D5D5EE",
      cta: {
        primary: "#5163EF",
        primaryBright: "#3E35BC",
        primaryDull: "#656FBE",
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

// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gorfeelt: {
        50: "#F2E0CE",
        100: "#DAC4AE",
        200: "#BFA78F",
        300: "#A68D74",
        400: "#8C745B",
        500: "#735C45",
        600: "#594531",
        700: "#403020",
        800: "#261C11",
        900: "#0D0905",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        dots: "url('/dots.svg')",
      },
    },
  },
  plugins: [],
};

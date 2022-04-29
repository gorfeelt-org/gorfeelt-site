// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gorfeelt: {
        50: "#F7E6CC",
        100: "#DAC3A4",
        200: "#BAA280",
        300: "#9E8665",
        400: "#836D50",
        500: "#69563E",
        600: "#4A3B28",
        700: "#2D2315",
        800: "#1D160D",
        900: "#17100A",
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

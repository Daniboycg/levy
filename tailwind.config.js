// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#542219",
        secondary: "#0B2529",
        accent: "#A84D31",
        background: "#130202",
        chatGradient: {
          start: "#542219",
          middle: "#0B2529",
          end: "#215259",
        },
        chatContainer: {
          start: "#0B2529",
          end: "#489193",
        },
      },
    },
  },
  plugins: [],
};

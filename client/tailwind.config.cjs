module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseBG: "#EBCB8B",
        navBG: "#BF616A",
        navHeading: "#383838",
        navBtn: "#D08770",
        card: "#A3BE8C",
      },
    },
  },
  plugins: [require("daisyui")],
};

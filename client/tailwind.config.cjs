module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseBG: "#eaf7fd",
        navBG: "#83d4ef",
        navHeading: "#383838",
        navSelectorLabel: "#383838",
        navSelectorChecked: "#ff5156",
        shlokCardBG: "#cdedf8",
        shlokText: "#383838",
        blurBG: "#Fcc2a1",
        blurHoverBG: "#cdedf8",
      },
    },
  },
  plugins: [require("daisyui")],
};

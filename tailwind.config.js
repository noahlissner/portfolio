module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "c-light-high": "#1f1a17",
        "c-light-low": "",
        "c-light-bg": "#ffffff",
        "c-dark-bg": "#121212",
        "c-dark-high": "#ffffffde",
        "c-dark-medium": "#ffffff80",
        "c-dark-low": "#ffffff61",
        "c-primary": "#0079FF",
      },
    },
  },
  plugins: [],
};

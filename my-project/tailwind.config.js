/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        BGLightGrayishCyan /* (Background) */: "hsl(180, 52%, 96%)",
        LightGrayishCyan /* (Filter Tablets) */: "hsl(180, 31%, 95%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        LeagueSpartan: ["League Spartan", "sans-serif"],
      },
    },
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};

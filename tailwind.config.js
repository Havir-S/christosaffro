/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*/**.{js,ts,jsx,tsx,mdx}",
    "./app/**/**/**.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        color1: "#d2a517",
        color2: "#03061d",
        color3: "#444655",
        color4: "#a8aabc",
        color5: "#281f08",
      },
      fontFamily: {
        lobsterTwo: ["var(--font-lobsterTwo)"],
        prozaLibre: ["var(--font-prozaLibre)"],
        overPass: ["var(--font-overPass)"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gray_primary: "#c4c4c4",
        black_primary: "#0a0a0a",
        white_primary: "#ededed",
      },
      fontFamily: {
        title: ["var(--font-title)"],
        text: ["var(--font-text)"],
      },
    },
  },

  plugins: [require("tailwindcss-animated"), nextui()],
};

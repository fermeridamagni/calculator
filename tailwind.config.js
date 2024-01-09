/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      colors: {
        'gray-primary': '#c4c4c4',
        'black-primary': '#202020',
        'white-primary': '#ededed',
      },
      fontFamily: {
        'title': ['var(--font-title)'],
        'text': ['var(--font-text)'],
      }
    }
  },
  
  plugins: [
    require('tailwindcss-animated'),
    nextui()
  ],
};
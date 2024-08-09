/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caviar: ["CaviarDreams"],
        vhs: ["Easvhs"]
      },
      colors: {
        'text': '#ecedf0',
        'background': '#08080a',
        'primary': '#b2b4c3',
        'secondary': '#51495e',
        'accent': '#91809d',
      },

    },
  },
  plugins: [],
}


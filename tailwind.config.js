/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        caviar: ["CaviarDreams"],
        vhs: ["Easvhs"]
      },
      colors: {
        'text': '#eeede6',
        'background': '#181610',
        'primary': '#c2bba6',
        'secondary': '#446457',
        'accent': '#7592a1',
       },       
    },
  },
  plugins: [],
}


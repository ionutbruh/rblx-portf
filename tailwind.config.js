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
        'text': '#d7d7d2',         
        'background': '#12100d',   
        'primary': '#8c8475',      
        'secondary': '#5a6e63',    
        'accent': '#7a8e98',       
      },    
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:  {
    colors: {
      'green': '#14532d',
      'lightgreen': '#15803d',
      'lime': '#7FFF00',
      'lemon': '#5EDC1F',
      'leafgreen': '#228B22',
      'black': '#000000',
      'lightblack': '#1B1212',
      'slate': '#f8fafc',
      'beige': '#FFFFFF',

    },
    screens: {
      'sm': '480px',
     
      'md': '768px',
     
      'lg': '976px',
      
      'xl': '1440px',
   
      '2xl': '1536px',
    
    }
    },
    extend: {
      
  },
  plugins: [],
}

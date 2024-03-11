/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: { 
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%', 
        primary: '#89CFF0',
        orens: {
          100: '#DAA06D',
          200: '#CD7F32',
          300: '#D27D2D',
          400: '#B87333',
          500: '#E49B0F',
        }
      },
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
        play:["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}



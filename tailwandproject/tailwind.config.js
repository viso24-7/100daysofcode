const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md:'760px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%)',
        veryLightGray:'hsl(0,0%,90%)'
      },
      animation: {
        cimi: 'cimi 4s ease-in-out infinite'
      },
      keyframes: {
        cimi:{
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' },
        }
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        strongCyan: 'hsl(170, 65%, 43%)',
        lightBlue: 'hsl(231, 98%, 65%)',
        darkGrayishBlue: 'hsl(209, 15%, 35%)',
        grayishBlue: 'hsl(200, 10%, 64%)',
      },
      fontFamily:{
        sans:['Bai Jamjuree', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

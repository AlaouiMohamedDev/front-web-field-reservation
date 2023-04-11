/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius:{
        '12':'5rem',
      },
      zIndex: {
        '100': '100',
        '90':'90'
      },
      colors:{
        'main':'#03C988',
        'Cblue' :'#001022',
        'dashBlack':'#212529',
        'custGreen':'#0ab39c'
      },
      fontFamily:{
        'roboto':['Roboto', 'sans-serif'],
        'poppins':['Poppins', 'sans-serif'],
        'archivo': ['Archivo Narrow', 'sans-serif']
      },
      backgroundImage:{
        'home':'url("/images/bg-home.jpg")',
        'dashUser':'url("/images/owner.jpg")',
        'field1':'url("/images/field-1.jpg")'
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 0rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 3rem',
      }
    },
  },
  plugins: [],
}

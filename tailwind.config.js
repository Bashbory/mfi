/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/input.css',
  './pages/**/*.{html,js}',
  
],
safelist: [
  '!duration-[0ms]',
  '!delay-[0ms]',
  'html.js :where([class*="taos:"]:not(.taos-init))'
],

  theme: {
    extend: {
      fontFamily: {
        'maven': ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("daisyui"),
    
  ],
}


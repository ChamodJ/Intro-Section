/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'AWhite': 'hsl(0, 0%, 98%)',
        'MGray': 'hsl(0, 0%, 41%)',
        'ABlack': 'hsl(0, 0%, 8%)'
      },

      screens: {
        'sm' : '710px'
      },
    },
  },
  plugins: [],
}
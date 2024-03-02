/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-light-cyan': 'hsl(193, 38%, 86%)',
        'custom-neon-green': 'hsl(150, 100%, 66%)',
        'custom-grayish-blue': 'hsl(217, 19%, 38%)',
        'custom-dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'custom-dark-blue': 'hsl(218, 23%, 16%)',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': '#FFA500'
        // {
        //   DEFAULT: '#FFA500',
        //   dark: '#FF8C00', // Darker shade of orange
        //   light: '#FFD700', // Lighter shade of orange
        // }
      }
    },
  },
  plugins: [],
}


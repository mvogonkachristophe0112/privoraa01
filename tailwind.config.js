/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0A2540',
          'blue-light': '#1E3A8A',
        },
        secondary: {
          green: '#0F766E',
          'green-light': '#10B981',
        },
        background: {
          soft: '#F8FAFC',
          white: '#FFFFFF',
        },
      },
      backgroundImage: {
        'gradient-blue-green': 'linear-gradient(to right, #0A2540, #0F766E)',
      },
    },
  },
  plugins: [],
}
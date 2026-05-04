/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-dark': '#0a0e27',
        'cosmic-blue': '#1a1f3a',
        'saffron': '#ff9933',
        'saffron-dark': '#ff6600',
        'gold': '#ffd700',
        'india-green': '#138808',
        'india-green-light': '#22c55e',
        'peacock-green': '#22c55e',
        'peacock-blue': '#3b82f6',
        'cream': '#f5f1e8',
      },
      fontFamily: {
        sans: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Bungee', 'cursive'],
        accent: ['Rubik Glitch', 'cursive'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
}

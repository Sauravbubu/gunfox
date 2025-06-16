/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // <-- Crucial for Create React App
    // Add other paths if your components are in different places
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // <--- This enables dark mode via class
  theme: {
    extend: {
      // ... your existing theme extensions
      fontFamily: {
        elegant: ['"Playfair Display"', "serif"],
        sans: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'], // Make sure Inter is here if used
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: { // Ensure these are defined if your animations use them
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: { // Ensure these are defined if your animations use them
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      animation: {
        gradient: "gradientShift 6s ease infinite",
        'fade-in-up': 'fadeInUp 1s ease-out forwards', // And here
        'blob': 'blob 7s infinite', // And here
      },
    },
  },
  plugins: [],
};
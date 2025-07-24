/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include the app directory
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      perspective: {
        1000: '1000px',
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        colors: {
        gnufox: {
          DEFAULT: '#F28C28',
          dark: '#d9761e',
        },
      },
      },
      animation: {
        gradient: "gradientShift 6s ease infinite",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      fontFamily: {
        elegant: ['"Playfair Display"', "serif"],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

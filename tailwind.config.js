/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backdropBlur: {
        lg: '16px',
      },
      fontFamily: {
        sans: ['"InterVariable"', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      keyframes: {
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        switch: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        }
      },
      animation: {
        underline: 'underline 0.3s ease-out',
        switch: 'switch 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
}

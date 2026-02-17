/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5035ff",
        secondary: "#dd23bb",
        accent: "#82c9ff",
        "neutral-dark": "#222222",
        "neutral-light": "#eeeeee",
      },
      fontFamily: {
        sans: ["Geist", "Arial", "sans-serif"],
        serif: ["Fields", "Arial", "serif"],
      },
      borderRadius: {
        'pill': '60px',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}


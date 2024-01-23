/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#F7A582',
        font: '#607B96'
      },
      fontFamily: {
        firaCode: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}


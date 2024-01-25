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
        font: '#607b96',
        border: '#334155'
      },
      fontFamily: {
        firaCode: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}


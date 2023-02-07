/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        error: 'hsl(var(--color-error) / <alpha-value>)',
        subtitle: 'hsl(var(--color-subtitle) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

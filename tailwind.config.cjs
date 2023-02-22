/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "hsl(274, 82% 60%)",
          error: "hsl(0,100%,66%)",
          info: "black",
          "base-100": 'hsl(274, 82% 60%)',
          "base-200": '#E5E7EB',
          "primary-focus": "mediumblue",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: 'hsl(220, 13%, 91%)',
          neutral: "white",
          info: 'hsl(220, 13%, 91%)',
          "base-100": 'hsl(274, 82% 60%)',
          'background-color': 'black',
          'toggle-primary': "hsl(274, 82% 60%)",
          "togglehandleborder": "hsl(220, 13%, 91%)"
        },
      },
    ],
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e67e22',
        secondary: '#3498db',
      },
      backgroundColor: {
        base: '#f2f2f2',
      },
      textColor: {
        base: '#333333',
      },
    },
  },
  plugins: [],
}

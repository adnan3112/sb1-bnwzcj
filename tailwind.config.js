/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#071952',
        secondary: '#088395',
        accent: '#37B7C3',
        light: '#EBF4F6',
        dark: '#1a1a1a',
      },
    },
  },
  plugins: [],
};
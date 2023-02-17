/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// module.exports = {
//   mode: 'jit',
//   darkMode: 'class', // or 'media' or 'class'
//   theme: {},
//   variants: {},
//   plugins: []
// }
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}

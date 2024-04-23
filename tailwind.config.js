/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'maru-extra-light': ['MaruBuriExtraLight', 'sans-serif'],
        'maru-light': ['MaruBuriLight', 'sans-serif'],
        'maru-regular': ['MaruBuri', 'sans-serif'],
        'maru-bold': ['MaruBuriBold', 'sans-serif'],
        'maru-semi-bold': ['MaruBuriSemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D3250',
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
  corePlugins: {
    preflight: false,
  },
};

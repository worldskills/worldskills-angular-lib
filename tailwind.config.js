/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/**/*.{html,ts,scss,css}",
    "./src/**/*.{html,ts,scss,css}"   // if anything at root
  ],
  plugins: [
    require('tailwindcss-primeui')
  ],
  corePlugins: {
    preflight: false   // still good with PrimeNG
  }
  // ... other settings
};
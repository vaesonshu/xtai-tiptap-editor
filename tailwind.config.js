/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{ts,tsx,js,jsx}',
    './packages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: { extend: {} },
  plugins: [require('@tailwindcss/typography')]
}

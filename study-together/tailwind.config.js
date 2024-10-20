/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-1': '#242424', // Add your custom color here
        'custom-gray-2' : '#302f2fa9',
      },
    },
  },
  plugins: [],
}
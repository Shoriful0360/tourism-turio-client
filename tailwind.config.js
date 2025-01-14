/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:'#54A15D'
      },  minHeight: {
        'screen-70': '60vh', // 70% of the viewport height
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
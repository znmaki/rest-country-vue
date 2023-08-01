/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custze': '-1px 5px 15px 0px rgba(0,0,0,0.55)',
        'custze-2': '0px 0px 9px 2px rgba(0,0,0,0.55)',
      }
    },
  },
  plugins: [],
}


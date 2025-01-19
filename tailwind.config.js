/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        redColor : "#d52d2a",
        whiteColor : "#fdfffe",
        darkColor : "#212129",
        grayColor : "#7d7f7e",
        easyGrayColor : "#f1f1f1",
        darkEndFooterColor : "#17171f",
      }
    },
  },
  plugins: [],
}


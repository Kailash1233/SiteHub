/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Mont: "Montserrat",
        Noto: "Noto Sans"
      },
    },
  },
  plugins: [],
}


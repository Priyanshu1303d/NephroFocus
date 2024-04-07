/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#FD356E",
        yellowColor:"#FEB60D",
        purpleColor:"#2B124C",
        irisBlueColor:"#01B5C5",
        headingColor:"#181A1E",
        textColor:"#4E545F",
      },
      boxShadow:{
        panelShadow:"rgba(17,12,46,0.15) 0px 48px 100px 0px;",
      }
    },
  },
  plugins: [],
}

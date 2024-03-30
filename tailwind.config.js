/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Mygrey: {
          500: '#48515C',
        },
        myBlue:{
          500:'#146eb4'
        },
        myDarkblue:{
          500:'#0e4f82'
        },
        myLightblue:{
          500:'#1174c2'
        },
        myLightgrey:{
          500:"#f2f2f2"
        },
        mySearchgrey:{
          500:'#808080'
        }
      }
    },
  },
  plugins: [],
}
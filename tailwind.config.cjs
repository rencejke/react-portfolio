/** @type {import('tailwindcss').Config} */
export default {
  content : ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      
      colors:
      {
        overlay1: 'rgb(0, 0, 0)',
        overlay2: 'rgba(0, 0, 0, 0.5)',
      },

      fontFamily: 
      {
        black: "Poppins-Black",
        regular: "Poppins-Regular",
        thick: "Poppins-Medium",
        thicker: "Poppins-Bold"
      },
    },
  },
  plugins: [],
}


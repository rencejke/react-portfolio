/** @type {import('tailwindcss').Config} */
export default {
  content : ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {

      screens: {
        
        'xs': '320px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      
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

      animation: {
        'move-down': 'move-down 2s infinite',
      },

      keyframes: {
        'move-down': {
          '0%': { transform: 'translateY(0)', opacity: '0.5' },
          '100%': { transform: 'translateY(40px)', opacity: '0' },
        },
    },
  },
},
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primary: "#33A5A8",
        lightBackground: "#F5FAFA",
        textColor: "#323D3D",
        muted: "#5F6464",
        borderColor: "#C4C9C9",
        dark: "#1F2222",
        lightColor: "#CCCED6",
        footer: "#111729"
      },
      fontFamily: {
        aeonik: ["Aeonik"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}


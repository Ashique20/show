/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E0115F",
          secondary: "#282828",
          accent: "#37cdbe",
          neutral: "#3d4451",
         
        },
      },
     
     
    ],
  },
  plugins: [require("daisyui")],
  
}
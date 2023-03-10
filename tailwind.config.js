/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0fcfec",
          secondary: "#19d3ae",
          accent: "#3a4256",
          neutral: "#939393",
          "base-100": "#ffffff",
        },
      },
      //  "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};

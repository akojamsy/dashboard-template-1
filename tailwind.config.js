/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // ...
        mouve: {
          primary: "#9A0536",
        },
        primaryVariantOne: "#9A0536",
        grayVariantOne: "#606060",
        // ...
      },
    },
  },
  plugins: [],
};

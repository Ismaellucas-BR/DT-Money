/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          "green-30": "#00B37E",
          "green-50": "#00875F",
          "green-70": "#015F43",
        },
        red: {
          "red-30": "#F75A68",
          "red-50": "#Ab222e",
          "red-70": "#7a1921",
        },
        base: {
          "gray-10": "#E1E1E6",
          "gray-30": "#C4C4CC",
          "gray-40": "#8d8d99",
          "gray-50": "#7C7C8A",
          "gray-60": "#323238",
          "gray-70": "#29292E",
          "gray-80": "#202024",
          "gray-90": "#121214",
          white: "#FFFFFF",
          blackkk: "#000000",
        },
      },
    },
  },
  plugins: [],
};

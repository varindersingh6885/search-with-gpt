/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-delight": "#e5e5e5",
        "blue-delight": "#619EE5",
        "green-delight": "#15af55",
      },
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [],
};

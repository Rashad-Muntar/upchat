/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      white: "#ffff",
      green: "#13ce66",
      yellow: "#ffc82c",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
};

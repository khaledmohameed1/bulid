/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "#4d72fb",
        bgColorfoter: "#091035",
      },
      colors: {
        textHover: "#4d72fb",
      },
    },
  },
  plugins: [],
};

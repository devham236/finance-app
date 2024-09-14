/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        container_color: "#e4e4e7",
        text_color: "#4d4d4d",
      },
    },
  },
  plugins: [],
};

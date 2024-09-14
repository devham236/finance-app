/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        container_color_light: "#e4e4e7",
        text_color_light: "#4d4d4d",
        text_color_dark: "#f0f0f0",
      },
    },
  },
  plugins: [],
};

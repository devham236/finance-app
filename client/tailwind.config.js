/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        body_color_light: "#d4d4d8",
        body_color_dark: "#1e293b",

        container_color_light: "#e4e4e7",
        container_color_dark: "#334155",

        text_color_light: "#4d4d4d",
        text_color_dark: "#f0f0f0",

        item_color_light: "#f9fafb",
        item_color_dark: "#1e293b",

        green_color: "#3e9c35",
        red_color: "#bf3232",
      },
    },
  },
  plugins: [],
};

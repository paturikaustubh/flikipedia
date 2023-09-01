/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fliki: {
          100: "#ffe2cc",
          200: "#ffc599",
          300: "#ffa966",
          400: "#ff8c33",
          500: "#ff6f00",
          600: "#cc5900",
          700: "#994300",
          800: "#662c00",
          900: "#331600",
        },
        pedia: {
          100: "#ccf2ff",
          200: "#99e5ff",
          300: "#66d9ff",
          400: "#33ccff",
          500: "#00bfff",
          600: "#0099cc",
          700: "#007399",
          800: "#004c66",
          900: "#002633",
        },
      },
    },
  },
  plugins: [],
};

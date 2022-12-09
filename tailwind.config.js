module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          grey: "#333333",
        },
        grey: {
          DEFAULT: "#D5D8DF",
          light: "#F7F7F7",
        },
        white: {
          DEFAULT: "#fff",
          100: "#F5F7F9",
          200: "#EFF3F6",
          300: "#E9EBEF",
        },
        "gold-1": "#FBC100",
        "gray-12": "#eff3f6",
        yellow: {
          DEFAULT: "#FBC100",
        },
        red: {
          DEFAULT: "#f91155",
        },
      },

      borderRadius: {
        none: "0",
        DEFAULT: "8px",
        10: "10px",
        12: "12px",
      },

      screens: {
        360: "360px",
        400: "400px",
        420: "420px",
        450: "450px",
        480: "480px",
        500: "500px",
        520: "520px",
        575: "575px",
        640: "640px",
        768: "768px",
        1000: "1000px",
        1024: "1024px",
        1250: "1250px",
        1300: "1300px",
        1400: "1400px",
      },
    },
  },
  plugins: [],
};

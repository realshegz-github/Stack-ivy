/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "blurry-xl": "0 10px 20px rgba(0, 0, 0, 0.3)",
        "2xl-blurry": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        glassy: "0 25px 50px -12px rgba(255, 255, 255, 0.8)",
      },
      colors: {
        primary: "#3D0072",
        secondary: "#8807F7",
      },

      screens: {
        xx: "400px",
        xs: "480px",
        ss: "596px",
        sm: "768px",
        md: "1060px",
        lg: "1240px",
        xl: "1440px",
        "2xl": "1512px",
      },
      fontSize: {
        base: [
          "1rem",
          {
            fontWeight: "400",
          },
        ],
        sm: [
          "1.5rem",
          {
            fontWeight: "500",
          },
        ],
        lg: [
          "2.5rem",
          {
            fontWeight: "700",
          },
        ],
        xl: [
          "5rem",
          {
            fontWeight: "800",
          },
        ],
        "2xl": [
          "5.9375rem",
          {
            fontWeight: "800",
          },
        ],
      },
    },
  },
  plugins: [],
};

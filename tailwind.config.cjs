/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        800: "#1f2937",
      },
    },
    screens: {
      mobile: { max: "430px" },
      // 430 for iphone 13 pro max..
      // => @media (max-width: 425px) { ... }

      tablet: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      laptop: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
    },
    fontSize: {
      xs: "0.5rem",
      sm: "0.75rem",
      base: "1rem",
      xl: "1.5rem",
      xxl: "2rem",
    },
  },
  plugins: [],
};

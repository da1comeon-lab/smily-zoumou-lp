import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fbf7f0",
        linen: "#f3eadf",
        almond: "#e8d9c9",
        cocoa: "#6f5140",
        walnut: "#3f3028",
        blush: "#d99b8c",
        sage: "#87947c"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(73, 55, 43, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;

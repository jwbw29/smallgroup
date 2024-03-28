import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "linear-gradient(to bottom, #4895EF, #4CC9F0)",
      },
      colors: {
        primary: "#4895EF",
        secondary: "#4CC9F0",
      },
    },
  },
  plugins: [],
};
export default config;

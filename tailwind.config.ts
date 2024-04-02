import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 8px rgba(0, 0, 0, 0.38)", // x=4, y=4, blur=8, transparency=38%
      },
      backgroundImage: {
        background: "linear-gradient(to bottom, #4895EF, #4CC9F0)",
      },
      colors: {
        primary: "#4895EF",
        secondary: "#4CC9F0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;

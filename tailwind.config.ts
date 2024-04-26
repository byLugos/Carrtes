import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        whiteBg: "#FFF5E4",
        lightRose: "#FFE3E1",
        mediumRose: "#FFD1D1",
        hardRose: "#FF9494",
        textTitle: "#1E1E1E",
        textParagraph: "#424242",
      },
    },
  },
  plugins: [],
};
export default config;

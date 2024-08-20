import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      color1: "#D94D1A",
      color1_1 : "#F87443",
      color1_2: "#E55927",
      color1_3: "#CC420F",
      color1_4: "#6F1A00",
      color1_5: "#B02F00",
      color1_6: "6F1A00",

      color2: "#262626",
      color2_1: "#B0B0B0",

      color3: "#622717",
      color3_1: "#9C432A",
      color3_2: "#7F341F",
      color3_3: "#F09B82",

      black: "#121212",
      white: "#F2F2F2",
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

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
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: '0'
          },
          "100%": {
            opacity: '1'
          },
        },
        "delayed-fade-in": {
          "0%": {
            opacity: '0'
          },
          "66%": {
            opacity: '0'
          },
          "100%": {
            opacity: '1'
          },
        }
      },
      animation: {
        fadein: 'fade-in 1s ease-in-out 1',
        latefadein: 'delayed-fade-in 2s ease-in-out 1',
      },
    },
  },
  plugins: [],
};
export default config;

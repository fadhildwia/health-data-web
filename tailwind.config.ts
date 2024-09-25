import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#EEF5FF',
        blueSky: '#C7DEFF',
        blueCustom: '#407BFF',
        secondary: '#F8E062',
        orangeCustom: '#EAB112',
        redCustom: '#FF5A5A'
      },
    },
  },
  plugins: [],
};
export default config;

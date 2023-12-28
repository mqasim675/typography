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
        primary: "#DD1E33",
        "primary-text": "#111928",
        secondary: "#1B4689",
        "secondary-text": "#3E424B",
        white: "#FFFFFF",
        gray1: "#484E58",
        gray2: "#595F6B",
        gray3: "#7E8695",
        gray4: "#B3BED1",
        gray5: "#DBE3F0",
        gray6: "#EFF1F6",
      },
    },
  },
  plugins: [],
};
export default config;

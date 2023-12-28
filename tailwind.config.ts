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
        "gray-1": "#484E58",
        "gray-2": "#595F6B",
        "gray-3": "#7E8695",
        "gray-4": "#B3BED1",
        "gray-5": "#DBE3F0",
        "gray-6": "#EFF1F6",
      },
    },
  },
  plugins: [],
};
export default config;

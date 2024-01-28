import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    container: false,
    margin: false,
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["fantasy"],
  },
} satisfies Config
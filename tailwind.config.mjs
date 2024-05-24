import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["Cinzel Decorative", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/images/poolarea6.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
      serif: ["Cinzel Decorative", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/src/images/poolarea6.jpg')",
        "homepage-image": "url('/src/images/beach.jpg')",
        "mobile-menu-bg": "url('/src/images/media/mobileMenuBg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

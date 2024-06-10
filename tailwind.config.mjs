import defaultTheme from "tailwindcss/defaultTheme";
import ui from "franken-ui";
import preset from "franken-ui/shadcn-ui/preset";

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
        "mobile-menu-bg": "url('/src/images/media/mobileMenuBg.jpg')",
        "homepage-video": "url('https://youtu.be/94YPSdHHkDc')",
      },
    },
  },
  presets: [preset],
  safelist: [
    {
      pattern: /^uk-/,
    },
  ],
  plugins: [
    require("@tailwindcss/forms"),

    ui({
      components: {
        lightbox: { hooks: {} },
        slidenav: {
          hooks: {},
        },
        grid: {
          hooks: {},
          media: true,
        },
        icon: {
          hooks: {},
        },
        position: {
          hooks: {},
          media: true,
        },
        transition: {
          hooks: {},
        },
        text: {
          hooks: {},
          media: true,
        },
      },
    }),
  ],
};

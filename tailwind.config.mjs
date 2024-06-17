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
        "hero-image-about": "url('/src/images/media/headerOne.jpg')",
        "hero-image-gallery": "url('/src/images/media/headerTwo.jpg')",
        "hero-image-stay": "url('/src/images/media/headerThree.jpg')",
        "hero-image-book": "url('/src/images/media/headerFour.jpg')",
        "homepage-image": "url('/src/images/media/homepageHeader.jpg')",
        "mobile-menu-bg": "url('/src/images/media/mobileMenuBg.jpg')",
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
        close: {
          hooks: {},
        },
      },
    }),
  ],
};

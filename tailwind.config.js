import { MakeFamily } from './src/assets/fontFamily';

const pathSrc = './src/**/*.{html,js,jsx,ts,tsx,css}';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [pathSrc],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: MakeFamily,
      animation: {
        fade: 'fade-show linear 0.5s 1 0.1s normal forwards',
      },
      keyframes: {
        'fade-show': {
          from: {
            opacity: 0,
            transform: 'scale(1.5) translateY(1rem)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1) translateY(0)',
          },
        },
      },
    },
  },
  purge: [pathSrc],
  plugins: [],
};

export default config;

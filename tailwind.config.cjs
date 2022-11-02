/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        slide: 't ease 0.5s forwards',
      },
      keyframes: {
        t: {
          from: { opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgb(222, 62, 81)',
        'custom-red-light': 'rgb(219, 89, 105)',
      },
    },
  },
  plugins: [],
};


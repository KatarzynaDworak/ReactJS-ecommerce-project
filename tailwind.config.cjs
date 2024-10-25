/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#F8E1E7',    // Jasny róż jako tło
        'custom-cta': '#E91E63',     // Kolor CTA, głęboki róż
        'custom-dark': '#333',       // Ciemny szary dla kontrastu tekstu
        'custom-light': '#FAFAFA',   // Delikatny kremowy kolor jako tło
      },
    },
  },
  plugins: [],
};


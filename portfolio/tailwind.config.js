/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include TS and TSX files for TypeScript support
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example custom color
      },
    },
  },

  plugins: [],
};

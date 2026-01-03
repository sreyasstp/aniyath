/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B3C5D',        // Dark Blue
        primaryHover: '#092F49',   // Hover Dark Blue
        accent: '#1D6FA5',         // Accent Blue
        lightBg: '#EAF2F8',        // Soft background
      },
      fontFamily: {
        sans: [
          'Open Sans',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};

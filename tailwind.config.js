/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',   // your main HTML file
    './script.js',    // your JS file
    './*.html'        // any other HTML in the root
  ],
  safelist: ['text-madhav', 'text-primary', 'hover:text-primary'],
  theme: {
    extend: {
      colors: {
        madhav: 'olive',
        primary: 'magenta',
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}",
  'node_modules/flowbite-react/lib/esm/**/*.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

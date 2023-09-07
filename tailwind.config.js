/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  prefix: "tw-",
  important: true,
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

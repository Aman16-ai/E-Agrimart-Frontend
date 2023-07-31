/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/hero3.jpg')",
        "main-logo" :"url('/assests/E-Agrimart-logos-jpeg')",
        "regiration-img":"url('/assests/r-img.png')",
        "primary" : "#FCBF49"
      },
      colors: {
        "hero-primary" : "rgba(0, 0, 0, 0.5)",
        "test-color" : 'yellow',
        'btn-primary' : "#FCBF49",
        'btn-secondary' : "#006CE4"
      }
    },
  },
  plugins: [],
};

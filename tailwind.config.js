module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require( "@tailwindcss/typography" ),
    require( "@tailwindcss/forms" ),
    require( "@tailwindcss/aspect-ratio" ),
    require( "@tailwindcss/line-clamp" ),
    // require( "daisyui" ),
    require( "prettier-plugin-tailwindcss" )
  ],
};

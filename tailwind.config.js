/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto'],
        header: ['Red Hat Display'],
        hero: ['Red Hat Mono'],
        settings: ['Noto Sans'],
        poppins: ['Poppins'],
        regular: ['Noto Sans'],
        space: ['Space Grotesk'],
        inter: ['Inter'],
        intermedium: ['Inter']
      },
      fontSize: {
        'credit': '0.875rem',
      }      
    },
  },
  plugins: [],
}

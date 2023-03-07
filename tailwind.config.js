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
      },
      fontSize: {
        'credit': '0.875rem',
      }      
    },
  },
  plugins: [],
}

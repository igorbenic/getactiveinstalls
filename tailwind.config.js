module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      fontFamily: {
       'sans': ['Roboto', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
       'body': ['Roboto']
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
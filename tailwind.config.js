/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          background: '#FAFAFA',
          card: '#F3F2F2',
          input: '#EDEDED',
          button: '#E6E5E5',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subtitle: '#403937',
          title: '#272221',
          error: '#f84747',
        },
        brand: {
          'purple-dark': '#4B2995',
          purple: '#8047F8',
          'purple-light': '#EBE5F9',
          'yellow-dark': '#C47F17',
          yellow: '#DBAC2C',
          'yellow-light': '#F1E9C9',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}

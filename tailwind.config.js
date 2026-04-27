/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream:      '#F5ECD7',
        'cream-mid':'#E8D5B0',
        brown: {
          DEFAULT: '#2C1A0E',
          light:   '#6B4C2A',
          muted:   '#9B7B5C',
        },
        burnt:  '#C4501A',
        gold:   '#B8860B',
        sand:   '#D4A96A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url('/images/grain.svg')",
      },
      letterSpacing: {
        widest2: '0.25em',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2A5A',
          light:   '#1E3A70',
          dark:    '#0A1F42',
        },
        vibrant: {
          DEFAULT: '#FF6B35',
          light:   '#FF8C61',
          orange:  '#F7931E',
        },
        teal: {
          DEFAULT: '#00B4D8',
          dark:    '#0096C7',
        },
        neutral: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          600: '#64748B',
          900: '#1E293B',
        },
      },
      fontFamily: {
        sans:  ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
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

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      serif: ['Fraunces', 'serif'],
    },
    colors: {
      'dark-cyan': '#0E8784',
      'light-cyan': '#66D2CF',
      'dark-blue': '#333D4B',
      'pale-orange': '#FDD6BA',
      'light-cream': '#FEFCF7',
      'dark-cream': '#F4F1EB',
      'light-gray': '#E2DEDB',
      'neutral-gray': '#83888F',
      white: '#FFF',
      black: '#000',
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
      },
    },
  },
  plugins: [],
};

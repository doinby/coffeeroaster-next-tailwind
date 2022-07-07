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
      red: '#EF4444',
    },
    extend: {
      backgroundImage: {
        'home-hero-mobile':
          "url('/assets/home/mobile/image-hero-coffeepress.jpg')",
        'about-hero-mobile':
          "url('/assets/about/mobile/image-hero-whitecup.jpg')",
        'subscribe-hero-mobile':
          "url('/assets/plan/mobile/image-hero-blackcup.jpg')",
      },
    },
  },
  plugins: [],
};

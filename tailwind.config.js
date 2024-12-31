/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightWhite: 'rgba(255, 255, 255, 0.88)',
        deepWhite: 'rgba(255, 255, 255, 0.50)',
        faintWhite: 'rgba(255, 255, 255, 0.60)',
        lightBlack: 'rgba(0, 0, 0, 0.40)',
        deepBlack: 'rgba(0, 0, 0, 0.92)',
        faintBlack: 'rgba(0, 0, 0, 0.80)',
        lightGrey: 'rgba(0, 0, 0, 0.60)',
        faintGrey: 'rgba(0, 0, 0, 0.50)',
        deepRed: '#FF3B30',
        darkBlack: '#111111',
      },
      background: {
        lightGrey: 'rgba(0, 0, 0, 0.50)',
        darkGrey: 'rgba(0, 0, 0, 0.75)',
        deepGreen: '#4D8C46',
        deepPurple: '#8C467C',
        deepPink: '#8C4646',
        lightBlack: 'rgba(0, 0, 0, 0.9)',
        transparentWhite: 'rgba(255, 255, 255, 0.40)',
        deepWhite: 'rgba(255, 255, 255, 0.75)',
        faintDark: 'rgba(0, 0, 0, 0.80)',
        deepBlack: 'rgba(0, 0, 0, 0.88)',
        faintGrey: 'rgba(255, 255, 255, 0.15)',
      },
    },
  },
  plugins: [],
};

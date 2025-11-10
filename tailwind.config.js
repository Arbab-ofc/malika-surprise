/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'romantic-pink': '#FFB6C1',
        'soft-pink': '#FFE0EC',
        'rose-gold': '#B76E79',
        'lavender': '#E6E6FA',
        'purple-gold': '#8B7AB8',
        'champagne': '#F7E7CE',
        'blush': '#F08080',
        'carnation': '#FFA6C9',
        'baby-pink': '#F4C2C2',
        'sweet-purple': '#D8BFD8',
        'love-red': '#FF69B4',
        'gold': '#FFD700',
      },
      fontFamily: {
        'romantic': ['Georgia', 'serif'],
        'cute': ['Comic Sans MS', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-delayed-more': 'float 6s ease-in-out infinite 4s',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heart-beat': 'heart-beat 1.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'sparkle': 'sparkle 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'heart-beat': {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.1)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'romantic-gradient': 'linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 25%, #FFD700 50%, #F4C2C2 75%, #FFA6C9 100%)',
        'love-gradient': 'linear-gradient(135deg, #FF69B4 0%, #FFB6C1 50%, #8B7AB8 100%)',
      },
      backgroundSize: {
        '300%': '300%',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 182, 193, 0.5)',
        'glow-lg': '0 0 40px rgba(255, 182, 193, 0.7)',
        'heart': '0 0 30px rgba(255, 105, 180, 0.6)',
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#0A0807',
          900: '#130F0D',
          800: '#1D1714',
          700: '#2A211C',
          600: '#3A2E27',
          500: '#544037',
          400: '#7A5E52',
          300: '#A08676',
          200: '#C9B3A3',
          100: '#E4D5C7',
          50: '#F5ECE1',
        },
        ember: {
          900: '#4A1508',
          800: '#6F1F0C',
          700: '#942910',
          600: '#BC3414',
          500: '#E14220',
          400: '#EE5F38',
          300: '#F48159',
          200: '#F8A685',
          100: '#FCD0BC',
          50: '#FDEAE0',
        },
        blaze: {
          900: '#4A3207',
          800: '#6E490B',
          700: '#93610F',
          600: '#BA7A15',
          500: '#E2951F',
          400: '#ECAF47',
          300: '#F2C576',
          200: '#F7DBA6',
          100: '#FBEDCE',
          50: '#FDF6E5',
        },
        electric: {
          600: '#1E4FD1',
          500: '#2A63EC',
          400: '#4E80F0',
        },
        cream: '#F5ECE1',
        ink: '#0A0807',
      },
      fontFamily: {
        heading: ['var(--font-anton)', 'Impact', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 35s linear infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '50%': { opacity: '0.6' },
          '55%': { opacity: '0.9' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}

export default config

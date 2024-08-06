import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import {fontFamily} from 'tailwindcss/defaultTheme'

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    screens: {
      xl: {max: '1536px'},
      lg: {max: '1280px'},
      md: {max: '1024px'},
      sm: {max: '428px'},
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-suisse-intl)', ...fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        item: {
          DEFAULT: 'var(--item)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    plugin(function sizePlugin(api) {
      api.matchUtilities({s: (value) => ({width: value, height: value})}, {values: api.theme('width')})
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
} satisfies Config

export default config
